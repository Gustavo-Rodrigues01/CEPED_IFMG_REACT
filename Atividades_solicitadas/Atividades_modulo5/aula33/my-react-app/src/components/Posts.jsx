import { useParams } from "react-router-dom";
 function Posts(){
    const {id} = useParams();
    return(
        <>
            <p>Texto ficticio do id {id} pedido pela atividade</p>
        </>
    )
 }
 export default Posts;