import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Flip, ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import QuestionModal from "./QuestionModal";
import QuestionTypes from "./QuestionTypes";


import SurveyService from './SurveyService';
const surveyService = new SurveyService();

export default function SurveyBuilder() {

    const navigate = useNavigate();

    const [surveyDetails, setSurveyDetails] = useState([])
    const [surveyContent, setSurveyContent] = useState([]);


    let location = useLocation();

    useEffect(() => {
        let payload = { surveyId: location.pathname.split('/').pop() }
        surveyService.getSurveyDetails(payload)
            .then((res) => {
                if (res.data === 'No survey found!' || res.data === 'Invalid surveyid!') {
                    alert(res.data);
                    navigate('/admin/surveys', { replace: true })
                }
                else {
                    setSurveyContent(res.data.elements)
                    setSurveyDetails([res.data.surveyName, res.data.description])
                }
            })
            .catch((err) => { alert(err) })
    }, [location.pathname, navigate])


    const saveSurvey = () => {
        let payload = { surveyId: location.pathname.split('/').pop(), surveyJson: { surveyName: surveyDetails[0], description: surveyDetails[1], elements: surveyContent } }
        surveyService.saveSurvey(payload)
            .then((res) => {
                if (res.data === 'Saved Sucessfully!') {
                    toast.success(res.data, { transition: Flip, theme: "colored" });
                }
                else {
                    toast.error(res.data);
                }
            })
            .catch((err) => { alert(err) })

    }

    const deleteQuetion = (quesid) => {
        let prevContent = [...surveyContent];
        prevContent.splice(quesid - 1, 1);
        prevContent.map((ques) => { if (ques.id > quesid) { ques.id = ques.id - 1 } })
        setSurveyContent(prevContent)

    }

    const editQuestion = (question) => {
        let prevContent = [...surveyContent]
        prevContent = prevContent.map((ques) => ques.id !== question.id ? ques : question)
        console.log(prevContent)
        setSurveyContent(prevContent)
    }

    const questionContent = surveyContent.map((ques) => {
        return <QuestionTypes question={ques} delQ={deleteQuetion} edtQ={editQuestion} />
    })

    const assignSurvey = () => {
        navigate('/admin/surveys/assignSurvey')
    }


    return (
        <>
            <ToastContainer />
            <div className="w-100 h-100 bg-white rounded p-3 ">
                <div>
                    <div className="d-flex justify-content-between">
                        <h3>{surveyDetails[0]}</h3>
                        <div>
                            <button className="btn btn-secondary me-5" onClick={assignSurvey}><i class="bi bi-send-plus h5 me-2"></i>Share</button>
                            <button className="btn btn-primary me-2" data-bs-toggle="modal" data-bs-target="#questionModal">Add Question</button>
                            <QuestionModal surveyState={surveyContent} surveySetter={setSurveyContent} />
                            <button className="btn btn-md btn-primary" onClick={saveSurvey}>Save</button>
                        </div>

                    </div>
                    <h6>{surveyDetails[1]}</h6>
                    <hr></hr>
                </div>
                <div className="w-100 overflow-auto rounded p-4" style={{ height: '87%', backgroundColor: '#dbdad7' }}>
                    {questionContent}
                </div>
            </div>
        </>
    )
}