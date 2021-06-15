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
    getLoaded: (bool) => ({
        type: "DIALOGS:SET_LOADED",
        payload: bool,
    }),
    fetchDialogs: () => (dispatch) => {
        dispatch(actions.getLoaded(true));
        dialogsApi.getDialogs().then(({ data }) => {
            dispatch(actions.setDialogs(data));
            dispatch(actions.getLoaded(false));
        });
    },
};

export default actions;
