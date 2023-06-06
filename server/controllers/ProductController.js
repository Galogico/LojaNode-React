const Product = require('../models/Product')

module.exports= class ProductController{
    static async getAll(req,res){
        try{
            const products = await Product.find();
            res.json(products);
        }catch (erro){
            console.log(erro);
            res.status(500).json({message: "Erro ao pegar todos os produtos"})
        }

    }
    static async createProduct(req,res){
        try{
            const { nome,price,desc,disponivel} = req.body;
            const produto = new Product({nome,price,desc,disponivel})
            await produto.save()
            res.status(201).json(produto)
        }catch (error){
            console.log(erro);
            res.status(500).json({message: "Erro ao pegar todos os produtos"})
        }
    }
}