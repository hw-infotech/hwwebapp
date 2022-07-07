import { useFormikContext } from "formik"
import { useEffect } from "react"
import { Button, Col, Form, Row } from "react-bootstrap"
import { useSelector } from "react-redux"
import CreatableSelectField from "../../../components/selectfield"

const Step2 = ({ setGoSteps, state, setState, handleChange, values }) => {
    const { setFieldValue } = useFormikContext()
    // const selector = useSelector(state => state.data.apidata.edit_data)
    useEffect(() => {
        document.title = "Requirment "
      }, [])
    return <div className="w-100 m-auto">

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
        <div className="d-flex w-100 justify-content-end gap-2">
            <Button variant="secondary" className="btn-sm" onClick={() => setGoSteps(0)} >Back</Button>
            <Button variant="primary" className="btn-sm" onClick={() => {
                setFieldValue('responsibility', state.responsibility.map((_) => (_)))
                setFieldValue("requirment", state.requirment.map((_) => (_)))
                setFieldValue('benefits', state.benefits.map((_) => (_)))
                setGoSteps(2)
            }} >Next</Button>
        </div>
    </div>
}

export default Step2