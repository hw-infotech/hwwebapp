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
import CreatableInputOnly from "./customInput";
const Post_New_Job = () => {
    const [key, setKey] = useState('Create');
    const [state, setState] = useState({
        jobtitle: "",
        jobfunction: "",
        responsibility: "",
        requirment: "",
        benefits: "",
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

    }
    console.log(state);
    return (
        <div>
            <BasicBreadcrumbs route={route} />
            <div className="content_center margin_bottom_ ">
                <div className="topGapPad p-3 w-100">
                    <Tabs activeKey={key} id="uncontrolled-tab-example" className="mb-3">
                        <Tab eventKey="Create" title="Create">

                            <Formik initialValues={initialValues} validationSchema={validationschemeaa}>
                                {() => (
                                    <form onSubmit={(e) => {
                                        e.preventDefault()
                                    }}>
                                        <div className="boxshadow">
                                            <h4>Post a New Job</h4>
                                            <div className="content_center">
                                                <div className="add_new_post_padding_between_field w-100">

                                                    <Form.Group className="mb-3" controlId="Jobtitle">

                                                        <Input as='select' name='jobtitle' onChange={onhandlechange} label={"Job title"} id="name" className="form-control" options={[
                                                            { value: "..." },
                                                            { value: "UI/UX" },
                                                            { value: "Project Manager" },
                                                            { value: "Web Development" },
                                                        ]} >
                                                        </Input>
                                                    </Form.Group>
                                                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1" >
                                                        <Form.Label>Enter Descritption</Form.Label>
                                                        <Form.Control as="textarea" rows={4} name="jobdescription" value={state.jobdescription} onChange={onhandlechange} />
                                                    </Form.Group>
                                                    <Form.Group>
                                                        <Input type='text' placeholder='Job Function' className="form-control" name=' jobfunction' label={"Job Function"} id="name" />
                                                    </Form.Group>
                                                    <Form.Group>
                                                        <Input type='text' placeholder='Responsibility' className="form-control" name='responsibility ' label={"Job Function"} id="name" />

                                                    </Form.Group>
                                                </div>
                                                <div className="add_new_post_padding_between_field w-100" >
                                                    <Form.Group className="">
                                                        <Input
                                                            type='text'
                                                            className="form-control"
                                                            placeholder='Requirments'
                                                            name='requirment'
                                                            value={state.requirment}
                                                            onChange={onhandlechange}
                                                            label={"Requirments"}
                                                        // id="requirements"
                                                        />
                                                    </Form.Group>
                                                    <Form.Group>
                                                        <Input type='text' placeholder='Industries' className="form-control" name='industry' label={"Industries"} id="name" />
                                                    </Form.Group>
                                                    <Form.Group>
                                                        <Input type='text'
                                                            className="form-control"
                                                            placeholder="Benefits"
                                                            name='benefits'
                                                            label="Benefits"
                                                            id="name"
                                                        />
                                                    </Form.Group>
                                                    <Form.Group>
                                                        <Input as='select' placeholder="Senority Level" className="form-control" name='seneritylevel' value={onchange} label={"Senority Level"} id="name" options={[
                                                            { value: "" },
                                                            { value: "Senior" },
                                                            { value: "Junior" },

                                                        ]} ></Input>
                                                    </Form.Group>
                                                    <Form.Group>
                                                        <Input as='select' className="form-control" placeholder="Employement type" name='employement' label={"Employement type"} id="name" options={[
                                                            { value: "...." },
                                                            { value: "one" },
                                                            { value: "two" },
                                                            { value: "three" },
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
                            <div style={{ justifyContent: "end", display: "flex" }}><Button variant="primary" onClick={() => {
                                setKey("Create")
                            }}><BiEdit /></Button></div>
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
                                                        <Input as='select' name='jobtitle' label={"Job title"} id="name" className="form-control" options={[
                                                            { value: "..." },
                                                            { value: "UI/UX" },
                                                            { value: "Project Manager" },
                                                            { value: "Web Development" },
                                                        ]} >
                                                        </Input>
                                                    </Form.Group>
                                                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                                        <Form.Label>Enter Descritption</Form.Label>
                                                        <Form.Control as="textarea" rows={4} />
                                                    </Form.Group>
                                                    <Form.Group>
                                                        <Input type='text' placeholder='Job Function' className="form-control" name='jobfunction' label={"Job Function"} id="name" />
                                                    </Form.Group>
                                                    <Form.Group>
                                                        <Input
                                                            type='text'
                                                            placeholder='Responsibility'
                                                            name='responsibility'
                                                            label="Responsibility"
                                                            className="form-control"
                                                        />
                                                    </Form.Group>
                                                </div>
                                                <div className="add_new_post_padding_between_field w-100">
                                                    <Form.Group >
                                                        <Input
                                                            type='text'
                                                            className="form-control"
                                                            placeholder='Requirments'
                                                            name='requirements'
                                                            label={"Requirments"}
                                                        // id="requirements"
                                                        />
                                                    </Form.Group>
                                                    <Form.Group>
                                                        <Input type='text' placeholder='Industries' className="form-control" name='industries' label={"Industries"} id="name" />
                                                    </Form.Group>
                                                    <Form.Group>
                                                        <Input type='text'
                                                            className="form-control"
                                                            placeholder="Benefits"
                                                            name='benefits'
                                                            label="Benefits"
                                                            id="name"
                                                        />
                                                    </Form.Group>
                                                    <Form.Group>
                                                        <Input as='select' placeholder="Senority Level" className="form-control" name='senoritylevel' label={"Senority Level"} id="name" options={[
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
                        </Tab>
                    </Tabs>

                </div>
                <Modal show={show} onHide={handleClose} size="lg">
                    <Modal.Header closeButton>
                        <Modal.Title>Preivew Page
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="topGapPad p-3">

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
        </div>
    )
}
export default Post_New_Job