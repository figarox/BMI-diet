import { Navigate, Outlet} from "react-router";
import Axios from "axios";
import { useState } from "react";

 const PrivateSwichPage = () => {
    
    const [cos , setCos] = useState(true)

    Axios.get("http://localhost:3001/login").then((resposne) => {
        sessionStorage.setItem('id' , resposne.data.id)

        }
    )
    if(cos != undefined){
        return cos ? <Outlet/> : <Navigate to="/login"/>
    }
    
}


export default PrivateSwichPage