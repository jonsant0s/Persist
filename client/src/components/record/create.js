import { useState } from 'react';
import { useNavigate, NavLink } from 'react-router-dom';
import axios from "axios";

import Modal from "react-bootstrap/esm/Modal";
import Button from "react-bootstrap/esm/Button";
import Alert from "react-bootstrap/esm/Alert";

const Create = () => {
    const navigate = useNavigate();

    const[loading, setLoading] = useState(false);
    const[validated, setValidated] = useState(false);
    const[message, setMessage] = useState("");
    const[recordValues, setRecordValues] = useState({
        title: "",
        
    })
}

export default Create;