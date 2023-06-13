import React,{useState, useEffect} from 'react'
import axios from "axios"

function Produtos(){
    const [produtos, setProdutos] = useState([])
    useEffect(()=>{
        axios.get('https://localhost:8080/products')
            .then(res=>setProdutos(res.data))
            .catch(err=>console.log(err))
    },[])
    return(
        <div>

        <h1>produtos</h1>
            {
                produtos.map(p=><div key={p._id}>
                <h2>{p.nome}</h2>
                <p>{p.desc}</p>
                <p>{p.price}</p>
                <p>{p.disponivel}</p>
                </div>)
            }
        </div>
    )
}