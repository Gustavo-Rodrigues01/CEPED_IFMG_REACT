import {createContext} from "react";

export const ModalContext = createContext();

export function modal({children}){
    const overlayStyle = {
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "rgba(0,0,0,0.5)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      };
      
      const modalStyle = {
        background: "white",
        padding: "20px",
        borderRadius: "8px",
        width: "300px"
      };
      return(
                  <ModalContext.Provider value={{ modalStyle,overlayStyle}}>
                      {children}
                  </ModalContext.Provider>
              )
}