import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { register } from './AuthHelpers';

import Button from "react-bootstrap/esm/Button";
import Form from "react-bootstrap/esm/Form";

import './Auth.css';

const Register = () => {
    const navigate = useNavigate();

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
        setValidated(false);

        if (form.checkValidity()) {
            e.preventDefault();

            
            console.log(registerValues);

            register(registerValues.username, registerValues.email, registerValues.password)
            .then((response) => {
                setMessage(response.data.message);
                setValidated(true);
                //navigate("/");
                //window.location.reload();
            }).catch((error) => {
                const resMessage =
                    (error.response &&
                        error.response.data &&
                        error.response.data.message) ||
                    error.message ||
                    error.toString();

                setMessage(resMessage);
                setValidated(false);
            });
        }
        
            
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
                <Form.Group className="studentIDGroup">
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
                <Form.Group className="studentIDGroup">
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
                <Form.Group className="studentIDGroup">
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
                    <div className="form-group">
                        <div
                            className={ validated ? "alert alert-success" : "alert alert-danger" }
                            role="alert"
                        >
                            {message}
                        </div>
                    </div>
                )}
            </Form>
        </div>
    )
}

export default Register;