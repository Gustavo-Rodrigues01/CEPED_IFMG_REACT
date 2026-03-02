import { useState } from "react"
import style from "./Formulario.module.css"
function Formulario(){
    const [nome, setNome] = useState("")
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")

    function login(){
        console.log(`Nome: ${nome}`)
        console.log(`Email: ${email}`)
        console.log(`Senha: ${senha}`)
        setEmail("")
        setNome("")
        setSenha("")
    }
    return(
        <>
            <form className={style.countainer}>
                {/*Formulario de nome */}
                <p>Nome: {nome}</p>
                <input
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                />

                {/*Formulario de email */}
                <p>Email: {email}</p>
                <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                {/*Formulario de email */}
                <p>Senha: {senha}</p>
                <input
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                />
            </form>
            <div className={style.countainer}>
                <button 
                    onClick={()=>{login()}}
                >Cadastrar</button>
            </div>
            
        </>
    )
}
export default Formulario