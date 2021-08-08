import UndoIcon from "@material-ui/icons/Undo";
import DoneIcon from "@material-ui/icons/Done";
import DeleteIcon from "@material-ui/icons/Delete";
import styles from "./LiButtonGroup.module.css";
import { db } from "../../../firebase_config";
import { ButtonElement } from "../../UI-components/ButtonElement/ButtonElement";

export const LiButtonGroup = ({ editMode, doc }) => {
  const toggleDone = (e) => {
    e.preventDefault();
    db.collection("todos").doc(doc.id).update({
      isActive: !doc.data().isActive,
    });
  };
  const deleteTodo = () => {
    db.collection("todos").doc(doc.id).delete();
  };
  return (
    <div className={editMode ? styles.hidden : styles.visible}>
      <ButtonElement
        color={doc.data().isActive ? "primary" : "secondary"}
        buttonText={doc.data().isActive ? <DoneIcon /> : <UndoIcon />}
        clickHandler={toggleDone}
      />
      <ButtonElement
        color="secondary"
        buttonText={<DeleteIcon />}
        clickHandler={deleteTodo}
      />
    </div>
  );
};
