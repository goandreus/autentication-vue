const firebase = require("firebase/app");
require("firebase/auth");
require("firebase/firestore");
require("firebase/storage");


const config = {
    apiKey: "AIzaSyBHPqm7a0W3iajaJ72wZm1xCzzFPa_7IBE",
    authDomain: "facey-92ec2.firebaseapp.com",
    databaseURL: "https://facey-92ec2.firebaseio.com",
    projectId: "facey-92ec2",
    storageBucket: "gs://facey-92ec2.appspot.com/",
    messagingSenderId: "576630320688",
    appId: "1:576630320688:web:f9fd88094233729b"
  };
  // Initialize Firebase
  firebase.initializeApp(config);

  const db = firebase.firestore();
  const auth = firebase.auth();
  const storage = firebase.storage();

  export {firebase, db, auth, storage}