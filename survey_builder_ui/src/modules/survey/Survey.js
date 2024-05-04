import React, { useEffect, useState } from "react";
import { useNavigate, Link } from 'react-router-dom'
import SurveyService from "./SurveyService";

const surveyService = new SurveyService();

export default function Survey() {

    const navigate = useNavigate();

    const [currentOption, setCurrentOption] = useState(0);
    const [active, setActive] = useState([]);
    const [inactive, setInactive] = useState([]);

    useEffect(() => {
        surveyService.getSurvey()
            .then((res) => {
                setActive(res.data[0]);
                setInactive(res.data[1]);
            })
    }, [])

    const activate = () => { setCurrentOption(0) };
    const deactivate = () => { setCurrentOption(1) };

    const showSurvey = (e) =>{
        let surveyId = e.target.value
        navigate(`createSurvey/${surveyId}`)
    }

    let currentSection = currentOption === 0 ? 'Active Surveys' : 'Inactive Surveys'

    const activeSurveys = active.map((activ, ind) => {
        return <>
            <tr key={activ.id}  >
                <td><input type="checkbox" className="form-check-input" id="activeCheck" /></td>
                <td value={activ.id}>{ind + 1}</td>
                <td>{activ.name}</td>
                <td>{activ.code}</td>
                <td>{activ.description}</td>
                <td><small><button className="btn btn-sm btn-primary" value={activ.id} onClick={showSurvey} >Edit</button></small></td>
            </tr>
        </>

    })

    const InactiveSurveys = inactive.map((inactiv, ind) => {
        return <>
            <tr key={inactiv.id} >
                <td><input type="checkbox" className="form-check-input" id="inactiveCheck" /></td>
                <td value={inactiv.id}>{ind + 1}</td>
                <td>{inactiv.name}</td>
                <td>{inactiv.code}</td>
                <td>{inactiv.description}</td>
                <td><small><button className="btn btn-md btn-primary" value={inactiv.id} onClick={showSurvey} >Edit</button></small></td>
            </tr>
        </>

    })

    return (
        <>
            <div className="p-2 d-flex justify-content-between mb-4">
                <h3>Surveys</h3>
                <Link to='createSurvey'><button className="btn btn-primary" >Create Survey</button></Link>
            </div>
            <div className="w-100 h-75 bg-white rounded mt-4 p-3">
                <div className="d-flex justify-content-between mb-5 mt-3">
                    <h3>{currentSection}</h3>
                    <button className="btn btn-primary">{currentOption === 0 ? 'Deactivate' : 'Activate'}</button>
                </div>
                <div className="w-100 h-75  mt-4 rounded p-3" style={{ backgroundColor: '#dbdad7' }}>
                    <div className="row mb-2">
                        <h5 className={`col bg-white  rounded m-3 text-center p-1 ${currentOption === 0 ? 'border-bottom border-3 border-primary' : ''}`} style={{ cursor: "pointer" }}
                            onClick={activate}>Active Surveys</h5>
                        <h5 className={`col bg-white rounded m-3 text-center p-1 ${currentOption === 1 ? 'border-bottom border-3 border-primary' : ''}`} style={{ cursor: "pointer" }}
                            onClick={deactivate}>Inactive Surveys</h5>
                    </div>
                    <div className="w-100 h-75 bg-white rounded p-2" >
                        <div className="w-100 h-100 overflow-auto rounded p-2" style={{ backgroundColor: '#dbdad7' }}>
                            <table className="table table-hover">
                                <thead>
                                    <tr>
                                        <td>  </td>
                                        <td>Survey Id</td>
                                        <td>Survey Name</td>
                                        <td>Survey Code</td>
                                        <td>Survey Description</td>
                                        <td>Actions</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    {currentOption === 0 ? activeSurveys : InactiveSurveys}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}