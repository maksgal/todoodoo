import styles from "./footer.module.css";

import { SwitchElement } from "../UI-components/SwitchElement/SwitchElement";

export const Footer = ({ darkTheme, setDarkTheme }) => {
  const darkThemeToggler = () => {
    setDarkTheme(!darkTheme);
  };
  return (
    <div className={darkTheme ? styles.footer_dark : styles.footer_bright}>
      <div className={styles.content}>
        <div className={styles.textAndLink}>
          <p className={styles.text}>ToDooDoo by</p>
          <a className={styles.link} href="https://github.com/maksgal">
            Maksgal
          </a>
        </div>
        <SwitchElement
          className={styles.switch}
          onChangeHandler={darkThemeToggler}
          switchPos={darkTheme ? true : false}
        />
      </div>
    </div>
  );
};
