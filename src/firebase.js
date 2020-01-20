import firebase from 'firebase'
import 'firebase/firestore'


// Använda vår egen iD,Key etc sålänge vi har rätt firebase koder.

// Initialize Firebase
let config = {
  apiKey: "AIzaSyCHDfNli3DKUJCDqOwkT0dPrk3yN3raw-I",
  authDomain: "receptia.firebaseapp.com",
  databaseURL: "https://receptia.firebaseio.com",
  projectId: "receptia-2451f",
  storageBucket: "receptia.appspot.com",
  messagingSenderId: "211648703151"
};


// Firebase app
let myFirebase = firebase.initializeApp(config);

// Firebase db
const db = myFirebase.firestore();

export {
  db
}