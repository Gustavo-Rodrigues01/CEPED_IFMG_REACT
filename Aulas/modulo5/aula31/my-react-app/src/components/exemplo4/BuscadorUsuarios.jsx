import {useState, useEffect} from "react"
function BuscadorUsuarios(){
    const [input, setInput] = useState("");
    const [search,setSearch] = useState("");
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(()=>{
        if(!search){
            setUsers([])
            return
        }
        
        setLoading(true)
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((data) => {
        const filteredUsers = data.filter((user) =>
          user.name.toLowerCase().includes(search.toLowerCase())
        );
        setUsers(filteredUsers);
        })
        .catch((error) => {
        alert("Erro ao buscar usuários:"+ error);
        })
        .finally(() => {
            setLoading(false);
         });
        },[search]);

    return(
        <>
            <input type="text" value={input} onChange={(event)=> setInput(event.target.value)} placeholder="informe um nome"/>
            <button onClick={()=> setSearch(input)}>pesquisar</button>
            {loading && <p>loading...</p>}
            <ul>
            {users.map((user) => (
                <li key={user.id}>{user.name}</li>
            ))}
            </ul>
        </>
    );
};
export default BuscadorUsuarios;