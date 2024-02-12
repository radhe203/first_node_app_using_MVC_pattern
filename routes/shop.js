const path = require('path');

const express = require('express');

const controllerProduct = require('../controller/product')


const router = express.Router();

router.get('/', controllerProduct.getProducts);

module.exports = router;
