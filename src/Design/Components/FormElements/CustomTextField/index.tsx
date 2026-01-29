import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

import styles from "./textField.module.css";

// Define the specific types allowed
type HTMLInputType =
  | "date"
  | "datetime-local"
  | "email"
  | "file"
  | "hidden"
  | "number"
  | "password"
  | "search"
  | "text"
  | "tel"
  | "url";

interface CustomtextFieldProps {
  arialabel: string;
  id: string;
  variant: "outlined" | "filled" | "standard";
  type: HTMLInputType;
  label?: string;
  required?: boolean;
  disabled?: boolean;
  placeholder?: string;
}

const CustomtextField = ({
  arialabel,
  id,
  label,
  variant,
  type = "text", // Defaulting to "text"
  placeholder,
  required,
  disabled,
}: CustomtextFieldProps) => {
  return (
    <>
      <div className={styles.inputField}>
        <Typography
          component="label"
          htmlFor={id}
          className={styles.customLabel}
        >
          {label}
        </Typography>
        <TextField
          className={styles.customInput}
          id={id}
          variant={variant}
          type={type}
          placeholder={placeholder}
          required={required}
          disabled={disabled}
          slotProps={{
            htmlInput: {
              "aria-label": arialabel,
            },
            inputLabel: {
              // Keeps the label from overlapping the date/time icons
              shrink:
                type === "date" || type === "datetime-local" ? true : undefined,
            },
          }}
        />
      </div>
    </>
  );
};

export default CustomtextField;
