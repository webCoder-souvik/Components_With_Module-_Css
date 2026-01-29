import CommonButton from "../../Design/Components/Buttons/CommonButton";
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import CustomIconButton from "../../Design/Components/Buttons/IconButton";
import SwitchButton from "../../Design/Components/Buttons/SwitchButton";
import LanguageDropdown from "../../Design/Components/Dropdowns/LanguageDropdown";
import ProfileDropdown from "../../Design/Components/Dropdowns/ProfileDropdown";
import StatusItem from "../../Design/Components/StatusItem";
import CustomtextField from "../../Design/Components/FormElements/CustomTextField";

import Grid from "@mui/material/Grid";

const Global = () => {
  return (
    <>
      <div className="container">
        {/* ~~~~~~~~~~ common button components ~~~~~~~~~~ */}
        <div>
          <h2>Common Button Components</h2>
          <CommonButton
            arialabel="button"
            label="Contained Button"
            variant="contained"
          />
          <CommonButton
            arialabel="button"
            label="Outlined Button"
            variant="outlined"
          />
          <CommonButton arialabel="button" label="Text Button" variant="text" />
          <CommonButton
            arialabel="button"
            label="Text Button"
            variant="contained"
            startIcon={<FaArrowLeft />}
          />
          <CommonButton
            arialabel="button"
            label="Text Button"
            variant="outlined"
            startIcon={<FaArrowRight />}
          />
        </div>
        {/* ~~~~~~~~~~ common button components ~~~~~~~~~~ */}

        {/* ~~~~~~~~~~ icon button components ~~~~~~~~~~ */}
        <div>
          <h2>Icon Button Components</h2>
          <CustomIconButton
            arialabel="icon button"
            buttonColor="blue"
            icon="delete"
          />
          <CustomIconButton
            arialabel="icon button"
            buttonColor="cyan"
            icon="edit"
          />
          <CustomIconButton
            arialabel="icon button"
            buttonColor="grey"
            icon="eye"
          />
          <CustomIconButton
            arialabel="icon button"
            buttonColor="red"
            icon="microphone"
          />
          <CustomIconButton
            arialabel="icon button"
            buttonColor="red"
            icon="microphone"
            disabled
          />
        </div>
        {/* ~~~~~~~~~~ icon button components ~~~~~~~~~~ */}

        {/* ~~~~~~~~~~ switch components ~~~~~~~~~~ */}
        <div>
          <h2>Switch Components</h2>
          <SwitchButton arialabel="switch" />
          <SwitchButton arialabel="switch" defaultChecked />
        </div>
        {/* ~~~~~~~~~~ switch components ~~~~~~~~~~ */}

        {/* ~~~~~~~~~~ dropdown components ~~~~~~~~~~ */}
        <div>
          <h2>Language and Profile Dropdowns</h2>
          <LanguageDropdown arialabel="languages" />
          <ProfileDropdown arialable="profile" />
        </div>
        {/* ~~~~~~~~~~ dropdown components ~~~~~~~~~~ */}

        {/* ~~~~~~~~~~ different status components ~~~~~~~~~~ */}
        <div>
          <h2>Different Status Items</h2>
          <StatusItem
            label="Success"
            arialabel="success"
            statusVariation="success"
          />
          <StatusItem
            label="Progress"
            arialabel="progress"
            statusVariation="progress"
          />
          <StatusItem
            label="Faliure"
            arialabel="faliure"
            statusVariation="faliure"
          />
          <StatusItem
            label="Disable"
            arialabel="disable"
            statusVariation="disable"
          />
        </div>
        {/* ~~~~~~~~~~ different status components ~~~~~~~~~~ */}

        {/* ~~~~~~~~~~ different form components ~~~~~~~~~~ */}
        <div>
          <h2>Text Field Variants</h2>
          <Grid container spacing={2} wrap="wrap">
            <Grid size={6}>
              <CustomtextField
                arialabel="name"
                id="name"
                label="Outlined"
                type="text"
                placeholder="Name"
                variant="outlined"
              />
            </Grid>
            <Grid size={6}>
              <CustomtextField
                arialabel="name"
                id="name"
                label="Filled"
                type="text"
                placeholder="Name"
                variant="filled"
              />
            </Grid>
            <Grid size={6}>
              <CustomtextField
                arialabel="name"
                id="name"
                label="Standard"
                type="text"
                placeholder="Name"
                variant="standard"
              />
            </Grid>
          </Grid>

          <h2>Different Form Components</h2>
          <Grid container spacing={2}>
            <Grid size={6}>
              <CustomtextField
                arialabel="name"
                id="name"
                label="Name"
                type="text"
                placeholder="Name"
                variant="filled"
              />
            </Grid>
            <Grid size={6}>
              <CustomtextField
                arialabel="email"
                id="email"
                label="Email"
                type="email"
                placeholder="Email"
                variant="filled"
              />
            </Grid>
            <Grid size={6}>
              <CustomtextField
                arialabel="password"
                id="password"
                label="Password"
                type="password"
                placeholder="Password"
                variant="filled"
              />
            </Grid>
            <Grid size={6}>
              <CustomtextField
                arialabel="date"
                id="date"
                label="Date"
                type="date"
                placeholder="Date"
                variant="filled"
              />
            </Grid>
          </Grid>
          {/* <CustomtextField/> */}
        </div>
        {/* ~~~~~~~~~~ different form components ~~~~~~~~~~ */}
      </div>
    </>
  );
};

export default Global;
