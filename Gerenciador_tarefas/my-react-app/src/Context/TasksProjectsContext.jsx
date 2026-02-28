import { useState, createContext} from "react";
import { useEffect } from "react";

export const TasksProjectContext = createContext();

export function tasksProjectProvider({children}){

     return(
            <TasksProjectContext.Provider value={{project, projectAdd, projectDelet}}>
                {children}
            </TasksProjectContext.Provider>
        )
}
