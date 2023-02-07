import React from "react";
import '../Style/Dashboard.css';


const DashBoard = () => {

    return (
        <>
        <div className="BodyDashBoard">
                    <div className="NavDashBoard">
                        <div className="SearchBox">
                            <div class="hamburger-menu">
                                <input id="menu__toggle" type="checkbox" />
                                    <label class="menu__btn" for="menu__toggle">
                                    <span></span>
                                    </label>
                                        <ul class="menu__box">
                                        <li><a class="menu__item" href="#">Home</a></li>
                                        <li><a class="menu__item" href="#">About</a></li>
                                        <li><a class="menu__item" href="#">Team</a></li>
                                        <li><a class="menu__item" href="#">Contact</a></li>
                                        <li><a class="menu__item" href="#">Twitter</a></li>
                                        </ul>
                            </div>
                            <div className="Search">
                                <input typeof="text" placeholder="Search ..."></input>
                            </div>
                        </div>
                        <div className="UserBox">
                            <div className="UserBoxInSide"></div>
                        </div>
                    </div>

                    <div className="WindowDashBoard">
                        <div className="OverView">
                            <div class="container">
                                <div class="row">
                                    <div class="col">
                                        <div className="BoxOverView"></div>
                                    </div>
                                    <div class="col">
                                        <div className="BoxOverView"></div>
                                    </div>
                                    <div class="col">
                                        <div className="BoxOverView"></div>
                                    </div>
                                    <div class="col">
                                        <div className="BoxOverView"></div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-8">
                                        <div className="Diagram">

                                        </div>
                                    </div>
                                    <div class="col-4">
                                        <div className="Mpopular">

                                        </div>
                                    </div>
                                </div>
                         </div>
                     </div>
                </div>
     </div>
     </>
  );
}
 
export default DashBoard;

