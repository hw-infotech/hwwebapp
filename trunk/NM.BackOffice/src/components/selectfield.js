import { useFormikContext } from "formik";
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
}) => {
  const [state, setState] = useState({
    inputValue: "",
    value: formState[name],
  });
  const [state1, setState1] = useState([]);
  //console.log(state.value);
  const handleChange = (value) => {
    setState({ ...state, value });
  };
const setfiledvalue=useFormikContext()
console.log(setfiledvalue,"this is the formik data")
  const handleInputChange = (inputValue) => {
    setState({ ...state, inputValue });
  
  };

  useEffect(() => {
    setFormState({ ...formState, [name]: [...state.value] });
  }, [state]);

  useEffect(() => {
    setState({ ...state, value: [...state.value, state1.value] });
  }, [state1]);
  const handlefocus = () => {
    console.log("jlkdfsjkldfsjklsdf");
  };
  //console.log("this is the form state", state);
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
    console.log("this is the handleblur function");
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
      <CreatableSelect
        
        components={components}
        inputValue={state.inputValue}
        isClearable
        classNamePrefix={className}
        isMulti
        on
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
