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

  // apiKey: "AIzaSyBJS_xUulmWc1_eQ7ou7Q4MaB4jzy1jsY4",
  // authDomain: "backupchine.firebaseapp.com",
  // databaseURL: "https://backupchine.firebaseio.com",
  // projectId: "backupchine",
  // storageBucket: "backupchine.appspot.com",
  // messagingSenderId: "88026924329",
  // appId: "1:88026924329:web:a8a6bdab26f02d78f46338"
};


// Firebase app
let myFirebase = firebase.initializeApp(config);

// Firebase db
const db = myFirebase.firestore();

export {
  db
}