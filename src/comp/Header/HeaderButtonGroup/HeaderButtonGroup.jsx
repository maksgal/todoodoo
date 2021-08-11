import AddIcon from "@material-ui/icons/Add";
import VisibilityIcon from "@material-ui/icons/Visibility";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import styles from "./HeaderButtonGroup.module.css";
import { addToDB } from "../../../firebase_requests";
import { ButtonElement } from "../../UI-components/ButtonElement/ButtonElement";

export const HeaderButtonGroup = ({
  todoText,
  setTodoText,
  toggleShowMode,
  showAllMode,
  darkTheme,
}) => {
  const addTodo = (e) => {
    e.preventDefault();
    if (todoText) {
      console.log(todoText);
      addToDB(todoText);
    }
    setTodoText("");
  };
  const showButtonHandler = (e) => {
    e.preventDefault();
    toggleShowMode();
  };
  return (
    <div className={styles.buttonGroup}>
      <ButtonElement
        darkColorClass={darkTheme ? "button_dark_primary button" : "button"}
        clickHandler={addTodo}
        color="primary"
        buttonText={<AddIcon />}
      />
      <ButtonElement
        darkColorClass={darkTheme ? "button_dark_secondary button" : "button"}
        clickHandler={showButtonHandler}
        color="primary"
        buttonText={showAllMode ? <VisibilityOffIcon /> : <VisibilityIcon />}
      />
    </div>
  );
};
