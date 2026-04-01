import dayjs, { Dayjs } from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import styles from "./datePicker.module.css";

interface CustomDatePickerProps {
  label: string;
  value: Dayjs | null;
  onChange: (newValue: Dayjs | null) => void;
  disabled?: boolean;
  minDate?: Dayjs;
  maxDate?: Dayjs;
}

const CustomDatePicker = ({
  label,
  value,
  onChange,
  disabled = false,
  minDate,
  maxDate,
}: CustomDatePickerProps) => {
  return (
    <Box component="div" className={styles.datePicker}>
      <Typography component="label">{label}</Typography>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          //   label={label}
          value={value}
          onChange={onChange}
          disabled={disabled}
          minDate={minDate}
          maxDate={maxDate}
        />
      </LocalizationProvider>
    </Box>
  );
};

export default CustomDatePicker;
