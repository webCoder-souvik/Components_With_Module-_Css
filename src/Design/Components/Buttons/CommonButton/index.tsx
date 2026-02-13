import Button from "@mui/material/Button";
import styles from "./commonButton.module.css";

interface CustomButtonProps {
  ariaLabel: string;
  label: string;
  variant: "contained" | "outlined" | "text";
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  disabled?: boolean;
  onClick?: () => void;
}

const CommonButton = ({
  ariaLabel,
  label,
  variant,
  startIcon,
  endIcon,
  disabled = false,
  onClick,
}: CustomButtonProps) => {
  return (
    <Button
      aria-label={ariaLabel}
      variant={variant}
      startIcon={startIcon}
      endIcon={endIcon}
      disabled={disabled}
      onClick={onClick}
      className={styles.buttonPrimary}
    >
      {label}
    </Button>
  );
};

export default CommonButton;
