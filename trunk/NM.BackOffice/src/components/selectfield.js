import React, { useEffect, useState } from 'react'
import CreatableSelect from 'react-select/creatable'

const CreatableSelectField = ({ formState, setFormState, placeholder, name }) => {

    const [state, setState] = useState({
        inputValue: '',
        value: [],
    })
    const handleChange = (value) => {
        setState({ ...state, value });
    };

    // console.log(state.value);
    const handleInputChange = (inputValue) => {
        setState({ ...state, inputValue });
        // console.log(state.value)
    };
    useEffect(()=>{
        setFormState({ ...formState, [name]: [...state.value] })
    },[state])

    const components = {
        DropdownIndicator: null,
    };

    const handleKeyDown = (event) => {
        const { inputValue, value } = state;
        if (!inputValue) return;
        switch (event.key) {
            case 'Enter':
            case 'Tab':
                setState({
                    inputValue: '',
                    value: [...state.value, createOption(inputValue)],
                });
                // setFormState({ ...formState, [name]: [...state.value] })
                event.preventDefault();
        }
    };
    console.log(formState, "formState");
    const createOption = (label) => ({
        label,
        value: label,
    });

    return (
        <div>

            <CreatableSelect
                components={components}
                inputValue={state.inputValue}
                isClearable
                isMulti
                menuIsOpen={false}
                // options={[
                //     {value:"Aman",label:"Aman"},
                //     {value:"Ganesh",label:"Ganesh"},
                //     {value:"Robin",label:"Robin"},
                //     {value:"Karan",label:"Karan"},
                //     {value:"Sunil",label:"Sunil"},
                //     {value:"Deep",label:"Deep"},
                //     {value:"Jagi",label:"Jagi"},
                // ]}
                onChange={handleChange}
                onInputChange={handleInputChange}
                onKeyDown={handleKeyDown}
                placeholder={placeholder}
                value={state.value}

            /></div>)
}

export default CreatableSelectField

