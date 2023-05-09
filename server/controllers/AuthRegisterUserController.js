const User = require('../models/User')
const bcrypt = require()bcrypt;

module.exports = class AuthRegisterUserController{
    static async init(req,res){
        res.send({message:"Bem vindo à nossa API!"})
    }
    static async registerUser(req,res){
        const {
            name,
            email,
            age,
            password,
            confirmPassword
        } = req.body

        let image = ""
        if(req.file){
            image = req.file.filename
        }
        if(!name){
            return res.status(422).json({message: "o nome é obrigatório"})
        }
        if(!email){
            return res.status(422).json({message: "o email é obrigatório"})
        }
        if(!age){
            return res.status(422).json({message: "a idade é obrigatória"})
        }
        if(!password){
            return res.status(422).json({message: "a senha é obrigatória"})
        }
        if(confirmPassword != password){
            return res.status(422).json({message: "a senha está errada"})
        }

        const userExist = await User.findOne({email: email})
        if(userExist){
            return res.status(422).json({message: "Ja tem usuario com seu email"})
        }
        const hash = await bcrypt(12)

        const passwordHash = await bcrypt.hash(password,hash)

        const user = new User({
            name,
            email,
            age,
            image,
            password: passwordHash
        })
    }  
}