import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC7HoPtlruB5afZop1u7xo26NXpkQWdgp8",
  authDomain: "tinder-clone-2b3f9.firebaseapp.com",
  projectId: "tinder-clone-2b3f9",
  storageBucket: "tinder-clone-2b3f9.appspot.com",
  messagingSenderId: "103249647238",
  appId: "1:103249647238:web:1c556af845c4670844a307",
  measurementId: "G-72BPWG16VF",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const database = firebaseApp.firestore();

export default database;
