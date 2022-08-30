const express = require('express');
const app = express();
const cors = require('cors');
const mongoUtil = require('./MongoUtil');
const {ObjectId} = require('mongodb');
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
    app.get('/', function(req, res) {
        res.json({
            'message': "Server is up and running"
        })
    })

    // create route
    app.post('/products', async function(req, res) {
        const products = await db.collection('products').insertOne({
            "category": req.body.category,
            "brand": req.body.brand, 
            "productName": req.body.productName, 
            "productInfo": req.body.productInfo,
            "pricePhp": req.body.pricePhp,
            "stock": req.body.stock, 
            "shipsFrom": req.body.shipsFrom, 
            "amountSold": req.body.amontSold,
            "comments": req.body.comments,
        })

        res.json({
            "message": "New product review has been addeed",
            "products": products
        })
    })
}

main();

app.listen(4000, () => {
    console.log('Server has started');
})