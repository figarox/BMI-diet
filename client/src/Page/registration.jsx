import React from "react";
import Axios from "axios";
import { useState } from "react";
import { Link, Navigate, useNavigate } from 'react-router-dom';
import '../Style/Registration.css';

const WebRegister = () => {

    const [loginReg , setLoginReg] = useState();
    const [passwordReg , setPasswordReg] = useState();
    const [passwordReg2 , setPasswordReg2] = useState();

    const [sexReg , setSexReg] = useState();
    const [weightReg , setWeightReg] = useState();
    const [heightReg , setHeightReg] = useState();

    const Next = () => {
        if (passwordReg != null){
            if(passwordReg == passwordReg2){
                let i = 0;
                for(  i = 0 ; i < 4 ; i++) {
                        if( i = 1 ){
                            document.getElementById('RegistgerBox').style.animation="hide 500ms ";
                        }
                        if( i = 2 ){
                            setTimeout(() => {
                                document.getElementById('RegistgerBox').style.display="none";
                              }, "500")
                            
                        }
                        if( i = 3 ){
                            setTimeout(() => {
                                document.getElementById('RegistgerBoxMore').style.animation="discover 470ms ";
                            }, "500")
                        }
                        if( i = 3 ){
                            setTimeout(() => {
                                document.getElementById('RegistgerBoxMore').style.display="block";
                            }, "500")
                        }
                }
            }else{
                alert("Hasla nie sa takie same")
            }
    }else{
        alert("Wpisz Haslo")
    }
        
}    
    
    const navigate = useNavigate();


    const Register = () => {
        Axios.post("http://localhost:3001/register", {
            login: loginReg,
            password: passwordReg,
            sex: sexReg,
            weight: weightReg,
            height: heightReg,
        })
        navigate('/login')
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
                                        <div className="RegistgerBox" id="RegistgerBox">
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
                                            <div className="PasswordReg">
                                                            <div class="form">
                                                                    <input type="password" name="text" autocomplete="off" required
                                                                    onChange={(e) => {
                                                                        setPasswordReg2(e.target.value)
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
                                        
                                            
                                        <button className="ButtonLP" onClick={Next}>Dalej</button>

                                        </div>


                                        <div className="RegistgerBoxMore" id="RegistgerBoxMore">
                                            <div className="LoginReg">
                                                            <div class="form">
                                                                    <input type="text" name="text" autocomplete="off" required
                                                                    onChange={(e) => {
                                                                        setSexReg(e.target.value)
                                                                    }} />
                                                                        <label for="text" class="label-name">
                                                                            <span class="content-name">
                                                                            Plec
                                                                            </span>
                                                                        </label>
                                                                </div>
                                                                    <div className="LineUp"></div>
                                                                        <div className="Line"></div>
                                            </div>
                                            <div className="PasswordReg">
                                                            <div class="form">
                                                                    <input type="text" name="text" autocomplete="off" required
                                                                    onChange={(e) => {
                                                                        setWeightReg(e.target.value)
                                                                    }} />
                                                                        <label for="text" class="label-name">
                                                                            <span class="content-name">
                                                                        Waga
                                                                            </span>
                                                                        </label>
                                                                </div>
                                                                    <div className="LineUp"></div>
                                                                        <div className="Line"></div>
                                            </div>
                                            <div className="PasswordReg">
                                                            <div class="form">
                                                                    <input type="text" name="text" autocomplete="off" required
                                                                    onChange={(e) => {
                                                                        setHeightReg(e.target.value)
                                                                    }} />
                                                                        <label for="text" class="label-name">
                                                                            <span class="content-name">
                                                                        Wzrost
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

