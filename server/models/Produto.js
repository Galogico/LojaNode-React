const mongoose = require('mongoose');

const product = mongoose.model('product',{
    nome: String,
    price: Number,
    desc: String,
    disponivel: Boolean

})

module.exports = Product;