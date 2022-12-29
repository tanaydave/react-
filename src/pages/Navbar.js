import {Link} from "react-router-dom";

export const Navbar=()=>{
    return(
        <div>
        <Link to={"/"}>HOME</Link>
          <Link to={"/Menu"}>Menu</Link>
          <Link to={"/Contact"}>CONTACT</Link>
          </div>
    )
}