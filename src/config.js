import firebase from "firebase";
const firebaseapp = firebase.initializeApp(${{secret.FIREBASE_CONFIG}});

const db = firebaseapp.firestore();

export  default db;
