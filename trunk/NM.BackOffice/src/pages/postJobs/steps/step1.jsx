import { useFormikContext } from "formik"
import { useEffect } from "react"
import { Col, Form, Row, Button } from "react-bootstrap"
import { useSelector } from "react-redux"
import { Input } from "../../../components/commoninputfield"
import CreatableSelectField from "../../../components/selectfield"

const Step1 = ({ setGoSteps, state, setState, handleChange, values
}) => {
    //const { handleChange } = useFormikContext()
    useEffect(() => {
        document.title = "Add Job"
    }, [])
    console.log(values, "this is s the values in first ");
    return <div className="main-wrap-box w-100 m-auto">

        <Row>
            <Col md={12}>
            <div className="d-flex w-100 gap-1">
                <Form.Group className="mb-3 w-100">
                    <Input as='select' cla name='jobtitle' onChange={handleChange} label={"Title"} value={values?.jobtitle} id="jobtitle" className="form-control" options={[
                        { value: "UI/UX", label: "UI/UX" },
                        { value: "Project Manager", label: "Project Manager" },
                        { value: "Web Development", label: "Web Development" },
                    ]} >
                    </Input>

                </Form.Group>
                <Form.Group className="w-100">
                <Input type='text' className="form-control w-100" value={values?.jobfunction} name='functions' label={"Function"} id="name" onChange={handleChange} />
            </Form.Group>

                </div>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1" >
                    <Form.Label className="label-size">Descritption</Form.Label>
                    <Form.Control as="textarea" rows={3} name="description" value={values?.description} onChange={handleChange} />
                </Form.Group>
               
            </Col>
        </Row>
        <div className="d-flex justify-content-end mt-2">
            <Button variant="primary" className="btn-sm" onClick={() => setGoSteps(1)}>Next</Button>
        </div>
    </div>
}

export default Step1