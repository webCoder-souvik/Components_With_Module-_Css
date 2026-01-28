import Switch from "@mui/material/Switch";
import styles from "./switchButton.module.css";

interface SwitchButtonProps {
  defaultChecked?: boolean;
  arialabel: string;
}

const SwitchButton = ({
  defaultChecked = false,
  arialabel,
}: SwitchButtonProps) => {
  return (
    <Switch
      defaultChecked={defaultChecked}
      className={styles.customSwitch}
      aria-label={arialabel}
    />
  );
};

export default SwitchButton;
