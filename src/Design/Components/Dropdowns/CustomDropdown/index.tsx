import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import CustomAvatar from "../../CustomAvatar";
import avatar_image from "/assets/images/avatar-image-one.jpg";
import CommonButton from "../../Buttons/CommonButton";
import React from "react";

import styles from "./dropdown.module.css";

const CustomDropdwon = () => {
  const [open, setOpen] = React.useState(false);

  // Toggle function
  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <>
      <Box className={`${styles.fixed_box_style} ${open ? "is-open" : ""}`}>
        <Stack direction={"row"}>
          <CustomAvatar src={avatar_image} />
          <CommonButton
            arialabel="dropdown"
            label="Select an option"
            variant="contained"
            onClick={handleToggle}
          />
        </Stack>
      </Box>
    </>
  );
};

export default CustomDropdwon;
