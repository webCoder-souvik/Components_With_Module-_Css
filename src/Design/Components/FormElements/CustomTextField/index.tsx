import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

import styles from "./textField.module.css";
import { useState } from "react";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";

import { MdOutlineVisibility } from "react-icons/md";
import { MdOutlineVisibilityOff } from "react-icons/md";

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
  ariaLabel: string;
  id: string;
  variant: "outlined" | "filled" | "standard";
  type: HTMLInputType;
  label?: string;
  required?: boolean;
  disabled?: boolean;
  placeholder?: string;
  className?: string;
}

const CustomtextField = ({
  ariaLabel,
  id,
  label,
  variant,
  type = "text", // Defaulting to "text"
  placeholder,
  required,
  disabled,
  className = "",
}: CustomtextFieldProps) => {
  // 1. State to manage password visibility
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  // 2. Logic to handle the "type" behavior
  // If the prop is "password", we toggle between "text" and "password" based on state
  const actualType = type === "password" && showPassword ? "text" : type;

  // This maps variant="outlined" to styles.outlined
  const variantClass = styles[variant];

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
          // className={styles.customInput}
          id={id}
          variant="outlined"
          type={actualType}
          placeholder={placeholder}
          required={required}
          disabled={disabled}
          // Combine base style, variant style, and any external className
          className={`${styles.baseInput} ${variantClass} ${className}`.trim()}
          slotProps={{
            htmlInput: {
              "aria-label": ariaLabel,
            },
            inputLabel: {
              // Keeps the label from overlapping the date/time icons
              shrink:
                type === "date" || type === "datetime-local" ? true : undefined,
            },
            input: {
              endAdornment:
                type === "password" ? (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={(e) => e.preventDefault()} // Prevents focus loss
                      edge="end"
                    >
                      {showPassword ? (
                        <MdOutlineVisibilityOff />
                      ) : (
                        <MdOutlineVisibility />
                      )}
                    </IconButton>
                  </InputAdornment>
                ) : null,
            },
          }}
        />
      </div>
    </>
  );
};

export default CustomtextField;
