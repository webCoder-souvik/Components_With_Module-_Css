import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Typography from "@mui/material/Typography";

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
}: MultipleSelectProps) => {
  return (
    <Box component="div">
      <Typography component="label" htmlFor={`select-${id}`}>
        {label}
      </Typography>
      <Select
        displayEmpty
        labelId={`select-label-${id}`}
        id={`select-${id}`}
        multiple
        value={value}
        onChange={onChange}
        // Optional: Provides a way to render the selected items nicely
        renderValue={(selected) => (selected as (string | number)[]).join(", ")}
      >
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

export default MultipleSelect;
