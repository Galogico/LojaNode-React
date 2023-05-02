const router = require('express').Router()
router.get('/', AuthRegisterController.init)
router.post('/auth/register/user',AuthRegisterController.registerUser)
module.exports = router