import React, { useEffect, useState } from "react";
import '../Style/user.css';
import axios from "axios";
import { VscEdit } from "react-icons/vsc";
import Chart from "react-apexcharts";


const User = () => {
    const [UserBox,setUserBox] = useState(0);

    const [EmployeeList,setEmployeeList] = useState([])
    const [DataLogin,setDataLogin] = useState([])

    const [options, setOptions] = useState({
        
        xaxis: {
            categories: [1991,2001,2003,2004,2005],
        },
        
        chart: {
            type: 'bar',
          },
        dataLabels: {
            enabled: true,
            textAnchor: 'middle',
            distributed: false,
            offsetX: 0,
            offsetY: 0,
            style: {
                fontSize: '12px',
                fontFamily: 'Helvetica, Arial, sans-serif',
                colors: undefined
        },
          }
        
    })

    const [series, setSeries] = useState(
        [
            {
            name: 'Waga',
            data: [30,40,43,53,34]
            },
            {
            name: 'BMI',
            data: [20,30] 
            }
        ]
    )

    useEffect(() =>{
        const fetchSpec = async () => {
            try{
                const resdata = await axios.get("http://localhost:3001/data")
                const reslogin = await axios.get("http://localhost:3001/login")

                setEmployeeList(resdata.data);
                setDataLogin(reslogin.data.login);

            } catch (err){
                console.log(err);
            }
        }
        fetchSpec();
    },
    );
    

    const FirstLetterLogin = DataLogin.map((val ,key) => {
        return (
            val.login.charAt(0)
        )
    })

    const MapLogin = DataLogin.map((val ,key) => {
        return (
            val.login
        )
    })

    function AnimationmMouseOver() {
        document.getElementById('UserBox').style.animation="blumb 1s linear";
        document.getElementById('UserBox').style.cursor="pointer";
        document.getElementById('UserBoxMenuBorder').style.display="block";
        
    }
    function AnimationmMouseOut() {
        document.getElementById('UserBox').style.animation="";
        document.getElementById('UserBoxMenuBorder').style.display="none";

    }

    function BoxMouseOver(){
        document.getElementById('UserBoxMenuBorder').style.display="block";
    }


    function BoxMouseOut(){
        document.getElementById('UserBoxMenuBorder').style.display="none";
    }

    function EditButton(){

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

                            <div className="EverythinkUserBox">
                                    <div className="UserBox" id="UserBox" onMouseOver={AnimationmMouseOver} onMouseOut={AnimationmMouseOut}>
                                        <div className="UserBoxInSide">
                                            <p>{FirstLetterLogin}</p>
                                        </div>
                                        
                                    </div>
                                    <div className="UserBoxMenuBorder" id="UserBoxMenuBorder" onMouseOver={BoxMouseOver} onMouseOut={BoxMouseOut}>
                                            <div className="HideUserBoxMenu">
                                                <div className="UserBoxMenu">
                                                    <div className="UserBoxLogin">
                                                        <p>{MapLogin}</p>
                                                    </div>
                                                    <div className="UserBoxButton"></div>
                                                    <div className="UserBoxButton"></div>
                                                    <div className="UserBoxLogOut"></div>
                                                </div>
                                            </div>
                                    </div>
                            </div>
                          
                        </div>
                      
                    </div>

                    <div className="WindowDashBoard">
                        <div className="OverView">
                            <div className="BoxBlurBlub">
                                <div className="BlurBlumb"></div>
                                    <div className="BlurBlumb2"></div>
                                        <div className="BlurBlumb3"></div>
                            </div>  
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
                                                        <div className="AddValue" onClick={EditButton}>
                                                             <VscEdit />
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
                                            <div className="AddValue" onClick={EditButton}>
                                                <VscEdit />
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
                                                <Chart id="chart" options={options} series={series} height="550px" width="100%"/>
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

