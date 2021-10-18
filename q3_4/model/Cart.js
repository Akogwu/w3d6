let cartObj = null;

class Cart {

    static add(product){
        if (cartObj === null){
            cartObj = {products:[],totalPrice:0}
        }
        const productIndex = cartObj.products.findIndex(p => p.id === parseInt(product.id));
        if (productIndex >= 0 ){
            const existingProduct = cartObj.products[productIndex];
            existingProduct.qty+=1;
        }else {
            product.qty = 1;
            cartObj.products.push(product);
        }
        cartObj.totalPrice += product.price;
    }

    static  getCart(){
        return cartObj;
    }



}

module.exports = Cart;