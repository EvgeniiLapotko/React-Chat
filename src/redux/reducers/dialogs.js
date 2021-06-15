const initialState = {
    items: [],
    currentDialog: [],
    isLoaded: true,
};

const dialogsReducers = (state = initialState, action) => {
    switch (action.type) {
        case "DIALOGS:SET_ITEMS":
            return {
                ...state,
                items: action.payload,
            };
        case "DIALOGS:SET_CURRENT_DIALOG":
            return {
                ...state,
                currentDialog: action.payload,
            };
        case "DIALOGS:SET_LOADED":
            return {
                ...state,
                isLoaded: action.payload,
            };
        default:
            return state;
    }
};

export default dialogsReducers;
