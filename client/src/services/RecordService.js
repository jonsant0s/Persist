import http from "../http-common.js";

const create = data => {
    return http.post("/records/create",data);
};

const RecordService = {
    create
};

export default RecordService;