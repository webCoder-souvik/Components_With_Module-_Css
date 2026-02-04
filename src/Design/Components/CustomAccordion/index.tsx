"use client";
import React, { useId } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import { FaChevronDown } from "react-icons/fa6";

import styles from "./accordion.module.css";

interface CustomAccordionProps {
  title: string;
  children: React.ReactNode;
  // defaultExpanded?: boolean;
  expanded: boolean; // Tells the accordion if it should be open
  onChange: (event: React.SyntheticEvent, isExpanded: boolean) => void; // Tells parent to toggle
}

const CustomAccordion = ({
  title,
  children,
  // defaultExpanded = false,
  expanded,
  onChange,
}: CustomAccordionProps) => {
  // Generate a unique ID automatically for accessibility
  const id = useId();
  // const [isExpanded, setIsExpanded] = React.useState(defaultExpanded);

  // const handleToggle = (event: React.SyntheticEvent, newExpanded: boolean) => {
  //     setIsExpanded(newExpanded);
  // };

  return (
    <>
      <Accordion
        // expanded={expanded === 'panel1'}
        // onChange={handleChange('panel1')}
        expanded={expanded}
        onChange={onChange}
        className={styles.customAccordion}
      >
        <AccordionSummary
          expandIcon={<FaChevronDown />}
          aria-controls={`${id}-content`}
          id={`${id}-header`}
        >
          <Typography component="span">{title}</Typography>
        </AccordionSummary>
        <AccordionDetails>{children}</AccordionDetails>
      </Accordion>
    </>
  );
};

export default CustomAccordion;
