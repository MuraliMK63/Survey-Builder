import React from "react";
import { useNavigate } from "react-router-dom";
import { Flip, ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import CategoryService from "./CategoryService";
import CreatorImg from '../../assets/images/creator_form.jpeg';

const categoryService = new CategoryService();

export default function CategoryCreation() {

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
        let categoryName = e.target.elements.categoryName.value;
        let categoryDescription = e.target.elements.categoryDescription.value;
        let payload = {name: categoryName, description: categoryDescription, created_by: localStorage.getItem('userid')}
        categoryService.addCategory(payload)
            .then((res) => {
                if (res.data === 'Category Created.'){
                    navigate('/admin/category')
                }
                else{
                    toast.error(res.data, { transition: Flip, theme: 'colored' })
                }
            })
    }


    return (
        <>
            <ToastContainer />
            <div className="p-2  mb-4">
                <h3>Categories</h3>
            </div>
            <div className="w-100 h-75 bg-white rounded ms-1 me-1  p-3 mt-5 overflow-auto">
                <div className="w-100 h-100 rounded p-3 row m-auto d-flex justify-content-between overflow-auto" style={{ backgroundColor: '#dbdad7' }}>
                    <div className="col-sm-7 h-100 rounded bg-white overflow-auto">
                        <img src={CreatorImg} alt='creator_img' className="w-100 h-100" style={{ objectFit: 'cover' }}></img>
                    </div>
                    <div className="col-sm-5 rounded">
                        <div className="ms-2 w-100 h-100 bg-white rounded m-auto p-3">
                            <h5 className="mb-5 text-center">Create Category</h5>
                            <form onSubmit={handleSubmit}>
                                <div className="mb-5">
                                    <label htmlFor="categoryName" className="form-label">Name:</label>
                                    <input type="text" className="form-control" id="categoryName" required />
                                </div>

                                <div className="mb-5">
                                    <label htmlFor="categoryDescription" className="form-label">Description:</label>
                                    <textarea className="form-control" required rows={7} id="categoryDescription"></textarea>
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