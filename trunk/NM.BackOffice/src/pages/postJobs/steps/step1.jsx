import { useFormikContext } from "formik"
import { Col, Form, Row, Button } from "react-bootstrap"
import { Input } from "../../../components/commoninputfield"
import CreatableSelectField from "../../../components/selectfield"

const Step1 = ({ setGoSteps, state, setState, onhandlechange }) => {
    const { handleChange } = useFormikContext()

    return <div className="main-wrap-box w-100 m-auto">
        <div className="d-flex justify-content-end mt-2">
            <Button variant="primary" className="post-btn" onClick={() => setGoSteps(1)}>Next</Button>
        </div>
        <Row>
            <Col md={12}>
                <Form.Group className="mb-3">
                    <Input as='select' name='jobtitle' onChange={onhandlechange} label={"Job title"} id="jobtitle" className="form-control" options={[
                        { value: "...",  label: "..." },
                        { value: "UI/UX", label: "UI/UX" },
                        { value: "Project Manager", label: "Project Manager" },
                        { value: "Web Development", label: "Web Development" },
                    ]} >
                    </Input>
                </Form.Group>

                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1" >
                    <Form.Label>Enter Descritption</Form.Label>
                    <Form.Control as="textarea" style={{ height: "120px" }} name="jobdescription" value={state.jobdescription} onChange={onhandlechange} />
                </Form.Group>

                <Form.Group>
                    <Input type='text' placeholder='Job Function' className="form-control" name='jobfunction' label={"Job Function"} id="name" onChange={onhandlechange} />
                </Form.Group>

            </Col>
        </Row>

    </div>
}

export default Step1