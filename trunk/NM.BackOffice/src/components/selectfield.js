import { useFormikContext, Formik } from "formik";
import { invalid } from "moment";
import React, { useEffect, useState } from "react";
import CreatableSelect from "react-select/creatable";

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
}) => {
  const [state, setState] = useState({
    inputValue: "",
    value: formState[name],
  });
  const [state1, setState1] = useState([]);
  const first = useFormikContext();
  const handleChange = (value) => {
    setState({ ...state, value });
  };
  const d = useFormikContext();
  const handleInputChange = (inputValue) => {
    setState({ ...state, inputValue });
  };

  useEffect(() => {
    setFormState({ ...formState, [name]: [...state.value] });
  }, [state]);

  useEffect(() => {
    setState({ ...state, value: [...state.value, state1.value] });
  }, [state1]);

  console.log("this is the form state", touched, errors);
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
    if (!inputValue) return;
    setState1({ value: createOption(inputValue) });
    e.preventDefault();
  };
  const createOption = (label) => {
    return {
      label,
      value: label,
    };
  };
  return (
    <div>
      {" "}
      <CreatableSelect
        components={components}
        inputValue={state.inputValue}
        isClearable
        isMulti
        onFocus={onFocus}
        className={className}
        menuIsOpen={false}
        onChange={handleChange}
        onInputChange={handleInputChange}
        onKeyDown={handleKeyDown}
        onBlur={handleBlur}
        // onFocus={handleBlur}
        placeholder={placeholder}
        value={state.value}
        id={id}
      />
    </div>
  );
};
export default CreatableSelectField;
