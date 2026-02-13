import Switch from "@mui/material/Switch";
import styles from "./switchButton.module.css";

interface SwitchButtonProps {
  defaultChecked?: boolean;
  ariaLabel: string;
}

const SwitchButton = ({
  defaultChecked = false,
  ariaLabel,
}: SwitchButtonProps) => {
  return (
    <Switch
      defaultChecked={defaultChecked}
      className={styles.customSwitch}
      aria-label={ariaLabel}
    />
  );
};

export default SwitchButton;
