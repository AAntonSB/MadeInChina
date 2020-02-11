import firebase from 'firebase'
import 'firebase/firestore'


// Initialize Firebase
let config = {
  apiKey: "AIzaSyC9Wdtu3A7b21IkSd96l_7z83Fi534oBwE",
  authDomain: "madeinchina-9bc04.firebaseapp.com",
  databaseURL: "https://madeinchina-9bc04.firebaseio.com",
  projectId: "madeinchina-9bc04",
  storageBucket: "madeinchina-9bc04.appspot.com",
  messagingSenderId: "574199508551",
  appId: "1:574199508551:web:39216c202cd910aab38b62"
};

// Firebase app
let myFirebase = firebase.initializeApp(config);

// Firebase db
const db = myFirebase.firestore();

export {
  db
}