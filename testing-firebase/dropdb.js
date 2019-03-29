let firebase = require('firebase');

let config = {
    apiKey: "AIzaSyChFrazTzObWeHvfB_423cGE59-U4dZKeU",
    authDomain: "testing-firebase-62bb2.firebaseapp.com",
    databaseURL: "https://testing-firebase-62bb2.firebaseio.com",
    projectId: "testing-firebase-62bb2",
    storageBucket: "testing-firebase-62bb2.appspot.com",
    messagingSenderId: "16771554559"
};

firebase.initializeApp(config);

let tempRef = firebase.database().ref('temp');

tempRef.remove()
    .then(function () { })
    .catch(function () { })