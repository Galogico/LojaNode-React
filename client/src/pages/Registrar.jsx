import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { ButtonFormCadastro, DivFormCadastro, InputFormCadastro, TextFormCadastro, ModeloTitulo } from '../styles/styles'

function Registrar() {
  const [user,setUser] = useState({
                                    name: '',
                                    email:'',
                                    age: '',
                                    password: '',
                                    confirmPassword:''
                                  })
  function cadastrarUsuario(user){
    axios.post('http://localhost:8081/auth/register/user',user)
      .then(res=>console.log(res.data))
      .catch(erro=> console.log(erro))
  }

  return (
    <DivFormCadastro>
      <ModeloTitulo>FAÇA SEU CADASTRO</ModeloTitulo>
    <form onSubmit={cadastrarUsuario(user)}></form>
        <TextFormCadastro htmlFor="nome">Nome</TextFormCadastro>
        <InputFormCadastro type="text" id="nome"
        
        />

        <TextFormCadastro htmlFor="email">Email</TextFormCadastro>
        <InputFormCadastro type="text" id="email"
        value={user.email}
        onChange={(e)=>setUser({...user,email: e.target.value})}
        
        />

        <TextFormCadastro htmlFor="idade">Idade</TextFormCadastro>
        <InputFormCadastro type="text" id="idade"
         value={user.age}
         onChange={(e)=>setUser({...user,age: e.target.value})}
        />

        <TextFormCadastro htmlFor="senha">Senha</TextFormCadastro>
        <InputFormCadastro type="password" id="senha"
         value={user.password}
         onChange={(e)=>setUser({...user,password: e.target.value})}
        />

        <TextFormCadastro htmlFor="confirmPassword">Confirmar Senha</TextFormCadastro>
        <InputFormCadastro type="pessword" id="confirmPassword"
         value={user.confirmPassword}
         onChange={(e)=>setUser({...user,confirmPassword: e.target.value})}
        />
 
          <ButtonFormCadastro type='submit'>Cadastrar</ButtonFormCadastro>
    </DivFormCadastro>
  )
}

export default Registrar