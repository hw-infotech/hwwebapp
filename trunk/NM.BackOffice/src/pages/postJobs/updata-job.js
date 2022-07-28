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
import { useSelector } from "react-redux";

const Update_Job = ({ stat }) => {
  useEffect(() => {
    document.title = "Edit Job";
  }, []);
  const [post, setpost] = useState();
  const [goSteps, setGoSteps] = useState(0);
  const [state, setState] = useState({
    jobtitle: "",
    functions: "",
    responsibility: [],
    requirment: [],
    benefits: [],
    industry: "",
    type: "",
    level: "",
    description: "",
  });
  const selector = useSelector((state) => state);

  useEffect(() => {
    setState(selector.data?.apidata?.edit_data?.data);
  }, [selector]);

  console.log("Edit Details ", selector.data?.apidata?.edit_data?.data);
  const DataContext = createContext();
  const route = [
    { name: "Dashboard", route: "/" },
    { name: "Job Management", route: "" },
    { name: "Job", route: "/all-jobs" },
    { name: "Edit Job", route: "/edit-job" },
  ];

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
