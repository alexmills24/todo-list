import * as firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";
import "firebase/auth";

// Basic firebase configuration linking web application to database - see firebase documentation

const firebaseConfig = {
  apiKey: "AIzaSyBPpqSEfniuGpD_ueqzio3TjVpthwjqB0w",
  authDomain: "todo-list-db246.firebaseapp.com",
  databaseURL: "https://todo-list-db246.firebaseio.com",
  projectId: "todo-list-db246",
  storageBucket: "todo-list-db246.appspot.com",
  messagingSenderId: "572845719893",
  appId: "1:572845719893:web:2c51779c80844c58"
};

// Initialising firebase
firebase.initializeApp(firebaseConfig);

// Exporting connection to provider for google signin
export const provider = new firebase.auth.GoogleAuthProvider();

// Exporting connection to database as a variable
export const firestore = firebase.firestore();

export const storage = firebase.storage();

export default firebase;