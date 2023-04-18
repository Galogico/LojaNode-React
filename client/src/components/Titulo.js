import { ModeloTitulo, TituloData, TituloNome } from '../styles/styles'
import React from 'react'

function Titulo() {
  return (
    <ModeloTitulo>
        <TituloNome>cadastro de tarefas</TituloNome>
        <TituloData>Terça-feira, dia 18 de Abril</TituloData>
    </ModeloTitulo>
  )
}

export default Titulo