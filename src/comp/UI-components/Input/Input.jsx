import styles from "./Input.module.css";
import { TextField } from "@material-ui/core";

export const Input = ({ inputHandler, placeholder, label, value }) => {
  return (
    <TextField
      fullWidth={true}
      className={styles.input}
      id="standard-basic"
      label={label}
      onChange={inputHandler}
      placeholder={placeholder}
      value={value}
    />
  );
};
