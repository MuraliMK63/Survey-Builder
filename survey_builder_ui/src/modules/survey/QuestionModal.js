import React, { useState } from "react";

export default function QuestionModal({surveyState, surveySetter}) {

    const [choices, setChoices] = useState([1, 2, 3, 4]);
    const [currentType, setCurrentType] = useState(1);

    let questionTypes = ['Single Textbox', 'Comment Box', 'Radio Button', 'Check Button', 'Dropdown', 'Slider Scale']

    const quesTypeChanger = (e) => {
        setCurrentType(e.target.selectedOptions[0].value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        let type = e.target.elements[1].value;
        let questiontext = e.target.elements[2].value;
        let element = {type: questionTypes[type], questiontext: questiontext, options: []}
        for (let i = 3; i < e.target.length - 3; i++){
            element.options.push(e.target.elements[i].value)
        }
        surveySetter([...surveyState, element]);
        e.target.reset()
    }

    const addChoice = () => {
        setChoices([...choices, choices.length+1])
    }

    const removeChoice = () => {
        setChoices(choices => {
            return choices.filter(choice => choice !== choices.length)
        });
    }


    const choiceList = choices.map((choice) => {
        return <span className="row">
            <i className="bi bi-dash rounded col-sm-1 mb-3" style={{ backgroundColor: '#dbdad7', cursor: 'pointer' }} onClick={removeChoice}></i>
            <input type="text" id={choice} name={`choice ${choice}`} className="mb-2 ms-2 me-2 rounded form-control border border-3 col" required></input>
            <i className="bi bi-plus rounded col-sm-1 mb-3" style={{ backgroundColor: '#dbdad7', cursor: 'pointer' }} onClick={addChoice}></i>

        </span>
    })

    const choiceDiv = <div className="row p-3 d-flex justify-content-between">
        <div className="p-3 col-sm-5">
            <label className="form-label">Choices:</label>
            {choiceList}
        </div>
        <div className="col-sm-5">
            <label className="form-label">Select Templates:</label>
            <select className="form-control" id="selectTemplates" name="selectTemplates">
                <option value={0}>--none--</option>
                <option value={1}>Yes-No</option>
                <option value={2}>Numbers(1-5)</option>
                <option value={3}>Numbers(1-10)</option>
            </select>
        </div>
    </div>



    return (
        <div className="modal fade" id="questionModal" data-bs-backdrop="static" data-bs-keyboard="false" >
            <div className="modal-dialog modal-dialog-centered modal-xl">
                <div className="modal-content">
                    <form  onSubmit={handleSubmit}>
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Add Question:</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="mb-4">
                                <label htmlFor="questionType" className="form-label">Question Type:</label>
                                <select className="form-control border border-3" name="questionType" id="questionType" onChange={quesTypeChanger}>
                                    <option value={1}>Single Textbox</option>
                                    <option value={2}>Comment Box</option>
                                    <option value={3}>Radio Button</option>
                                    <option value={4}>Check Button</option>
                                    <option value={5}>Dropdown</option>
                                    <option value={6}>Slider Scale</option>
                                </select>
                            </div>
                            <div className="mt-4">
                                <label htmlFor="questionText" className="form-label">Question Text:</label>
                                <textarea className="form-control border border-3" id="questionText" rows={6} required></textarea>
                            </div>
                            <div className="mt-3">
                                {(currentType) > 2 ? choiceDiv : <p></p>}
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="submit" className="btn btn-primary">Add Question</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
