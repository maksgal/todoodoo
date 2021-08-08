import styles from "./InitialLiContent.module.css";

export const InitialLiContent = ({ doc, clickHandler }) => {
  return (
    <p className={styles.liText} onClick={clickHandler}>
      {doc.data().todo}
    </p>
  );
};
