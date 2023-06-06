const express = require('express')
const cors = require('cors')
require('dotenv').config()

var app = express();

app.use(cors())
app.use(express.json())
const AuthRegisterUserRoutes = require('./routes/AuthRegisterUserRoutes')
const ProductRouter = require('./routes/ProductRouter')

const port = process.env.PORT || 3000
app.use(AuthRegisterUserRoutes)
app.use('/products',ProductRouter)

app.listen(port,()=>{
console.log(`servidor rodando na porta: ${port}`)
})
require("./database/connection")