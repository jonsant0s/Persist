import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { register } from './AuthHelpers';

import Button from "react-bootstrap/esm/Button";
import Form from "react-bootstrap/esm/Form";

import './Auth.css';

const Register = () => {
    const navigate = useNavigate();

    const [successful, setSuccessful] = useState(false);
    const [validated, setValidated] = useState(false);
    const [message, setMessage] = useState("");
    const [registerValues, setRegister] = useState({
        username: "",
        email: "",
        password: ""
    });

    const handleInputChange = e => {
        e.persist();
        let prev = {...registerValues};
        prev[e.target.id] = e.target.value;
        
        setRegister(prev);
    };

    const handleRegister = e => {
        const form = e.currentTarget;

        setMessage("");
        setSuccessful(false);

        if (form.checkValidity()) {
            e.preventDefault();

            
            console.log(registerValues);

            register(registerValues.username, registerValues.email, registerValues.password)
            .then((response) => {
                setMessage(response.data.message);
                setSuccessful(true);
                //navigate("/");
                //window.location.reload();
            },
            (error) => {
                const resMessage =
                    (error.response &&
                        error.response.data &&
                        error.response.data.message) ||
                    error.message ||
                    error.toString();

                setMessage(resMessage);
                setSuccessful(false);
            });
        }

        setValidated(true);
        console.log(successful);
        
            
    }

    return(
        <div className="containerDiv">
            <div className="titleDiv">
                <h2> Create Account </h2>
            </div>
            <Form
                noValidate
                validated={validated}
                onSubmit={handleRegister}
                className="form"
            >
            <Form.Group className="usernameGroup">
                <div>
                    <Form.Label className="idLabel">
                        Username
                    </Form.Label>
                </div>
                <Form.Control
                    type="username"
                    id="username"
                    value={registerValues.username}
                    onChange={handleInputChange}
                    required
                />
                <Form.Control.Feedback type="invalid">
                    Please enter username.
                </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="emailGroup">
                <div>
                    <Form.Label className="idLabel">
                        Email
                    </Form.Label>
                </div>
                <Form.Control
                    type="email"
                    id="email"
                    value={registerValues.email}
                    onChange={handleInputChange}
                    required
                />
                <Form.Control.Feedback type="invalid">
                    Please enter email.
                </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="passwordGroup">
                <div>
                    <Form.Label className="idLabel">
                        Password
                    </Form.Label>
                </div>
                <Form.Control
                    type="password"
                    id="password"
                    value={registerValues.password}
                    onChange={handleInputChange}
                    required
                />
                <Form.Control.Feedback type="invalid">
                    Please enter password.
                </Form.Control.Feedback>
            </Form.Group>
            <Button
                className="submitButton"
                variant="primary"
                type="submit"
                onClick={handleRegister}
            >
                Sign Up
            </Button>

            {message && (
                <Form.Group className="messageGroup" >
                    <div
                        className={ successful ? "alert alert-success" : "alert alert-danger" }
                        role="alert"
                    >
                        {message}
                    </div>
                </Form.Group>
            )}
            </Form>
        </div>
    )
}

export default Register;