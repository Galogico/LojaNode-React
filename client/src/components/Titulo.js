import { ModeloTitulo, TituloData, TituloNome } from '../styles/styles'
import React, { useState } from 'react'
import { useEffect } from 'react'

function Titulo() {
    const [data, setData] = useState();
    useEffect(()=>{
        const dataAtual = new Date();
        const dataFormato = {weekday: 'long', day: "numeric", month: "long"}
        const dataFinal = dataAtual.toLocaleDateString("pt-br", dataFormato)
        setData(dataFinal)
    },[])
  return (
    <ModeloTitulo>
        <TituloNome>cadastro de tarefas</TituloNome>
        <TituloData>{data}</TituloData>
    </ModeloTitulo>
  )
}

export default Titulo