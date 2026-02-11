import { useState } from "react";
function InfoPessoais(){
    const [ativo, setAtivo] = useState(true);
    let opcao
    const nomeCompleto = "Gustavo dos Reis Rodrigues";
    const idade = 19;
    const profissao = "Desempregado";

    if(ativo){
        opcao = profissao
    }
    else{
        opcao = "*****"
    }
    return(
        <>
            <h3>Informações pessoais</h3>
            <p>nome: {nomeCompleto}</p>
            <p>Idade: {idade}</p>
            <p>Profição: {opcao}</p>
            <button onClick={()=> setAtivo(true)}>true</button>
             <button onClick={()=> setAtivo(false)}>false</button>
            
        </>
    )
}
export default InfoPessoais