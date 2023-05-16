const router = require('express').Router()
const multer = require('multer');
const AuthRegisterUserController = require('../controllers/AuthRegisterUserController')

const storage = multer.diskStorage({
    destination: function(req,file,cb){
        cb(null, "uploads ")
    },
    fliename: function (req, file, cb) {
        cb(null,file.originalname)
    }
})

const upload = multer({
    storage,
    fileFilter(req,file,cb){
        if(!file.originalname.match(/\.(png|jpg|JPEG|PNG) $/)){
            return cb(Error("É permitido arquivos png e jpg"))
        }
        cb(nul,true)
    }
})
router.get('/', AuthRegisterUserController.init)
router.post('/auth/register/user',upload.single('image'),AuthRegisterUserController.registerUser)

module.exports = router