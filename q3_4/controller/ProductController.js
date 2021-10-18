const Product = require('../model/Product');
const Cart = require('../model/Cart');

exports.getAllProducts = (req, res, next) =>{
    res.render('index',{products:Product.getAllProducts(), inCart:Cart.getCart(), cartTotal:(Cart.getCart())?Cart.getCart().products.length:0})
}
exports.getProductDetail = (req,res) => {
    const product = Product.getAllProducts(req.params.id);
    res.render('detail',{ product: product[0] })
}

exports.addToCart = (req,res,next)=>{
    const product = Product.getProduct(req.params.id)[0];
    Cart.add(product);
    res.redirect("/");
}

exports.viewCart = (req,res)=>{
    const products = Cart.getCart();
    res.render('cart',{products:products})
}