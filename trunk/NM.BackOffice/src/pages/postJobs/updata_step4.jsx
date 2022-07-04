import { Button } from "react-bootstrap"
import { useNavigate } from "react-router"
import Job_Preview from "./job_preview"
import { BiEdit } from "react-icons/bi";

import { useDispatch, useSelector } from "react-redux";
import Edit_Job_Preview from "./edit_job_preview";
import { Send_data, Update_Data } from "../../Services/redux/action/action";

const Update_Step4 = ({ setGoSteps, state, setState, handleChange, values }) => {
    const dispatch = useDispatch()
    const nevigate = useNavigate()
    return <div className="w-100 m-auto ">
        <div className="justify-content-end d-flex mb-2 gap-2" >
            {/*<Button variant="secondary" onClick={() => setGoSteps(2)}>Back</Button>*/}
            <Button variant="secondary" className="btn-sm" onClick={() => {
                setGoSteps(2)
            }}>Back</Button>
           { /*Button variant="warning" className="btn-sm" onClick={() => setGoSteps(3)}></Button>*/}
            <Button variant="primary" type="button" className="btn-sm" onClick={() => {setGoSteps(3)
            
            dispatch(Update_Data(state))
            console.log(state,"this is the four step")
            }}>Update & Publish</Button>

        </div>
        <Edit_Job_Preview  state={state}/>

    </div>
}
// <BiEdit size={24} />
export default Update_Step4