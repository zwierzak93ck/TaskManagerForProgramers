import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var config = {
    apiKey: "AIzaSyBp5bpjuko3sC7Q1eEW673903DdUwwDXN0",
    authDomain: "task-manager-for-programers.firebaseapp.com",
    databaseURL: "https://task-manager-for-programers.firebaseio.com",
    projectId: "task-manager-for-programers",
    storageBucket: "task-manager-for-programers.appspot.com",
    messagingSenderId: "84367429264"
  };
  firebase.initializeApp(config);
  firebase.firestore();

export default firebase;