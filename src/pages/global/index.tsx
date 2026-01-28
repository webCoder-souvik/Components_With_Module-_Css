import CommonButton from "../../Design/Components/Buttons/CommonButton";
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import CustomIconButton from "../../Design/Components/Buttons/IconButton";
import SwitchButton from "../../Design/Components/Buttons/SwitchButton";
import LanguageDropdown from "../../Design/Components/Dropdowns/LanguageDropdown";

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
          <LanguageDropdown />
        </div>
        {/* ~~~~~~~~~~ dropdown components ~~~~~~~~~~ */}
      </div>
    </>
  );
};

export default Global;
