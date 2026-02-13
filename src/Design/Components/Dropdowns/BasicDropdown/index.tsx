import React, { ReactNode } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import CustomAvatar from "../../CustomAvatar";
import { FaChevronDown } from "react-icons/fa6";

import styles from "./basicDropdown.module.css";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

// 1. Define the structure for individual menu items
export interface DropdownOption {
  icon?: ReactNode;
  label: string;
  value: string | number;
  onClick?: (value: string | number) => void;
}

// 2. Define the Props for the main component
interface BasicDropdownProps {
  buttonLabel: string;
  options: DropdownOption[];
  avatarSrc?: string; // Optional avatar
  avatarLabel?: string;
  onSelect?: (value: string | number) => void; // Global select handler
}

const BasicDropdown = ({
  buttonLabel,
  options,
  avatarSrc,
  avatarLabel,
  onSelect,
}: BasicDropdownProps) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleItemClick = (option: DropdownOption) => {
    // Execute item-specific logic
    if (option.onClick) option.onClick(option.value);

    // Execute global logic
    if (onSelect) onSelect(option.value);

    handleClose();
  };

  return (
    <div className={styles.basicMenu}>
      {(avatarSrc || avatarLabel) && (
        <CustomAvatar
          variant="circular"
          src={avatarSrc}
          size={60}
          alt="user-avatar"
        >
          {!avatarSrc && avatarLabel}
        </CustomAvatar>
      )}

      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        endIcon={<FaChevronDown />}
        // endIcon={open ? <IoIosArrowUp /> : <IoIosArrowDown />}
      >
        {buttonLabel}
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        slotProps={{
          list: {
            "aria-labelledby": "basic-button",
          },
        }}
      >
        {options.map((option) => (
          <MenuItem key={option.value} onClick={() => handleItemClick(option)}>
            {option.icon && <ListItemIcon>{option.icon}</ListItemIcon>}
            <ListItemText>{option.label}</ListItemText>
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};

export default BasicDropdown;
