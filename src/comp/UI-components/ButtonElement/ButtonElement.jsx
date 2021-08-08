import { Button } from "@material-ui/core";
const styles = require("./ButtonElement.module.css");
export const ButtonElement = ({ color, clickHandler, buttonText }) => {
  return (
    <Button
      className={styles.button}
      type="submit"
      onClick={clickHandler}
      variant="contained"
      color={color}
      size="small"
    >
      {buttonText}
    </Button>
  );
};
