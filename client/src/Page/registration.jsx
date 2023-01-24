import React from "react";
import Axios from "axios";
import { useState } from "react";
import { Link } from 'react-router-dom';
import '../Style/Registration.css';

const WebRegister = () => {

    const [loginReg , setLoginReg] = useState("");
    const [passwordReg , setPasswordReg] = useState("");



    const Register = () => {
        Axios.post("http://localhost:3001/register", {
            login: loginReg,
            password: passwordReg,
        }).then((response) => {
            console.log(response)
    });
};


    return (
            <div className="Body">
                <section>
                     <div className="BackgroundSignIn">
                            <div className="containerLoginIn">
                                 <Link to="/">
                                    <div className="NavBarButton">Powrót</div>
                                </Link>
                            </div>
                            <div className="WindowRegister">
                                <div className="TextInformation">
                                    <h3>Rejestracja</h3>
                                </div>
                                <div className="CubeRC">
                                    <div className="RegistgerBox">
                                         <div className="LoginReg">
                                                          <div class="form">
                                                                <input type="text" name="text" autocomplete="off" required
                                                                onChange={(e) => {
                                                                    setLoginReg(e.target.value)
                                                                }} />
                                                                    <label for="text" class="label-name">
                                                                        <span class="content-name">
                                                                        Login
                                                                        </span>
                                                                    </label>
                                                            </div>
                                                                <div className="LineUp"></div>
                                                                    <div className="Line"></div>
                                        </div>
                                        <div className="PasswordReg">
                                                          <div class="form">
                                                                <input type="password" name="text" autocomplete="off" required
                                                                onChange={(e) => {
                                                                    setPasswordReg(e.target.value)
                                                                }} />
                                                                    <label for="text" class="label-name">
                                                                        <span class="content-name">
                                                                       Password
                                                                        </span>
                                                                    </label>
                                                            </div>
                                                                <div className="LineUp"></div>
                                                                    <div className="Line"></div>
                                        </div>
                                    
                                    <button className="ButtonLP" onClick={Register}>Zarejestruj się</button>

                                    </div>
                                </div>
                                            
                            </div>
                        </div>
                    <div>
                </div>
            </section>
        </div>
      );
}
 
export default WebRegister;

