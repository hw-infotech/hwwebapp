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
            <div>
                <Stepper activeStep={goSteps} completedBgColor="gray"
                styleConfig={{
                    completedBgColor:"#9A0000",

                }}
                >
                    <Step onClick={() => setGoSteps(0)} label="Basic Details" ><BiPencil /></Step>
                    <Step onClick={() => setGoSteps(1)} label="Job Description" ><BiFolderOpen /></Step>
                    <Step onClick={() => setGoSteps(2)} label="Job Function" ><BsReverseLayoutTextSidebarReverse size={13} /></Step>
                    <Step onClick={() => setGoSteps(3)} label="Finish" ><BiCheck size={24} /></Step>
                </Stepper>
                {goSteps === 0 && (
                    <div className="main-wrap-box">
                        <Row>
                            <Col md={12}>
                                <div className="wraping-box">
                                    <div className="wrap-fields">
                                        <div className="w-100">
                                            <Form.Label>Requirement</Form.Label>
                                            <CreatableSelectField
                                                name="requirment"
                                                placeholder="Type and press tab button..."
                                                formState={state}
                                                setFormState={setState}
                                            /></div>
                                        <div className="w-100">
                                        <Form.Group>
                                        
                                            <Form.Label>Responsibility</Form.Label>
                                            <CreatableSelectField
                                                name="responsibility"
                                                placeholder="Type and press tab button..."
                                                formState={state}
                                                setFormState={setState}
                                            />
                                       
                                    </Form.Group>
                                        </div>
                                        
                                    </div>
                                    <div className="wrap-fields">
                                    <div className="w-100">
                                        <Form.Label>Requirement</Form.Label>
                                        <CreatableSelectField
                                            name="requirment"
                                            placeholder="Type and press tab button..."
                                            formState={state}
                                            setFormState={setState}
                                        /></div>
                                    <div className="w-100">
                                    <Form.Group>
                                    
                                        <Form.Label>Responsibility</Form.Label>
                                        <CreatableSelectField
                                            name="responsibility"
                                            placeholder="Type and press tab button..."
                                            formState={state}
                                            setFormState={setState}
                                        />
                                   
                                </Form.Group>
                                    </div>
                                    
                                </div>
                                </div>
                            </Col>
                        </Row>
                        <div className="main-job-div">
                            <Button variant="primary" className="post-btn" onClick={() => setGoSteps(1)}>Next</Button>
                        </div>
                    </div>
                )}
                {goSteps === 1 && (
                    <div >
                        <Row>
                            <Col md={12}>
                                <div>
                                    <Form.Label>Requirement</Form.Label>
                                    <CreatableSelectField
                                        name="requirment"
                                        placeholder="Type and press tab button..."
                                        formState={state}
                                        setFormState={setState}
                                    />
                                </div>
                            </Col>
                        </Row>
                        <div className="wrap_box">
                            <Button variant="primary" onClick={() => setGoSteps(2)}>Next</Button>
                            <Button variant="primary" onClick={() => setGoSteps(0)}>Back</Button>
                        </div>

                    </div>
                )}
                {goSteps === 2 && (
                    <div className="wrap_box">
                        <Form.Label>Requirement</Form.Label>
                        <CreatableSelectField
                            name="requirment"
                            placeholder="Type and press tab button..."
                            formState={state}
                            setFormState={setState}
                        />



                        <Button variant="primary" onClick={() => setGoSteps(3)}>Next</Button>
                        <Button variant="primary" onClick={() => setGoSteps(1)}>Back</Button>
                    </div>
                )}
                {goSteps === 3 && (
                    <div className="wrap_box">
                        <Button variant="primary" onClick={() => setGoSteps(2)}>Back</Button>
                        <Button variant="primary" onClick={() => setGoSteps(3)}>Next</Button>
                    </div>
                )}
            </div>

        </div>

    )

}
export default Post_Job