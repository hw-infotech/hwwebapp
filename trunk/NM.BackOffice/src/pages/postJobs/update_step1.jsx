import { useEffect } from "react"
import { Col, Form, Row, Button } from "react-bootstrap"
import { useSelector } from "react-redux"
import { Input } from "../../components/commoninputfield"

const Update_Step1 = ({ setGoSteps, state, setState, handleFieldchange }) => {
    useEffect(() => {
        document.title="Edit Basic Detail"
      }, [])
    return <div className="main-wrap-box w-100 m-auto">
       
        <Row>
            <Col md={12}>
            <div className="d-flex w-100 gap-1">
            <div className="w-100">
                <Form.Label>Title</Form.Label>
                <Form.Select aria-label="Default select example" name='jobtitle' className="w-100" value={state?.jobtitle}
                    onChange={(e) => handleFieldchange(e)} id="jobtitle">
                    <option value="">Select any value</option>
                    <option value="UI/UX">UI/UX</option>
                    <option value="Project Manager">Project Manager</option>
                    <option value="Web development">Web Development</option>
                </Form.Select>
                </div>
                <Form.Group className="mb-3 w-100" controlId="formBasicEmail"  >
                    <Form.Label>Functions</Form.Label>
                    <Form.Control type="text" value={state?.functions} name='functions' id="name" 
                        onChange={(e) => handleFieldchange(e)} />
                </Form.Group>
                </div>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Description</Form.Label>
                <Form.Control as="textarea" rows={3} value={state?.description} name="description"
                    onChange={(e) => handleFieldchange(e)} />
            </Form.Group>
            </Col>
        </Row>
        <div className="d-flex justify-content-end mt-2">
        <Button variant="primary" className="btn-sm" type="button" onClick={() => setGoSteps(1)}>Next</Button>
    </div>
    </div>
}

export default Update_Step1