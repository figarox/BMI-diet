import React from "react";
import { Link } from 'react-router-dom';
import '../Style/Home.css';

const Home = () => {

    return (
            <div className="Body">
                <section>
                     <div className="Background">
                            <div className="NavBar">
                                <div className="container">
                                        <div className="row">
                                            <div className="col">
                                                <div className="NavBarButton">Strona Główna</div>
                                            </div>
                                            <div className="col">
                                                <div className="NavBarButton">Oferta</div>
                                            </div>
                                            <div className="col">
                                                <div className="NavBarButton">O nas</div>
                                            </div>
                                        </div> 
                                    </div>
                            </div>
                            <div className="containerLoginIn">
                                 <Link to="/signin">
                                    <div className="NavBarButton">Zaloguj się</div>
                                </Link>
                            </div>
                    </div>
                </section>

                <section>

                </section>
            </div>
      );
}
 
export default Home;

