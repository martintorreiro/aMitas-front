import { useContext } from "react";
import { AuthContext } from "../context/authContext";
import Presentacion from "./presentacion";
import MyProfile from "./myProfile";

export const Home = () =>{
    const { user, logoutToken } = useContext(AuthContext);

    return (<>
            {user ?<MyProfile user={user}></MyProfile>:<Presentacion/>}
            </>
    )
}


export default Home