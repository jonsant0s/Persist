import { useState } from 'react';
import { useNavigate, NavLink } from 'react-router-dom';

import Form from 'react-bootstrap/esm/Form';
import Button from 'react-bootstrap/esm/Button';

import { login } from './AuthHelpers';

import './Auth.css';

const Login = () => {
    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);
    const [validated, setValidated] = useState(false);
    const [message, setMessage] = useState("");
    const [loginValues, setLoginValues] = useState({
        username: "",
        password: ""
    });

    const handleInputChange = e => {
        e.persist();
        let prev = {...loginValues};
        prev[e.target.id] = e.target.value;
        
        setLoginValues(prev);
    };

    const handleRegister = e => {
        const form = e.currentTarget;

        setMessage("");
        setLoading(true);

        if (form.checkValidity()) {
            e.preventDefault();

            console.log(loginValues);

            login(loginValues.username, loginValues.password)
            .then(() => {
                navigate("/");
                window.location.reload();
            }).catch(
            (error) => {
                const resMessage =
                    (error.response &&
                        error.response.data &&
                        error.response.data.message) ||
                    error.message ||
                    error.toString();

                setMessage(resMessage);
                setLoading(false);
            });
        }

        setValidated(true);
        console.log(loading);
        
            
    }


    return (
        <div className="containerDiv">
            <div className="titleDiv">
                <h2> Login </h2>
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
                    value={loginValues.username}
                    onChange={handleInputChange}
                    required
                />
                <Form.Control.Feedback type="invalid">
                    Please enter username.
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
                    value={loginValues.password}
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
            {loading && (
                <span className="spinner-border spinner-border-sm"></span>
            )}
                Login
            </Button>
            <p className="accountParagraph"> Don't have an account? </p>
            <NavLink to="/register">
                Sign Up Here
            </NavLink>
            {message && (
                <Form.Group className="messageGroup" >
                    <div
                        className={ loading ? "alert alert-success" : "alert alert-danger" }
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

export default Login;