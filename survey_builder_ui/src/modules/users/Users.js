import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import UserService from "./UserService";

const userService = new UserService();

export default function Users() {

    const [active, setActive] = useState([]);
    const [inactive, setInactive] = useState([]);
    const [currentSection, setCurrentSection] = useState(0)

    useEffect(() => {
        userService.getUser()
            .then((res) => {
                setActive(res.data[0]);
                setInactive(res.data[1])
            })
    }, []);

    const switchActive = () => { setCurrentSection(0) };
    const switchInactive = () => { setCurrentSection(1) };

    const activeUsers = active.map((activ, ind) => {
        return (<>
            <tr key={activ.id}  >
                <td><input type="checkbox" className="form-check-input" id="activeCheck" /></td>
                <td value={activ.id}>{ind + 1}</td>
                <td>{activ.username}</td>
                <td>{activ.firstname}</td>
                <td>{activ.lastname}</td>
                <td>{activ.role}</td>
                <td><small><button className="btn btn-sm btn-primary" value={activ.id} >Deactivate</button></small></td>
            </tr>
        </>
        )
    })

    const inactiveUsers = inactive.map((inactiv, ind) => {
        return (<>
            <tr key={inactiv.id}  >
                <td><input type="checkbox" className="form-check-input" id="activeCheck" /></td>
                <td value={inactiv.id}>{ind + 1}</td>
                <td>{inactiv.username}</td>
                <td>{inactiv.firstname}</td>
                <td>{inactiv.lastname}</td>
                <td>{inactiv.role}</td>
                <td><small><button className="btn btn-sm btn-primary" value={inactiv.id} >Activate</button></small></td>
            </tr>
        </>
        )
    })

    return (
        <>
            <div className="p-2 d-flex justify-content-between mb-4">
                <h3>Users</h3>
                <Link to='createUser'><button className="btn btn-primary">Create User</button></Link>
            </div>
            <div className="w-100 h-75 bg-white rounded mt-4 p-3">
                <div className="d-flex justify-content-between mb-5 mt-3">
                    <h3>{currentSection === 0 ? 'Active Users' : 'Inactive Users'}</h3>
                    <button className="btn btn-primary">{currentSection === 0 ? 'Deactivate' : 'Activate'}</button>
                </div>
                <div className="w-100 h-75  mt-4 rounded p-3" style={{ backgroundColor: '#dbdad7' }}>
                    <div className="row mb-2">
                        <h5 className={`col bg-white  rounded m-3 text-center p-1 ${currentSection === 0 ? 'border-bottom border-3 border-primary' : ''}`} style={{ cursor: "pointer" }}
                            onClick={switchActive}>Active Users</h5>
                        <h5 className={`col bg-white rounded m-3 text-center p-1 ${currentSection === 1 ? 'border-bottom border-3 border-primary' : ''}`} style={{ cursor: "pointer" }}
                            onClick={switchInactive}>Inactive Users</h5>
                    </div>
                    <div className="w-100 h-75 bg-white rounded p-2" >
                        <div className="w-100 h-100 overflow-auto rounded p-2" style={{ backgroundColor: '#dbdad7' }}>
                            <table className="table table-hover">
                                <thead>
                                    <tr>
                                        <td>  </td>
                                        <td>User Id</td>
                                        <td>Username</td>
                                        <td>First Name</td>
                                        <td>Last Name</td>
                                        <td>Role</td>
                                        <td>Actions</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    {currentSection === 0 ? activeUsers : inactiveUsers}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}