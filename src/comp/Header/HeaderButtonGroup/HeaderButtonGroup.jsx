import AddIcon from "@material-ui/icons/Add";
import VisibilityIcon from "@material-ui/icons/Visibility";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import styles from "./HeaderButtonGroup.module.css";
import firebase from "firebase";
import { db } from "../../../firebase_config";
import { ButtonElement } from "../../UI-components/ButtonElement/ButtonElement";

export const HeaderButtonGroup = ({
  todoText,
  setTodoText,
  showButtonHandler,
  showAllMode,
  fetchedTodos,
}) => {
  const addTodo = (e) => {
    e.preventDefault();
    if (todoText) {
      console.log(todoText);
      db.collection("todos").add({
        isActive: true,
        todo: todoText,
        added: firebase.firestore.FieldValue.serverTimestamp(),
      });
    }
    setTodoText("");
  };
  return (
    <div className={styles.buttonGroup}>
      <ButtonElement
        clickHandler={addTodo}
        color="primary"
        buttonText={<AddIcon />}
      />
      <ButtonElement
        clickHandler={showButtonHandler}
        color="primary"
        buttonText={showAllMode ? <VisibilityOffIcon /> : <VisibilityIcon />}
      />
    </div>
  );
};