import axios from "axios";

const API_URL = "http://localhost:5000/";

export const register = (username, email, password) => {
    return axios.post(API_URL + "register", {
        username,
        email,
        password,
    });
};

export const login = (username, password) => {
    return axios.post(API_URL + "login", {
        username,
        password,
    })
    .then((response) => {
        if (response.data.accessToken){
            localStorage.setItem("user", JSON.stringify(response.data));
        }

        return response.data;
    });
};

export const logout = () => {
    localStorage.removeItem("user");
};

const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem("user"));
}
