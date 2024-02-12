
const Product = require('../models/product')


exports.getAddproduct = function (req, res, next) {
  res.render("add-product", {
    pageTitle: "Add Product",
    path: "/admin/add-product",
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true,
  });
};

exports.getAddpost = function (req, res, next) {
  let product = new Product(req.body.title)
  product.save()
  res.redirect("/");
};


exports.getProducts=function(req, res, next){
   Product.fetchAll(products=>{
    res.render('shop', {
      prods: products,
      pageTitle: 'Shop',
      path: '/',
      hasProducts: products.length > 0,
      activeShop: true,
      productCSS: true
    });
   });
    
  }