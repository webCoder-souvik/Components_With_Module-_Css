import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import CustomAccordion from "../../Design/Components/CustomAccordion";
import CustomTab from "../../Design/Components/CustomTab";
import CustomAvatar from "../../Design/Components/CustomAvatar";

import avatar_image from "/assets/images/avatar-image-one.jpg";
import Grid from "@mui/material/Grid";
import CustomDropdwon from "../../Design/Components/Dropdowns/CustomDropdown";
import CustomTable, { Column } from "../../Design/Components/CustomTable";
import CommonButton from "../../Design/Components/Buttons/CommonButton";
import StatusItem from "../../Design/Components/StatusItem";
import Stack from "@mui/material/Stack";
import SwitchButton from "../../Design/Components/Buttons/SwitchButton";

const GlobalTwo = () => {
  // for accordion ~~~~~~~~~~~~~~~~~~~~
  // We store the ID of the open panel. 'false' means all are closed.
  const [expanded, setExpanded] = React.useState<string | false>("panel1");

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };
  // for accordion ~~~~~~~~~~~~~~~~~~~~

  // for tab ~~~~~~~~~~~~~~~~~~~~
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
  // for tab ~~~~~~~~~~~~~~~~~~~~

  // for table data ~~~~~~~~~~~~~~~~~~~~
  const COLUMNS: Column[] = [
    { id: "name", label: "Dessert", minWidth: 170 },
    { id: "calories", label: "Calories", align: "center", minWidth: 100 },
    { id: "fat", label: "Fat", align: "center", minWidth: 100 },
    { id: "carbs", label: "Carbs", align: "center", minWidth: 100 },
    { id: "protein", label: "Protein", align: "center", minWidth: 100 },
    {
      id: "actions",
      label: "Actions",
      align: "center",
      // Added 'row' here so you can actually use the data
      format: (_, row) => (
        <>
          {row.rowType === "yoghurt" && (
            <CommonButton
              label="View More"
              onClick={() => console.log("Clicked row:", row.id)}
              arialabel="action-button"
              variant="contained"
            />
          )}
          {row.rowType === "icecream" && (
            <CommonButton
              label="Learn More"
              onClick={() => console.log("Clicked row:", row.id)}
              arialabel="action-button"
              variant="contained"
            />
          )}
          {row.rowType === "eclair" && (
            <CommonButton
              label="Open"
              onClick={() => console.log("Clicked row:", row.id)}
              arialabel="action-button"
              variant="contained"
            />
          )}
          {row.rowType === "cupcake" && (
            <CommonButton
              label="Switch"
              onClick={() => console.log("Clicked row:", row.id)}
              arialabel="action-button"
              variant="contained"
            />
          )}
        </>
      ),
    },
    {
      id: "options",
      label: "Options",
      align: "center",
      format: (_, row) => (
        <>
          {row.rowType === "yoghurt" && (
            <Stack direction={"row"} spacing={2}>
              <StatusItem
                arialabel=""
                label="Open"
                statusVariation="progress"
              />
              <StatusItem
                arialabel=""
                label="Success"
                statusVariation="success"
              />
              <StatusItem arialabel="" label="Fail" statusVariation="faliure" />
            </Stack>
          )}
          {row.rowType === "icecream" && (
            <Stack direction={"row"} spacing={2}>
              <StatusItem arialabel="" label="Fail" statusVariation="faliure" />
              <StatusItem
                arialabel=""
                label="Open"
                statusVariation="progress"
              />
              <StatusItem
                arialabel=""
                label="Success"
                statusVariation="success"
              />
            </Stack>
          )}
          {row.rowType === "eclair" && (
            <Stack direction={"row"} spacing={2}>
              <StatusItem
                arialabel=""
                label="Disable"
                statusVariation="disable"
              />
              <StatusItem
                arialabel=""
                label="Success"
                statusVariation="success"
              />
            </Stack>
          )}
          {row.rowType === "cupcake" && (
            <Stack direction={"row"} spacing={2}>
              <SwitchButton arialabel="swith on" />
              <SwitchButton arialabel="swith off" defaultChecked />
            </Stack>
          )}
        </>
      ),
    },
  ];

  // You don't actually need to include actions: '' and options: '' in your DATA array if they are purely UI columns. The table will look for the id in the row, find nothing, and then run the format function anyway.
  const DATA = [
    {
      id: 1,
      rowType: "yoghurt",
      name: "Frozen yoghurt",
      calories: "IN",
      fat: "6",
      carbs: 24,
      protein: 3.9,
    },
    {
      id: 2,
      rowType: "icecream",
      name: "Ice cream sandwich",
      calories: "CN",
      fat: "6",
      carbs: 24,
      protein: 3.9,
    },
    {
      id: 3,
      rowType: "eclair",
      name: "Eclair",
      calories: "CN",
      fat: "6",
      carbs: 24,
      protein: 3.9,
    },
    {
      id: 4,
      rowType: "cupcake",
      name: "Cupcake",
      calories: "CN",
      fat: "6",
      carbs: 24,
      protein: 3.9,
    },
    {
      id: 5,
      rowType: "gingerbread",
      name: "Gingerbread",
      calories: "CN",
      fat: "6",
      carbs: 24,
      protein: 3.9,
    },
  ];
  // for table data ~~~~~~~~~~~~~~~~~~~~

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
        <Box component="section" sx={{ mb: 4 }}>
          <h2>Custom Avatar</h2>
          <Grid container spacing={2}>
            <CustomAvatar
              variant="circular"
              src={avatar_image}
              size={60}
              alt="avatar"
            />

            <CustomAvatar variant="circular" size={60}>
              S
            </CustomAvatar>

            <CustomDropdwon />
          </Grid>
        </Box>

        <Box component="section" sx={{ mb: 4 }}>
          <h2>Custom Table Component</h2>
          <CustomTable columns={COLUMNS} rows={DATA} maxHeight={450} />
        </Box>
      </Container>
    </>
  );
};

export default GlobalTwo;
