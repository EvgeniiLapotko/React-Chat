const initialState = {
    items: [],
    isLoaded: true,
};

const messageReducers = (state = initialState, action) => {
    switch (action.type) {
        case "MESSAGE:SET_ITEMS":
            return {
                ...state,
                items: action.payload,
            };

        case "MESSAGE:SET_LOADED":
            return {
                ...state,
                isLoaded: action.payload,
            };

        default:
            return state;
    }
};

export default messageReducers;
