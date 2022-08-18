import { useEffect } from "react"
import { Button, Col, Form, Row } from "react-bootstrap"
import { useSelector } from "react-redux"
import CreatableSelectField from "../../components/selectfield"

const Update_Step2 = ({ setGoSteps, state, setState, handleFieldchange, values }) => {
    // const selector = useSelector(state => state.data.apidata.edit_data)
    useEffect(() => {
        document.title = "Edit Requirement"
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
                        onChange={(e) => { handleFieldchange(e) }}
                    />
                    <Form.Label className="label-size">Responsibility</Form.Label>
                    <CreatableSelectField
                        name="responsibility"
                        placeholder="Type and press tab/enter button"
                        formState={state}
                        setFormState={setState}
                        className="label-size"
                        onChange={(e) => { handleFieldchange(e) }}
                    />
                    <Form.Label className="label-size">Benefits</Form.Label>
                    <div className="mt-2">
                        <CreatableSelectField
                            name="benefits"
                            formState={state}
                            className="label-size"
                            setFormState={setState}
                            placeholder="Type and press tab/enter button"
                            onChange={(e) => { handleFieldchange(e) }}
                        />
                    </div>
                </Form.Group>
            </Col>
        </Row>
        <div className="d-flex w-100 justify-content-end gap-2 mt-3">
            <Button variant="" className="btn-sm back-buttonn" onClick={() => setGoSteps(0)} >Back</Button>
            <Button variant="primary" className="btn-sm" type="button" onClick={() => {
                setGoSteps(2)
            }} >Next</Button>
        </div>
    </div>
}

export default Update_Step2