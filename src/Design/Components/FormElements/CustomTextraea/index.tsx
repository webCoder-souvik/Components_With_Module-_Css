import Box from "@mui/material/Box";
import TextareaAutosize, {
  TextareaAutosizeProps,
} from "@mui/material/TextareaAutosize";
import Typography from "@mui/material/Typography";

import styles from "./textarea.module.css";

interface CustomTextareaProps extends TextareaAutosizeProps {
  label?: string;
  // ariaLabel?: string;
  // placeholder?: string;
  // minRows: number;
  // maxRows: number;
}

const CustomTextarea = ({
  label,
  // ariaLabel,
  // placeholder,
  // minRows,
  // maxRows,
  ...props
}: CustomTextareaProps) => {
  return (
    <>
      <Box component="div" className={styles.textarea}>
        {label && <Typography component="label">{label}</Typography>}

        <TextareaAutosize
          // aria-label={ariaLabel}
          // placeholder={placeholder}
          // minRows={minRows}
          // maxRows={maxRows}
          {...props}
        />
      </Box>
    </>
  );
};

export default CustomTextarea;
