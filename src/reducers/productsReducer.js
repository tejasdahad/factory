const initialState = {
    drips: [],
    pvcISIR: [],
    pvcISIM: [],
    nonISI: []
};

export default (state = initialState, action) => {
    switch(action.type) {
        case 'GET_DRIPS':
            return {
                ...state,
                drips: action.drips
            };
        case 'GET_PVC_ISIR':
            return {
                ...state,
                pvcISIR: action.pipesISIR
            };
        case 'GET_PVC_ISIM':
            return {
                ...state,
                pvcISIM: action.pipesISIM
            };
        case 'GET_PVC_NonISI':
            return {
                ...state,
                nonISI: action.nonISIPipe
            };
        default:
            return state;
    }
}
