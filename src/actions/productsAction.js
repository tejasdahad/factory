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

export const getAgriR = () => async dispatch =>{
    return database.ref('agriproductsR').once('value').then((snapshot) => {
        const agriRoopam = [];
        snapshot.forEach((childSnapshot) => {
            agriRoopam.push({
                id: childSnapshot.key,
                ...childSnapshot.val()
            });
        });
        dispatch({
            type: 'GET_AGRI_ROOPAM',
            agriRoopam
        });
    });
}

export const getAgriRG4 = () => async dispatch =>{
    return database.ref('agriproductsRG').once('value').then((snapshot) => {
        const agriRoopamG4 = [];
        snapshot.forEach((childSnapshot) => {
            agriRoopamG4.push({
                id: childSnapshot.key,
                ...childSnapshot.val()
            });
        });
        dispatch({
            type: 'GET_AGRI_ROOPAM_GOLD_4',
            agriRoopamG4
        });
    });
}

export const getAgriRG6 = () => async dispatch =>{
    return database.ref('agriproductsRGP').once('value').then((snapshot) => {
        const agriRoopamG6 = [];
        snapshot.forEach((childSnapshot) => {
            agriRoopamG6.push({
                id: childSnapshot.key,
                ...childSnapshot.val()
            });
        });
        dispatch({
            type: 'GET_AGRI_ROOPAM_GOLD_6',
            agriRoopamG6
        });
    });
}