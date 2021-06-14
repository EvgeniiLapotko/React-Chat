import { axios } from "../core";

const messageApi = {
    getMessage: (id) => axios.get("/messages?dialog=" + id),
};

export default messageApi;
