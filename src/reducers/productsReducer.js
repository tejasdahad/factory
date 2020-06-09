const initialState = {
    drips: [],
    pvcISIR: [],
    pvcISIM: [],
    nonISI: [],
    agriRoopam: [],
    agriRoopamG4: [],
    agriRoopamG6: []
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
        case 'GET_AGRI_ROOPAM':
            return {
                ...state,
                agriRoopam: action.agriRoopam
            };
        case 'GET_AGRI_ROOPAM_GOLD_4':
            return {
                ...state,
                agriRoopamG4: action.agriRoopamG4
            };
        case 'GET_AGRI_ROOPAM_GOLD_6':
            return {
                ...state,
                agriRoopamG6: action.agriRoopamG6
            };
        default:
            return state;
    }
}
