import { useState } from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Stack from "@mui/material/Stack";
import { Link } from "react-router-dom";

import DashbaordIcon from "/assets/images/Dashboard-Icon.svg";
import FormIcon from "/assets/images/Dashboard-Form-Icon.svg";
import UserIcon from "/assets/images/Dashboard-UserManagement-Icon.svg";
import TicketIcon from "/assets/images/Dashboard-Ticket-Icon.svg";
import AuditIcon from "/assets/images/Dashboard-AuditLog-Icon.svg";
import CustomIconButton from "../../Design/Components/Buttons/IconButton";

interface DashboardSidebarProps {
  onClose: () => void;
}

const DashboardSidebar = ({ onClose }: DashboardSidebarProps) => {
  const [isDrawerOpen, setisDrawerOpen] = useState<boolean>(false);

  const toggleDrawer = () => {
    setisDrawerOpen((prev) => !prev);
  };

  return (
    <Stack
      component="div"
      className={`sidebar-panel ${isDrawerOpen ? "drawer-collapse" : ""}`}
      direction="column"
      sx={{ gap: 3 }}
    >
      <Stack component="div" direction="row" className="sidebar-header">
        <h1>Dashboard Logo</h1>
        <CustomIconButton
          ariaLabel="close"
          icon="close"
          buttonColor="blue"
          onClick={onClose}
        />
      </Stack>
      <Stack component="div" className="sidebar-body" sx={{ gap: 3 }}>
        <Box component="div" className="sidebar-nav">
          <List>
            <ListItem>
              <Link to="/" className="active">
                <Box component="span" className="icon">
                  <img src={DashbaordIcon} alt="icon" />
                </Box>
                <Box component="span" className="title">
                  Dashboard
                </Box>
              </Link>
            </ListItem>
            <ListItem>
              <Link to="/">
                <Box component="span" className="icon">
                  <img src={FormIcon} alt="icon" />
                </Box>
                <Box component="span" className="title">
                  Form List
                </Box>
              </Link>
            </ListItem>
            <ListItem>
              <Link to="/">
                <Box component="span" className="icon">
                  <img src={UserIcon} alt="icon" />
                </Box>
                <Box component="span" className="title">
                  User Management
                </Box>
              </Link>
            </ListItem>
            <ListItem>
              <Link to="/">
                <Box component="span" className="icon">
                  <img src={TicketIcon} alt="icon" />
                </Box>
                <Box component="span" className="title">
                  All TIckests
                </Box>
              </Link>
            </ListItem>
            <ListItem>
              <Link to="/">
                <Box component="span" className="icon">
                  <img src={AuditIcon} alt="icon" />
                </Box>
                <Box component="span" className="title">
                  Audit Log
                </Box>
              </Link>
            </ListItem>
          </List>
        </Box>
        <Box component="div" className="sidebar-footer">
          <List>
            <ListItem>
              <Link to="/">Privacy Policy</Link>
            </ListItem>
            <ListItem>
              <Link to="/">Terms of Service</Link>
            </ListItem>
          </List>
          {/* toggle button */}
          <Box className="collapse-button">
            <CustomIconButton
              ariaLabel="collapse"
              icon="leftArrow"
              buttonColor="blue"
              onClick={toggleDrawer}
            />
          </Box>
          {/* toggle button */}
        </Box>
      </Stack>
    </Stack>
  );
};

export default DashboardSidebar;
