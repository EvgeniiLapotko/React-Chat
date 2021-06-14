const initialState = {
    items: [],
};

const messageReducers = (state = initialState, action) => {
    switch (action.type) {
        case "MESSAGE:SET_ITEMS":
            return {
                ...state,
                items: action.payload,
            };

        default:
            return state;
    }
};

export default messageReducers;
