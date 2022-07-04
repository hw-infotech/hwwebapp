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
import Update_Step1 from "./update_step1";
import Update_Step2 from "./update_step2";
import Update_Step3 from "./update_step3";
import Update_Step4 from "./updata_step4";
import { createContext } from "react";
import { useSelector } from "react-redux";

const Update_Job = ({ stat }) => {

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
    const selector = useSelector(state => state)

    useEffect(() => {
        setState(selector.data?.apidata?.edit_data?.data)
    }, [selector])

    const DataContext = createContext();
    const route = [
        { name: "Home", route: "/" },
        { name: "Job" },
        { name: "Post job" },
    ]

    const handlechange = (e) => {
        const { name, value } = e.target
        setState({ ...state, [name]: value })
    }

    console.log(state,"state");
    let tiitle = localStorage?.getItem("key")
    return (
        <div>
            <BasicBreadcrumbs route={route} />
            <h4 >{tiitle}</h4>
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
                <Form onSubmit={(e) => {
                    e.preventDefault()
                }}>
                    {goSteps === 0 && (
                        <Update_Step1 handlechange={handlechange} setGoSteps={setGoSteps} state={state} setState={setState} />
                    )}

                    {goSteps === 1 && (
                        <Update_Step2 handlechange={handlechange} setGoSteps={setGoSteps} state={state} setState={setState} />
                    )}
                    {goSteps === 2 && (
                        <Update_Step3 handlechange={handlechange} setGoSteps={setGoSteps} state={state} setState={setState} />
                    )}
                    {goSteps === 3 && (
                        <Update_Step4 handlechange={handlechange} setGoSteps={setGoSteps} state={state} setState={setState} />
                    )}
                </Form>
            </div>
        </div>
    )
}
export default Update_Job