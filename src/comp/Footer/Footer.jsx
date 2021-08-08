import styles from "./footer.module.css";
export const Footer = () => {
  return (
    <div className={styles.footer}>
      <p className={styles.text}>ToDooDoo by:</p>
      <a className={styles.link} href="https://github.com/maksgal">
        Maksgal
      </a>
    </div>
  );
};
