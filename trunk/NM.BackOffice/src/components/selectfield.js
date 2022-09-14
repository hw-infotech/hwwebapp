import { useFormikContext, Formik } from "formik";
import { invalid } from "moment";
import React, { useEffect, useState, useMemo } from "react";
import CreatableSelect from "react-select/creatable";

export const flavourOptionsFlavourOption = [
  { value: "vanilla", label: "Vanilla" },
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "salted-caramel", label: "Salted Caramel" },
];
const CreatableSelectField = ({
  formState,
  setFormState,
  placeholder,
  name,
  onFocus,
  className,
  id,
  touched,
  errors,
  setTouched,
  options,
}) => {
  const [state, setState] = useState({
    inputValue: "",
    value: formState[name],
  });
  const [state1, setState1] = useState([]);
  const handleChange = (value) => {
    setState({ ...state, value });
  };
  const handleInputChange = (inputValue) => {
    setState({ ...state, inputValue });
  };
  useEffect(() => {
    setFormState({ ...formState, [name]: [...state.value] });
  }, [state]);
  useEffect(() => {
    const { inputValue, value } = state;
    if (state1?.value?.value) {
      setState({ ...state, value: [...state.value, state1.value] });
    } else {
      console.log(state1, "testing purpuse");
    }
  }, [state1]);
  const components = {
    DropdownIndicator: null,
  };
  const handleKeyDown = (event) => {
    const { inputValue, value } = state;
    if (!inputValue) return;
    switch (event.key) {
      case "Enter":
      case "Tab":
        setState({
          inputValue: "",
          value: [...state.value, createOption(inputValue)],
        });
        event.preventDefault();
    }
  };
  const handleBlur = (e) => {
    const { inputValue, value } = state;
    console.log(state.inputValue, "dskkjjkf", state1);
    if (state.value.length < 1 && state?.inputValue == "") {
      var f = document.getElementById(id);
      f.style.border = " 1px solid red";
    } else {
      var f = document.getElementById(id);
      f.style.border = "white";
    }

    if (!inputValue) return;

    e.preventDefault();
    setState1({ value: createOption(inputValue) });
  };
  const createOption = (label) => {
    return {
      label,
      value: label,
    };
  };

  return (
    <div>
      <CreatableSelect
        components={components}
        id={id}
        inputValue={state.inputValue}
        isClearable
        setTouched={setTouched}
        isMulti
        onFocus={onFocus}
        className={className}
        onChange={handleChange}
        onInputChange={handleInputChange}
        onKeyDown={handleKeyDown}
        onBlur={handleBlur}
        // onFocus={handleBlur}
        placeholder={placeholder}
        isOptionSelected
        options={flavourOptionsFlavourOption}
        value={state.value}
        //menuShouldScrollIntoView={true}
      />
    </div>
  );
};
export default CreatableSelectField;
