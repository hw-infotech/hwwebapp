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

const Post_Job = () => {
    const [goSteps, setGoSteps] = useState(0);
    const [state, setState] = useState({
        jobtitle: "",
        jobfunction: "",
        responsibility: [],
        requirment: [],
        benefits: [],
        industry: "",
        employement: "",
        seneritylevel: "",
        jobdescription: ""

    })
    const route = [
        { name: "Home", route: "/" },
        { name: "Job", route: "/" },
        { name: "Edit Post job", route: "/" },

    ]
    const onhandlechange = (e) => {
        const { name, value } = e.target
        setState({ ...state, [name]: value })
        console.log(state);

    }

    return (
        <div>
            <BasicBreadcrumbs route={route} />
            <h4>Post a New Job</h4>
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
                    <Step onClick={() => setGoSteps(0)} label="Basic Details" >
                        <BiPencil />
                    </Step>
                    <Step onClick={() => setGoSteps(1)} label="Job Description" >
                        <BiFolderOpen />
                    </Step>
                    <Step onClick={() => setGoSteps(2)} label="Job Function" >
                        <BsReverseLayoutTextSidebarReverse size={13} />
                    </Step>
                    <Step onClick={() => setGoSteps(3)} label="Finish" >
                        <BiCheck size={24} />
                    </Step>
                </Stepper>

                <Formik initialValues={initialValues}>
                    {({ handleChange, handleSubmit }) => (<Form onSubmit={(e) => {
                        e.preventDefault()
                        handleSubmit()
                    }}>
                        {goSteps === 0 && (
                            <Step1 handleChange={handleChange} setGoSteps={setGoSteps} state={state} setState={setState} />
                        )}

                        {goSteps === 1 && (
                            <Step2 handleChange={handleChange} setGoSteps={setGoSteps} state={state} setState={setState} />
                        )}
                        {goSteps === 2 && (
                            <Step3 handleChange={handleChange} setGoSteps={setGoSteps} state={state} setState={setState} />
                        )}
                        {goSteps === 3 && (
                            <Step4 handleChange={handleChange} setGoSteps={setGoSteps} state={state} setState={setState} />
                        )}
                    </Form>)}
                </Formik>
            </div>
        </div>
    )

}
export default Post_Job