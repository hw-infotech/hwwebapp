import { Button, Form } from "react-bootstrap"
import { useNavigate } from "react-router"
import { Input } from "../../../components/commoninputfield"
import CreatableSelectField from "../../../components/selectfield"
import { useDispatch, useSelector } from "react-redux";
import { Send_data } from "../../../Services/redux/action/action";

const Step3 = ({ setGoSteps, state, setState, onhandlechange, handleChange, values }) => {
    //const nevigate=useNavigate()
    const dispatch = useDispatch()
    return <div className="m-auto w-100">
        <div className="d-flex justify-content-end">
            <Button variant="secondary" onClick={() => setGoSteps(1)}>Back</Button>
            <Button variant="primary" onClick={() => {
                setGoSteps(3)
                dispatch(Send_data(values))

            }}>Next</Button>
        </div>
        <Form.Group>
            <Input as='select' placeholder="Senority Level" value={values.seneritylevel} className="form-control" name='level'
                onChange={handleChange} label={"Senority Level"} id="seneritylevel" options={[
                    { value: "...", label: "..." },
                    { value: "Senior", label: "Senior" },
                    { value: "Junior", label: "Junior" },

                ]} />

            <Input as='select' className="form-control" onChange={handleChange} placeholder="Employement type" value={values.employement} name='type' label={"Employement type"} id="name" options={[
                { value: "...", label: "..." },
                { value: "Full time" },
                { value: "Part time" },

            ]} ></Input>
        </Form.Group>
        <Form.Group>
            <Input type='text' className="form-control" onChange={handleChange} placeholder='Industries' name='industry' value={values.industries} label={"Industries"} id="name" />
        </Form.Group>

    </div>
}

export default Step3