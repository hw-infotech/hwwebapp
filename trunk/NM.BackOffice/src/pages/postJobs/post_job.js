import React, { useEffect, useState } from "react";
import {
  Button,
  Col,
  Form,
  FormCheck,
  FormControl,
  InputGroup,
  Modal,
  Row,
  Table,
} from "react-bootstrap";
import { Field, Formik, FormikProvider } from "formik";
import { Input } from "../../components/commoninputfield";
import BasicBreadcrumbs from "../../components/breadcumbs";
import { initialValues, validationschemeaa } from "./validation-schema";
import { BiPencil, BiFolderOpen, BiCheck } from "react-icons/bi";
import { BsReverseLayoutTextSidebarReverse } from "react-icons/bs";
import { Stepper, Step } from "react-form-stepper";
import Step1 from "./steps/step1";
import Step2 from "./steps/step2";
import Step3 from "./steps/step3";
import Step4 from "./steps/step4";
import { useSelector } from "react-redux";
import { Send_job } from "../../Services/redux/action/action";
import { useDispatch } from "react-redux";
import * as yup from "yup";
import { useNavigate } from "react-router";

const Post_Job = ({ stat }) => {
  const navigtion = useNavigate();
  const [goSteps, setGoSteps] = useState(0);
  const [state, setState] = useState({
    title: "UI/UX",
    functions: "",
    responsibility: [],
    requirment: [],
    benefit: [],
    industries: "",
    type: "Full time",
    level: "Senior",
    description: "",
  });
  const selector = useSelector((state) => state.data?.apidata?.edit_data?.data);
  const [state1, setState1] = useState({
    title: "",
    functions: "",
    responsibility: [],
    benefit: [],
    requirment: [],
    industries: "",
    jobType: "Full time",
    level: "Senior",
    description: "",
  });
  const route = [
    { name: "Dashboard", route: "/" },
    { name: "Job Management", route: "" },
    { name: "Job", route: "/all-jobs" },
    { name: "Add Job", route: "/add-job" },
  ];
  const validationschemeaa = yup.object({
    functions: yup.string().label("functions").required(),
    industries: yup.string().label("industry").required(),
    description: yup.string().label("description").required(),
    requirment: yup.array().min(1).required(),
    responsibility: yup.array().min(1).required(),
    benefit: yup.array().min(1).required(),
  });
  useEffect(() => {
    document.title = "Add Job";
  }, []);
  const dispatch = useDispatch();
  return (
    <div>
      <BasicBreadcrumbs route={route} />
      <h4>Add Job</h4>
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

        <Formik
          initialValues={state}
          validationSchema={validationschemeaa}
          onSubmit={(values, { resetForm }) => {
            dispatch(Send_job(values));
            resetForm();
            navigtion("/all-jobs");
          }}
        >
          {({
            values,
            handleChange,
            handleSubmit,
            handleReset,
            touched,
            errors,
            setTouched,
            isValid,
            dirty,
          }) => (
            <Form
              onSubmit={(e) => {
                e.preventDefault();
                handleSubmit();
              }}
            >
              {goSteps === 0 && (
                <Step1
                  handleChange={handleChange}
                  values={values}
                  setGoSteps={setGoSteps}
                  state={state1}
                  setState={setState1}
                  touched={touched}
                  errors={errors}
                  setTouched={setTouched}
                  dirty={dirty}
                  isValid={isValid}
                />
              )}

              {goSteps === 1 && (
                <Step2
                  handleChange={handleChange}
                  values={values}
                  setGoSteps={setGoSteps}
                  state={state1}
                  setState={setState1}
                  touched={touched}
                  errors={errors}
                  dirty={dirty}
                  isValid={isValid}
                />
              )}
              {goSteps === 2 && (
                <Step3
                  handleChange={handleChange}
                  values={values}
                  setGoSteps={setGoSteps}
                  state={state1}
                  setState={setState1}
                  touched={touched}
                  errors={errors}
                  dirty={dirty}
                  isValid={isValid}
                />
              )}
              {goSteps === 3 && (
                <Step4
                  handleChange={handleChange}
                  values={values}
                  setGoSteps={setGoSteps}
                  state={state1}
                  setState={setState1}
                  touched={touched}
                  errors={errors}
                  dirty={dirty}
                  isValid={isValid}
                />
              )}
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};
export default Post_Job;
