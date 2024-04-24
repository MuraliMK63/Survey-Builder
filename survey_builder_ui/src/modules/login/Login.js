import React from "react";
import { Outlet } from "react-router-dom";

import LoginImg from '../../assets/images/survey_login_1.jpg';


export default function Login(){
    return(
        <div className="w-100 h-100 row m-0 position-absolute bg-white">
            <div className="col d-none  d-md-flex justify-content-center align-items-center "  >
                <img src={LoginImg} alt="loginImage" className="w-100  " />
            </div>
            <div className="col d-flex justify-content-center align-items-center p-5 rounded" style={{backgroundColor: '#91fad4'}}>
                <Outlet />
            </div>
        </div>
    )
}