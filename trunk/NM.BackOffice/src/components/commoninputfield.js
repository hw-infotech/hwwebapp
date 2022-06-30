

import { Field, ErrorMessage } from "formik";
import { Form, FormLabel } from "react-bootstrap";

export const Input = ({ as, id, label, placeholder, type, name, className
    , options, onChange, value
}) => {
    return (
        <div className="input_field">
            <Form.Group className="mb-3" >
                <Form.Label className="label-size">{label}</Form.Label>
                {/*<Form.Control type="email" placeholder="Enter email" />*/}
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
                    options={options}
                    value={value}
                    className={className}
                    id={id}
                    onChange={onChange}
                    name={name}
                >
                    {options?.map((_, __) => <option key={__} value={_.value}>{_.value}</option>)}
                </Field>}
            </Form.Group>

            {/*            <Form.Group className="mb-3">
                <FormLabel htmlFor={id}> {label}</FormLabel>
                {/*<label className="form-label" htmlFor={id}>
                </label>

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
                
                <div className="field_input">
                    <ErrorMessage component="div" className="text-danger" name={name} />
                </div>
    </Form.Group>*/}
        </div>
    )
}