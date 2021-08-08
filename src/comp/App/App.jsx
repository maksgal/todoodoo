import React, { useState } from "react";
import styles from "./App.module.css";
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import { List } from "../List/List";
export const App = () => {
  const [fetchedTodos, setFetchedTodos] = useState([]);
  const [showAllMode, setShowAllMode] = useState(false);
  const toggleShowMode = (e) => {
    e.preventDefault();
    setShowAllMode(!showAllMode);
  };
  return (
    <div className={styles.App}>
      <Header
        showButtonHandler={toggleShowMode}
        showAllMode={showAllMode}
        fetchedTodos={fetchedTodos}
      />
      <List
        showAllMode={showAllMode}
        fetchedTodos={fetchedTodos}
        setFetchedTodos={setFetchedTodos}
      />
      <Footer />
    </div>
  );
};
