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
          <h2>Different Form Components</h2>
          <Grid container spacing={2}>
            <Grid size={6}>
              <CustomtextField
                arialabel="name"
                id="name"
                variant="outlined"
                label="Name"
                type="text"
                placeholder="Name"
              />
            </Grid>
            <Grid size={6}>
              <CustomtextField
                arialabel="email"
                id="email"
                variant="filled"
                label="Email"
                type="email"
                placeholder="Email"
              />
            </Grid>
            <Grid size={6}>
              <CustomtextField
                arialabel="name"
                id="name"
                variant="standard"
                label="Name"
                type="password"
                placeholder="Name"
              />
            </Grid>
            <Grid size={6}>
              <CustomtextField
                arialabel="email"
                id="email"
                variant="outlined"
                label="Email"
                type="date"
                placeholder="Email"
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
