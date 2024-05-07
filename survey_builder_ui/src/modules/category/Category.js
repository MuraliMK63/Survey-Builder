import React, { useEffect, useState } from "react";

import CategoryService from "./CategoryService";
import { Link } from "react-router-dom";

const categoryService = new CategoryService();

export default function Category() {

    const [active, setActiveCategory] = useState([]);
    const [inactive, setInactiveCategory] = useState([]);
    const [currentSection, setCurrentSection] = useState(0);


    useEffect(() => {
        categoryService.getCatgory()
            .then((res) => {
                setActiveCategory(res.data[0])
                setInactiveCategory(res.data[1])
            })
    }, [])

    const switchActive = () => { setCurrentSection(0) };

    const switchInactive = () => { setCurrentSection(1) };

    const activeCategory = active.map((activ, ind) => {
        return (
            <>
                <tr key={activ.id}  >
                    <td><input type="checkbox" className="form-check-input" id="activeCheck" /></td>
                    <td value={activ.id}>{ind + 1}</td>
                    <td>{activ.name}</td>
                    <td>{activ.description}</td>
                    <td>{activ.createdBy}</td>
                    <td><small><button className="btn btn-sm btn-primary" value={activ.id} >Deactivate</button></small></td>
                </tr>
            </>)
    })

    const inactiveCategory = inactive.map((inactiv, ind) => {
        return (
            <>
                <tr key={inactiv.id}  >
                    <td><input type="checkbox" className="form-check-input" id="activeCheck" /></td>
                    <td value={inactiv.id}>{ind + 1}</td>
                    <td>{inactiv.name}</td>
                    <td>{inactiv.description}</td>
                    <td>{inactiv.createdBy}</td>
                    <td><small><button className="btn btn-sm btn-primary" value={inactiv.id} >Deactivate</button></small></td>
                </tr>
            </>)
    })

    return (
        <>
            <div className="p-2 d-flex justify-content-between mb-4">
                <h3>Categories</h3>
                <div>
                    <Link to='createCategory'><button className="btn btn-primary">Create Category</button></Link>
                </div>
            </div>
            <div className="w-100 h-75 bg-white rounded mt-4 p-3">
                <div className="d-flex justify-content-between mb-5 mt-3">
                    <h3>{currentSection === 0 ? 'Active Categories' : 'Inactive Categories'}</h3>
                    <button className="btn btn-primary">{currentSection === 0 ? 'Deactivate' : 'Activate'}</button>
                </div>
                <div className="w-100 h-75  mt-4 rounded p-3" style={{ backgroundColor: '#dbdad7' }}>
                    <div className="row mb-2">
                        <h5 className={`col bg-white  rounded m-3 text-center p-1 ${currentSection === 0 ? 'border-bottom border-3 border-primary' : ''}`} style={{ cursor: "pointer" }}
                            onClick={switchActive}>Active Categories</h5>
                        <h5 className={`col bg-white rounded m-3 text-center p-1 ${currentSection === 1 ? 'border-bottom border-3 border-primary' : ''}`} style={{ cursor: "pointer" }}
                            onClick={switchInactive}>Inactive Categories</h5>
                    </div>
                    <div className="w-100 h-75 bg-white rounded p-2" >
                        <div className="w-100 h-100 overflow-auto rounded p-2" style={{ backgroundColor: '#dbdad7' }}>
                            <table className="table table-hover">
                                <thead>
                                    <tr>
                                        <td>  </td>
                                        <td>Category Id</td>
                                        <td>Category Name</td>
                                        <td>Category Description</td>
                                        <td>Created By</td>
                                        <td>Actions</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    {currentSection === 0 ? activeCategory : inactiveCategory}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}