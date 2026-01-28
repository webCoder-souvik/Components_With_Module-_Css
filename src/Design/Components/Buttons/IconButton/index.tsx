import IconButton from "@mui/material/IconButton";
import { AiOutlineEye } from "react-icons/ai";
import { RiUserLine } from "react-icons/ri";
import { BiEditAlt } from "react-icons/bi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaArrowLeft } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
import { FaMicrophone } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

import styles from "./iconButton.module.css";

type IconType =
  | "eye"
  | "user"
  | "edit"
  | "delete"
  | "leftArrow"
  | "enter"
  | "microphone"
  | "breadcrumb"
  | "close";

const icons = {
  eye: <AiOutlineEye />,
  user: <RiUserLine />,
  edit: <BiEditAlt />,
  delete: <RiDeleteBin6Line />,
  leftArrow: <FaArrowLeft />,
  enter: <FaTelegramPlane />,
  microphone: <FaMicrophone />,
  breadcrumb: <GiHamburgerMenu />,
  close: <IoClose />,
};

interface CustomIconButtonProps {
  arialabel: string;
  icon: IconType;
  buttonColor?: "cyan" | "blue" | "red" | "grey" | "white";
  onClick?: () => void;
  disabled?: boolean;
}

const CustomIconButton = ({
  arialabel,
  icon,
  buttonColor,
  disabled = false,
  onClick,
}: CustomIconButtonProps) => {
  return (
    <IconButton
      aria-label={arialabel}
      onClick={onClick}
      // className={
      //   buttonColor === "cyan"
      //     ? "custom-icon--button button-cyan"
      //     : buttonColor === "blue"
      //       ? "custom-icon--button button-blue"
      //       : buttonColor === "red"
      //         ? "custom-icon--button button-red"
      //         : buttonColor === "grey"
      //           ? "custom-icon--button button-grey"
      //           : buttonColor === "white"
      //             ? "custom-icon--button button-white"
      //             : "custom-icon--button"
      // }

      className={`${styles.iconButton} ${
        buttonColor ? styles[buttonColor] : ""
      }`}
      disabled={disabled}
    >
      {icons[icon]}
    </IconButton>
  );
};

export default CustomIconButton;
