import { useParams } from "react-router-dom";

function Alunos(){
    const {id} = useParams();
    return(
        <h2>Id: {id}</h2>
    )
}
export default Alunos;