const router = require('express').Router()
const AuthRegisterUserController = require('../controllers/AuthRegisterUserController')

router.get('/', AuthRegisterUserController.init)
//router.post('/auth/register/user',AuthRegisterUserController.registerUser)

module.exports = router