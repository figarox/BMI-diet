import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Page/home";
import Login from "../Page/login";
import Registration from "../Page/registration";
import PrivateSwichPage from "./PrivateSwichPage";
import LogSwitchPage from "./PrivateSwichPage";
import User from "../IsLoginPage/user"

import Bmi from "./Bmi";
const SwitchPage = () => {
    return ( 
        <>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/registration" element={<Registration/>}/>
                <Route path="/login" element={<Login/>}/>
                    <Route element={<PrivateSwichPage/>}>
                        <Route path="/user" element={<User/>}>
                        </Route>
                        <Route path="/user/bmi" element={<Bmi/>}/>

                    </Route>
                <Route path="*" element={<p>There's nothink here: 404!</p>}/>
            </Routes>
      </>
     );
}
 
export default SwitchPage;