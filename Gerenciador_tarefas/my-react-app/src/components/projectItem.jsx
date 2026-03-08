import { useContext } from "react";
import { ProjectContext } from "../Context/ProjectContext";
import {ChevronRight, PenLine, Trash2} from "lucide-react";
import { useState } from "react";
import {useForm} from "react-hook-form"
import {zodResolver} from "@hookform/resolvers/zod"
import { formSchema } from "../Context/TasksFormhook";



function TasksProjectItem({projectId, projectTitle,projectDescription, projectCategory}){
    const [description, setDescription] = useState(false)
    const [editing, setEditing] = useState(false);
    const {projectDelet, tasksLink, projectEdit} = useContext(ProjectContext);

    const {
            register,
            handleSubmit,
            reset,
            formState: {errors, isValid},
         } = useForm({resolver:zodResolver(formSchema), mode:"onChange", defaultValues: {
          title: projectTitle,
          description: projectDescription,
          category: projectCategory
        }})

    const onSubmit = (data) => {
        const { title, description, category } = data;

        projectEdit(projectId, title, description, category);

        setEditing(false);
        reset(data);
    };

    function showDescription() {
        setDescription(!description)
    }

    return(
        <div className="space-y-1">
            <div className="flex items-center space-x-2">
                
                {/*Botao de mostrar descrição do projeto*/}
                    <button 
                    className={`text-2xl w-full bg-white dark:bg-gray-700 flex flex-col p-2 space-y-2 rounded-md items-start`}
                    onClick={() => {showDescription()}}
                    >{projectTitle}</button>

                {/*Botão de editar projeto*/}
                    <button
                        onClick={() => setEditing(!editing)}
                        className="bg-white dark:bg-gray-900 rounded-md w-[60px] h-[50px] flex items-center justify-center"
                    ><PenLine/></button>

                {/*Botão de marcar projeo-to como feita*/}
                    <button 
                        onClick={()=>{tasksLink(projectId)}} 
                        className="bg-white dark:bg-gray-900 text-black-600 rounded-md w-[60px] h-[50px] flex items-center justify-center"
                    ><ChevronRight size={40} strokeWidth={1}/></button>
                    
                {/*Botão de remover projeto*/}
                    <button 
                        onClick={() => projectDelet(projectId)} 
                        className="bg-white dark:bg-gray-900 rounded-md w-[60px] h-[50px] flex items-center justify-center"
                    ><Trash2  color="red"/></button>
            </div>

            {/*Descriçao do projeto*/}
                {description && (
                <div
                className="bg-white dark:bg-gray-800 rounded-md p-2 shadow">
                        <p className="text-sm">Category: {projectCategory}</p>
                        <p className="text-sm">Description: {projectDescription}</p>
                </div>
                )}

            {/*Aba de  edição da tarefa */}
                {editing && (
                    <form  onSubmit={handleSubmit(onSubmit)}>
                    <div  className="bg-white dark:bg-gray-800 rounded-md p-2 shadow">
                        <input 
                                className={`bg-white dark:bg-gray-700 text-black dark:text-white rounded-md w-full p-2 text-sm
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
                                className="bg-white dark:bg-gray-700 text-black dark:text-white rounded-md w-full p-2 text-sm" 
                                type="text" 
                                placeholder="add task description"
                                {...register("description")}
                            />
                            <select {...register("category")} className={`bg-white dark:bg-gray-700 text-black dark:text-white rounded-md w-full p-2 text-sm
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
                        {/*Enviar formulario*/}
                            <button 
                                type="submit"
                                disabled={!isValid}
                                className="bg-white dark:bg-gray-900 text-black dark:text-white rounded-md h-[40px] shadow w-full text-sm"
                            >To update</button>
                    </div>
                    </form>
                )}
            
        </div>
    )
}
export default TasksProjectItem;