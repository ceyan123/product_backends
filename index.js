const express = require('express');
const dotenv = require('dotenv');
const products = require('./routes/product');

dotenv.config();

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

//routes for product
app.use(products);

app.listen(PORT, ()=> {
    console.log(`running on port ${PORT}`);
});
