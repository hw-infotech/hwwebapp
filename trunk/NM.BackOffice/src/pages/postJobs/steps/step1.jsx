import { useFormikContext } from "formik"
import { Col, Form, Row, Button } from "react-bootstrap"
import { Input } from "../../../components/commoninputfield"
import CreatableSelectField from "../../../components/selectfield"

const Step1 = ({ setGoSteps, state, setState, handleChange,values
 }) => {
    //const { handleChange } = useFormikContext()

    return <div className="main-wrap-box w-100 m-auto">
        <div className="d-flex justify-content-end mt-2">
            <Button variant="primary" className="post-btn" onClick={() => setGoSteps(1)}>Next</Button>
        </div>
        <Row>
            <Col md={12}>
                <Form.Group className="mb-3">
                    <Input as='select' name='jobtitle' onChange={handleChange} label={"Job title"} value={values.jobtitle} id="jobtitle" className="form-control" options={[
                        { value: "...",  label: "..." },
                        { value: "UI/UX", label: "UI/UX" },
                        { value: "Project Manager", label: "Project Manager" },
                        { value: "Web Development", label: "Web Development" },
                    ]} >
                    </Input>
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1" >
                    <Form.Label className="label-size">Enter Descritption</Form.Label>
                    <Form.Control as="textarea" style={{ height: "120px" }} name="description" value={values.jobdescription} onChange={handleChange} />
                </Form.Group>
                <Form.Group>
                    <Input type='text'  className="form-control"  value={values.jobfunction} name='functions' label={"Job Function"} id="name" onChange={handleChange} />
                </Form.Group>

            </Col>
        </Row>

    </div>
}

export default Step1