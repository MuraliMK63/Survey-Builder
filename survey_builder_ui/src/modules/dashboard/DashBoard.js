import React, { useEffect, useState } from "react";
import DashBoardService from "./DashBoardService";
import SurveyIcon from '../../assets/images/survey_logo.png'
import { useNavigate } from "react-router-dom";

import './DashBoard.css'

const dashboardService = new DashBoardService();

export default function DashBoard() {

    const [recentDoc, setRecentDoc] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        dashboardService.recentDocument()
            .then((res) => { setRecentDoc(res.data) })
            .catch((err) => { alert(err) })
    }, [])


    const editSurvey = (e) =>{
        let surveyId = e.target.value
        navigate(`surveys/createSurvey/${surveyId}`)
    }

    const recentDocuments = recentDoc.map((doc) => {
        return (
            <div className="p-1 m-2 d-flex justify-content-between rounded bg-white pe-5 surveyCard">
                <div>
                    <img src={SurveyIcon} alt='survey_icon' className="me-5 h-auto" />
                    <div style={{ float: 'right' }}>
                        <h5>{doc.name}</h5>
                        <h6 >{doc.code}</h6>
                    </div>
                </div>
                <div className="d-flex justify-content-center align-items-center">
                    <button className="btn btn-primary btn-lg " value={doc.id} onClick={editSurvey}>Edit</button>
                </div>
            </div>
        )
    })

    return (
        <>
            <div className="p-3">
                <h3>Recent Documents</h3>
                <div className="rounded overflow-auto">
                    {recentDocuments}
                </div>
            </div>
            <div className="bg-primary h-50">

            </div>
        </>
    )
}