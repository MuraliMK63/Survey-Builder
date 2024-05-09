import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import SurveyService from "./SurveyService";
import AddUserModal from "./AddUserModal";
import UserService from "../users/UserService";

const surveyService = new SurveyService();
const userService = new UserService();

export default function AssignSurvey() {

    const navigate = useNavigate();
    const [surveyDetails, setSurveyDetails] = useState([]);
    const [userList, setUserList] = useState([]);
    const [selectedUser, setSelectedUser] = useState([]);
    const [dueDate, setDueDate] = useState('');

    let location = useLocation();

    useEffect(() => {
        let urlList = location.pathname.split('/')
        let payload = { surveyId: urlList[urlList.length - 2] }
        surveyService.getSurveyDetails(payload)
            .then((res) => {
                if (res.data === 'No survey found!' || res.data === 'Invalid surveyid!') {
                    alert(res.data);
                    navigate('/admin/surveys', { replace: true })
                }
                else {
                    setSurveyDetails([res.data.surveyName, res.data.description])
                }
            })
        userService.getUser()
            .then((res) => {
                setUserList(res.data[0])
            })
            .catch(err => { alert(err) })
    }, [])

    const checkDate = (e) => {
        let today = new Date()
        let selectedDate = new Date(e.target.value)
        if (selectedDate > today) {
            setDueDate(selectedDate)
        }
        else {
            setDueDate('Invalid')
        }
    }

    const selectedUserList = selectedUser.map((userid) => {
        let user = userList.filter((usr) => usr.id === userid)
        return (
            <li value={userid} className="m-1 p-1 ">{user[0].firstname}</li>
        )
    })

    // function convertDate(inputFormat) {
    //     function pad(s) { return (s < 10) ? '0' + s : s; }
    //     var d = new Date(inputFormat)
    //     return [pad(d.getDate()), pad(d.getMonth() + 1), d.getFullYear()].join('/')
    // }

    let urlList = location.pathname.split('/')

    const handleSubmit = (e) => {
        e.preventDefault()
        let payload = {
            surveyId: urlList[urlList.length - 2], message: document.getElementById('adminMessage').value, dueDate: dueDate,
            assignedBy: localStorage.getItem('userid'), users: selectedUser
        }
        surveyService.assignSurvey(payload)
            .then((res) => {
                if (res.data === 'Assigned Sucessfully.'){
                    navigate('/admin/surveys')
                }
                else{
                    alert(res.data)
                }
            })
            .catch((err) => alert(err))
    }





    return (
        <>
            <div className="p-2 d-flex justify-content-between mb-5">
                <h3>Send to users</h3>
                {/* <button className="btn btn-primary">Create User</button> */}
            </div>
            <div className="w-100 h-75 bg-white rounded mt-4 p-3 overflow-auto">
                <div className="row p-3 m-2 rounded" style={{ backgroundColor: '#dbdad7' }}>
                    <div className="col-sm-4">
                        <h5 className="mb-3">Survey Name:</h5>
                        <input type="text" className="form-control border border-3" value={surveyDetails[0]} readOnly />
                    </div>
                    <div className="col-sm-6">
                        <h5 className="mb-3">Survey Description:</h5>
                        <textarea className="form-control border border-3" rows={4} value={surveyDetails[1]} readOnly />
                    </div>
                    <div className="col-sm-2">
                        <h5 className="mb-3">Due Date:</h5>
                        <input type="date" id="dueDate" className="form-control" onChange={checkDate} required></input>
                        <p className={`mt-3 text-danger ${dueDate === 'Invalid' ? 'd-block' : 'd-none'}`} id='dueDateWarning'>* Due date must be greater than current date</p>
                    </div>
                </div>
                <hr></hr>
                {/* <form onSubmit={handleSubmit}> */}
                    <div className="row p-3 m-2 rounded" style={{ backgroundColor: '#dbdad7' }}>
                        <div className="col-sm-7">
                            <h5 className="mb-3">Message:</h5>
                            <textarea className="form-control border border-3" id="adminMessage" rows={10} placeholder="Enter your message here.." required />
                        </div>
                        <div className="col-sm-5">
                            <div className="d-flex justify-content-between">
                                <h5 className="mb-3">Selected Users:</h5>
                                <button className="btn btn-primary btn-sm" data-bs-toggle='modal' data-bs-target='#addUserModal'>Add User</button>
                                <AddUserModal users={userList} selected={selectedUser} setSelected={setSelectedUser} />
                            </div>
                            <div className="h-75 bg-white mt-3 rounded">
                                <ul>
                                    {selectedUserList}
                                </ul>
                            </div>
                        </div>

                    </div>
                    <button className="btn btn-primary m-2" onClick={handleSubmit} style={{ float: 'right' }}>Send</button>
                {/* </form> */}
            </div>
        </>
    )
}