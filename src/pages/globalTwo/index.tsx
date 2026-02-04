import Container from "@mui/material/Container";
import CustomAccordion from "../../Design/Components/CustomAccordion";
import React from "react";
import Box from "@mui/material/Box";

const GlobalTwo = () => {
  // We store the ID of the open panel. 'false' means all are closed.
  const [expanded, setExpanded] = React.useState<string | false>("panel1");

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <>
      <Container maxWidth="lg">
        <Box component="section">
          <h2>Custom Accordion Component</h2>
          <CustomAccordion
            title="This is my first accordion"
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
          >
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Asperiores esse quo iste qui, voluptatibus quam. Delectus fuga,
              aperiam praesentium molestias fugiat ducimus qui aspernatur.
              Excepturi!
            </p>
          </CustomAccordion>
          <CustomAccordion
            title="This is my second accordion"
            expanded={expanded === "panel2"}
            onChange={handleChange("panel2")}
          >
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Asperiores esse quo iste qui, voluptatibus quam. Delectus fuga,
              aperiam praesentium molestias fugiat ducimus qui aspernatur.
              Excepturi!
            </p>
          </CustomAccordion>
          <CustomAccordion
            title="This is my second accordion"
            expanded={expanded === "panel3"}
            onChange={handleChange("panel3")}
          >
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Asperiores esse quo iste qui, voluptatibus quam. Delectus fuga,
              aperiam praesentium molestias fugiat ducimus qui aspernatur.
              Excepturi!
            </p>
          </CustomAccordion>
        </Box>
      </Container>
    </>
  );
};

export default GlobalTwo;
