import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCQWRlq3Z9eXQWCpfpW0qWZzoqoUHFwFbM",
  authDomain: "todoodoo-73bfa.firebaseapp.com",
  databaseURL:
    "https://todoodoo-73bfa-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "todoodoo-73bfa",
  storageBucket: "todoodoo-73bfa.appspot.com",
  messagingSenderId: "227398699946",
  appId: "1:227398699946:web:b12bb9c80c3a718018b9d3",
  measurementId: "G-22MLVX0KBE",
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
