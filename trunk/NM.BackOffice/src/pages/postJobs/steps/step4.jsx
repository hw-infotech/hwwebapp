import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";
import Job_Preview from "../job_preview";
import { BiEdit } from "react-icons/bi";
import {
  Requirement_Create,
  Responsibility_Create,
  Send_data,
  Send_job,
} from "../../../Services/redux/action/action";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useFormikContext } from "formik";

const Step4 = ({ setGoSteps, state, setState, handleChange, values }) => {
  const dispatch = useDispatch();
  const nevigate = useNavigate();
  useEffect(() => {
    document.title = "Preview";
  }, []);
  const formikkk_context = useFormikContext();
  console.log(formikkk_context, "this is the first");
  return (
    <div className="w-100 m-auto ">
      <Job_Preview values={values} />
      <div className="justify-content-end d-flex mt-4 gap-2">
        {/*<Button variant="secondary" onClick={() => setGoSteps(2)}>Back</Button>*/}
        <Button
          variant=""
          className="btn-sm back-buttonn"
          onClick={() => {
            setGoSteps(2);
          }}
        >
          Back
        </Button>
        <Button
          variant="primary"
          className="btn-sm"
          onClick={() => setGoSteps(3)}
        >
          Save as Draft
        </Button>
        <Button
          variant="primary"
          type="submit"
          className="btn-sm"
          onClick={() => {
            //dispatch(Send_job(values));
            
          }}
        >
          Save & Publish
        </Button>
      </div>
    </div>
  );
};
// <BiEdit size={24} />
export default Step4;
