import React from "react";
import EditQuestionModal from "./EditQuestionModal";


export default function QuestionTypes({ question, delQ, edtQ }) {

    const deleteItem = (e) => {
        delQ(e.target.getAttribute('value'))
    }

    let option = ''
    if (question.type === 'Single Textbox') {
        option = <input className="form-control mt-4 mb-4 border border-3"></input>
    }
    else if (question.type === 'Comment Box') {
        option = <textarea className="form-control mt-4 mb-4 border border-3" rows={7}></textarea>
    }
    else if (question.type === 'Radio Button') {

        option = question.options.map((opt, ind) => {
            return (
                <div className="form-check mb-2" key={`radioButtonDiv${ind}`}>
                    <input className="form-check-input border border-2" type="radio" id={`radiobuttonOptions${question.id}${ind}`} name={`radiobuttonOptions${question.id}`}></input>
                    <label className="form-check-label" htmlFor={`radiobuttonOptions${question.id}${ind}`}>{opt}</label>
                </div>)
        })

    }
    else if (question.type === 'Check Button') {
        option = question.options.map((opt, ind) => {
            return (
                <div className="form-check mb-2" key={`checkOptionDiv${ind}`}>
                    <input className="form-check-input" type="checkbox" id={`checkButtonOptions${question.id}${ind}`} key={`checkButtonOptions${question.id}`}></input>
                    <label className="form-check-label" htmlFor={`checkButtonOptions${question.id}${ind}`}>{opt}</label>
                </div>)
        })

    }
    else if (question.type === 'Dropdown') {
        option = <select className="form-control mb-2">
            {question.options.map((opt, ind) => {
                return (
                    <option>{opt}</option>
                )
            })}
        </select>
    }
    else if (question.type === 'Slider Scale') {
        option = <input className="form-control mt-4 mb-4 border border-3"></input>
    }



    return (
        <div className="bg-white rounded p-4 mb-4">
            <span className="d-flex align-items-center">
                <i className="bi bi-trash me-2 mb-1 bi-md" style={{ cursor: 'pointer' }} onClick={deleteItem} value={question.id}></i>
                <i class="bi bi-pencil-square mb-1 me-2" data-bs-toggle="modal" data-bs-target={`#editQuestionModal${question.id}`} style={{ cursor: 'pointer' }}></i>
                <EditQuestionModal question={question} editQ={edtQ}/>
                <h5 className="mb-4 mt-3">{question.id + '. ' + question.questiontext}</h5>
            </span>
            {option}
        </div>
    )

}