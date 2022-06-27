import { Button, Form } from "react-bootstrap"
import { useNavigate } from "react-router"
import { Input } from "../../../components/commoninputfield"
import CreatableSelectField from "../../../components/selectfield"

const Step3 = ({ setGoSteps, state, setState, onhandlechange,handleChange }) => {
    //const nevigate=useNavigate()
    return <div className="m-auto w-100">
        <div className="d-flex justify-content-end">
            <Button variant="secondary" onClick={() => setGoSteps(1)}>Back</Button>
            <Button variant="primary" onClick={() => setGoSteps(3)}>Next</Button>
        </div>
        <Form.Group>
            <Input as='select' placeholder="Senority Level" className="form-control" name='seneritylevel'
                onChange={onhandlechange} label={"Senority Level"} id="seneritylevel" options={[
                    { value: "...", label: "..." },
                    { value: "Senior", label: "Senior" },
                    { value: "Junior", label: "Junior" },

                ]} />

            <Input as='select' className="form-control" onChange={onhandlechange} placeholder="Employement type" name='employement' label={"Employement type"} id="name" options={[
                { value: "...", label: "..." },
                { value: "Full time" },
                { value: "Part time" },

            ]} ></Input>
        </Form.Group>
        <Form.Group>
        <Input type='text' className="form-control" placeholder='Industries' name='industries' label={"Industries"} id="name" />
    </Form.Group>

    </div>
}

export default Step3