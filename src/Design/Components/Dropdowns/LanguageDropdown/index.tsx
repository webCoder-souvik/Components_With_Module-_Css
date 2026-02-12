"use client";
import Box from "@mui/material/Box";
// import { useState } from "react";
// import EnglishIcon from "/assets/images/Lang-Usa-Flag.svg";
// import SpanishIcon from "/assets/images/Lang-Spanish-Flag.svg";
// import ChineseIcon from "/assets/images/Lang-Chiense-Flag.svg";
// import TagalogIcon from "/assets/images/Lang-Tagalog-Flag.svg";
// import VietnameseIcon from "/assets/images/Lang-Vietnamese-Flag.svg";
// import FrenchIcon from "/assets/images/Lang-French-Flag.svg";
// import KoreanIcon from "/assets/images/Lang-Korean-Flag.svg";
// import RussianIcon from "/assets/images/Lang-Russian-Flag.svg";
// import { FaChevronDown } from "react-icons/fa6";

import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { useState } from "react";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";

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
    <Box component="div">
      <Button
        variant="outlined"
        onClick={handleClick}
        aria-label={ariaLabel}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        endIcon={open ? <IoIosArrowUp /> : <IoIosArrowDown />}
        sx={{
          textTransform: "none",
          color: "text.primary",
          borderColor: "divider",
        }}
      >
        <img
          src={selected.flag}
          alt=""
          style={{ width: 20, marginRight: 8, borderRadius: "2px" }}
        />
        {selected.label}
      </Button>

      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        // MenuListProps={{
        //   'aria-labelledby': 'language-button',
        //   role: 'listbox',
        // }}

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
              <img src={opt.flag} alt={opt.label} style={{ width: 20 }} />
            </ListItemIcon>
            <ListItemText primary={opt.label} />
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
};

export default LanguageDropdown;
