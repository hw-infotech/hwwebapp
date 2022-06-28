import React, { useEffect, useState } from "react";
import { Button, Col, Form, FormCheck, FormControl, InputGroup, Modal, Row, Table } from "react-bootstrap";
import { Field, Formik, FormikProvider } from "formik";
import { Input } from "../../components/commoninputfield";
import BasicBreadcrumbs from "../../components/breadcumbs";
//import { Pagination } from "@material-ui/lab";
import { initialValues, validationschemeaa } from "./validation-schema";
import { useNavigate } from "react-router";
import CreatableSelectField from "../../components/selectfield";
import CustomPagination from "../../shared/pagination";
//import { CDBStepper, CDBStep } from "cdbreact";
import { BiPencil, BiFolderOpen, BiCheck } from "react-icons/bi";
import { BsReverseLayoutTextSidebarReverse } from "react-icons/bs";
import { Stepper, Step } from 'react-form-stepper';
import Step1 from "./steps/step1";
import Step2 from "./steps/step2";
import Step3 from "./steps/step3";
import Step4 from "./steps/step4";
import { createContext } from "react";




const Post_Job = ({ stat }) => {
    const [post, setpost] = useState()
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
        description: ""

    })
    const [state1, setState1] = useState({
        jobtitle: "",
        functions: "",
        responsibility: [],
        requirment: [],
        benefits: [],
        industry: "",
        type: "",
        level: "",
        description: ""

    })
    const DataContext = createContext();
    const route = [
        { name: "Home", route: "/" },
        { name: "Job" },
        { name: "Edit Post job" },

    ]
    const onhandlechange = (e) => {
        const { name, value } = e.target
        setState({ ...state, [name]: value })
        console.log(state);
    }

    // console.log(state1);

    return (
        <div>
            <BasicBreadcrumbs route={route} />
            <h4 >{post ? "Edit Job" : "Post Job"}</h4>
            <div className="w-75 m-auto p-2 z-depth-5 shadow-box-example rounded">
                <Stepper
                    activeStep={goSteps}
                    completedBgColor="gray"
                    styleConfig={{
                        completedBgColor: "#ff6b01",
                        activeBgColor: "#ff6b01",
                        activeTextColor: "#fff",
                    }}
                >
                    <Step label="Basic Details" >
                        <BiPencil />
                    </Step>
                    <Step label="Job Description" >
                        <BiFolderOpen />
                    </Step>
                    <Step label="Job Function">
                        <BsReverseLayoutTextSidebarReverse size={13} />
                    </Step>
                    <Step label="Preview" >
                        <BiCheck size={24} />
                    </Step>
                </Stepper>

                <Formik initialValues={state}>
                    {({ values, handleChange, handleSubmit }) => (<Form onSubmit={(e) => {
                        e.preventDefault()
                        handleSubmit()
                    }}>
                        {console.log(values, "is the values")}
                        {goSteps === 0 && (
                            <Step1 handleChange={handleChange} values={values} setGoSteps={setGoSteps} state={state1} setState={setState1} />
                        )}

                        {goSteps === 1 && (
                            <Step2 handleChange={handleChange} values={values} setGoSteps={setGoSteps} state={state1} setState={setState1} />
                        )}
                        {goSteps === 2 && (
                            <Step3 handleChange={handleChange} values={values} setGoSteps={setGoSteps} state={state1} setState={setState1} />
                        )}
                        {goSteps === 3 && (
                            <Step4 handleChange={handleChange} values={values} setGoSteps={setGoSteps} state={state1} setState={setState1} />
                        )}
                    </Form>)}
                </Formik>
            </div>
        </div>
    )
}
export default Post_Job