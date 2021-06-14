import { dialogsApi } from "../../api";

const actions = {
    getCurrentDialog: (id) => ({
        type: "DIALOGS:SET_CURRENT_DIALOG",
        payload: id,
    }),
    setDialogs: (items) => ({
        type: "DIALOGS:SET_ITEMS",
        payload: items,
    }),
    fetchDialogs: () => (dispatch) => {
        dialogsApi.getDialogs().then(({ data }) => {
            dispatch(actions.setDialogs(data));
        });
    },
};

export default actions;
