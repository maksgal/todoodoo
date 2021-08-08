import { useState } from "react";
import styles from "./EditingForm.module.css";
import SaveIcon from "@material-ui/icons/Save";
import CloseIcon from "@material-ui/icons/Close";
import { Input } from "../../UI-components/Input/Input";
import { ButtonElement } from "../../UI-components/ButtonElement/ButtonElement";
import { db } from "../../../firebase_config";
export const EditingForm = ({ doc, editModeOff }) => {
  const [editedText, setEditedText] = useState("");
  const editTodo = async (e) => {
    e.preventDefault();
    console.log(editedText);
    if (editedText) {
      await db.collection("todos").doc(doc.id).update({
        todo: editedText,
      });
    }
    editModeOff();
  };
  return (
    <form className={styles.editingForm}>
      <Input
        className={styles.input}
        todoText={editedText}
        placeholder={doc.data().todo}
        inputHandler={(e) => setEditedText(e.target.value)}
      />
      <div className={styles.listItem__buttons}>
        <ButtonElement clickHandler={editTodo} buttonText={<SaveIcon />} />
        <ButtonElement clickHandler={editModeOff} buttonText={<CloseIcon />} />
      </div>
    </form>
  );
};
