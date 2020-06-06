const initialState = {
    directors: []
};

export default (state = initialState, action) => {
    switch(action.type) {
        case 'GET_DIRECTORS':
            return {
                ...state,
                directors: action.directors
            };
        default:
            return state;
    }
}