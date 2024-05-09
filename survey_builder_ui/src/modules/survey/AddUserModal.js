import React, { useState } from "react";

export default function AddUserModal({ users, selected, setSelected }) {

    const [tempUsers, setTempUsers] = useState([])

    const selectUser = (e) => {
        setTempUsers([...tempUsers, { id: e.target.value, name: e.target.innerHTML }])
        setSelected([...selected, e.target.value])
    }

    const removeUser = (e) => {
        let userId = e.target.getAttribute('value')
        let tempUsr = [...tempUsers]
        setTempUsers(tempUsr.filter((user) => user.id != userId))
        let selUsr = [...selected]
        setSelected(selUsr.filter((userid) => userId != userid))
        
    }


    const userList = users.map((user) => {
        return (
            <li className="m-1 p-1" value={user.id} style={{ cursor: 'pointer' }} onClick={selectUser}>{user.firstname}</li>
        )
    })


    const selectedList = tempUsers.map((usr) => {
        return (
            <div className="d-flex justify-content-between" style={{ cursor: 'pointer' }}>
                <li className="m-1 p-1" value={usr.id}>{usr.name}</li>
                <i className="bi bi-trash me-2 mt-2 bi-md" value={usr.id} onClick={removeUser}></i>
            </div>
        )
    })

    const preventer = (e) => {
        e.preventDefault();
        document.getElementById('addUserBtnClose').click()

    }

    return (
        <>
            <div className="modal fade" id='addUserModal' data-bs-backdrop="static" data-bs-keyboard="false" >
                <div className="modal-dialog modal-dialog-centered modal-lg">
                    <div className="modal-content">
                        <form onSubmit={preventer}>
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" id="exampleModalLabel">Add Users:</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <div className="row p-3">
                                    <div className="col-sm-6 bg-secondary rounded overflow-auto">
                                        <ul >
                                            {userList}
                                        </ul>
                                    </div>
                                    <div className="col-sm-6 bg-primary rounded overflow-auto">
                                        <ul >
                                            {selectedList}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" id="addUserBtnClose">Close</button>
                                <button type="submit" className="btn btn-primary">Add User</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}