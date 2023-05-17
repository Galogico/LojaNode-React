import styled from "styled-components";
export const ModeloTitulo = styled.div`
    background: linear-gradient(45deg,#cb356b,#bd3f32);
    color:white;
    padding: 32px;
`;

export const TituloNome = styled.div`
    font-size:32pt;
    margin-top:96px;
`;

export const TituloData = styled.div`
    font-size: 16pt;
    margin-top: 8px;
`;

export const ButtonFormCadastro = styled.button`

    margin-top: 30px;
    height: 50px;
    width: 100%;
    background-color: #91DFA6;
    font-size: 20px;
    border-radius: 40px;
    margin-left: auto;
    margin-right: auto;
    &:hover {
        background-color: #3A5942;
        cursor: pointer;
    }
    &:active {
        color: white;
    }

`;

export const DivFormCadastro = styled.div`
    display: grid;
    grid-template-columns: 100%;

`;

export const InputFormCadastro = styled.input`
    height: 30px;
    border-radius: 30px;
    background-color: #E6F2E9;
`;

export const TextFormCadastro = styled.label`
    margin-top:15px;
    margin-bottom:5px;
`;