import { axios } from "../core";

const dialogsApi = {
    getDialogs: () => axios.get("/dialogs"),
    
};

export default dialogsApi;
