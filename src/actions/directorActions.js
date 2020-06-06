import database from '../firebase/firebase';

export const getDirectors = () => async dispatch => {
    return database.ref('directors').once('value').then((snapshot) => {
        const directors = [];
        snapshot.forEach((childSnapshot) => {
            directors.push({
                id: childSnapshot.key,
                ...childSnapshot.val()
            });
        });
        dispatch({
            type: 'GET_DIRECTORS',
            directors
        });
    });
}