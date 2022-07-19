import { Field, Formik } from "formik";
import React, { useCallback, useEffect, useState } from "react";
import { Button, Form, FormControl, InputGroup, Modal, Tab, Tabs } from "react-bootstrap";
import BasicBreadcrumbs from "../../components/breadcumbs";
import { Input } from '../../components/commoninputfield'
import { initialValues, validationschemeaa } from "./validation-schema";
import { BiEdit } from "react-icons/bi";
import Creatable, { useCreatable } from 'react-select/creatable';
import CreatableSelect from 'react-select/creatable';
import { ActionMeta, OnChangeValue } from 'react-select';
import { Link } from "react-router-dom";
import { date } from "yup";
import CreatableSelectField from "../../components/selectfield";
const Post_New_Job = () => {
    const [key, setKey] = useState('Create');
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
    const [value, setValue] = useState("")
    const handleShow = () => setShow(true);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);

    const route = [
        { name: "Home", route: "/" },
        { name: "Job", route: "/" },
        { name: "Post a New Job", route: "/" },
    ]
    const onhandlechange = (e) => {
        const { name, value } = e.target
        setState({ ...state, [name]: value })
        console.log(state);

    }
    console.log(state);
    return (
        <div>
            <BasicBreadcrumbs route={route} />
            <h4>Post a New Job</h4>
            <div className="content_center margin_bottom_ ">
                <div className="topPadding-10 p-3 w-100">
                    <Tabs activeKey={key} id="uncontrolled-tab-example" className="mb-3">
                        <Tab eventKey="Create" title="Create">

                            <Formik initialValues={initialValues} validationSchema={validationschemeaa}>
                                {() => (
                                    <form onSubmit={(e) => {
                                        e.preventDefault()
                                    }}>
                                        <div className="boxshadow">

                                            <div className="content_center">
                                                <div className="add_new_post_padding_between_field w-100">
                                                    <Form.Group className="mb-3">
                                                        <Input as='select' name='jobtitle' onChange={onhandlechange} label={"Job title"} id="jobtitle" className="form-control" options={[
                                                            { value: "...", label: "..." },
                                                            { value: "UI/UX", label: "UI/UX" },
                                                            { value: "Project Manager", label: "Project Manager" },
                                                            { value: "Web Development", label: "Web Development" },
                                                        ]} >
                                                        </Input>
                                                    </Form.Group>
                                                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1" >
                                                        <Form.Label>Enter Descritption</Form.Label>
                                                        <Form.Control as="textarea"  rows={3} name="jobdescription" value={state.jobdescription} onChange={onhandlechange} />
                                                    </Form.Group>
                                                    <Form.Group>
                                                        <Input type='text' placeholder='Job Function' className="form-control" name='jobfunction' label={"Job Function"} id="name" onChange={onhandlechange} />
                                                    </Form.Group>
                                                    <Form.Group>
                                                        <Form.Label>Requirement</Form.Label>
                                                        <CreatableSelectField
                                                            name="requirment"
                                                            placeholder="Type and press tab button..."
                                                            formState={state}
                                                            setFormState={setState}
                                                        />
                                                        {console.log("state ", state)}
                                                    </Form.Group>
                                                </div>
                                                <div className="add_new_post_padding_between_field w-100" >
                                                    <Form.Group className="">
                                                        <div style={{ marginBottom: "1rem" }}>
                                                            <Form.Label>Responsibility</Form.Label>
                                                            <CreatableSelectField
                                                                name="responsibility"
                                                                placeholder="Type and press tab button..."
                                                                formState={state}
                                                                setFormState={setState}
                                                            />
                                                        </div>
                                                    </Form.Group>
                                                    <Form.Group>
                                                        <Input type='text' placeholder='Industries' onChange={onhandlechange} className="form-control" name='industry' label={"Industries"} id="name" />
                                                    </Form.Group>
                                                    <Form.Group>
                                                        <Form.Label>Benefits</Form.Label>
                                                        <div style={{ marginBottom: "1rem" }}>
                                                            <CreatableSelectField
                                                                name="benefits"
                                                                formState={state}
                                                                setFormState={setState}
                                                                placeholder="Type and press tab button"
                                                            />
                                                        </div>
                                                    </Form.Group>
                                                    <Form.Group>
                                                        <Input as='select' placeholder="Senority Level" className="form-control" name='seneritylevel'
                                                            onChange={onhandlechange} label={"Senority Level"} id="seneritylevel" options={[
                                                                { value: "...", label: "..." },
                                                                { value: "Senior", label: "Senior" },
                                                                { value: "Junior", label: "Junior" },

                                                            ]} ></Input>
                                                    </Form.Group>
                                                    <Form.Group>
                                                        <Input as='select' className="form-control" onChange={onhandlechange} placeholder="Employement type" name='employement' label={"Employement type"} id="name" options={[
                                                            { value: "...", label: "..." },
                                                            { value: "Full time" },
                                                            { value: "Part time" },

                                                        ]} ></Input>
                                                    </Form.Group>
                                                </div>
                                            </div>
                                            <div className="justyfycontentright">
                                                <Button type="submit" variant="primary" eventKey="Create" onClick={() => {
                                                    setKey("Preview")
                                                }}>Next</Button>
                                            </div>
                                        </div>
                                    </form>
                                )}
                            </Formik>
                        </Tab>
                        <Tab eventKey="Preview" title="Preview">
                            <div className="editbtn"><Button variant="primary" onClick={() => {
                                setKey("Create")
                            }}><BiEdit /></Button></div>
                            <div className="jobdes_margin">
                                <div className="">
                                    <div className="main-pannle">
                                        <div className="leftt_pannel">
                                            <div className="jobdes_card">
                                                <div className="jobdes_marginbottom">
                                                    <img src="assets/images/nestor.jfif" height={80} width={80} />
                                                </div>
                                                <div className="titlejob">
                                                    <span>{state.jobtitle} - Mohali</span>
                                                </div>
                                                <div className="job_location d-flex jobdes_marginbottom">
                                                    <span >Nestormind </span>
                                                    <span> - Mohali</span>
                                                </div>
                                            </div>
                                            <div className="">
                                                <div className="job_heading">
                                                    <span className="" style={{ textDecoration: "unerlined" }}>Job Responsibility</span>
                                                </div>
                                                <div className="">
                                                    <ul className="job__list">
                                                        {state?.responsibility?.map((data, index) =>
                                                            <li className=""> {data?.value}</li>
                                                        )}
                                                    </ul>
                                                </div>
                                                <div className="job_heading">
                                                    <span className="" style={{ textDecoration: "unerlined" }}>Requirement</span>

                                                </div>
                                                <div className="">
                                                    <ul className="job__list">
                                                        {state?.requirment?.map((data, index) =>
                                                            <li className=""> {data?.value}</li>
                                                        )}
                                                    </ul>
                                                </div>
                                                <div className="job_heading">
                                                    <span className="" style={{ textDecoration: "unerlined" }}>Nestormind Full Time Employee Benefits</span>
                                                </div>
                                                <div className="">
                                                    <ul className="job__list">
                                                        {state?.benefits?.map((data, index) =>
                                                            <li className=""> {data?.value}</li>
                                                        )}
                                                    </ul>
                                                </div>
                                                <div style={{ marginTop: 80 }}>
                                                    <ul className="job_description_level_list">
                                                        <li>
                                                            <h3 className="job_description_level">Seniority level</h3>
                                                            <span>{state.seneritylevel}</span>
                                                        </li>
                                                        <li>
                                                            <h5 className="job_description_level">Employment type</h5>
                                                            <span>{state.employement}</span>
                                                        </li>
                                                        <li>
                                                            <h5 className="job_description_level">Job function</h5>
                                                            <span> {state.jobfunction}</span>
                                                        </li>
                                                        <li>
                                                            <h5 className="job_description_level">Industries</h5>
                                                            <span>{state.industry}</span>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div style={{ float: "right" }}> <Button variant="secondary">Submit</Button></div>
                                            </div>
                                        </div>
                                        { /*<div className="mediaqueiry" style={{ paddingLeft: 30 }}>
                                            <h4 className="right_pannle_main_heading">Nestormind Other Jobs</h4>
                                            <ul className="right_pannle_list">
                                                <li className="right_pannle_list_itmes">
                                                    <h6>Ui/UX Designer</h6>
                                                    <span>20 times</span>
                                                    <span className="job_date">Mohali, Punjab</span>
                                                    <span className="job_date">3 months ago   '
                                                        <Link to='uploadCv'><button type="button" className="right_pannle_button">Apply Now</button></Link>
                                                    </span>
                                                </li>
                                                <li className="right_pannle_list_itmes">
                                                    <h6>Product Manager</h6>
                                                    <span>10 times</span>
                                                    <span className="job_date">Mohali, Punjab</span>
                                                    <span className="job_date">1 months ago   '
                                                        <Link to='uploadCV'> <button type="button" className="right_pannle_button">Apply Now</button></Link>
                                                    </span>
                                                </li>
                                                <li className="right_pannle_list_itmes">
                                                    <h6>Marketing Manager</h6>
                                                    <span>20 times</span>
                                                    <span className="job_date">Mohali, Punjab</span>
                                                    <span className="job_date">2 months ago   '
                                                        <Link to='uploadCV'> <button type="button" className="right_pannle_button">Apply Now</button></Link>
                                                    </span>
                                                </li>
                                            </ul>
                                         </div>*/}
                                    </div>
                                </div>
                            </div>
                        </Tab>
                    </Tabs>
                </div>
                <Modal show={show} onHide={handleClose} size="lg">
                    <Modal.Header closeButton>
                        <Modal.Title>Preivew Page
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="topPadding-10 p-3">
                            <Formik initialValues={initialValues} validationSchema={validationschemeaa}>
                                {() => (
                                    <form onSubmit={(e) => {
                                        e.preventDefault()
                                    }}>
                                        <div className="boxshadow ">
                                            <h4>Post a New Job</h4>
                                            <div className="content_center">
                                                <div className="add_new_post_padding_between_field w-100">
                                                    <Form.Group className="mb-3" controlId="Jobtitle">
                                                        <Input as='select' className="form-control" name='jobtitle' label={"Job title"} id="name" options={[
                                                            { value: "..." },
                                                            { value: "UI/UX" },
                                                            { value: "Project Manager" },
                                                            { value: "Web Development" },
                                                        ]} >
                                                        </Input>
                                                    </Form.Group>
                                                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                                        <Form.Label>Enter Descritption</Form.Label>
                                                        <Form.Control as="textarea" rows={3} />
                                                    </Form.Group>
                                                    <Form.Group>
                                                        <Input type='text' className="form-control" placeholder='Job Function' name='jobfunction' label={"Job Function"} id="name" />
                                                    </Form.Group>

                                                    <Form.Group>
                                                        <Input
                                                            type='text'
                                                            className="form-control"
                                                            placeholder='Responsibility'
                                                            name='responsibility'
                                                            label={"Responsibility"}
                                                        />
                                                    </Form.Group>
                                                </div>
                                                <div className="add_new_post_padding_between_field w-100">
                                                    <Form.Group className="formGroup">
                                                        <Input
                                                            type='text'
                                                            className="form-control post_new_job_calcultextfield"
                                                            placeholder='Requirments'
                                                            name='requirements'
                                                            label={"Requirments"}
                                                        // id="requirements"
                                                        />
                                                    </Form.Group>
                                                    <Form.Group>
                                                        <Input type='text' className="form-control" placeholder='Industries' name='industries' label={"Industries"} id="name" />
                                                    </Form.Group>
                                                    <Form.Group>
                                                        <Input type='text'
                                                            className="form-control"
                                                            placeholder="Benefits"
                                                            name='benefits'
                                                            label={"Benefits"}
                                                            id="name"
                                                        />
                                                    </Form.Group>
                                                    <Form.Group>
                                                        <Input as='select' className="form-control" placeholder="Senority Level" name='senoritylevel' label={"Senority Level"} id="name" options={[
                                                            { value: "" },
                                                            { value: "Senior" },
                                                            { value: "Junior" },

                                                        ]} ></Input>
                                                    </Form.Group>
                                                    <Form.Group>
                                                        <Input as='select' className="form-control" placeholder="Employement type" name='employementtype' label={"Employement type"} id="name" options={[
                                                            { value: "...." },
                                                            { value: "one" },
                                                            { value: "two" },
                                                            { value: "three" },
                                                        ]} ></Input>
                                                    </Form.Group>
                                                </div>
                                            </div>
                                            <div className="justyfycontentright">
                                                <button type="submit" className="btn btn-primary" onClick={() => {

                                                }}>Submit</button>
                                            </div>
                                        </div>
                                    </form>
                                )}
                            </Formik>
                        </div>

                    </Modal.Body>
                </Modal>
            </div>
        </div >
    )
}
export default Post_New_Job