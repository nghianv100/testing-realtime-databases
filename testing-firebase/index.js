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

const nUpdates = process.argv[2];
let tempRef = firebase.database().ref('temp');


let beginTime = new Date().getTime();
let deltaT = 0;

tempRef.on('value', function (snapshot) {
    let currentTime = new Date().getTime();
    deltaT += (currentTime - beginTime);
    beginTime = currentTime;

    console.log(snapshot.val());
    console.log('Timestamp:', currentTime, '. Ping (ms):', deltaT);
});

for (let i = 1; i <= nUpdates; i++) {
    let newTempRef = tempRef.push();
    newTempRef.set({
        id: i
    });
}
