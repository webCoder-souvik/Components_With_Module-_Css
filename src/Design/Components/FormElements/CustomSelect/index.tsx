"use client";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Typography from "@mui/material/Typography";
import styles from "./select.module.css";

// 1. Define the shape of an option
interface SelectOption {
  value: string | number;
  label: string;
}

// 2. Define the Props for CustomSelect
interface CustomSelectProps {
  label: string;
  value: string | number;
  options: SelectOption[];
  id: string;
  placeholder?: string;
  onChange: (event: SelectChangeEvent) => void;
}

const CustomSelect = ({
  label,
  value,
  options,
  id,
  placeholder,
  onChange,
}: CustomSelectProps) => {
  return (
    <Box component="div" className={styles.customSelectBox}>
      <Typography
        component="label"
        htmlFor={`select-${id}`}
        className={styles.customLabel}
      >
        {label}
      </Typography>
      <Select
        // labelId="demo-simple-select-label"
        // id="demo-simple-select"
        // value={age}
        // label="Age"
        // onChange={handleChange}

        displayEmpty
        labelId={`select-label-${id}`}
        id={`select-${id}`}
        value={value as string} // MUI Select expects a string for the value prop in many cases
        // label={label}
        onChange={onChange}
        className={styles.customSelect}
      >
        {/* <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem> */}

        {/* Placeholder */}
        <MenuItem value="" disabled>
          <span style={{ color: "#9ca3af" }}>{placeholder}</span>
        </MenuItem>

        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </Box>
  );
};

export default CustomSelect;
