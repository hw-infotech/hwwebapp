import { Button } from "react-bootstrap"
import { useNavigate } from "react-router"
import Job_Preview from "../job_preview"
import { BiEdit } from "react-icons/bi";

const Step4 = ({ setGoSteps, state, setState, handleChange }) => {
    const nevigate=useNavigate()
    return <div className="w-100 m-auto ">
        <div className="justify-content-end d-flex mb-2" >
            <Button variant="secondary" onClick={() => setGoSteps(2)}>Back</Button>
            <div className=""><Button variant="primary" onClick={() => {
           setGoSteps(0) }}><BiEdit size={24} /></Button></div>
            <Button variant="primary" onClick={() => setGoSteps(3)}>Save & Publish</Button>
        </div>
        <Job_Preview/>
    </div>
}

export default Step4