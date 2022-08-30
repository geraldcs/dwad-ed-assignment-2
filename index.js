const express = require('express');
const app = express();
const cors = require('cors');
const mongoUtil = require('./MongoUtil');
const {ObjectId} = require('mongodb');
require('dotenv').config();
const jwt = require('jsonwebtoken');
app.use(express.json());
app.use(cors());

async function main() {
    // default route
    app.get('/', function(req, res) {
        res.json({
            'message': "Server is up and running"
        })
    })
}

main();

app.listen(4000, () => {
    console.log('Server has started');
})