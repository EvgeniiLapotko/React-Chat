import { messageApi } from "../../api";

const actions = {
    setMessage: (item) => ({
        type: "MESSAGE:SET_ITEMS",
        payload: item,
    }),
    fetchMessage: (dialogId) => (dispatch) => {
        messageApi.getMessage(dialogId).then(({ data }) => {
            dispatch(actions.setMessage(data));
        });
    },
    // fetchMessage: (dialogId) => (dispatch) => {
    //     dialogsApi.getMessage().then(({ data }) => {
    //         const currentDialogs = data.filter((item) => item.id === dialogId);
    //         dispatch(actions.setMessage(currentDialogs));
    //     });
    // },
};

export default actions;
