import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";

interface CustomCheckOptionProps {
  type: "checkbox" | "radio";
  label: string;
  checked?: boolean;
  name?: string;
  value?: any;
  disabled?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const CustomCheckOption = ({
  type,
  label,
  value,
  checked,
  name,
  onChange,
  disabled = false,
}: CustomCheckOptionProps) => {
  // 1. Determine which control to render
  const Control = type === "radio" ? Radio : Checkbox;

  return (
    <FormControlLabel
      label={label}
      disabled={disabled}
      control={
        <Control
          name={name}
          value={value}
          checked={checked}
          onChange={onChange}
        />
      }
    />
  );
};

export default CustomCheckOption;
