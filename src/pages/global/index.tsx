import CommonButton from "../../Design/Components/Buttons/CommonButton";
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import CustomIconButton from "../../Design/Components/Buttons/IconButton";
import SwitchButton from "../../Design/Components/Buttons/SwitchButton";
import LanguageDropdown from "../../Design/Components/Dropdowns/LanguageDropdown";
import StatusItem from "../../Design/Components/StatusItem";
import CustomtextField from "../../Design/Components/FormElements/CustomTextField";

import Grid from "@mui/material/Grid";
import CustomSelect from "../../Design/Components/FormElements/CustomSelect";
import React, { useState } from "react";
import { SelectChangeEvent } from "@mui/material/Select";
import MultipleSelect from "../../Design/Components/FormElements/CustomMultipleSelect";
import CustomCheckOption from "../../Design/Components/FormElements/CustomCheckOption";
import RadioGroup from "@mui/material/RadioGroup";
import CustomDialog from "../../Design/Components/CustomDialog";
import CustomTextarea from "../../Design/Components/FormElements/CustomTextraea";

import EnglishIcon from "/assets/images/Lang-Usa-Flag.svg";
import SpanishIcon from "/assets/images/Lang-Spanish-Flag.svg";
import ChineseIcon from "/assets/images/Lang-Chiense-Flag.svg";
import TagalogIcon from "/assets/images/Lang-Tagalog-Flag.svg";
import VietnameseIcon from "/assets/images/Lang-Vietnamese-Flag.svg";
import FrenchIcon from "/assets/images/Lang-French-Flag.svg";
import KoreanIcon from "/assets/images/Lang-Korean-Flag.svg";
import RussianIcon from "/assets/images/Lang-Russian-Flag.svg";
import BasicDropdown from "../../Design/Components/Dropdowns/BasicDropdown";
import { FaUser } from "react-icons/fa";

const Global = () => {
  // options for signle select
  const [age, setAge] = useState("");

  const handleAgeChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };

  const ageOptions = [
    { value: 10, label: "Ten" },
    { value: 20, label: "Twenty" },
    { value: 30, label: "Thirty" },
  ];

  const [fruit, setFruit] = useState("");

  const handleFruitChange = (event: SelectChangeEvent) => {
    setFruit(event.target.value);
  };

  const fruitOptions = [
    { value: "apple", label: "Apple" },
    { value: "banana", label: "Banana" },
    { value: "cherry", label: "Cherry" },
  ];
  // options for signle select

  // options for multiple select
  // 1. Always initialize as an array for multi-select
  const [selectedCourses, setSelectedCourses] = useState<(string | number)[]>(
    [],
  );

  const courseOptions = [
    { value: "react", label: "React" },
    { value: "vue", label: "Vue" },
    { value: "angular", label: "Angular" },
  ];

  const handleCourseChange = (event: SelectChangeEvent<any>) => {
    const {
      target: { value },
    } = event;

    // 2. MUI multi-select can return a string on certain interactions (like autofill)
    // so we ensure it's always handled as an array.
    setSelectedCourses(typeof value === "string" ? value.split(",") : value);
  };
  // options for multiple select

  // options for checkbox
  const [isAgreed, setIsAgreed] = useState(false);

  const handleCheckChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsAgreed(e.target.checked);
  };
  // options for checkbox

  // options for radiobox
  const [plan, setPlan] = useState("basic");

  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPlan(e.target.value);
  };
  // options for radiobox

  // for modals
  const [isFirstOpen, setIsFirstOpen] = React.useState(false);
  const [isSecondOpen, setIsSecondOpen] = React.useState(false);
  // for modals

  // for language dropdown
  // 1. Define your data array
  const languages = [
    { code: "en", label: "English", flag: EnglishIcon },
    { code: "es", label: "Spanish", flag: SpanishIcon },
    { code: "zh", label: "Chinese", flag: ChineseIcon },
    { code: "tl", label: "Tagalog", flag: TagalogIcon },
    { code: "vi", label: "Vietnamese", flag: VietnameseIcon },
    { code: "fr", label: "French", flag: FrenchIcon },
    { code: "ko", label: "Korean", flag: KoreanIcon },
    { code: "ru", label: "Russian", flag: RussianIcon },
    // ... add more as needed
  ];

  // 2. Define a handler for when the language changes
  const handleLanguageChange = (selectedLang: any) => {
    console.log("Language switched to:", selectedLang.label);
    // This is where you would call i18n.changeLanguage(selectedLang.code)
  };
  // for language dropdown

  // basic menu data ~~~~~~~~~~~~~~~~~~~~
  const menuItems = [
    { label: "Logout", value: "logout" },
    {
      label: "Delete",
      value: "delete",
    },
  ];
  // basic menu data ~~~~~~~~~~~~~~~~~~~~

  return (
    <>
      <div className="container">
        {/* ~~~~~~~~~~ common button components ~~~~~~~~~~ */}
        <div>
          <h2>Common Button Components</h2>
          <CommonButton
            ariaLabel="button"
            label="Contained Button"
            variant="contained"
          />
          <CommonButton
            ariaLabel="button"
            label="Outlined Button"
            variant="outlined"
          />
          <CommonButton ariaLabel="button" label="Text Button" variant="text" />
          <CommonButton
            ariaLabel="button"
            label="Text Button"
            variant="contained"
            startIcon={<FaArrowLeft />}
          />
          <CommonButton
            ariaLabel="button"
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
            ariaLabel="icon button"
            buttonColor="blue"
            icon="delete"
          />
          <CustomIconButton
            ariaLabel="icon button"
            buttonColor="cyan"
            icon="edit"
          />
          <CustomIconButton
            ariaLabel="icon button"
            buttonColor="grey"
            icon="eye"
          />
          <CustomIconButton
            ariaLabel="icon button"
            buttonColor="red"
            icon="microphone"
          />
          <CustomIconButton
            ariaLabel="icon button"
            buttonColor="red"
            icon="microphone"
            disabled
          />
        </div>
        {/* ~~~~~~~~~~ icon button components ~~~~~~~~~~ */}

        {/* ~~~~~~~~~~ switch components ~~~~~~~~~~ */}
        <div>
          <h2>Switch Components</h2>
          <SwitchButton ariaLabel="switch" />
          <SwitchButton ariaLabel="switch" defaultChecked />
        </div>
        {/* ~~~~~~~~~~ switch components ~~~~~~~~~~ */}

        {/* ~~~~~~~~~~ dropdown components ~~~~~~~~~~ */}
        <h2>Language and Profile Dropdowns</h2>
        <Grid container spacing={2}>
          <LanguageDropdown
            ariaLabel="Select Language"
            options={languages}
            onLanguageChange={handleLanguageChange}
            defaultSelected={languages[0]} // Optional: defaults to English
          />

          <BasicDropdown
            buttonLabel="Common Menu"
            options={menuItems}
            avatarIcon={<FaUser />}
            onSelect={(val) => console.log(`Selected: ${val}`)}
          />
        </Grid>
        {/* ~~~~~~~~~~ dropdown components ~~~~~~~~~~ */}

        {/* ~~~~~~~~~~ different status components ~~~~~~~~~~ */}
        <div>
          <h2>Different Status Items</h2>
          <StatusItem
            label="Success"
            ariaLabel="success"
            statusVariation="success"
          />
          <StatusItem
            label="Progress"
            ariaLabel="progress"
            statusVariation="progress"
          />
          <StatusItem
            label="Faliure"
            ariaLabel="faliure"
            statusVariation="faliure"
          />
          <StatusItem
            label="Disable"
            ariaLabel="disable"
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
                ariaLabel="name"
                id="name"
                label="Outlined"
                type="text"
                placeholder="Name"
                variant="outlined"
              />
            </Grid>
            <Grid size={6}>
              <CustomtextField
                ariaLabel="name"
                id="name"
                label="Filled"
                type="text"
                placeholder="Name"
                variant="filled"
              />
            </Grid>
            <Grid size={6}>
              <CustomtextField
                ariaLabel="name"
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
                ariaLabel="name"
                id="name"
                label="Name"
                type="text"
                placeholder="Name"
                variant="filled"
              />
            </Grid>
            <Grid size={6}>
              <CustomtextField
                ariaLabel="email"
                id="email"
                label="Email"
                type="email"
                placeholder="Email"
                variant="filled"
              />
            </Grid>
            <Grid size={6}>
              <CustomtextField
                ariaLabel="password"
                id="password"
                label="Password"
                type="password"
                placeholder="Password"
                variant="filled"
              />
            </Grid>
            <Grid size={6}>
              <CustomtextField
                ariaLabel="date"
                id="date"
                label="Date"
                type="date"
                placeholder="Date"
                variant="filled"
              />
            </Grid>
          </Grid>

          <h2>Basic Select Components</h2>
          <Grid container spacing={2}>
            <Grid size={6}>
              <CustomSelect
                label="Select Your Age"
                value={age}
                id="student_age"
                options={ageOptions}
                placeholder="Please select one item"
                onChange={handleAgeChange}
              />
            </Grid>
            <Grid size={6}>
              <CustomSelect
                label="Select Your Fruit"
                value={fruit}
                id="fruit_name"
                options={fruitOptions}
                // placeholder="Select one item below"

                onChange={handleFruitChange}
              />
            </Grid>
            <Grid size={6}></Grid>
          </Grid>

          <h2>Multiple Select Components</h2>
          <Grid container spacing={2}>
            <Grid size={6}>
              <MultipleSelect
                label="Classis List"
                value={selectedCourses}
                id="course_name"
                options={courseOptions}
                onChange={handleCourseChange}
                placeholder="Select options below"
              />
            </Grid>
            <Grid size={6}>
              <MultipleSelect
                label="List with checkbox"
                value={selectedCourses}
                id="course_name"
                options={courseOptions}
                onChange={handleCourseChange}
                placeholder="Select options below"
                showCheckbox
              />
            </Grid>
            <Grid size={6}>
              <MultipleSelect
                label="List with chips"
                value={selectedCourses}
                id="course_name"
                options={courseOptions}
                onChange={handleCourseChange}
                placeholder="Select options below"
                useChips
              />
            </Grid>
            <Grid size={6}>
              <MultipleSelect
                label="Both chips and check"
                value={selectedCourses}
                id="course_name"
                options={courseOptions}
                onChange={handleCourseChange}
                placeholder="Select options below"
                useChips
                showCheckbox
              />
            </Grid>
          </Grid>

          <h2>Checkbox and Radio Buttons</h2>
          <Grid container spacing={2}>
            <Grid size={3}>
              <CustomCheckOption
                type="checkbox"
                label="Accept this"
                onChange={handleCheckChange}
                name="terms"
              />
            </Grid>
            <Grid size={3}>
              <CustomCheckOption
                type="checkbox"
                checked={true}
                label="Accept this"
                onChange={handleCheckChange}
                name="terms"
              />
            </Grid>
            <Grid size={3}>
              <RadioGroup value={plan} onChange={handleRadioChange}>
                <CustomCheckOption
                  type="radio"
                  label="Basic Plan ($0)"
                  value="basic"
                  onChange={handleRadioChange}
                />
                <CustomCheckOption
                  type="radio"
                  label="Pro Plan ($10)"
                  value="pro"
                  onChange={handleRadioChange}
                />
                <CustomCheckOption
                  type="radio"
                  label="Enterprise ($50)"
                  value="enterprise"
                  onChange={handleRadioChange}
                />
              </RadioGroup>
            </Grid>
          </Grid>

          <h2>Custom Textarea</h2>
          <Grid container spacing={2}>
            <Grid size={12}>
              <CustomTextarea
                label="Custom Textarea"
                // ariaLabel="custom textarea"
                // placeholder="Put your message here"
                aria-label="my input"
                placeholder="custom area"
                minRows={10}
                maxRows={8}
              />
            </Grid>
          </Grid>

          <h2>Custom Dialog (Modal)</h2>
          <Grid container spacing={2}>
            <CommonButton
              ariaLabel="button"
              label="Modal Button one"
              variant="contained"
              onClick={() => setIsFirstOpen(true)}
            />

            <CommonButton
              ariaLabel="button"
              label="Modal Button two"
              variant="contained"
              onClick={() => setIsSecondOpen(true)}
            />
          </Grid>

          <p>&nbsp;</p>
          <p>&nbsp;</p>
          <p>&nbsp;</p>
          <p>&nbsp;</p>
          <p>&nbsp;</p>
          <p>&nbsp;</p>
          <p>&nbsp;</p>
          <p>&nbsp;</p>
          <p>&nbsp;</p>
        </div>
        {/* ~~~~~~~~~~ different form components ~~~~~~~~~~ */}
      </div>

      {/* modal one */}
      <CustomDialog
        title="This is the First Modal"
        maxWidth="md"
        open={isFirstOpen}
        onClose={() => setIsFirstOpen(false)}
      >
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate
          perferendis aut voluptatibus consequatur eum optio in, molestiae
          mollitia architecto exercitationem?
        </p>
      </CustomDialog>
      {/* modal one */}

      {/* modal two */}
      <CustomDialog
        title="This is the Second Modal"
        maxWidth="md"
        open={isSecondOpen}
        onClose={() => setIsSecondOpen(false)}
      >
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate
          perferendis aut voluptatibus consequatur eum optio in, molestiae
          mollitia architecto exercitationem?
        </p>
      </CustomDialog>
      {/* modal two */}
    </>
  );
};

export default Global;
