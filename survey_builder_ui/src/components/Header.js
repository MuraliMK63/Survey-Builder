import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <div className="p-2 ms-2 me-2 mt-2 bg-white rounded justify-content-between d-flex">
            {/* <i class="bi bi-grid h4 ms-3" style={{cursor: 'pointer'}} ></i> */}
            <span>
                <Link to='users'><i class="bi bi-people-fill h4 ms-3 me-3"></i></Link>
                <Link to='surveys'><i class="bi bi-journal-text h4 ms-3 me-3"></i></Link>
            </span>
            <Link to='/admin'><h3 className="d-inline text-black" style={{ textDecoration: 'none' }}>Survey Builder</h3></Link>
        </div>
    )
}