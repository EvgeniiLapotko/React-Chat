import { messageApi } from "../../api";

const actions = {
    setMessage: (item) => ({
        type: "MESSAGE:SET_ITEMS",
        payload: item,
    }),
    getLoaded: (bool) => ({
        type: "MESSAGE:SET_LOADED",
        payload: bool,
    }),
    fetchMessage: (dialogId) => (dispatch) => {
        dispatch(actions.getLoaded(true));
        messageApi.getMessage(dialogId).then(({ data }) => {
            dispatch(actions.setMessage(data));
            dispatch(actions.getLoaded(false));
        });
    },
};

export default actions;
