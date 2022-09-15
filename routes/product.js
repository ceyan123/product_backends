const router = require('express').Router();
const { listProduct, showProduct , addProduct, editProduct, deleteProduct, updateProduct} = require('../controllers/product');

//listproduct
router.get("/", listProduct)

//show product router
router.get("/showproduct/:id", showProduct );


//add product router
router.post("/addproduct", addProduct );


//edit product router
router.get("/edit/:id", editProduct);


//update product router
router.put("/update/:id", updateProduct)


//delete product router
router.delete("/delete/:id", deleteProduct);


module.exports = router;