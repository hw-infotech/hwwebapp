import { Button, Form } from "react-bootstrap"
import { useNavigate } from "react-router"
import { useDispatch, useSelector } from "react-redux";
import { Send_data } from "../../Services/redux/action/action";
import { Input } from "../../components/commoninputfield";

const Update_Step3 = ({ setGoSteps, state, setState, onhandlechange, handleChange, values }) => {
    //const nevigate=useNavigate()
    //  const selector = useSelector(state => state.data.apidata.edit_data)
    const dispatch = useDispatch()
    return <div className="m-auto w-100">
        <div className="d-flex justify-content-end gap-2">
            <Button variant="secondary" className="btn-sm" onClick={() => setGoSteps(1)}>Back</Button>
            <Button variant="primary"  type="button" className="btn-sm" onClick={() => {
                setGoSteps(3)
               

            }}>Next</Button>
        </div>
        <Form.Group className="mb-3">
        <Form.Label>Level</Form.Label>
       
            <Form.Select aria-label="Default select example" name='level'
            value={state.level}
            onChange={()=>handleChange()}>
                <option selected value="Senior">Senior</option>
                <option value="Junior">Junior</option>
            </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3">
        <Form.Label>Type</Form.Label>
            <Form.Select aria-label="Default select example" placeholder="Type" value={state.type} name='type' label={"Type"} id="name"   onChange={()=>handleChange()}>
                <option selected value="Senior">Full time</option>
                <option value="Junior">Part time</option>
            </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail" value={state.industry} placeholder='Industries' name='industry' >
            <Form.Label>Industries</Form.Label>
            <Form.Control type="text" value={state.industry} name='industry'   onChange={()=>handleChange()}/>
        </Form.Group>



    </div>
}

export default Update_Step3