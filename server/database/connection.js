const mongoose = require("mongoose")

const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASS;

const connect =()=>{
    mongoose.connect(`mongodb+srv://${dbUser}:${dbPassword}@cluster0.3fdyb5x.mongodb.net/test?retryWrites=true&w=majority`)
    
    
    const connection = mongoose.connection;
    connection.on("error",()=>{
        console.log("erro ao conectar com o mongodb")
    })

    connection.on("open",()=>{
        console.log("conectado com o mongodb")
    })
}
connect()