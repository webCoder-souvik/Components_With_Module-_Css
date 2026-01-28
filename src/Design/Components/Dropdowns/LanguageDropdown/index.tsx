"use client";
import { useState } from "react";
import EnglishIcon from "/assets/images/Lang-Usa-Flag.svg";
import SpanishIcon from "/assets/images/Lang-Spanish-Flag.svg";
import ChineseIcon from "/assets/images/Lang-Chiense-Flag.svg";
import TagalogIcon from "/assets/images/Lang-Tagalog-Flag.svg";
import VietnameseIcon from "/assets/images/Lang-Vietnamese-Flag.svg";
import FrenchIcon from "/assets/images/Lang-French-Flag.svg";
import KoreanIcon from "/assets/images/Lang-Korean-Flag.svg";
import RussianIcon from "/assets/images/Lang-Russian-Flag.svg";
import { FaChevronDown } from "react-icons/fa6";

import styles from "./languageDropdown.module.css";

const LanguageDropdown = () => {
  const languageOptions = [
    { code: "en", label: "English", flag: EnglishIcon },
    { code: "es", label: "Spanish", flag: SpanishIcon },
    { code: "zh", label: "Chinese", flag: ChineseIcon },
    { code: "fil", label: "Tagalog", flag: TagalogIcon },
    { code: "vi", label: "Vietnamese", flag: VietnameseIcon },
    { code: "fr", label: "French", flag: FrenchIcon },
    { code: "ko", label: "Korean", flag: KoreanIcon },
    { code: "ru", label: "Russian", flag: RussianIcon },
  ];

  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(languageOptions[0]);

  return (
    <div className={styles.langWrapper}>
      <button className={styles.langButton} onClick={() => setOpen(!open)}>
        <img
          src={selected.flag}
          width={24}
          height={24}
          alt={selected.label}
          className={styles.langFlagImg}
        />

        <span className={styles.langLabel}>{selected.label}</span>

        <span className={`${styles.langArrow} ${open ? styles.up : ""}`}>
          <FaChevronDown />
        </span>
      </button>

      {open && (
        <div className={styles.langDropdown}>
          {languageOptions.map((opt) => (
            <div
              key={opt.code}
              className={styles.langOption}
              onClick={() => {
                setSelected(opt);
                setOpen(false);
              }}
            >
              <img
                src={opt.flag}
                width={24}
                height={24}
                alt={opt.label}
                className={styles.langFlagImg}
              />

              <span>{opt.label}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageDropdown;
