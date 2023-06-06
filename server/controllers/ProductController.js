const Product = require('../models/Produto')

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
            const { nome,price,desc,disponivel } = req.body;
            const produto = new Product({nome,price,desc,disponivel})
            await produto.save()
            res.status(201).json(produto)
        }catch (error){
            console.log(erro);
            res.status(500).json({message: "Erro ao pegar todos os produtos"})
        }
    }
    static async editProduct(req,res){
        try{
            const { nome,price,desc,disponivel } = req.body;
            const produto = await Product.findByIdAndUpdate(
                req.params.id,
                {nome,price,desc,disponivel},
                {new: true}
            );
            if(!produto){
                return res.status(404).json({message: 'ester produto não existe'})
            }
            res.json(produto);
            
        }catch(error){
            res.status(500).json({message: "Erro ao editar o produto."})
        }
    }
    static async deleteProduto(req,res){
        try{
            const produto = await Product.findByIdAndRemove(req.params.id)
            if(!produto){
                return res.status(404).json({message: "não existe um produto com este id"})
            }
            res.json({message: "Produto deletado com sucesso!"})
        }catch (error){
            console.log(error);
            res.status(500).json({message: "Erro a deletar o produto"})
        }
    }
}