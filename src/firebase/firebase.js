import * as firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyCxoQFqb2pjBEeu3vzdyUT14UnqB0pHQD8",
    authDomain: "factory-7885e.firebaseapp.com",
    databaseURL: "https://factory-7885e.firebaseio.com",
    projectId: "factory-7885e",
    storageBucket: "factory-7885e.appspot.com",
    messagingSenderId: "143562971184",
    appId: "1:143562971184:web:709538e8ed6e27e83435f5"
};

firebase.initializeApp(firebaseConfig);
const database = firebase.database();

export { firebase, database as default };