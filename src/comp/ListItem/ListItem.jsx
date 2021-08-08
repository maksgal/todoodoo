import styles from "./ListItem.module.css";
import { useState, useEffect, useRef } from "react";
import { InitialLiContent } from "./InitialLiContent/InitialLiContent";
import { EditingForm } from "./EditingForm/EditingForm";
import { LiButtonGroup } from "./LiButtonGroup/LiButtonGroup";
export const ListItem = ({ doc }) => {
  const [editMode, setEditMode] = useState(false);
  const enterEditMode = () => {
    setEditMode(true);
  };
  const [liContent, setLiContent] = useState(
    <InitialLiContent doc={doc} clickHandler={enterEditMode} />
  );
  const liContentHandler = () => {
    editMode
      ? setLiContent(
          <EditingForm
            doc={doc}
            editModeOff={(e) => {
              setEditMode(false);
            }}
          />
        )
      : setLiContent(
          <InitialLiContent doc={doc} clickHandler={enterEditMode} />
        );
  };
  useEffect(() => {
    return liContentHandler();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [editMode]);

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
      <LiButtonGroup editMode={editMode} doc={doc} />
    </li>
  );
};
