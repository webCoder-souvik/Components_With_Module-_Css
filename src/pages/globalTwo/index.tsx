import Container from "@mui/material/Container";
import CustomAccordion from "../../Design/Components/CustomAccordion";
import React from "react";
import Box from "@mui/material/Box";
import CustomTab from "../../Design/Components/CustomTab";

const GlobalTwo = () => {
  // for accordion
  // We store the ID of the open panel. 'false' means all are closed.
  const [expanded, setExpanded] = React.useState<string | false>("panel1");

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };
  // for accordion

  // for tab
  const tabData = [
    { label: "Code", value: "1", content: <p>User Profile Settings</p> },
    { label: "Issues", value: "2", content: <p>Password and 2FA</p> },
    {
      label: "Pull Requests",
      value: "3",
      content: <p>Invoices and Credit Cards</p>,
    },
    { label: "Actions", value: "4", content: <p>Invoices and Credit Cards</p> },
    {
      label: "Projects",
      value: "5",
      content: <p>Invoices and Credit Cards</p>,
    },
    {
      label: "Security",
      value: "6",
      content: <p>Invoices and Credit Cards</p>,
    },
    {
      label: "Insights",
      value: "7",
      content: <p>Invoices and Credit Cards</p>,
    },
    {
      label: "Settings",
      value: "8",
      content: <p>Invoices and Credit Cards</p>,
    },
    { label: "Private", value: "9", content: <p>Invoices and Credit Cards</p> },
    { label: "Watch", value: "10", content: <p>Invoices and Credit Cards</p> },
  ];
  // for tab

  return (
    <>
      <Container maxWidth="lg">
        <Box component="section" sx={{ mb: 4 }}>
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
        <Box component="section">
          <h2>Custom Tab Component</h2>
          <CustomTab
            tabs={tabData}
            variant="scrollable"
            allowMobileButton={true}
            arialabel="all page related tabs"
          />
        </Box>
      </Container>
    </>
  );
};

export default GlobalTwo;
