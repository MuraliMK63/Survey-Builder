import React from "react";
import { Link } from "react-router-dom";
import './SideBar.css';


export default function SideBar() {
    return (
        <div className="sidebar mt-1">
            <ul>
                <Link to='surveys' className="text-decoration-none text-black"><li className="ps-4">Surveys</li></Link>
                <Link to='users' className="text-decoration-none text-black"><li className="ps-4">Users</li></Link>
            </ul>
        </div>
    )
}