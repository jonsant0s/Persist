import React, { useState, useEffect } from "react";
import RecordService from "../../services/RecordService";

import { Link } from "react-router-dom";

const RecordsList = () => {
    const[records, setRecords] = useState([]);
    const[currentRecord, setCurrentRecord] = useState(null);
    const[currentIndex, setCurrentIndex] = useState(-1);
    const[searchTitle, setSearchTitle] = useState("");

    useEffect(() => {
        retrieveRecords();
    }, []);

    const onChangeSearchTitle = e => {
        const searchTitle = e.target.value;
        setSearchTitle(searchTitle);
    };

    const retrieveRecords = () => {
        RecordService.getAll()
        .then(response => {
            setRecords(response.data);
            console.log(response.data);
        })
        .catch(e => {
            console.log(e);
        });
    };

    const refreshList = () => {
        retrieveRecords();
        setCurrentRecord(null);
        setCurrentIndex(-1);
    };
    const setActiveRecord = (record, index) => {
        setCurrentRecord(record);
        setCurrentIndex(index);
    };

    const findByTitle = () => {
        RecordService.findByTitle(searchTitle)
        .then(response => {
            setRecords(response.data);
            console.log(response.data);
        })
        .catch(e => {
            console.log(e);
        });
    };
    return (
        <div className="list row">
            <div className="col-md-8">
                <div className="input-group mb-3">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Search by Title"
                        value={searchTitle}
                        onChange={onChangeSearchTitle}
                    />
                    <div className="input-group-append">
                        <button
                            className="btn btn-outline-secondary"
                            type="button"
                            onClick={findByTitle}
                        >
                            Search
                        </button>
                    </div>
                </div>
            </div>
            <div className="col-md-6">
                <h4> Records List </h4>
                <ul className="list-group">
                    {records && 
                        records.map((record,index) => (
                        <li
                            className={
                                "list-group-item " + (index === currentIndex ? "active" : "")
                            }
                            onClick={() => setActiveRecord(record, index)}
                            key={index}
                        >
                            {record.title}
                        </li>
                    ))}
                </ul>
                
            </div>
            <div className="col-md-6">
                {currentRecord ? (
                    <div>
                        <h4>Record</h4>
                        <div>
                            <label>
                                <strong>Title:</strong>
                            </label>{" "}
                            {currentRecord.title}
                        </div>
                        <div>
                            <label>
                                <strong>Status:</strong>
                            </label>{" "}
                            {currentRecord.status}
                        </div>
                        <div>
                            <label>
                                <strong>Description:</strong>
                            </label>{" "}
                            {currentRecord.description}
                        </div>
                        <div>
                            <label>
                                <strong>Priority:</strong>
                            </label>{" "}
                            {currentRecord.priority}
                        </div>
                        <Link
                            to={"/records/" + currentRecord.id}
                            className="badge badge-warning"
                        >
                            Edit
                        </Link>
                    </div>
                ) : (
                    <div>
                        <br />
                        <p>Please click on a Record....</p>
                    </div>
                )}
            </div>
        </div>
    );
};
export default RecordsList;