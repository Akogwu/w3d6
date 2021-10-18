const express = require('express');
const controller = require('../controller/ProductController');
const router = express.Router();

/* GET home page. */
router.get('/', controller.getAllProducts);
router.get('/detail/:id',controller.getProductDetail);
router.get('/addToCart/:id',controller.addToCart);
router.get('/cart',controller.addToCart);

module.exports = router;
