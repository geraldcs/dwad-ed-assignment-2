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
        const products = await db.collection('products').findOne({
            _id: ObjectId(req.params.productId)
        })
        res.json(products);
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