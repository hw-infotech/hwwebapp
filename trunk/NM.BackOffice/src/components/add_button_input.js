import React from "react";
import { Filed, ErrorMessage } from 'formik';


const Add_Button_Input = ({ id, name, placeholder, type, as, className,label }) => {

    return (
        <div>
            <div className="form-label-group">
                <label className="from-label" htmlFor={id}>
                    {label}
                </label>
            </div>
            <Filed
                name={name}
                id={id}
                placeholder={placeholder}
                type={type}
                as={as}
                className={className}
            />
            <ErrorMessage className="text-danger" component="div" name={id} />
        </div>
    );

}
export default Add_Button_Input