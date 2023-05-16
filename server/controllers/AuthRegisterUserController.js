const User = require('../models/User')

const bcrypt = require('bcrypt');

module.exports = class AuthRegisterUserController{
  static async init(req,res){
    res.send({message: "Bem vindo a nossa api!"})
  }
  static async registerUser(req,res){
    const {
      name,
      email,
      age,
      password,
      confirmPassword
    }= req.body

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
      return res.status(422).json({message: "As senhas não são iguais"})
    }

    const userExist = await User.findOne({email: email})

    if(userExist){
      return res.status(422).json({message: "Já tem um usuário com teu email"})
    }
    const hash = await bcrypt.genSalt(12)

    const passwordHash = await bcrypt.hash(password, hash)

    const user = new User({
      name,
      email,
      age,
      image,
      password: passwordHash
    })
    try {
      await user.save()
      res.status(201).json({message: "Usuário cadastrado com sucesso",user})
    } catch (error) {
      res.status(500).json({message: "Ocorreu um erro ao cadastrar o usuário, tente novamente mais tarde"})
    }
  }
}