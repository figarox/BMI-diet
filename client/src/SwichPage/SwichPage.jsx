import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Page/home";
import SignIn from "../Page/signin";
import Registration from "../Page/registration";
import PrivateSwichPage from "./PrivateSwichPage";
import LogSwitchPage from "./PrivateSwichPage";
import DashBoard from "../IsLoginPage/DashBoard"

const SwitchPage = () => {
    return ( 
        <>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/registration" element={<Registration/>}/>
                <Route path="/signin" element={<SignIn/>}/>
                    <Route element={<PrivateSwichPage/>}>
                        <Route path="/dashboard" element={<DashBoard/>}/>
                    </Route>
            </Routes>
      </>
     );
}
 
export default SwitchPage;