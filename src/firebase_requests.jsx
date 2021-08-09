import { db } from "./firebase_config";

export const firebaseUpdater = (func) => {
  db.collection("todos").orderBy("added").onSnapshot(func);
};

export const firebaseUpdateTodo = (doc, editedText) => {
  db.collection("todos").doc(doc.id).update({
    todo: editedText,
  });
};
