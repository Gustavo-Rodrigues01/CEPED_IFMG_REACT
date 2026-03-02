import { useForm } from "react-hook-form";
import style from "./FormularioRHF.module.css"

function FormularioRHF(){
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => console.log(data);

    return (
        <div className={style.countainer}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("firstName")} placeholder="Nome" />
                <button type="submit">Enviar</button>
        </form>
        </div>
       
    )
}
export default FormularioRHF