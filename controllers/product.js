const express = require('express');
// const productModel = require('../models/product');
const axios = require('axios');


const listProduct = async(req,res) => {
    try {
        let getRes = await axios.get("https://dummyjson.com/products");
        // res.json(getRes.data.products); 
        res.status(200).send({status: "ok", "data" : getRes.data.products});
    } catch (error) {
        res.status(404).send('Not found');
    }
}

const showProduct = async (req, res) => {
    const id = req.params.id
    try {
        let getRes = await axios.get(`https://dummyjson.com/products/${id}`);
        // res.json(getRes.data.products); 
        res.status(200).send({status: "ok", "data" : getRes.data});
    } catch (error) {
        res.status(404).send('Not found');
    }
}

const addProduct = async (req, res) => {
    const titlenya = req.body.titlenya;
    try {
        let getRes = await axios({
            method: 'post',
            url: 'https://dummyjson.com/products/add',
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify({
                    title: titlenya,
                  })
        });
        res.status(200).send({status: "ok", "data" : getRes.data});
    } catch (error) {
        res.status(404).send('Not found');
    }
    
}

const editProduct = async (req, res) => {
    const id = req.params.id
    try {
        let getRes = await axios.get(`https://dummyjson.com/products/${id}`);
        // res.json(getRes.data.products); 
        res.status(200).send({status: "ok", "data" : getRes.data});
    } catch (error) {
        res.status(404).send('Not found');
    }
}

const updateProduct = async (req, res) => {
    const id = req.params.id
    const titlenya = req.body.titlenya;
    try {
        let getRes = await axios({
            method: 'put',
            url: `https://dummyjson.com/products/${id}`,
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify({
                    title: titlenya,
                  })
        });
        res.status(200).send({status: "ok", "data" : getRes.data});
    } catch (error) {
        res.status(404).send('Not found');
    }
}
          

const deleteProduct = async (req, res) => {
    const id = req.params.id
    try {
        let getRes = await axios({
            method: 'delete',
            url: `https://dummyjson.com/products/${id}`,
            headers: {'Content-Type' : 'application/json'}
        });
        res.status(200).send({status: "ok", "data" : getRes.data});
    } catch (error) {
        res.status(404).send('Not found');
        console.log(error)
    }
}

module.exports = {listProduct, showProduct, addProduct, editProduct, updateProduct, deleteProduct}
