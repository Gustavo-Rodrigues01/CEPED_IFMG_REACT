import { useState, createContext, useContext } from "react";
import { UserContext } from "./Context";

function Context3() {
  const user = useContext(UserContext);

  return (
    <>
      <h3>Component 3</h3>
      <p>{`Hello ${user} again!`}</p>
    </>
  );
}
export default Context3