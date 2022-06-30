import { useFormikContext } from "formik"
import { Button, Col, Form, Row } from "react-bootstrap"
import CreatableSelectField from "../../../components/selectfield"

const Step2 = ({ setGoSteps, state, setState, handleChange, values }) => {
    const { setFieldValue } = useFormikContext()

    return <div className="w-100 m-auto">
        <div className="d-flex w-100 justify-content-end">
            <Button variant="secondary" onClick={() => setGoSteps(0)} >Back</Button>
            <Button variant="primary" onClick={() => {
                setFieldValue('responsibility', state.responsibility.map((_)=>(_.value)))
                setFieldValue("requirment", state.requirment.map((_)=>(_.value)))
                setFieldValue('benefits', state.benefits.map((_)=>(_.value)))
                setGoSteps(2)
            }} className="mr-2">Next</Button>
        </div>
        <Row>
            <Col md={12}>
                <Form.Group>
                    <Form.Label className="label-size">Requirement</Form.Label>
                    <CreatableSelectField
                        name="requirment"
                        placeholder="Type and press tab/enter button"
                        formState={state}
                        className="label-size"
                        setFormState={setState}
                        value={values.requirment}
                        onChange={handleChange}

                    />
                    <Form.Label className="label-size">Responsibility</Form.Label>
                    <CreatableSelectField
                        name="responsibility"
                        placeholder="Type and press tab/enter button"
                        formState={state}
                        setFormState={setState}
                        className="label-size"
                        value={values.responsibility}
                        onChange={handleChange}

                    />
                    <Form.Label className="label-size">Benefits</Form.Label>
                    <div style={{ marginBottom: "1rem" }}>
                        <CreatableSelectField
                            name="benefits"
                            formState={state}
                            className="label-size"
                            setFormState={setState}
                            placeholder="Type and press tab/enter button"
                            value={values.benefits}
                            onChange={handleChange}
                        />
                    </div>
                </Form.Group>
            </Col>
        </Row>
    </div>
}

export default Step2