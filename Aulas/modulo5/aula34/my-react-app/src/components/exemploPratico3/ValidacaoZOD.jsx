import { useForm } from "react-hook-form"
import {z} from "zod"
import {zodResolver} from "@hookform/resolvers/zod"
import styles from "./FormularioRhfZod.module.css"

const loginSchema = z.object({
    email: z
        .string()
        .min(1, "O emil é obrigatorio")
        .email("Digite um email valido"),
    
    password: z
        .string()
        .min(6, "A senha deve ter no minimo 6 caracteres")

})

function ValidacaoZOD(){
    
    const {register,handleSubmit, formState: {errors},} = useForm({resolver: zodResolver(loginSchema)})

    const onSubmit = (data) => {
        console.log(data)
    }

    return(
        <>
            <div className={styles.countainer}>
                <p>Email:</p>
                <input
                type="text"
                placeholder="Entre com o email"
                {...register("email")}
                />
                {errors.email && (
                    <p className={styles.error}>{errors.email.message}</p>
                )}

                <p>Senha:</p>
                <input
                type="password"
                placeholder="Entre com a senha"
                {...register("password",{required:true})}
                />
                {errors.password && (
                    <p className={styles.error}>{errors.password.message}</p>
                )}


            </div>
            <div className={styles.countainer}>
                <button onClick={() => handleSubmit(onSubmit)()}>Enviar</button>
            </div>
        </>
    )
}
export default ValidacaoZOD