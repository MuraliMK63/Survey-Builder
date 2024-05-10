import React, { useEffect, useState } from "react";
import { Flip, ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

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

    const activateCategory = () => {

        let tbody = document.getElementById('categoryTableBody')
        let selectedRows = []

        for (let iter = 0; iter < tbody.children.length; iter++) {
            let currentRow = tbody.children[iter].children[0].children[0];
            if (currentRow.checked) {
                selectedRows.push(parseInt(currentRow.value))
            };
        };

        let payload = { categoryIdList: selectedRows }
        categoryService.activateCategory(payload)
            .then((res) => {
                if (res.data === 'Activated Sucessfully.') {
                    window.location.reload(false)
                }
                else {
                    toast.error(res.data, { transition: Flip, theme: 'colored' })
                }
            })
            .catch(err => { alert(err) })
    }

    const deactivateCategory = () => {
        
        let tbody = document.getElementById('categoryTableBody')
        let selectedRows = []

        for (let iter = 0; iter < tbody.children.length; iter++) {
            let currentRow = tbody.children[iter].children[0].children[0];
            if (currentRow.checked) {
                selectedRows.push(parseInt(currentRow.value))
            };
        };

        let payload = { categoryIdList: selectedRows }
        categoryService.deactivateCategory(payload)
            .then((res) => {
                if (res.data === 'Deactivated Sucessfully.') {
                    window.location.reload(false)
                }
                else {
                    toast.error(res.data, { transition: Flip, theme: 'colored' })
                }
            })
            .catch(err => { alert(err) })
    }



    const activeCategory = active.map((activ, ind) => {
        return (
            <>
                <tr key={activ.id}  >
                    <td><input type="checkbox" className="form-check-input" id="activeCheck" value={activ.id}/></td>
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
                    <td><input type="checkbox" className="form-check-input" id="activeCheck" value={inactiv.id}/></td>
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
            <ToastContainer />
            <div className="p-2 d-flex justify-content-between mb-4">
                <h3>Categories</h3>
                <div>
                    <Link to='createCategory'><button className="btn btn-primary">Create Category</button></Link>
                </div>
            </div>
            <div className="w-100 h-75 bg-white rounded mt-4 p-3">
                <div className="d-flex justify-content-between mb-5 mt-3">
                    <h3>{currentSection === 0 ? 'Active Categories' : 'Inactive Categories'}</h3>
                    <button className="btn btn-primary" onClick={currentSection === 0 ? deactivateCategory : activateCategory}>
                        {currentSection === 0 ? 'Deactivate' : 'Activate'}
                    </button>
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
                                <tbody id="categoryTableBody">
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