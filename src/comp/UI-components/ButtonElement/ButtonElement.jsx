import { Button } from "@material-ui/core";
//Easier to handle the dark mode with normal import
import "./ButtonElement.css";
export const ButtonElement = ({
  color,
  clickHandler,
  buttonText,
  darkColorClass,
}) => {
  return (
    <Button
      type="submit"
      onClick={clickHandler}
      variant="contained"
      color={color}
      className={darkColorClass}
      size="small"
    >
      {buttonText}
    </Button>
  );
};
