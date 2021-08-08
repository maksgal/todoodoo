import { useState } from "react";
import styles from "./Header.module.css";
import { Input } from "../UI-components/Input/Input";
import { HeaderButtonGroup } from "./HeaderButtonGroup/HeaderButtonGroup";

export const Header = ({ showButtonHandler, showAllMode, fetchedTodos }) => {
  const [todoText, setTodoText] = useState("");

  const headerInputHandler = (e) => {
    setTodoText(e.target.value);
  };

  return (
    <form className={styles.form}>
      <Input
        inputHandler={headerInputHandler}
        todoText={todoText}
        label="Add todo"
        value={todoText}
      />
      <HeaderButtonGroup
        setTodoText={setTodoText}
        todoText={todoText}
        showButtonHandler={showButtonHandler}
        showAllMode={showAllMode}
        fetchedTodos={fetchedTodos}
      />
    </form>
  );
};
