import database from '../firebase/firebase';

export const getDrips = () => async dispatch => {
    return database.ref('drips').once('value').then((snapshot) => {
        const drips = [];
        snapshot.forEach((childSnapshot) => {
            drips.push({
                id: childSnapshot.key,
                ...childSnapshot.val()
            });
        });
        dispatch({
            type: 'GET_DRIPS',
            drips
        });
    });
}

export const getPvcPipesISIR = () => async dispatch => {
    return database.ref('pipesISIR').once('value').then((snapshot) => {
        const pipesISIR = [];
        snapshot.forEach((childSnapshot) => {
            pipesISIR.push({
                id: childSnapshot.key,
                ...childSnapshot.val()
            });
        });
        dispatch({
            type: 'GET_PVC_ISIR',
            pipesISIR
        });
    });
}

export const getPvcPipesISIM = () => async dispatch => {
    return database.ref('pipesISIM').once('value').then((snapshot) => {
        const pipesISIM = [];
        snapshot.forEach((childSnapshot) => {
            pipesISIM.push({
                id: childSnapshot.key,
                ...childSnapshot.val()
            });
        });
        dispatch({
            type: 'GET_PVC_ISIM',
            pipesISIM
        });
    });
}

export const getNonISI = () => async dispatch =>{
    return database.ref('nonISIpipe').once('value').then((snapshot) => {
        const nonISIPipe = [];
        snapshot.forEach((childSnapshot) => {
            nonISIPipe.push({
                id: childSnapshot.key,
                ...childSnapshot.val()
            });
        });
        dispatch({
            type: 'GET_PVC_NonISI',
            nonISIPipe
        });
    });
}