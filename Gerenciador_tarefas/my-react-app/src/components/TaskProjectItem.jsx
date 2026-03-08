import { useContext } from "react";
import { ProjectContext } from "../Context/ProjectContext";
import { Trash2, Check,PenLine } from "lucide-react";
import { useState } from "react";
import {useForm} from "react-hook-form"
import {zodResolver} from "@hookform/resolvers/zod"
import { formSchema } from "../Context/TasksFormhook";


function TaskProjectItem({ taskProjectId, taskProjectIsCompleted, taskProjectDescription, taskProjectCategory, taskProjectTitle }) {
  const { ProjectTaskComplet, tasksProjectsdelet, tasksProjectEdit } = useContext(ProjectContext);
  const [editing, setEditing] = useState(false);
  const [showDescription, setShowDescription] = useState(false)

const {
            register,
            handleSubmit,
            reset,
            formState: {errors, isValid},
         } = useForm({resolver:zodResolver(formSchema), mode:"onChange", defaultValues: {
          title: taskProjectTitle,
          description: taskProjectDescription,
          category: taskProjectCategory
        }})

const onSubmit = ((data) => {
  const titulo = data.title
  const description = data.description
  const category = data.category
  tasksProjectEdit(taskProjectId, titulo, description, category);
    setEditing(false);
    reset(data);
         })


  function Show() {
    setShowDescription(!showDescription)
  }


  return (
    <div className="space-y-1">
      <div className="flex items-center space-x-2">

      {/*Botao de mostrar descrição da terefa*/}
        <button
          className={`text-2xl bg-white dark:bg-gray-700 flex flex-col p-2 space-y-2 rounded-md items-start w-full ${
          taskProjectIsCompleted ? "line-through text-gray-400" : ""}`}
          onClick={() => {Show()}}
        >{taskProjectTitle}</button>

      {/*Botão de editar tarefa*/}
        <button
          onClick={() => setEditing(!editing)}
          className="bg-white dark:bg-gray-900 rounded-md w-[60px] h-[50px] flex items-center justify-center"
        ><PenLine/></button>

      {/*Botão de marcar tarefa como feita*/}
       <button
          onClick={() => ProjectTaskComplet(taskProjectId)}
          className="bg-white dark:bg-gray-900 rounded-md w-[60px] h-[50px] flex items-center justify-center"
        ><Check color="green" size={30} /></button>

    {/*Botão de remover tarefa*/}
        <button
          onClick={() => tasksProjectsdelet(taskProjectId)}
          className="bg-white dark:bg-gray-900 rounded-md w-[60px] h-[50px] flex items-center justify-center"
        ><Trash2 color="red" size={30} /></button>
      </div>

    {/*Descriçao da tarefa*/}
      {showDescription && (
        <div
          className="bg-white dark:bg-gray-800 rounded-md p-2 shadow"
        >
          <p className="text-sm">Category: {taskProjectCategory}</p>
          <p className="text-sm">Description: {taskProjectDescription}</p>
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

                <button 
                  type="submit"
                  disabled={!isValid}
                  className="bg-white dark:bg-gray-900 text-black dark:text-white rounded-md h-[40px] shadow w-full text-sm"
                >To update</button>
          </div>
        </form>
      )}

    </div>
    
  );
}

export default TaskProjectItem;