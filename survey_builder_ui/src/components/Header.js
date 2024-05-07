import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Popover } from 'bootstrap/dist/js/bootstrap.esm.min.js';

export default function Header() {

    const navigate = useNavigate();

    useEffect(() => {
        Array.from(document.querySelectorAll('[data-bs-toggle="popover"]'))
            .forEach(popoverNode => new Popover(popoverNode))
    })

    // const popOverTemplate = <div className='d-flex'>
    //     <i class='bi bi-people-fill h4 ms-3 me-3'></i>
    //     <i class='bi bi-journal-text h4 ms-3 me-3'></i>
    // </div>

    const logOut = () => {
        localStorage.removeItem('userid');
        localStorage.removeItem('username');
        navigate('/')
    }

    return (
        <div className="p-2 ms-2 me-2 mt-2 bg-white rounded justify-content-between d-flex">
            <Link to='/admin'><h3 className="d-inline text-black" style={{ textDecoration: 'none' }}>Survey Builder</h3></Link>
            <span>
                <Link to='users'><i class="bi bi-people-fill h4 ms-3 me-3"></i></Link>
                <Link to='surveys'><i class="bi bi-journal-text h4 ms-3 me-3"></i></Link>
                <Link to='category'><i class="bi bi-bar-chart-steps h4 ms-3 me-3"></i></Link>
            </span>
            <i class="bi bi-power h4 ms-3 me-3" onClick={logOut} style={{ cursor: 'pointer' }}></i>
        </div>
    )
}