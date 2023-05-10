import { useContext } from "react";
import { AuthContext } from "../context/authContext";
import Presentacion from "./presentacion";
import MyProfile from "./myProfile";

export const Home = () =>{
    const { userId } = useContext(AuthContext);

    return (<>
            {userId ?<MyProfile userId={userId}></MyProfile>:<Presentacion/>}
            </>
    )
}


export default Home