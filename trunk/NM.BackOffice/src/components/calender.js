import React from "react";
import { Formik, field, ErrorMessage } from "formik";
import Flatpickr from "react-flatpickr";
const Calender = ({ id, label, field, placeholder,className }) => {
    const date=new Date();
    return (
        <div className="w-100">
            <div className="form-label-group">
                <label className="form-label" htmlFor={id}>
                    {label}
                </label>
                <Flatpickr
                onChange={date}
                    id={id}                  
                    placeholder={placeholder}
                    className={className}
                />
            </div>
        </div>
    )
}
export default Calender

