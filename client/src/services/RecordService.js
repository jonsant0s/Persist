import http from "../http-common.js";

const getAll = () => {
    return http.get("/records");
};

const get = id => {
    return http.get(`/records/${id}`);
};

const create = data => {
    return http.post("/records/create",data);
};

const update = (id, data) => {
    return http.put(`/records/${id}`,data);
}

const remove = id => {
    return http.delete(`/records/${id}`);
};

const findByTitle = title => {
    return http.get(`/records?title=${title}`);
}


const RecordService = {
    getAll,
    get,
    create,
    update,
    remove,
    findByTitle
};

export default RecordService;