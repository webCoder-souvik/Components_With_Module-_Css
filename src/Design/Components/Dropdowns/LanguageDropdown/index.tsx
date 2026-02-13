"use client";
import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { FaChevronDown } from "react-icons/fa6";
// import { IoIosArrowUp } from "react-icons/io";
// import { IoIosArrowDown } from "react-icons/io";

import styles from "./languageDropdown.module.css";

interface LanguageOption {
  code: string;
  label: string;
  flag: string; // URL or imported icon path
}

interface LanguageDropdownProps {
  ariaLabel: string;
  options: LanguageOption[];
  onLanguageChange?: (language: LanguageOption) => void;
  defaultSelected?: LanguageOption;
}

const LanguageDropdown = ({
  ariaLabel,
  options,
  onLanguageChange,
  defaultSelected,
}: LanguageDropdownProps) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [selected, setSelected] = useState<LanguageOption>(
    defaultSelected || options[0],
  );

  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSelect = (option: LanguageOption) => {
    setSelected(option);
    if (onLanguageChange) onLanguageChange(option);
    handleClose();
  };

  return (
    <Box component="div" className={styles.languageDropdown}>
      <Button
        variant="outlined"
        onClick={handleClick}
        aria-label={ariaLabel}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        endIcon={<FaChevronDown />}
        // endIcon={open ? <IoIosArrowUp /> : <IoIosArrowDown />}
      >
        <img src={selected.flag} alt={selected.label} />
        <span className="labelHolder">{selected.label}</span>
      </Button>

      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        className={styles.dropdownMenu}
        slotProps={{
          list: {
            "aria-labelledby": "Language",
          },
        }}
      >
        {options.map((opt) => (
          <MenuItem
            key={opt.code}
            selected={opt.code === selected.code}
            onClick={() => handleSelect(opt)}
          >
            <ListItemIcon>
              <img src={opt.flag} alt={opt.label} />
            </ListItemIcon>
            <ListItemText primary={opt.label} />
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
};

export default LanguageDropdown;
