import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import LoginService from "./LoginService";

const loginService = new LoginService();

export default function SignIn() {

    const navigate = useNavigate();

    const passwordToggle = () => {
        let password = document.getElementById('password');
        password.type = password.type === 'text' ? 'password' : 'text';
    };

    const formHandler = (e) => {
        e.preventDefault();
        let username = e.target.elements[0].value;
        let password = e.target.elements[1].value;
        let payload = { username: username, password: password };
        loginService.verifyUser(payload)
            .then((res) => {
                if (res.data === 'Valid User.') {
                    navigate('admin ');
                }
                else {
                    toast.error(res.data);
                }
            })
            .catch((err) => {
                toast.error(err);
            })
    }

    return (
        <div className="bg-white p-4 rounded w-100 ">
            <h3 className="mb-4 pt-3">Welcome to Survey Builder</h3>
            <span className="d-flex mb-4">
                <h4 className="text-muted">Need an account?</h4>
                <Link to='signup' className="ps-3 text-decoration-none"><h4>Sign Up</h4></Link>
            </span>
            <h4 className="mb-4">Sign in</h4>
            <form onSubmit={formHandler}>
                <div className="mb-4">
                    <label htmlFor="userName" className="form-label">User Name</label>
                    <input type="text" className="form-control" id="userName" required />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-4">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" required />
                </div>
                <div className="mb-4 form-check" >
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" onClick={passwordToggle} />
                    <label className="form-check-label" htmlFor="exampleCheck1" >Show Password</label>
                </div>
                <div className="d-grid mb-4">
                    <button type="submit" className="btn btn-primary" >Submit</button>
                </div>
            </form>
            <ToastContainer />
        </div>
    )
}