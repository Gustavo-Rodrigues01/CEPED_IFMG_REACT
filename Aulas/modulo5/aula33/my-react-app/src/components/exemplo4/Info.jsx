import { useParams } from "react-router-dom";

function Info(){
    const {firstname} = useParams();
    return <h2>Hello, {firstname}!</h2>
}
export default Info