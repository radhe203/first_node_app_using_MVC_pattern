const path = require('path');

const express = require('express');

const rootDir = require('../util/path');
const controllerProduct = require('../controller/product')
const router = express.Router();


// /admin/add-product => GET
router.get('/add-product',controllerProduct.getAddproduct);

// /admin/add-product => POST
router.post('/add-product', controllerProduct.getAddpost);

module.exports = router;



