const express = require('express');
const app = express();
const cors = require('cors');
app.use(express.json());
app.use(cors());

async function main() {

}

main();

app.listen(4000, () => {
    console.log('Server has started');
})