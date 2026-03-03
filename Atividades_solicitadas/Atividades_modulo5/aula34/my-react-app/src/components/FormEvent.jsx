import {useForm} from "react-hook-form"
import {z} from "zod"
import {zodResolver} from "@hookform/resolvers/zod"
import "./FormEvent.css"

const loginSchema = z.object({
    name: z
        .string()
        .min(1, "Nome obrigatorio")
        .min(3, "Nome muito curto!"),

    email: z
        .string()
        .min(1,"Email obrigatorio")
        .email("Informe um email valido"),

    terms: z
        .literal(true, {errorMap: () => ({
             message: "Você deve aceitar os termos"
        })}),
    ingresso: z
        .string()
        .min(1, "Você deve selecionar um ingresso")
})

function FormEvent(){

    const {
        register, 
        handleSubmit, 
        reset,
        formState: {errors, isValid}
    } = useForm({resolver:zodResolver(loginSchema), mode:"onChange"})

    const onSubmit = (data) => {
        console.log(data)
        alert(data.name)
        alert(data.email)
        alert(data.ingresso)
        reset()
    }

    return(
       <>
        <form className="form" onSubmit={handleSubmit(onSubmit)}>

        {/*Formulario de Nome */}
            <p>Nome completo</p>
            <input
                placeholder="Nome completo"
                type="text"
                {...register("name")}
            />
            {errors.name && (
                <p className="error">{errors.name.message}</p>
            )}

        {/*Formulario de Email */}
        
            <p>Endereço de email:</p>
            <input
            placeholder="exemplo@gmail.com"
            type="text"
            {...register("email")}
            />
            {errors.email && (
                <p className="error">{errors.email.message}</p>
            )}

        {/*Formulario de  Ingresso*/}
        <p>Ingresso:</p>
        <select {...register("ingresso")}>
            <option value="">selecione um ingresso</option>
            <option value="Vip">Ingresso Vip</option>
            <option value="Comum">Ingresso Comum</option>
            <option value="Estudante">Ingresso de estudante</option>
        </select>
         {errors.ingresso && (
                <p className="error">{errors.ingresso.message}</p>
            )}


        {/*Formulario de CheckBox */}
            <label>
                <input
                    type="checkbox"
                    {...register("terms")}
                /> 
            Aceito os termos </label>
            {errors.terms && (
                <p className="error">{errors.terms.message}</p>
            )}

            {isValid && (
                <button type="submit">Submit</button>
            )}
            

        </form>
            
       </>
    )
}
export default FormEvent