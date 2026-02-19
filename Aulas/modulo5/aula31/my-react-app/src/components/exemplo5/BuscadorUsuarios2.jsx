import { useState,useEffect } from "react";

function BuscadorUsuarios2(){
    const [input, setInput] = useState("")
    const [users, setUsers] = useState([])
    const [load, setLoad] = useState(false)

    useEffect(()=>{
        if(!input){
            setUsers([])
            return
        }

        const controller = new AbortController();
        const signal = controller.signal;

        setLoad(true);
        const timer = setTimeout(() => {
            fetch("https://jsonplaceholder.typicode.com/users",{signal})
            .then((Response) => Response.json())
            .then((data) =>{
            const filterData = data.filter((user)=>
                user.name.toLowerCase().includes(input.toLowerCase())
            )
            setUsers(filterData)
        })

        .catch((error) => {
        if (error.name === "AbortError") {
            return;
        }
        alert("Erro ao buscar usuários:"+ error);
        })
        setLoad(false)

       
         }, 500);

        return ()=> {
            clearTimeout(timer)
            controller.abort()
            setLoad(false)
        }
        
    },[input]);

    return(
        <>
            <input
                placeholder="Informe um nome"
                onChange={(e)=>setInput(e.target.value)}
                value={input}
                type="text"
            />
            {load && <p>loading...</p>}
            <ul>
                {users.map((user)=>(
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
        </>
    )
}
export default BuscadorUsuarios2;