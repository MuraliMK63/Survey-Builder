import React from "react";

export default function Users(){
    return(
        <>
        <div className="p-2 d-flex justify-content-between mb-4">
            <h3>Users</h3>
            <button className="btn btn-primary">Create User</button>
        </div>
        <div className="w-100 h-75 bg-white rounded mt-4 p-3">
            <div className="d-flex justify-content-between mb-5 mt-3">
                <h3>Active Users</h3>
                <button className="btn btn-primary">Activate</button>
            </div>
            <div className="w-100 h-75  mt-4 rounded" style={{ backgroundColor: '#dbdad7' }}>

            </div>
        </div>
        </>
    )
}