import React, { useState } from 'react';
import { useNavigate, NavLink } from 'react-router-dom';


import RecordService from "../../services/RecordService";

const CreateRecord = () => {
    const initialRecordState = {
        id: null,
        title: "",
        status: "Open",
        description: "",
        priority: "Low"
    }

    const[record, setRecord] = useState(initialRecordState);
    const[submitted, setSubmitted] = useState(false);
    
    const handleInputChange = event => {
        const { name, value } = event.target;
        setRecord({ ...record, [name]: value });
        
    };

    const saveRecord = () => {
        var data = {
            title: record.title,
            status: record.status,
            description: record.description,
            priority: record.priority
        };
        console.log(data);
        RecordService.create(data)
            .then(response => {
                setRecord({
                    id: response.data.id,
                    title: response.data.title,
                    status: response.data.status,
                    description: response.data.description,
                    priority: response.data.priority
                });
                setSubmitted(true);
                console.log(response.data);
            })
            .catch(e => {
                console.log(e.response.data);
            });
    };

    const newRecord = () => {
        setRecord(initialRecordState);
        setSubmitted(false);
    };


    return (
        <div className = "container mt-3">
            <div className="submit-form">
                {submitted ? (
                    <div>
                        <h4>Success</h4>
                        <button className="btn btn-success" onClick={newRecord}>
                            Add
                        </button>
                    </div>
                ):(
                    <div>
                        <div className="form-group">
                            <label htmlFor="title">Title:</label>
                            <input
                                type="text"
                                className="form-control"
                                id="title"
                                required
                                value={record.title}
                                onChange={handleInputChange}
                                name="title"
                            />
                        </div>
                        <div class="form-group">
                            <label for="status">Status:</label>
                            <select class="form-control" id="status" onChange={handleInputChange}>
                                <option>Open</option>
                                <option>Work In Progress</option>
                                <option>Assigned</option>
                                <option>Pending</option>
                                <option>Resolved</option>
                                <option>Cancelled</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="description">Description:</label>
                            <input
                                type="text"
                                className="form-control"
                                id="description"
                                required
                                value={record.description}
                                onChange={handleInputChange}
                                name="description"
                            />
                        </div>
                        <div class="form-group">
                            <label for="priority">Priority:</label>
                            <select class="form-control" id="priority" onChange={handleInputChange}>
                                <option>Low</option>
                                <option>Medium</option>
                                <option>High</option>
                            </select>
                        </div>
                        <button onClick={saveRecord} className="btn btn-success">
                            Submit
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CreateRecord;