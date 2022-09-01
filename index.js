const express = require('express');
const app = express();
const cors = require('cors');
const mongoUtil = require('./MongoUtil');
const { ObjectId } = require('mongodb');
require('dotenv').config();
const jwt = require('jsonwebtoken');
app.use(express.json());
app.use(cors());

const MONGO_URI = process.env.MONGO_URI;
const DB_NAME = process.env.DB_NAME;
const TOKEN_SECRET = process.env.TOKEN_SECRET;

async function main() {

    const db = await mongoUtil.connect(MONGO_URI, DB_NAME);

    // default route
    app.get('/', function (req, res) {
        res.json({
            'message': "Server is up and running"
        })
    })
    // read 
    app.get('/products', async function(req, res) {
        let criteria = {}
        // brings back the results for the brand 
        if (req.query.brand) {
            criteria.brand = {
                "$regex": req.query.brand, 
                "$options": 'i'
            }
        }

        // aims to bring back phones with less than the given price
        if (req.query.price_less_than) {
            criteria.pricePhp = {
                '$lte': parseInt(req.query.price_less_than)
            }
        }

        // aims to bring back products with more than or equal to the given amount of reviews
        if (req.query.min_sold) {
            criteria.amountSold = {
                '$gte': parseInt(req.query.min_sold)
            }
        }

        // brings back phones that matches the country it ships from
        if (req.query.ships_from) {
            criteria.shipsFrom = {
                '$all': [
                    {
                        '$elemMatch': {
                            'country': req.query.ships_from
                        }
                    }
                ]
            }
        }

        // excludes phone in a given year 
        if (req.query.exclude_year) {
            criteria.productInfo = {
                '$not': {
                    '$in': [req.query.exclude_year]
                }
            }
        }

        // filter by stock, should the user want to search items that are currently in stock or if the user wishes to see which items aren't scarce
        if (req.query.stock) {
            criteria.stock = {
                '$eq': parseInt(req.query.stock)
            }
        }

        const products = await db.collection('products').find(criteria, {'projection': {
        '_id': 1,
        'brand': 1,
        'productName': 1,
        'pricePhp': 1}
        }).toArray();
        res.json(products);
    })

    // create document
    app.post('/products', async function (req, res) {
        const products = await db.collection('products').insertOne({
            "category": req.body.category,
            "brand": req.body.brand,
            "productName": req.body.productName,
            "productInfo": req.body.productInfo,
            "pricePhp": req.body.pricePhp,
            "stock": req.body.stock,
            "shipsFrom": req.body.shipsFrom,
            "amountSold": req.body.amountSold,
            "comments": req.body.comments,
        })

        res.json({
            "message": "New product review has been addeed",
            "products": products
        })
    })

    // create emedded document (comments)
    app.post('/products/:productId/comments', async function (req, res) {
        const products = await db.collection('products').updateOne(
            {
                '_id': ObjectId(req.params.productId)
            },
            {
                "$push": {
                    'comments': {
                        '_id': ObjectId(),
                        'content': req.body.content,
                        'ratings': req.body.ratings,
                        'likes': req.body.likes,
                    }
                }
            }
        )

        res.json({
            'message': 'Comment added successfully',
            'products': products
        })
    })

    // read - get info on a product by its id
    app.get('/products/:productId', async function(req, res) {
        try {
            const products = await db.collection('products').findOne({
                _id: ObjectId(req.params.productId)
            })
            res.json(products);
        } catch(e) {
            res.status(404)
            res.json({
                "error": "The page you're looking for does not exist"
            })
        }
    })
    
    // update an embedded inside the comments field
    app.put('/comments/:commentId', async function(req, res) {
        const products = await db.collection('products').updateOne({
            'comments._id': ObjectId(req.params.commentId)
        },
        {
            '$set': {
                'comments.$.content': req.body.content,
                'comments.$.ratings': req.body.ratings,
                'comments.$.likes': req.body.likes
            }
        }
        )
        res.json({
            'message': "Comment has been updated",
            "products": products
        })
    })

    // creates a user
    app.post('/users', async function(req, res) {
        const results = await db.collection('users').insertOne({
            "name": req.body.name, 
            "email": req.body.email, 
            "password": req.body.password, 
            "age": req.body.age,
        })

        res.json({
            "message": "User has been created",
            "results": results
        })
    })

    // delete a document
    app.delete('/products/:productId', async function(req, res) {
        await db.collection('products').deleteOne(
            {
                '_id': ObjectId(req.params.productId)
            })

            res.json(
                {
                    "message": "Deleted Successfully" 
                }
            )
    })

}

main();

app.listen(4000, () => {
    console.log('Server has started');
})