import http from "../http-common";

const create = date => {
    return http.post("/records/create",data);
}