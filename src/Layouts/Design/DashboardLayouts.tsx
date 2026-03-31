import React, { useState } from "react";
import DashboardSidebar from "./DashboardSidebar";
import DashboardHeader from "./DashboardHeader";

import "./DashboardLayoutStyle.css";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";

interface DashboardLayoutsProps {
  children: React.ReactNode;
}

const DashboardLayouts = ({ children }: DashboardLayoutsProps) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

  // for toggle button (basically the humburger button will open and close the sidebar)
  // const toggleSidebar = () => {
  //   setIsSidebarOpen(prev => !prev);
  // }

  // const openSidebar = () => setIsSidebarOpen(true);
  // const closeSidebar = () => setIsSidebarOpen(false);

  return (
    <>
      <Box
        component="section"
        className={`dboard-container ${isSidebarOpen ? "open" : ""}`}
      >
        <DashboardSidebar onClose={() => setIsSidebarOpen(false)} />
        <Stack component="div" className="dboard-right-panel">
          <DashboardHeader onMenuClick={() => setIsSidebarOpen(true)} />

          {/* for toggle button */}
          {/* <DashboardHeader onMenuClick={toggleSidebar}/> */}
          {children}
        </Stack>
      </Box>
    </>
  );
};

export default DashboardLayouts;
