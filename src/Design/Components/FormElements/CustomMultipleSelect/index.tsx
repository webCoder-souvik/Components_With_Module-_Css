import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import Chip from "@mui/material/Chip";
import ListItemText from "@mui/material/ListItemText";
import MenuItem from "@mui/material/MenuItem";
import OutlinedInput from "@mui/material/OutlinedInput";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Typography from "@mui/material/Typography";

import styles from "./multipleSelect.module.css";

interface SelectOption {
  value: string | number;
  label: string;
}

interface MultipleSelectProps {
  label: string;
  value: (string | number)[];
  options: SelectOption[];
  id: string;
  placeholder?: string;
  // By using 'any' here, we bypass the internal MUI union type mismatch
  // while still allowing the parent to handle the array.
  onChange: (event: SelectChangeEvent<any>) => void;
  useChips?: boolean;
  showCheckbox?: boolean;
}

const MultipleSelect = ({
  label,
  value,
  options,
  id,
  placeholder,
  onChange,
  useChips = false,
  showCheckbox = false,
}: MultipleSelectProps) => {
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
        id={`select-${id}`}
        multiple
        displayEmpty
        value={value}
        onChange={onChange}
        input={<OutlinedInput />}
        /* Logic: If useChips is true, render Mui Chips. 
                   If false, render comma-separated text. 
                */
        renderValue={(selected) => {
          if ((selected as any[]).length === 0) {
            return <span style={{ color: "#9ca3af" }}>{placeholder}</span>;
          }

          if (useChips) {
            return (
              <Box
                sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}
                className={styles.box}
              >
                {(selected as (string | number)[]).map((val) => (
                  <Chip
                    key={val}
                    label={
                      options.find((opt) => opt.value === val)?.label || val
                    }
                  />
                ))}
              </Box>
            );
          }

          // Map values back to labels for the text display
          return options
            .filter((opt) => (selected as any[]).includes(opt.value))
            .map((opt) => opt.label)
            .join(", ");
        }}
        className={styles.customSelect}
      >
        {/* Placeholder item */}
        <MenuItem value="" disabled>
          <span style={{ color: "#9ca3af" }}>{placeholder}</span>
        </MenuItem>

        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {/* Show Checkbox only if showCheckbox prop is true */}
            {showCheckbox && (
              <Checkbox checked={value.indexOf(option.value) > -1} />
            )}
            <ListItemText primary={option.label} />
          </MenuItem>
        ))}
      </Select>
    </Box>
  );
};

export default MultipleSelect;
