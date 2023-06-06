const mongoose = require('mongoose');

const Product = mongoose.model('product',{
    nome: String,
    price: Number,
    desc: String,
    disponivel: Boolean

})

module.exports = Product;