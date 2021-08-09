import styles from "./EditingForm.module.css";
import SaveIcon from "@material-ui/icons/Save";
import CloseIcon from "@material-ui/icons/Close";
import { firebaseUpdateTodo } from "../../../firebase_requests";
import { Input } from "../../UI-components/Input/Input";
import { ButtonElement } from "../../UI-components/ButtonElement/ButtonElement";

export const EditingForm = ({
  doc,
  editedText,
  setEditedText,
  editModeOff,
}) => {
  const editTodo = async (e) => {
    e.preventDefault();
    if (editedText) {
      await firebaseUpdateTodo(doc, editedText);
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
        value={editedText}
      />
      <div className={styles.listItem__buttons}>
        <ButtonElement clickHandler={editTodo} buttonText={<SaveIcon />} />
        <ButtonElement clickHandler={editModeOff} buttonText={<CloseIcon />} />
      </div>
    </form>
  );
};
