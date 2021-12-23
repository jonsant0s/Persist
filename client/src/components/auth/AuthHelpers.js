import axios from "axios";

const API_URL = "http://localhost:5000/";

export const register = (username, email, password) => {
    return axios.post(API_URL + "register", {
        username,
        email,
        password,
    })
    .then((response) => {
        console.log(response.data);
        return response.data;
    });
};
