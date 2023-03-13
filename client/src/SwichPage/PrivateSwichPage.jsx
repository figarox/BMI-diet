import { Navigate, Outlet} from "react-router";
import Axios from "axios";
import { useState } from "react";

 const PrivateSwichPage = () => {
    
    const [auth , setAuth] = useState()

    Axios.get("http://localhost:3001/login").then((resposne) => {
       setAuth(resposne.data.auth)
       console.log(resposne.data.auth)

        }
    )
    if(auth != undefined){
        return auth ? <Outlet/> : <Navigate to="/login"/>
    }
    
}


export default PrivateSwichPage