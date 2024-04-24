import React, { useEffect, useState } from "react";
import CreatorImg from '../../assets/images/creator_form.jpeg';
import SurveyService from "./SurveyService";
import { useNavigate } from "react-router-dom";

const surveyService = new SurveyService();

export default function CreatorForm() {

    const navigate = useNavigate();

    const [category, setCategory] = useState([]);
    const [surveyCode, setSurveyCode] = useState('');

    useEffect(() => {
        surveyService.getCategory()
            .then((res) => {
                setCategory(res.data);
            })
            .catch((err) => {
                alert(err)
            })
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault();
        let category = e.target.elements[0].value;
        let surveyName = e.target.elements[1].value;
        let surveyCode = e.target.elements[2].value;
        let description = e.target.elements[3].value;
        let author = localStorage.getItem('userid')
        let payload = {name: surveyName, code: surveyCode, category: category, description: description, author: author}
        surveyService.addSurvey(payload)
            .then((res) =>{
                navigate(res.data.toString())
            })
    }

    const codeGenerator = (e) => {
        e.preventDefault();
        let categoryName = e.target.selectedOptions[0].textContent;
        if (categoryName === "Select"){
            setSurveyCode('')
        }
        else{
            let payload = { categoryName: categoryName, userName : localStorage.getItem('username')}
            surveyService.getSurveyCode(payload)
            .then((res) => setSurveyCode(res.data))
            .catch((err) => alert(err))
        }
    }

    const categorylist = category.map((cate) => {
        return <option value={cate.id} key={cate.id}>{cate.name}</option>
    })


    return (
        <>
            <div className="p-2  mb-4">
                <h3>Surveys</h3>
            </div>
            <div className="w-100 h-75 bg-white rounded ms-1 me-1  p-3 mt-5 overflow-auto">
                <div className="w-100 h-100 rounded p-3 row m-auto d-flex justify-content-between overflow-auto" style={{ backgroundColor: '#dbdad7' }}>
                    <div className="col-sm-7 rounded bg-white overflow-auto">
                        <img src={CreatorImg} alt='creator_img' className="w-100"></img>
                    </div>
                    <div className="col-sm-5 rounded">
                        <div className="ms-2 w-100 h-100 bg-white rounded m-auto p-3">
                            <h5 className="mb-3 text-center">Create Survey</h5>
                            <form onSubmit={handleSubmit}>
                                <div className="mb-4">
                                    <label htmlFor="category" className="form-label">Category:</label>
                                    <select className="form-control" name="category" id="category" onChange={codeGenerator}>
                                        <option value="Select">--none--</option>
                                        {categorylist}
                                    </select>
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="surveyName" className="form-label">Name:</label>
                                    <input type="text" className="form-control" id="surveyName" required />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="surveyCode" className="form-label">Code:</label>
                                    <input type="text" className="form-control" id="surveyCode" disabled  value={surveyCode}/>
                                </div>
                                <div className="mb-5">
                                    <label htmlFor="description" className="form-label">Description</label>
                                    <input type="text" className="form-control" id="description" required />
                                </div>
                                <div className="d-grid mt-1">
                                    <button type="submit" className="btn btn-primary" >Create </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}