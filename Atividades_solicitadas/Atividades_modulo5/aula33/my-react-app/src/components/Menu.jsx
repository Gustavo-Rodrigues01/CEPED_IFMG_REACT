import { NavLink } from "react-router-dom";

function Menu(){
    return(
        <>
        <nav>
          |{" "}
          <NavLink  to="/">Home</NavLink> |{" "}
          <NavLink  to="/About">About</NavLink> |{" "}
          <NavLink to="/Contact">Contact</NavLink> |{" "}
          <NavLink to="/Posts/1">post 1</NavLink> |{" "}
        </nav>
        </>
    )
}
export default Menu