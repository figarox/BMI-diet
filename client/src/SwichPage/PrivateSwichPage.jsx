import { Navigate, Outlet} from "react-router";
import Axios from "axios";
import { useState } from "react";

 const PrivateSwichPage =  () => {
    
    const [auth , setAuth] = useState()

  
    Axios.get("http://localhost:3001/authcheck").then((resposne) => {
        setAuth(resposne.data.auth)
         }
     )

    if(auth == true){
        return  <Outlet/> 
    }else if(auth == false){
        return <Navigate to="/login"/>
       
    }
    
}


export default PrivateSwichPage