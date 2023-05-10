import { useEffect, useState } from "react";
import { getSharedListService } from "../service";

const MyProfile = ({userId}) => {
    
    const [sharedList, setSharedList] = useState({})

    const getSharedList = async () => {
        try {
            const resSharedList = await getSharedListService(userId)
            setSharedList(resSharedList)
            console.log("1",resSharedList) 
        } catch (error) {
            console.log(error)
        }
       
    }

    useEffect(()=>{
        getSharedList()
    },[])

    return(
        <section>
            <ul>
                {userId}
            </ul>

        </section>
    )
}

export default MyProfile;