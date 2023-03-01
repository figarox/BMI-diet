import { Navigate, Outlet} from "react-router";
import Axios from "axios";
import { useState } from "react";

 const PrivateSwichPage = () => {
    
    const [cos , setCos] = useState(true)

    // Axios.get("http://localhost:3001/login").then((resposne) => {
    //     setCos(resposne.data.loggedIn)
    //     }
    // )
    if(cos != undefined){
        return cos ? <Outlet/> : <Navigate to="/signin"/>
    }
    
}


export default PrivateSwichPage