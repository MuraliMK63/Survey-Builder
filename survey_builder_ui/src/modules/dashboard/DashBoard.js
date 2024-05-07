import React, { useEffect, useState } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { useNavigate } from "react-router-dom";

import DashBoardService from "./DashBoardService";
import SurveyIcon from '../../assets/images/survey_logo.png'
import './DashBoard.css'


ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
        {
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
        },
    ],
};



const dashboardService = new DashBoardService();

export default function DashBoard() {

    const [recentDoc, setRecentDoc] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        dashboardService.recentDocument()
            .then((res) => { setRecentDoc(res.data) })
            .catch((err) => { alert(err) })
    }, [])


    const editSurvey = (e) => {
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
            <div className="p-1">
                <h3>Recent Documents</h3>
                <div className="rounded overflow-auto">
                    {recentDocuments}
                </div>
                
            </div>
            <div className="row d-flex justify-content-between">
                <div className="col-sm-6 bg-white p-2  ms-4 d-flex justify-content-center rounded">
                    <Doughnut data={data} height="480px" width="480px" options={{ maintainAspectRatio: false }} />
                </div>

                <div className="col-sm-5 bg-white  p-2 me-4 d-flex justify-content-center rounded">
                    <Doughnut data={data} options={{ maintainAspectRatio: false }} />
                </div>

            </div>
        </>
    )
}