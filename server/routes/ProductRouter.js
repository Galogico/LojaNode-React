const router = require('express').Router()
const ProductsController = require('../controllers/ProductController')

router.get('/',ProductsController.getAll)

module.exports = router
