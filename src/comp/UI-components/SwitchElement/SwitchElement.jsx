import styles from "./SwitchElement.module.css";
import Switch from "@material-ui/core/Switch";
import NightsStayIcon from "@material-ui/icons/NightsStay";
import Brightness5Icon from "@material-ui/icons/Brightness5";
export const SwitchElement = ({ onChangeHandler, switchPos }) => {
  return (
    <Switch
      className={styles.Switch}
      onChange={onChangeHandler}
      checkedIcon={<NightsStayIcon className={styles.icon} />}
      icon={<Brightness5Icon className={styles.icon} />}
      color="default"
      checked={switchPos ? true : false}
    />
  );
};
