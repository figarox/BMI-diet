import React from "react";
import { Route, Routes } from "react-router-dom";
import MainSite from "../Page/home";
import SignIn from "../Page/signin";
import Registration from "../Page/registration";

const SwitchPage = () => {
    return ( 
        <>
            <Routes>
                <Route path="/" element={<MainSite/>}/>
                <Route path="/SignIn" element={<SignIn/>}/>
                <Route path="/Registration" element={<Registration/>}/>
            </Routes>
      </>
     );
}
 
export default SwitchPage;