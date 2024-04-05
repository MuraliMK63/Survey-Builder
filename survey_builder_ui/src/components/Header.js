import React from "react";

export default function Header() {
    return (
        <div className="p-2 d-flex justify-content-between" style={{backgroundColor: '#91fad4'}}>
            <h2 className="d-inline">Survey Builder</h2>
            <button className="btn btn-primary" >My Profile</button>
        </div>
    )
}