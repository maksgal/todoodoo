import React, { useState } from "react";
import styles from "./App.module.css";
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import { List } from "../List/List";
export const App = () => {
  const [darkTheme, setDarkTheme] = useState(getTime());
  const [fetchedTodos, setFetchedTodos] = useState([]);
  const [showAllMode, setShowAllMode] = useState(false);
  const toggleShowAllmode = () => {
    setShowAllMode(!showAllMode);
  };

  function getTime() {
    const hourNow = new Date().getHours();
    return hourNow > 17 || hourNow < 7 ? true : false;
  }

  return (
    <div className={darkTheme ? styles.App_dark : styles.App_bright}>
      <div className={styles.top}>
        <Header
          darkTheme={darkTheme}
          toggleShowMode={toggleShowAllmode}
          showAllMode={showAllMode}
        />
        <List
          showAllMode={showAllMode}
          fetchedTodos={fetchedTodos}
          setFetchedTodos={setFetchedTodos}
          darkTheme={darkTheme}
        />
      </div>
      <Footer darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
    </div>
  );
};
