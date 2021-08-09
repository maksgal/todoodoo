import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "todoodoo-73bfa.firebaseapp.com",
  databaseURL:
    "https://todoodoo-73bfa-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "todoodoo-73bfa",
  storageBucket: "todoodoo-73bfa.appspot.com",
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: "G-22MLVX0KBE",
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
