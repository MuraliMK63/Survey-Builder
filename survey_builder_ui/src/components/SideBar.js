import React from "react";
import { Link } from "react-router-dom";
import './SideBar.css';


export default function SideBar() {
    return (
        <div className="sidebar m-2 rounded">
            <ul>
                <Link to='surveys' className="text-decoration-none text-black"><li className="ps-4 rounded">Surveys</li></Link>
                <Link to='users' className="text-decoration-none text-black"><li className="ps-4 rounded">Users</li></Link>
            </ul>
        </div>
    )
}