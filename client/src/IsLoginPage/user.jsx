import React, { useEffect, useState } from "react";
import '../Style/user.css';
import Axios from "axios";




const User = () => {

    const [EmployeeList,setEmployeeList] = useState([])

    Axios.defaults.withCredentials = true;

    window.onload = function() {
        Axios.get("http://localhost:3001/data")
        .then((resposne) => {
            setEmployeeList(resposne.data);
        });
    }

   
    

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
                                        <li><a class="menu__item" href="/dashboard/bmi">Home</a></li>
                                        <li><a class="menu__item" href="#">About</a></li>
                                        <li><a class="menu__item" href="#">Team</a></li>
                                        <li><a class="menu__item" href="#">Contact</a></li>
                                        <li><a class="menu__item" href="#">Twitter</a></li>
                                        </ul>
                            </div>

                            <div className="Search">
                                <input typeof="text" placeholder="Search ..."></input>
                            </div>
                            <div className="UserBox">
                                  <div className="UserBoxInSide"></div>
                             </div>
                        </div>
                      
                    </div>

                    <div className="WindowDashBoard">
                        <div className="OverView">
                            <div class="container">
                                <div class="row">
                                    <div class="col">
                                        <div className="BoxOverView">

                                            <div className="TextBoxFirst">
                                                <p>Osiągniecia</p>
                                            </div>
                                            <div className="ArrowBoxFirstNumber">
                                                  <i class="fa-sharp fa-regular fa-arrow-up"></i>
                                            </div>
                                            <div className="TextBoxFirstNumber">
                                                <div className="test" id="test">
                                                    {EmployeeList.map((val ,key) => {
                                                        return (
                                                            <i>{val.achievements}</i>
                                                        )
                                                    })}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col">
                                        <div className="BoxOverView">
                                            <div className="TextBoxFirst">
                                                <p>Waga</p>
                                            </div>
                                            <div className="ArrowBoxFirstNumber">
                                                  <i class="fa-sharp fa-regular fa-arrow-up"></i>
                                            </div>
                                            <div className="TextBoxFirstNumber">
                                            {EmployeeList.map((val ,key) => {
                                                        return (
                                                            <i>{val.weight} KG</i> 
                                                        )
                                                    })}
                                            </div>
                                        </div>                                   
                                     </div>
                                     <div class="col">
                                        <div className="BoxOverView">
                                            <div className="TextBoxFirst">
                                                <p>BMI</p>
                                            </div>
                                            <div className="ArrowBoxFirstNumber">
                                                  <i class="fa-sharp fa-regular fa-arrow-up"></i>
                                            </div>
                                            <div className="TextBoxFirstNumber">
                                            {EmployeeList.map(( val ,key) => {
                                                    const BMImap = Math.round(val.bmi)
                                                        return (
                                                            <i>{BMImap}</i> 
                                                        )
                                                    })}
                                            </div>
                                        </div>                                   
                                     </div>
                                     <div class="col">
                                        <div className="BoxOverView">
                                            <div className="TextBoxFirst">
                                                <p>Cel</p>
                                            </div>
                                            <div className="ArrowBoxFirstNumber">
                                                  <i class="fa-sharp fa-regular fa-arrow-up"></i>
                                            </div>
                                            <div className="TextBoxFirstNumber">
                                            {EmployeeList.map((val ,key) => {
                                                        return (
                                                            <i>{val.goal}</i> 
                                                        )
                                                    })}
                                            </div>
                                        </div>                                   
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
                    <div className="WindowDashBoard">
                        <div className="OverView">
                            <div class="container">
                                <div class="row">
                                    <div class="col">
                                        <div className="BoxOverView">

                                            <div className="TextBoxFirst">
                                                <p>Osiągniecia</p>
                                            </div>
                                            <div className="ArrowBoxFirstNumber">
                                                  <i class="fa-sharp fa-regular fa-arrow-up"></i>
                                            </div>
                                            <div className="TextBoxFirstNumber">
                                                <i>0%</i>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col">
                                        <div className="BoxOverView">
                                            <div className="TextBoxFirst">
                                                <p>Waga</p>
                                            </div>
                                            <div className="ArrowBoxFirstNumber">
                                                  <i class="fa-sharp fa-regular fa-arrow-up"></i>
                                            </div>
                                            <div className="TextBoxFirstNumber">
                                                <i>0</i><i> KG</i>
                                            </div>
                                        </div>                                   
                                     </div>
                                     <div class="col">
                                        <div className="BoxOverView">
                                            <div className="TextBoxFirst">
                                                <p>BMI</p>
                                            </div>
                                            <div className="ArrowBoxFirstNumber">
                                                  <i class="fa-sharp fa-regular fa-arrow-up"></i>
                                            </div>
                                            <div className="TextBoxFirstNumber">
                                                <i>0</i>
                                            </div>
                                        </div>                                   
                                     </div>
                                     <div class="col">
                                        <div className="BoxOverView">
                                            <div className="TextBoxFirst">
                                                <p>Cel</p>
                                            </div>
                                            <div className="ArrowBoxFirstNumber">
                                                  <i class="fa-sharp fa-regular fa-arrow-up"></i>
                                            </div>
                                            <div className="TextBoxFirstNumber">
                                                <i>0</i><i> KG</i>
                                            </div>
                                        </div>                                   
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
 
export default User;

