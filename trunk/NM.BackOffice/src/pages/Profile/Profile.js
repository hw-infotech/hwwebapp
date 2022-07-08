import React, { useState } from "react";
import { Alert, Button, Col, Form, Modal, Row, Tab, Tabs } from "react-bootstrap";
import BasicBreadcrumbs from "../../components/breadcumbs";
import { AiOutlineUser } from "react-icons/ai";
import { FiMail, FiUser } from "react-icons/fi";
import { GrLocation } from "react-icons/gr";
import { initialValues, validationschemeaa } from "../postJobs/validation-schema";
import { Input } from "../../components/commoninputfield";
import { ErrorMessage, Formik } from "formik";

import { useNavigate } from "react-router";

const Profile = () => {
    //const [array,setArray]=useState([])
    const [show, setShow] = useState(false)
    const [state, setState] = useState({
        name: "Ganesh",
        phone: 9803836866,
        email: "ganeshsharma5073@gmail.com",
        location: "Mohali"
    })
    const [state1, setState1] = useState({
        User: "Ganesh",
        pass: 123456,
        confirm:0
       
    })
    const [key, setKey] = useState()
    const [visible, setVisible] = useState(true)
    const [edit, setEdit] = useState(true)
    const history = useNavigate()

    const route = [
        { name: "Home", route: "/" },
        { name: "User", route: "/" },
        { name: "Profile", route: "/" }
    ]
    const handleFormSubmit = (values) => {
        // const { name, value } = values
        // setState({ ...state, [name]: value })

        state.name = values.name
        state.email = values.email
        state.location = values.location
        state.phone = values.phone

        setState({ ...state })
        console.log(state)

        // setState({
        //     name: "",
        //     phone: "",
        //     email: "",
        //     location: ""
        // })
        // resetForm()
    }
    const handleFormSubmit1 = (values) => {
        // const { name, value } = values
        // setState({ ...state, [name]: value })

        state.User = values.User
        state.pass = values.pass
        setState1({ ...state })
        console.log(state)

        // setState({
        //     name: "",
        //     phone: "",
        //     email: "",
        //     location: ""
        // })
        // resetForm()
    }
    return (
        <div className="margin_bottom_">
            <BasicBreadcrumbs route={route} />
            <h4>Profile</h4>
            <Row>
                <Col md={12} xl={12}>
                    <div className="main-Profile-card">
                        <div className="Profile-card">
                            { /*                           <div className="profile-image">
                           <img src="" className="profile-image11" />
                        </div>*/}
                            <div className="buttonContainer">
                                <img src="/assets/images/team_nestormind.png" className="image" />
                                <input type="file" className="uploadButton" />
                            </div>
                            <div className="card-heading4"><h3>Welcome, <strong>{state.name}</strong></h3>
                                <div className="inner_heading">
                                    <div className="inner-heading-icon1"> <FiUser size={10} /><span><b>Admin</b></span></div>
                                    <div className="inner-location-email">
                                        <div className="text-muted inner-heading-icon "><GrLocation size={12} /> {state.location}</div>
                                        <div className="text-muted  inner-heading-icon"><FiMail size={12} />{state.email}</div>
                                    </div>
                                </div>
                            </div>
                            <div className="prfille-back-btn">
                                <Button variant=""
                                    className="popoup-btn"
                                    style={{ float: "right" }}
                                    onClick={() => {
                                        history(-1)
                                    }} >Back</Button>
                            </div>

                        </div>
                    </div>
                </Col>
            </Row>
            <div className="profile_form">
                <Tabs
                    id="controlled-tab-example"
                    activeKey={key}
                    onSelect={(k) => setKey(k)}
                    className="mb-3  tab_changes"
                >
                    <Tab eventKey="Overview" title="Overview" className="">
                        <Row>
                            <Col>
                                <Formik initialValues={state}
                                    onSubmit={handleFormSubmit}>
                                    {({ values, handleSubmit, handleChange }) => (
                                        <form onSubmit={(e) => {
                                            e.preventDefault()
                                            handleSubmit()
                                        }}>
                                            <div className="main-Profile-card1">
                                                <div className="prfile-card11">
                                                    <div className="inner-profile1">
                                                        <div className=""><h6>{edit ? "Profile Details" : "Edit Profile"}</h6></div>
                                                        <div className="changeable_btn">{edit ? <Button variant="primary" className="btn-sm" onClick={() => {
                                                            setVisible(false)
                                                            setEdit(p => !p)
                                                        }}>Edit Profile</Button> : <Button variant="secondry" className="btn-sm" onClick={() => {
                                                            setEdit(p => !p)
                                                            setVisible(true)
                                                        }}>Back</Button>}
                                                            <div><Button variant="primary" type="submit" className="btn-sm" onClick={() => {
                                                                alert("Data Update successful")
                                                                setEdit(true)

                                                            }} disabled={visible}>Save</Button></div>
                                                        </div>

                                                    </div>
                                                </div>
                                                {edit ?
                                                    <div className="mainform">
                                                        <div className="formData">
                                                            <div className="innerform">Full Name</div>
                                                            <div className="innerform1">{state.name}</div>
                                                        </div>
                                                        <div className="formData">
                                                            <div className="innerform">Phone Number</div>
                                                            <div className="innerform1">{state.phone}</div>
                                                        </div>
                                                        <div className="formData">
                                                            <div className="innerform">Email</div>
                                                            <div className="innerform1">{state.email}</div>
                                                        </div>
                                                        <div className="formData">
                                                            <div className="innerform">Address</div>
                                                            <div className="innerform1">{state.location}</div>
                                                        </div>
                                                    </div>
                                                    :
                                                    <div className="mainform">
                                                        <div className="formData">
                                                            <div className="innerform">Full Name</div>
                                                            <div className="innerform1"><Form.Group controlId="formBasicEmail">
                                                                <Form.Control className="forms_input" name="name" type="text" onChange={handleChange} value={values.name} /></Form.Group></div>
                                                        </div>
                                                        <div className="formData">
                                                            <div className="innerform">Phone Number</div>
                                                            <div className="innerform1"><Form.Group controlId="formBasicEmail">
                                                                <Form.Control type="number" name="phone" className="forms_input" onChange={handleChange} value={values.phone} /></Form.Group></div>
                                                        </div>
                                                        <div className="formData">
                                                            <div className="innerform">Email</div>
                                                            <div className="innerform1"><Form.Group controlId="formBasicEmail">
                                                                <Form.Control type="email" name="email" className="forms_input" onChange={handleChange} value={values.email} /></Form.Group></div>
                                                        </div>
                                                        <div className="formData">
                                                            <div className="innerform">Address</div>
                                                            <div className="innerform1"><Form.Group controlId="formBasicEmail">
                                                                <Form.Control type="text" name="location" className="forms_input" onChange={handleChange} value={values.location} /></Form.Group></div>
                                                        </div>
                                                    </div>

                                                }
                                            </div>
                                        </form>
                                    )}
                                </Formik>
                            </Col>
                        </Row>
                    </Tab>
                    <Tab eventKey="Security" title="Security">
                    <Row>
                    <Col>
                        <Formik initialValues={state1}
                            onSubmit={handleFormSubmit1}>
                            {({ values, handleSubmit, handleChange }) => (
                                <form onSubmit={(e) => {
                                    e.preventDefault()
                                    handleSubmit()
                                }}>
                                    <div className="main-Profile-card1">
                                        <div className="prfile-card11">
                                            <div className="inner-profile1">
                                                <div className=""><h6>{edit ? "Profile Details" : "Edit Profile"}</h6></div>
                                                <div className="changeable_btn">{edit ? <Button variant="primary" className="btn btn-sm" onClick={() => {
                                                    setVisible(false)
                                                    setEdit(p => !p)
                                                }}>Change Password</Button> : <Button variant="secondary" className="btn-sm" onClick={() => {
                                                    setEdit(p => !p)
                                                    setVisible(true)
                                                }}>Back</Button>}
                                                    <div><Button variant="primary" type="submit" className="btn-sm" onClick={() => {
                                                        alert("Data Update successful")
                                                        setEdit(true)

                                                    }} disabled={visible}>Save</Button></div>
                                                </div>

                                            </div>
                                        </div>
                                        {edit ?
                                            <div className="mainform">
                                                <div className="formData">
                                                    <div className="innerform">UserName</div>
                                                    <div className="innerform1">{state1.User}</div>
                                                </div>
                                                <div className="formData">
                                                    <div className="innerform">Password</div>
                                                    <div className="innerform1">{state1.pass}</div>
                                                </div>
                                              
                                            </div>
                                            :
                                            <div className="mainform">
                                                <div className="formData">
                                                    <div className="innerform">Old Password</div>
                                                    <div className="innerform1"><Form.Group controlId="formBasicEmail">
                                                        <Form.Control className="forms_input" type="number" onChange={handleChange} /></Form.Group></div>
                                                </div>
                                                <div className="formData">
                                                    <div className="innerform">New Password</div>
                                                    <div className="innerform1"><Form.Group controlId="formBasicEmail">
                                                        <Form.Control type="number" name="pass" className="forms_input" onChange={handleChange}  /></Form.Group></div>
                                                </div>
                                                <div className="formData">
                                                    <div className="innerform">Confirm Password</div>
                                                    <div className="innerform1"><Form.Group controlId="formBasicEmail">
                                                        <Form.Control type="number" name="confirm" className="forms_input" onChange={handleChange}  /></Form.Group></div>
                                                </div>
                                               
                                            </div>

                                        }
                                    </div>
                                </form>
                            )}
                        </Formik>
                    </Col>
                </Row>
                    </Tab>
                </Tabs>
            </div>
        </div>
    )
}
export default Profile