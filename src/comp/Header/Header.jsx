import { useState } from "react";
import styles from "./Header.module.css";
import { Input } from "../UI-components/Input/Input";
import { HeaderButtonGroup } from "./HeaderButtonGroup/HeaderButtonGroup";

export const Header = ({ toggleShowMode, showAllMode, darkTheme }) => {
  const [todoText, setTodoText] = useState("");

  const headerInputHandler = (e) => {
    setTodoText(e.target.value);
  };

  return (
    <form className={styles.form}>
      <Input
        darkTheme={darkTheme}
        inputHandler={headerInputHandler}
        label="Add todo here"
        value={todoText}
      />
      <HeaderButtonGroup
        darkTheme={darkTheme}
        setTodoText={setTodoText}
        todoText={todoText}
        toggleShowMode={toggleShowMode}
        showAllMode={showAllMode}
      />
    </form>
  );
};
