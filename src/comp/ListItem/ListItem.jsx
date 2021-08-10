import styles from "./ListItem.module.css";
import { useState, useEffect, useRef } from "react";
import { InitialLiContent } from "./InitialLiContent/InitialLiContent";
import { EditingForm } from "./EditingForm/EditingForm";
import { LiButtonGroup } from "./LiButtonGroup/LiButtonGroup";
export const ListItem = ({ doc, darkTheme }) => {
  const [editMode, setEditMode] = useState(false);
  const [editedText, setEditedText] = useState(doc.data().todo);
  const enterEditMode = () => {
    setEditMode(true);
  };
  const [liContent, setLiContent] = useState(
    <InitialLiContent doc={doc} clickHandler={enterEditMode} />
  );
  useEffect(() => {
    const liContentHandler = () => {
      editMode
        ? setLiContent(
            <EditingForm
              doc={doc}
              editedText={editedText}
              setEditedText={setEditedText}
              darkTheme={darkTheme}
              editModeOff={(e) => {
                setEditMode(false);
              }}
            />
          )
        : setLiContent(
            <InitialLiContent doc={doc} clickHandler={enterEditMode} />
          );
    };
    return liContentHandler();
  }, [darkTheme, doc, editMode, editedText]);

  const liRef = useRef();
  useEffect(() => {
    const clickOutsideEditorHandler = (e) => {
      if (editMode && !liRef.current.contains(e.target)) setEditMode(false);
    };
    document.addEventListener("mousedown", clickOutsideEditorHandler);
    return () => {
      document.removeEventListener("mousedown", clickOutsideEditorHandler);
    };
  }, [editMode]);

  return (
    <li className={styles.li} ref={liRef}>
      {liContent}
      <LiButtonGroup editMode={editMode} doc={doc} darkTheme={darkTheme} />
    </li>
  );
};
