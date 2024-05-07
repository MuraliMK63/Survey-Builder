import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import LoginService from "./LoginService";

const loginService = new LoginService();

export default function SignUp() {

    const navigate = useNavigate();

    const formHandler = (e) => {
        e.preventDefault();
        let username = e.target.elements[0].value;
        let firstname = e.target.elements[1].value;
        let lastname = e.target.elements[2].value;
        let password = e.target.elements[3].value;
        let confirmPassword = e.target.elements[4].value;

        if (password !== confirmPassword) {
            toast.error('Passwords Should Be Same')
        }
        else {
            let payload = { username: username, password: password, firstname: firstname, lastname: lastname, role: 'User' };
            loginService.addNewUser(payload)
                .then((res) => {
                    if (res.data === 'User Created.') {
                        toast.success('User Added Sucessfully.');
                        navigate('/');
                    }
                    else {
                        toast.error(res.data);
                    }
                })
                .catch((err) => {
                    toast.error(err);
                })
        }

    }

    return (
        <div className="bg-white p-4 rounded w-100">
            <h4 className="mb-4">Sign Up</h4>
            <h5 className="text-muted mb-4">Enter details to create your account</h5>
            <form onSubmit={formHandler}>
                <div className="mb-3">
                    <label htmlFor="userName" className="form-label">User Name </label>
                    <input type="email" className="form-control" id="userName" aria-describedby="emailHelp" required />
                </div>
                <div className="row">
                    <div className="mb-3 col">
                        <label htmlFor="firstName" className="form-label">First Name</label>
                        <input type="text" className="form-control" id="firstName" required />
                    </div>
                    <div className="mb-3 col">
                        <label htmlFor="lastName" className="form-label">Last Name</label>
                        <input type="text" className="form-control" id="lastName" required />
                    </div>
                </div>
                <div className="mb-3">
                    <label htmlFor="password"  className="form-label">Password <span className="text-muted">(8 characters required)</span></label>
                    <input type="password" pattern=".{8,}" className="form-control" id="password" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                    <input type="password" pattern=".{8,}" className="form-control" id="confirmPassword" required />
                </div>
                <div id="emailHelp" className="form-text mb-4">
                    Already Registered? <Link to='/' className="text-decoration-none">Log in</Link>
                </div>
                <div className="mb-3 d-grid">
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </form>
            <ToastContainer />
        </div>
    )
}