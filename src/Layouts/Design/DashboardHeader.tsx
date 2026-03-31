import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import LanguageDropdown from "../../Design/Components/Dropdowns/LanguageDropdown";
import BasicDropdown from "../../Design/Components/Dropdowns/BasicDropdown";

import EnglishIcon from "/assets/images/Lang-Usa-Flag.svg";
import SpanishIcon from "/assets/images/Lang-Spanish-Flag.svg";
import ChineseIcon from "/assets/images/Lang-Chiense-Flag.svg";
import TagalogIcon from "/assets/images/Lang-Tagalog-Flag.svg";
import VietnameseIcon from "/assets/images/Lang-Vietnamese-Flag.svg";
import FrenchIcon from "/assets/images/Lang-French-Flag.svg";
import KoreanIcon from "/assets/images/Lang-Korean-Flag.svg";
import RussianIcon from "/assets/images/Lang-Russian-Flag.svg";

import { FaUser } from "react-icons/fa";
import CustomIconButton from "../../Design/Components/Buttons/IconButton";

// for language dropdown
// 1. Define your data array
const languages = [
  { code: "en", label: "English", flag: EnglishIcon },
  { code: "es", label: "Spanish", flag: SpanishIcon },
  { code: "zh", label: "Chinese", flag: ChineseIcon },
  { code: "tl", label: "Tagalog", flag: TagalogIcon },
  { code: "vi", label: "Vietnamese", flag: VietnameseIcon },
  { code: "fr", label: "French", flag: FrenchIcon },
  { code: "ko", label: "Korean", flag: KoreanIcon },
  { code: "ru", label: "Russian", flag: RussianIcon },
  // ... add more as needed
];

// 2. Define a handler for when the language changes
const handleLanguageChange = (selectedLang: any) => {
  console.log("Language switched to:", selectedLang.label);
  // This is where you would call i18n.changeLanguage(selectedLang.code)
};
// for language dropdown

// basic menu data ~~~~~~~~~~~~~~~~~~~~
const menuItems = [
  { label: "Logout", value: "logout" },
  {
    label: "Delete",
    value: "delete",
  },
];
// basic menu data ~~~~~~~~~~~~~~~~~~~~

interface DashboardHeaderProps {
  onMenuClick: () => void;
}

const DashboardHeader = ({ onMenuClick }: DashboardHeaderProps) => {
  return (
    <Stack
      direction="row"
      className="dboard-header"
      spacing={2}
      sx={{ justifyContent: "space-between", alignItems: "center" }}
    >
      <Box component="div" className="left-col">
        <h2>Dashboard</h2>
      </Box>
      <Box component="div" className="right-col">
        <Stack direction="row" spacing={2}>
          <LanguageDropdown
            ariaLabel="Select Language"
            options={languages}
            onLanguageChange={handleLanguageChange}
            defaultSelected={languages[0]} // Optional: defaults to English
          />
          <BasicDropdown
            buttonLabel="Common Menu"
            options={menuItems}
            avatarIcon={<FaUser />}
            onSelect={(val) => console.log(`Selected: ${val}`)}
          />
          <CustomIconButton
            ariaLabel="hamburder"
            icon="hamburger"
            buttonColor="blue"
            onClick={onMenuClick}
          />
        </Stack>
      </Box>
    </Stack>
  );
};

export default DashboardHeader;
