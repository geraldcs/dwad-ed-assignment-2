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

function generateAccessToken(id, email) {
    return jwt.sign({
        'id': id,
        'email': email
    }, TOKEN_SECRET, {
        'expiresIn': '20 days'
    })
}

function authVerificationJWT(req, res, next) {

    if (req.headers.authorization) {
        const headers = req.headers.authorization;
        const token = headers.split(" ")[1];

        jwt.verify(token, TOKEN_SECRET, function (error, tokenData) {
            if (error) {
                res.status(403);
                res.json({
                    'error': "Your access token is invalid"
                })
                return;
            }

            req.user = tokenData;
            next();
        })

    } else {
        res.status(403);
        res.json({
            'error': "Please provide an access token to access this route"
        })
    }
}

async function main() {

    const db = await mongoUtil.connect(MONGO_URI, DB_NAME);

    // default route
    app.get('/', function (req, res) {
        res.json({
            'message': "Server is up and running"
        })
    })
    // read and get all the products
    app.get('/products', async function (req, res) {
        try {
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

            const products = await db.collection('products').find(criteria, {
                'projection': {
                    '_id': 1,
                    'brand': 1,
                    'productName': 1,
                    'pricePhp': 1
                }
            }).toArray();
            res.json(products);
        } catch (e) {
            res.status(500);
            res.json(
                {
                    'error': 'Internal Server Error'
                }
            )
        }
    })

    // create document
    app.post('/products', authVerificationJWT,async function (req, res) {
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
            "message": "New product review has been added",
            "products": products
        })
    })

    // read - get info on a product by its id
    // if the document does not exist, a valid status code and message are sent back as JSON response
    app.get('/products/:productId', async function (req, res) {
        try {
            const products = await db.collection('products').findOne({
                _id: ObjectId(req.params.productId)
            })
            res.json(products);
        } catch (e) {
            res.status(404)
            res.json({
                "error": "The page you're looking for does not exist"
            })
        }
    })

    // update document
    app.put('/products/:productId', authVerificationJWT, async function (req, res) {
        const products = await db.collection('products').findOne({
            '_id': ObjectId(req.params.productId)
        })

        const results = await db.collection('products').updateOne({
            '_id': ObjectId(req.params.productId)
        }, {
            "$set": {
                "category": req.body.category ? req.body.category : products.category,
                "brand": req.body.brand ? req.body.brand : products.brand,
                "productName": req.body.productName ? req.body.productName : products.productName,
                "productInfo": req.body.productInfo ? req.body.productInfo : products.productInfo,
                "pricePhp": req.body.pricePhp ? req.body.pricePhp : products.pricePhp,
                "stock": req.body.stock ? req.body.stock : products.stock,
                "shipsFrom": req.body.shipsFrom ? req.body.shipsFrom : products.shipsFrom,
                "amountSold": req.body.amountSold ? req.body.amountSold : products.amountSold,
                "comments": req.body.comments ? req.body.comments : products.comments,
            }
        })

        res.json({
            'message': 'Product updated successfully',
            "results": results
        })
    })

    // delete a document
    app.delete('/products/:productId', authVerificationJWT, async function (req, res) {
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

    // create emedded document (comments)
    app.post('/products/:productId/comments', authVerificationJWT, async function (req, res) {
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

    // read embedded document - productInfo
    // projection set to only show information about the chosen product
    app.get('/products/:productId/product_info', async function (req, res) {
        const products = await db.collection('products').findOne({
            _id: ObjectId(req.params.productId)
        }, {
            'projection': {
                '_id': 1,
                'brand': 1,
                'productName': 1,
                'productInfo': 1
            }
        })
        res.json(products);

    })


    // update an embedded document inside the comments field
    app.put('/comments/:commentId', authVerificationJWT, async function (req, res) {
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
            "comment": products
        })
    })

    // delete an embedded document
    app.delete('/comments/:commentId', authVerificationJWT, async function (req, res) {
        const products = await db.collection('products').updateOne({
            'comments._id': ObjectId(req.params.commentId)
        }, {
            '$pull': {
                'comments': {
                    '_id': ObjectId(req.params.commentId)
                }
            }
        })
        res.json({
            'message': 'Comment has been removed',
            'products': products
        })
    })

    // creates a user
    app.post('/users', async function (req, res) {
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

    // login
    app.post('/login', async function (req, res) {
        const user = await db.collection('users').findOne({
            'email': req.body.email,
            'password': req.body.password
        });

        if (user) {
            let token = generateAccessToken(user._id, user.email);
            res.json({
                'accessToken': token
            })
        } else {
            res.status(401);
            res.json({
                'message': 'Invalid email or password'
            })
        }
    });

    // retrieve the profile of the user 
    app.get('/user/:userId', authVerificationJWT, async function (req, res) {
        res.json({
            'email': req.user.email,
            'id': req.user.id,
            'message': 'You are viewing your profile'
        })
    })

}

main();

app.listen(4000, () => {
    console.log('Server has started');
})