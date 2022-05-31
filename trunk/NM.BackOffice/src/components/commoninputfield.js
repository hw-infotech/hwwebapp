
import { Field, ErrorMessage } from "formik";

export const Input = ({ as, id, label, placeholder, type, name, className
    , options, onChange, value
}) => {
    return (
        <div className="w-100 input_field">
            <div className="form-label-group">
                <label className="form-label" htmlFor={id}>
                    {label}
                </label>
            </div>
            {as != "select" && <Field
                as={as}
                type={type}
                value={value}
                className={className}
                id={id}
                name={name}
                placeholder={placeholder}
                onChange={onChange}
            />}
            {as == "select" && <Field
                as={as}
                type={type}
                className={className}
                id={id}
                name={name}
            >
                {options?.map((_, __) => <option key={__} value={_.value}>{_.value}</option>)}
            </Field>}
            <div className="field_input">
                <ErrorMessage component="div" className="text-danger" name={name} />
            </div>
        </div>
    )
}