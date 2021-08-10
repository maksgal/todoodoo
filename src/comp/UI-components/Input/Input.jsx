import styles from "./Input.module.css";
import { TextField } from "@material-ui/core";

export const Input = ({
  darkTheme,
  inputHandler,
  defaultValue,
  label,
  value,
}) => {
  return (
    <TextField
      defaultValue={defaultValue}
      color={darkTheme ? "secondary" : "primary"}
      fullWidth={true}
      className={styles.input}
      id="standard-basic"
      label={label}
      onChange={inputHandler}
      InputProps={{ disableUnderline: true }}
      value={value}
    />
  );
};
