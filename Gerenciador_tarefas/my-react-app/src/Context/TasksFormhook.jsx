import {z} from "zod"

 export const formSchema = z.object({
    title: z
        .string()
        .min(3, "Titulo muito curto")
        .min(1, "Titulo obrigatorio"),
    
    description: z
        .string(),
    
    category: z
        .string()
        .min(1, "Você deve selecionar uma categoria")
})