const router = require('express').Router()
const ProductsController = require('../controllers/ProductController')

router
    .get('/',ProductsController.getAll)
    .post('/',ProductsController.createProduct)

router
    .put('/:id', ProductsController.editProduct)
    .delete("/:id", ProductsController.deleteProduto)

module.exports = router
