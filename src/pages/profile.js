import { useContext } from "react";
import { AppContext } from "../App";
import { ChangeProfile } from "../components/changeProfile";


export const Profile=()=>{
    const {username} = useContext(AppContext);
        return(
        <div>profile  user is :{username}
        <ChangeProfile />
        </div>
    )
} 