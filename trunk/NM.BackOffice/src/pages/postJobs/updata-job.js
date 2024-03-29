import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import BasicBreadcrumbs from "../../components/breadcumbs";
import { BiPencil, BiFolderOpen, BiCheck } from "react-icons/bi";
import { BsReverseLayoutTextSidebarReverse } from "react-icons/bs";
import { Stepper, Step } from "react-form-stepper";
import Update_Step1 from "./update_step1";
import Update_Step2 from "./update_step2";
import Update_Step3 from "./update_step3";
import Update_Step4 from "./updata_step4";
import { createContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Update_Data } from "../../Services/redux/action/action";

const Update_Job = ({ stat }) => {
  useEffect(() => {
    document.title = "Edit Job";
  }, []);
  const [post, setpost] = useState();
  const [goSteps, setGoSteps] = useState(0);
  const [state, setState] = useState({
    jobtitle: "",
    functions: "",
    jobResponsibilityTypes: [],
    jobRequirments: [],
    jobBenefits: [],
    industries: "",
    jobType: "",
    level: "",
    description: "",
  });
  const selector = useSelector((state) => state);
  const dispatch=useDispatch()
  useEffect(() => {
    setState((old) => {
      const newState = {
        ...selector.data?.apidata?.edit_data?.data,
        jobRequirments: selector.data?.apidata?.edit_data?.data?.jobRequirments
          ? JSON.parse(selector.data?.apidata?.edit_data?.data?.jobRequirments)
          : [],
      };
      return newState;
    });
  }, [selector]);

  const route = [
    { name: "Dashboard", route: "/" },
    { name: "Job Management", route: "" },
    { name: "Job", route: "/all-jobs" },
    { name: "Edit Job", route: "/edit-job" },
  ];
  /**
   * @method handlechange
   *  @description handlechange function used onChange method,onchange event occurs when the value of an element has been changed.we use handlechange for storing the input field values in state
   * @param {*} e this argument get the input field value
   */
  const handlechange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  let tiitle = localStorage?.getItem("key");
  return (
    <div>
      <BasicBreadcrumbs route={route} />
      <h4>{tiitle}</h4>
      <div className="w-75 m-auto z-depth-5 shadow-box-example rounded box-shadow-container">
        <Stepper
          activeStep={goSteps}
          completedBgColor="gray"
          styleConfig={{
            completedBgColor: "#ff6b01",
            activeBgColor: "#ff6b01",
            activeTextColor: "#fff",
          }}
        >
          <Step label="Basic Details" onClick={() => setGoSteps(0)}>
            <BiPencil />
          </Step>
          <Step label="Requirement" onClick={() => setGoSteps(1)}>
            <BiFolderOpen />
          </Step>
          <Step label="Type" onClick={() => setGoSteps(2)}>
            <BsReverseLayoutTextSidebarReverse size={13} />
          </Step>
          <Step label="Preview">
            <BiCheck size={24} />
          </Step>
        </Stepper>
        <Form
          onSubmit={(e) => {
            e.preventDefault();
            dispatch(Update_Data(state));
          }}
        >
          {goSteps === 0 && (
            <Update_Step1
              handleFieldchange={handlechange}
              setGoSteps={setGoSteps}
              state={state}
              setState={setState}
            />
          )}

          {goSteps === 1 && (
            <Update_Step2
              handleFieldchange={handlechange}
              setGoSteps={setGoSteps}
              state={state}
              setState={setState}
            />
          )}
          {goSteps === 2 && (
            <Update_Step3
              handleFieldchange={handlechange}
              setGoSteps={setGoSteps}
              state={state}
              setState={setState}
            />
          )}
          {goSteps === 3 && (
            <Update_Step4
              handleFieldchange={handlechange}
              setGoSteps={setGoSteps}
              state={state}
              setState={setState}
            />
          )}
        </Form>
      </div>
    </div>
  );
};
export default Update_Job;
