
const products = [
    {
        id:1,
        title:"stylish chair",
        price:200,
        imgUrl:"arrivals4.png",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, deserunt.",
        onSale:0
    },
    {
        id:2,
        title:"mapple wood dinning table",
        price:140,
        imgUrl:"arrivals7.png",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, deserunt.",
        onSale:1
    },
    {
        id:3,
        title:"wooden bed",
        price:280,
        imgUrl:"arrivals8.png",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, deserunt.",
        onSale:1,
        qty:0
    },
];
class Product {
    constructor(id,title,price,imgUrl,description) {
        this.id = id;
        this.title = title;
        this.price = price;
        this.imgUrl = imgUrl;
        this.description = description;
        this.onSale = 0;
    }

    static save(){
        this.id = Math.floor(Math.random() * 100000);
        products.push(this);
    }

    static getAllProducts(){
        return products;
    }

    static getProduct(productId){
        return  products.filter(product => product.id === parseInt(productId));

    }

}

module.exports = Product;
