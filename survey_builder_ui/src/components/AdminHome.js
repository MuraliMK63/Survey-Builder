import React from "react";
import { Outlet } from "react-router-dom";

import Header from "./Header";
import SideBar from "./SideBar";

export default function AdminHome(){
    return(
        <>
        <Header />
        <div className="row position-absolute bottom-0 start-0 end-0 m-0 p-0" style={{top: '62px'}}>
            <div className="col-sm-2 p-0 m-0">
                <SideBar />
            </div>
            <div className="col-sm-10" style={{backgroundColor: '#e1e6ed'}}>
                <Outlet />
            </div>
        </div>
        </>
    )
}