import { db } from "./firebase_config";
import firebase from "firebase/app";

const onUpdate = (func) => {
  db.collection("todos").orderBy("added").onSnapshot(func);
};

export const firebaseUpdateTodo = (todoToUpdate, editedText) => {
  db.collection("todos").doc(todoToUpdate.id).update({
    todo: editedText,
  });
};

export const fetchFromDB = (displayResults) => {
  onUpdate((querySnapshot) => {
    displayResults(querySnapshot.docs);
  });
};

export const addToDB = (todoText) => {
  db.collection("todos").add({
    isActive: true,
    todo: todoText,
    //get the time added:
    added: firebase.firestore.FieldValue.serverTimestamp(),
  });
};
