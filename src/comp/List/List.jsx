import React, { useEffect } from "react";
import styles from "./List.module.css";
import { ListItem } from "../ListItem/ListItem";
import { db } from "../../firebase_config";

export const List = ({ showAllMode, fetchedTodos, setFetchedTodos }) => {
  const createListItems = (arr) => {
    return arr.map((doc) => {
      return <ListItem doc={doc} key={doc.id} />;
    });
  };
  const fetchAndShowTodos = () => {
    db.collection("todos")
      .orderBy("added")
      .onSnapshot((querySnapshot) => {
        if (showAllMode) {
          setFetchedTodos(createListItems(querySnapshot.docs));
        } else {
          setFetchedTodos(
            createListItems(
              querySnapshot.docs.filter((doc) => doc.data().isActive)
            )
          );
        }
      });
  };
  useEffect(() => {
    fetchAndShowTodos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showAllMode]);

  return <ul className={styles.list}>{fetchedTodos}</ul>;
};
