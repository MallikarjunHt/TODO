import firebase from "firebase";
const firebaseapp = firebase.initializeApp({
  apiKey: "AIzaSyBLIw2UJA6bYAhLQ4TwkJSw896Zu_V3rmM",
  authDomain: "mk-todo-b64fe.firebaseapp.com",
  projectId: "mk-todo-b64fe",
  storageBucket: "mk-todo-b64fe.appspot.com",
  messagingSenderId: "191638848269",
  appId: "1:191638848269:web:b4f8e360afec4413516644",
  measurementId: "G-ZYJ4GS5BB8"
});

const db = firebaseapp.firestore();

export  default db;


