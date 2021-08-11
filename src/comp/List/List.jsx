import React, { useEffect } from "react";
import styles from "./List.module.css";
import { ListItem } from "../ListItem/ListItem";
import { displayOnUpdate } from "../../firebase_requests";

export const List = ({
  showAllMode,
  fetchedTodos,
  setFetchedTodos,
  darkTheme,
}) => {
  const createListItems = (arr) => {
    return arr.map((doc) => {
      return <ListItem doc={doc} key={doc.id} darkTheme={darkTheme} />;
    });
  };

  useEffect(() => {
    const filterFetchedTodos = (fetchedArr) => {
      if (showAllMode) {
        setFetchedTodos(fetchedArr);
      } else {
        setFetchedTodos(fetchedArr.filter((doc) => doc.data().isActive));
      }
    };
    displayOnUpdate(filterFetchedTodos);
  }, [setFetchedTodos, showAllMode]);

  return <ul className={styles.list}>{createListItems(fetchedTodos)}</ul>;
};
