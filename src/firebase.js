const firebase = require("firebase/app");
require("firebase/auth");
require("firebase/firestore");
require("firebase/storage");


const config = {
    apiKey: "AIzaSyCNfO1NU4lpTj7OannnLxZ1ndKFIh6rRyk",
    authDomain: "facey-71f1c.firebaseapp.com",
    databaseURL: "https://facey-71f1c.firebaseio.com",
    projectId: "facey-71f1c",
    storageBucket: "facey-71f1c.appspot.com",
    messagingSenderId: "857163560610",
    appId: "1:857163560610:web:ebdc4fa69b7443ea"
  };
  // Initialize Firebase
  firebase.initializeApp(config);

  const db = firebase.firestore();
  const auth = firebase.auth();
  const storage = firebase.storage();

  export {firebase, db, auth, storage}