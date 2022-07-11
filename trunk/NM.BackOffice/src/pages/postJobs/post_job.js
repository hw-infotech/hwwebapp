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
import { useSelector } from "react-redux";
import { Send_data } from "../../Services/redux/action/action";
import { useDispatch } from "react-redux";

const Post_Job = ({ stat }) => {


    const [post, setpost] = useState()
    const [goSteps, setGoSteps] = useState(0);
    const [state, setState] = useState({
        jobtitle: "UI/UX",
        functions: "",
        responsibility: [],
        requirment: [],
        benefits: [],
        industry: "",
        type: "Full time",
        level: "Senior",
        description: ""

    })
    const selector = useSelector(state => state.data?.apidata?.edit_data?.data)

    const [state1, setState1] = useState({
        jobtitle: "",
        functions: "",
        responsibility: [],
        requirment: [],
        benefits: [],
        industry: "",
        type: "Full time",
        level: "Senior",
        description: ""

    })
    const DataContext = createContext();
    const route = [
        { name: "Home", route: "/" },
        { name: "Job" },
        { name: "Post job" },

    ]
    const onhandlechange = (e) => {
        const { name, value } = e.target
        setState({ ...state, [name]: value })

    }
    let tiitle = localStorage?.getItem("key")
    useEffect(() => {
        document.title = "Post job"
    }, [])
    const dispatch = useDispatch()
    return (
        <div>
            <BasicBreadcrumbs route={route} />
            <h4 >Post Job</h4>
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
                    <Step label="Basic Details" onClick={() => setGoSteps(0)} >
                        <BiPencil />
                    </Step>
                    <Step label="Requirement" onClick={() => setGoSteps(1)} >
                        <BiFolderOpen />
                    </Step>
                    <Step label="Type" onClick={() => setGoSteps(2)}>
                        <BsReverseLayoutTextSidebarReverse size={13} />
                    </Step>
                    <Step label="Preview" >
                        <BiCheck size={24} />
                    </Step>
                </Stepper>

                <Formik initialValues={state} onSubmit={(values, { resetForm }) => {

                    dispatch(Send_data(values))
                    resetForm()
                }}>
                    {({ values, handleChange, handleSubmit, handleReset }) => (<Form onSubmit={(e) => {

                        e.preventDefault()
                        handleSubmit()
                    }}>

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