import UndoIcon from "@material-ui/icons/Undo";
import DoneIcon from "@material-ui/icons/Done";
import DeleteIcon from "@material-ui/icons/Delete";
import styles from "./LiButtonGroup.module.css";
import { db } from "../../../firebase_config";
import { ButtonElement } from "../../UI-components/ButtonElement/ButtonElement";

export const LiButtonGroup = ({ editMode, doc, darkTheme }) => {
  const toggleDone = (e) => {
    e.preventDefault();
    db.collection("todos").doc(doc.id).update({
      isActive: !doc.data().isActive,
    });
  };
  const deleteTodo = () => {
    db.collection("todos").doc(doc.id).delete();
  };

  const doneButtonDarkThemeHandler = () => {
    return !darkTheme
      ? "button"
      : darkTheme && doc.data().isActive
      ? "button_dark_primary button"
      : "button_dark_secondary button";
  };

  return (
    <div className={editMode ? styles.hidden : styles.visible}>
      <ButtonElement
        color={doc.data().isActive ? "primary" : "secondary"}
        darkColorClass={doneButtonDarkThemeHandler()}
        buttonText={doc.data().isActive ? <DoneIcon /> : <UndoIcon />}
        clickHandler={toggleDone}
      />
      <ButtonElement
        color="secondary"
        darkColorClass={darkTheme ? "button_dark_secondary button" : "button"}
        buttonText={<DeleteIcon />}
        clickHandler={deleteTodo}
      />
    </div>
  );
};
