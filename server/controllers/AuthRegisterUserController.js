const User = require('../models/User')

module.exports = class AuthRegisterUserController{
    static async init(req,res){
        res.send({message:"Bem vindo à nossa API!"})
    }
}