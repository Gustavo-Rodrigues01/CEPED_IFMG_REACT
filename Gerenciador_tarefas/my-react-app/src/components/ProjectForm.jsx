import { ProjectContext } from "../Context/ProjectContext";
import { useContext } from "react";
import { useState } from "react";
import ProjectList from "./ProjectList";
import {useForm} from "react-hook-form"
import {zodResolver} from "@hookform/resolvers/zod"
import { formSchema } from "../Context/TasksFormhook";


function ProjectForm(){
     const {
        register,
        handleSubmit,
        reset,
        formState: {errors, isValid},
     } = useForm({resolver:zodResolver(formSchema), mode:"onChange"})

     const onSubmit = (data => {
        const titulo = data.title
        const description = data.description
        const category = data.category
        projectAdd(titulo, description, category)
        reset();
     })

     const {projectAdd} = useContext(ProjectContext)


    return(
    <div className="space-y-2">
        <div className="bg-blue-300 dark:bg-blue-900 text-black dark:text-white rounded-2xl flex flex-col p-4 space-y-2">
            <h1 className="text-3xl text-center">Project form</h1>
            <form className="flex flex-col space-y-2"  onSubmit={handleSubmit(onSubmit)}>
                
                <input 
                    className={`bg-white dark:bg-gray-700 text-black dark:text-white rounded-md w-full p-2
                         ${
                            errors.title
                                ? "border-red-500 shadow-sm shadow-red-200"
                                : "border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                        }`}
                    type="text" 
                    placeholder="add new task"
                    {...register("title")}
                />
                {errors.title && (
                    <p className="text-red-500 text-sm">{errors.title.message}</p>
                )}
                <input 
                    className="bg-white dark:bg-gray-700 text-black dark:text-white rounded-md w-full p-2" 
                    type="text" 
                    placeholder="add task description"
                    {...register("description")}
                />
                <select {...register("category")} className={`bg-white dark:bg-gray-700 text-black dark:text-white rounded-md w-full p-2
                         ${
                            errors.title
                                ? "border-red-500 shadow-sm shadow-red-200"
                                : "border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                        }`}>
                    <option value="">Selecione uma categoria</option>
                    <option value="Estudos">Estudos</option>
                    <option value="Trabalho">Trabalho</option>
                    <option value="Pessoal">Pessoal</option>

                </select>
                {errors.category && (
                    <p className="text-red-500 text-sm">{errors.category.message}</p>
                )}

                    <button 
                        type="submit"
                        disabled={!isValid}
                        className="bg-white dark:bg-gray-900 text-black dark:text-white rounded-md  h-[40px] shadow"
                    >Add</button>
            </form>
            
        </div>
    </div>
       
    )
}
export default ProjectForm