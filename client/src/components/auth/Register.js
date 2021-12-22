import React, { useState, useRef } from 'react';


const Register = () => {
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: ""
    })

    const handleChange = e => {
        const { name, value } = e.target;
        setUser({
            ...user,
            [name]: value
        })
    }

    const handleRegister = () => {
        
    }
}