import React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabPanel from "@mui/lab/TabPanel";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import Container from "@mui/material/Container";

import styles from "./tab.module.css";

interface TabData {
  label: string;
  value: string;
  content: React.ReactNode;
}

interface CustomTabProps {
  tabs: TabData[]; // Array of tab objects
  variant?: "fullWidth" | "scrollable" | "standard";
  allowMobileButton?: boolean;
  arialabel: string;
  defaultValue?: string; // Optional: set which tab opens first
}

const CustomTab = ({
  tabs,
  variant = "standard", // Default value
  allowMobileButton = false,
  arialabel,
  defaultValue,
}: CustomTabProps) => {
  // Initialize with the first tab's value or a specific default
  const [value, setValue] = React.useState(
    defaultValue || tabs[0]?.value || "1",
  );

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box className={styles.customTab}>
      <TabContext value={value}>
        <Box className={styles.tabList}>
          <TabList
            onChange={handleChange}
            variant={variant}
            allowScrollButtonsMobile={allowMobileButton}
            aria-label={arialabel}
          >
            {/* Map through the tabs array to create the headers */}
            {tabs.map((tab) => (
              <Tab key={tab.value} label={tab.label} value={tab.value} />
            ))}
          </TabList>
        </Box>
        {/* Map through the tabs array to create the panels */}
        {tabs.map((tab) => (
          <TabPanel key={tab.value} value={tab.value}>
            {tab.content}
          </TabPanel>
        ))}
      </TabContext>
    </Box>
  );
};

export default CustomTab;
