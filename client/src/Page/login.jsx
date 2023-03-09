import React, { useEffect } from "react";
import Axios from "axios";
import { useState } from "react";
import { Link, Navigate, useNavigate } from 'react-router-dom';
import '../Style/login.css';

const Login = () => {

    const [login , setLogin] = useState("");
    const [password , setPassword] = useState("");

    const [loginStatus , setLoginStatus] = useState("");

    Axios.defaults.withCredentials = true;


    const Login = () => {
        Axios.post("http://localhost:3001/login", {
            login: login,
            password: password,
        }).then((response) => {
           if(response.data.message){
            setLoginStatus(response.data.message);
           }else{
            navigate('/user')
           }

    });
};

    const navigate = useNavigate();


    return (
            <div className="Body">
                <section>
                     <div className="BackgroundSignIn">
                            <div className="containerLoginIn">
                                 <Link to="/">
                                    <div className="NavBarButton">Powrót</div>
                                </Link>
                            </div>
                            <div className="WindowSignIn">
                                <div className="TextInformation">
                                    <h3>LOGOWANIE</h3>
                                    <p className="Registration">Nie masz jeszcze konta ? <Link to="/registration">Zarejestruj Się</Link></p>
                                </div>
                                

                                <div className="CubeLC">
                                    <div class="container text-center">
                                        <div class="row align-items-center">
                                            <div class="col">
                                                <div className="LC">
                                                     <div className="Login">
                                                          <div class="form">
                                                                <input 
                                                                type="text" 
                                                                name="text" 
                                                                autocomplete="off" 
                                                                required
                                                                onChange={(e) => {
                                                                    setLogin(e.target.value)
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
                                                        <div className="CubeOne"></div>
                                                </div>
                                            </div>

                                            <div class="col">
                                                <div className="LC2">
                                                        <div className="Password">
                                                        <div class="form">
                                                                <input 
                                                                type="password" 
                                                                name="text" 
                                                                autocomplete="off" 
                                                                required
                                                                onChange={(e) => {
                                                                    setPassword(e.target.value)
                                                                }} />
                                                                    <label for="text" class="label-name">
                                                                        <span class="content-name">
                                                                        Password
                                                                        </span>
                                                                    </label>
                                                            </div>
                                                                <div className="LineUpP"></div>
                                                                <div className="LineP"></div>
                                                        </div>
                                                                <div className="CubeOneP"></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row align-items-center">
                                            <div class="col">
                                                 <button className="ButtonLP" onClick={Login}>Zaloguj sie</button>
                                                 <h1>{loginStatus}</h1>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                </div>
                            </div>
                    </div>
                </section>
            </div>
      );
}
 
export default Login;

