"use client";
import { useState } from "react";
import ProfileIcon from "/assets/images/Dropdown-User-Icon.svg";
import { FaChevronDown } from "react-icons/fa6";

import styles from "./profileDropdown.module.css";

interface ProfileDropdownProps {
  arialable: string;
}

const ProfileDropdown = ({ arialable }: ProfileDropdownProps) => {
  const [open, setOpen] = useState(false);
  const profileOptions = [{ label: "Logout" }, { label: "Delete Account" }];

  return (
    <div className={styles.profile_wrapper} aria-label={arialable}>
      <button className={styles.profile_button} onClick={() => setOpen(!open)}>
        <img
          src={ProfileIcon}
          width={22}
          height={22}
          alt="profile"
          className={styles.profile_icon}
        />
        <span className={styles.profile_label}>User 125</span>
        <span className={`${styles.profile_arrow} ${open ? styles.up : ""}`}>
          <FaChevronDown />
        </span>
      </button>

      {/* <Button onClick={() => setOpen(!open)}>
        <img
          src={ProfileIcon}
          width={22}
          height={22}
          alt="profile"
          className={styles.profile_icon}
        />
        <span className={styles.profile_label}>User 125</span>
        <span className={`${styles.profile_arrow} ${open ? styles.up : ""}`}>
          <FaChevronDown />
        </span>
      </Button> */}

      {open && (
        <div className={styles.profile_dropdown}>
          {profileOptions.map((opt, index) => (
            <div key={index} className={styles.profile_option}>
              {opt.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProfileDropdown;
