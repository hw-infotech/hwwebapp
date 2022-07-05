import { useFormikContext } from "formik"
import { Col, Form, Row, Button } from "react-bootstrap"
import { useSelector } from "react-redux"
import { Input } from "../../../components/commoninputfield"
import CreatableSelectField from "../../../components/selectfield"

const Step1 = ({ setGoSteps, state, setState, handleChange, values
}) => {
    //const { handleChange } = useFormikContext()

    console.log(values, "this is s the values in first ");
    return <div className="main-wrap-box w-100 m-auto">
     
        <Row>
            <Col md={12}>
                <Form.Group className="mb-3">
                    <Input as='select' name='jobtitle' onChange={handleChange} label={"Title"} value={values?.jobtitle} id="jobtitle" className="form-control" options={[
                        { value: "UI/UX", label: "UI/UX" },
                        { value: "Project Manager", label: "Project Manager" },
                        { value: "Web Development", label: "Web Development" },
                    ]} >
                    </Input>
                 
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1" >
                    <Form.Label className="label-size">Descritption</Form.Label>
                    <Form.Control as="textarea" style={{ height: "120px" }} name="description" value={values?.description} onChange={handleChange} />
                </Form.Group>
                <Form.Group>
                    <Input type='text' className="form-control" value={values?.jobfunction} name='functions' label={"Function"} id="name" onChange={handleChange} />
                </Form.Group>

            </Col>
        </Row>
        <div className="d-flex justify-content-end mt-2">
        <Button variant="primary" className="btn-sm" onClick={() => setGoSteps(1)}>Next</Button>
    </div>
    </div>
}

export default Step1