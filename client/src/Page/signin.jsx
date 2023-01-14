import React from "react";
import { Link } from 'react-router-dom';
import '../Style/SignIn.css';

const MainSite = () => {

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
                                    <p className="Registration">Nie masz jeszcze konta ? <Link to="/">Zarejestruj Się</Link></p>
                                </div>
                                

                                <div className="Login">
                                    <div className="CubeOne"></div>
                                </div>
                            </div>
                    </div>
                </section>
            </div>
      );
}
 
export default MainSite;

