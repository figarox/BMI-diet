import { Navigate, Outlet} from "react-router";
import Axios from "axios";
import { useState } from "react";

 const PrivateSwichPage = () => {
    
    const [cos , setCos] = useState()

    Axios.get("http://localhost:3001/login").then((response) => {
        setCos(response.data.loggedIn)
        }
    )
    if(cos != undefined){
        console.log(cos)
        return cos ? <Outlet/> : <Navigate to="/signin"/>
    }
    
}


export default PrivateSwichPage