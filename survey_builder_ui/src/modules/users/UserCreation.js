import React from "react";
import { Flip, ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";

import UserService from "./UserService";
import CreatorImg from '../../assets/images/user_create.jpeg';

const userService = new UserService();

export default function UserCreation() {

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        let username = e.target.elements.userName.value;
        let firstname = e.target.elements.firstName.value;
        let lastname = e.target.elements.lastName.value;
        let password = e.target.elements.password.value;
        let payload = {username: username, password: password, firstname: firstname, lastname: lastname, role: 'Admin'}
        userService.addUser(payload)
            .then((res) => {
                if (res.data === 'User Created.'){
                    navigate('/admin/users')
                }
                else{
                    toast.error(res.data, {transition: Flip, theme: 'colored'})
                }
            })
            .catch((err) => {alert(err)})
    }

    const passwordToggle = () => {
        let password = document.getElementById('password');
        password.type = password.type === 'text' ? 'password' : 'text';
    };


    return (
        <>
            <div className="p-2  mb-4">
                <h3>Users</h3>
            </div>
            <div className="w-100 h-75 bg-white rounded ms-1 me-1  p-3 mt-5 overflow-auto">
                <div className="w-100 h-100 rounded p-3 row m-auto d-flex justify-content-between overflow-auto" style={{ backgroundColor: '#dbdad7' }}>
                    <div className="col-sm-7 h-100 rounded bg-white overflow-auto">
                        <img src={CreatorImg} alt='creator_img' className="w-100 h-100" style={{ objectFit: 'cover' }}></img>
                    </div>
                    <div className="col-sm-5 rounded">
                        <div className="ms-2 w-100 h-100 bg-white rounded m-auto p-3">
                            <h5 className="mb-3 text-center">Create User</h5>
                            <form onSubmit={handleSubmit}>
                                <div className="mb-4">
                                    <label htmlFor="userName" className="form-label">Username:</label>
                                    <input type="text" className="form-control" id="userName" required />
                                </div>

                                <div className="mb-4">
                                    <label htmlFor="firstName" className="form-label">Firstname:</label>
                                    <input type="text" className="form-control" id="firstName" required />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="lastName" className="form-label">Lastname:</label>
                                    <input type="text" className="form-control" id="lastName" required />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="password" className="form-label">Password:</label>
                                    <input type="password" pattern=".{8,}" className="form-control" id="password" required />
                                </div>
                                <div className="mb-5 form-check" >
                                    <input type="checkbox" className="form-check-input" id="exampleCheck1" onClick={passwordToggle} />
                                    <label className="form-check-label" htmlFor="exampleCheck1" >Show Password</label>
                                </div>

                                <div className="d-grid mt-2">
                                    <button type="submit" className="btn btn-primary" >Create</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}