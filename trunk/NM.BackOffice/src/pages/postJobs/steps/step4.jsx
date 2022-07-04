import { Button } from "react-bootstrap"
import { useNavigate } from "react-router"
import Job_Preview from "../job_preview"
import { BiEdit } from "react-icons/bi";
import { Send_data } from "../../../Services/redux/action/action";
import { useDispatch, useSelector } from "react-redux";

const Step4 = ({ setGoSteps, state, setState, handleChange, values }) => {
    const dispatch = useDispatch()
    const nevigate = useNavigate()
    return <div className="w-100 m-auto ">
        <div className="justify-content-end d-flex mb-2 gap-2" >
            {/*<Button variant="secondary" onClick={() => setGoSteps(2)}>Back</Button>*/}
            <Button variant="secondary" className="btn-sm" onClick={() => {
                setGoSteps(2)
            }}>Back</Button>
            <Button variant="warning" className="btn-sm" onClick={() => setGoSteps(3)}>Save as Draft</Button>
            <Button variant="primary" className="btn-sm" onClick={() => {setGoSteps(3)
                dispatch(Send_data(values))
            }}>Save & Publish</Button>

        </div>
        <Job_Preview values={values} />

    </div>
}
// <BiEdit size={24} />
export default Step4