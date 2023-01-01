import {Link} from "react-router-dom";

export const Navbar=()=>{
    return(
        <div>
        <Link to={"/"}>HOME</Link>
          <Link to={"/Profile"}>Profile</Link>
          <Link to={"/Contact"}>CONTACT</Link>
          </div>
    )
}