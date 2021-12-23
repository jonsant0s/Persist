import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { register } from './AuthHelpers';

import Button from "react-bootstrap/esm/Button";
import Form from "react-bootstrap/esm/Form";

import './Auth.css';

const Register = () => {
    const navigate = useNavigate();

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
        e.preventDefault();

        console.log(registerValues);

        register(registerValues.username, registerValues.email, registerValues.password)
        .then(() => {
            navigate("/");
            window.location.reload();
        }).catch((err) => {
            console.log(err);
        });
    }

    return(
        <div className="containerDiv">
            <div className="titleDiv">
                <h2> Create Account </h2>
            </div>
            <Form
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
                    />
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
                    />
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
                    />
                </Form.Group>
                <Button
                    className="submitButton"
                    variant="primary"
                    type="submit"
                    onClick={handleRegister}
                >
                    Sign Up
                </Button>
            </Form>
        </div>
    )
}

export default Register;