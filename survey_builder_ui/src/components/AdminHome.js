import React from "react";
import { Outlet } from "react-router-dom";

import Header from "./Header";
import SideBar from "./SideBar";

export default function AdminHome(){
    return(
        <>
        <Header />
        <div className="row position-absolute bottom-0 start-0 end-0 m-0 p-2" style={{top: '55px', backgroundColor: '#dbdad7'}}>
            <div className="col-sm-2 p-2 m-0 rounded" style={{backgroundColor : 'white'}}>
                <SideBar />
            </div>
            <div className="col-sm-10 mt-4">
                <Outlet />
            </div>
        </div>
        </>
    )
}