import React from "react";
import { useState } from "react";
import { BrowserRouter as Router , Routes , Route} from "react-router-dom";
import Home from "../Page/home";
import SignIn from "../Page/signin";
import Registration from "../Page/registration";
import DashBoard from "../IsLoginPage/DashBoard";
import PrivateRoutes from "./PrivateRoutes";

const SwitchPage = () => {


    return ( 
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/signin" element={<SignIn/>} />
                    <Route element={<PrivateRoutes/>}>
                        <Route path="/dashboard" element={<DashBoard/>} />
                    </Route>
                </Routes>
            </Router>
        </>
     );
}

 
export default SwitchPage;