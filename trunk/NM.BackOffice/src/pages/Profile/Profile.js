import React, { createContext, useContext, useEffect, useState } from "react";
import { Alert, Button, Col, Form, Modal, Row, Tab, Tabs } from "react-bootstrap";
import BasicBreadcrumbs from "../../components/breadcumbs";
import { AiOutlineUser } from "react-icons/ai";
import { FiMail, FiUser } from "react-icons/fi";
import { GrLocation } from "react-icons/gr";
import { initialValues, validationschemeaa } from "../postJobs/validation-schema";
import { Input } from "../../components/commoninputfield";
import { ErrorMessage, Field, Formik } from "formik";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import * as yup from "yup";
import { GET_profile_data, Profile_Data, Update_Profile_Data, Update_Profile_Password } from "../../Services/redux/action/action";

//export const context=createContext()
const Profile = () => {
    const [data, setData] = useState()
    const [data1, getdata] = useState("")
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(GET_profile_data())

    }, [])
    let selector = useSelector(state => state)
    useEffect(() => {
        getdata(selector?.data?.apidata?.profile_data)
        //console.log("this is the profile page", data1)
    }, [selector])
    //const [array,setArray]=useState([])
    const [formErrors, setFormErrors] = useState()
    const [value, setValues] = useState()
    const [show, setShow] = useState(false)
    const [state, setState] = useState({
        name: "Ganesh",
        phone: 9803836866,
        email: "ganeshsharma5073@gmail.com",
        location: "Mohali",
        image: "/assets/images/shi.jpg"
    })
    const [state1, setState1] = useState({
        User: "",
        oldpassword: "",
        confirm: "",
        profile_password: ""

    })
    useEffect(() => {
        setData(selector?.data?.apidata?.profile_data)
        //console.log("this is the profile page", selector?.data?.apidata?.profile_data)
    }, [selector])

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

        // setState({
        //     name: "",
        //     phone: "",
        //     email: "",
        //     location: ""
        // })
        // resetForm()
    }
    const validationSchema = yup.object({
        oldpassword: yup
            .string()
            .required()
            .max(64)
            .label("Old Password"),
        profile_password: yup
            .string()
            .required()
            .max(64)
            .label("New Password"),
        confirm: yup
            .string()
            .required()
            .max(64)
            .oneOf([yup.ref("profile_password"), null], "New password does not match")
            .label("New Password Confirmation")
    });

    const handleFormSubmit1 = (values) => {
        // const { name, value } = values
        // setState({ ...state, [name]: value })
        state.User = values.User
        state.pass = values.pass
        setState1({ ...state })
        // setState({
        //     name: "",
        //     phone: "",
        //     email: "",
        //     location: ""
        // })
        // resetForm()
    }
    return (
        <div className="main-content-holder">
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

                                <img src={state.image} name="image" className="profile-image" />
                                <input type="file" className="uploadButton" name="image" onChange={(e) => {
                                    var file = e?.target.files[0];
                                    let reader = new FileReader();
                                    reader.readAsDataURL(file);
                                    reader.onload = () => {
                                        setState({
                                            ...state,
                                            image: reader.result
                                        })
                                    };
                                    reader.onerror = function (error) {
                                        console.log("Error: ", error);
                                    };
                                }} />
                            </div>
                            <div className="card-heading4"><h4>Welcome, <strong>{data1?.name}</strong></h4>
                                <div className="inner_heading">
                                    <div className="inner-heading-icon1"> <FiUser size={10} /><span><b>Admin</b></span></div>
                                    <div className="inner-location-email">
                                        <div className="text-muted inner-heading-icon "><GrLocation size={12} />{data1?.location}</div>
                                        <div className="text-muted  inner-heading-icon"><FiMail size={12} />{data1?.email}</div>
                                    </div>
                                </div>
                            </div>
                            <div className="prfille-back-btn">
                                <Button variant="secondary"
                                    className="btn-sm"
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
                    className="mb-3  tab_border_zero"
                >
                    <Tab eventKey="Overview" title="Profle" className="">
                        <Row>
                            <Col>
                                <Formik initialValues={state}  >
                                    {({ values, handleSubmit, handleChange }) => (
                                        <form onSubmit={(e) => {
                                            e.preventDefault()
                                            dispatch(Update_Profile_Data(values

                                            ))
                                            handleSubmit()
                                        }}>
                                            <div className="main-Profile-card1">
                                                <div className="prfile-card11">
                                                    <div className="inner-profile1">
                                                        <div className=""><h6>{edit ? "Profile Details" : "Edit Profile"}</h6></div>
                                                        <div className="changeable_btn">{edit ? <Button variant="primary" className="btn-sm" onClick={() => {
                                                            setVisible(false)
                                                            setEdit(p => !p)
                                                        }}>Edit Profile</Button> : <Button variant="secondary" className="btn-sm" onClick={() => {
                                                            setEdit(p => !p)
                                                            setVisible(true)
                                                        }}>Back</Button>}
                                                            <Button variant="primary" type="submit" className="btn-sm" onClick={() => {
                                                                alert("Data Update successful")
                                                                setEdit(true)
                                                            }} disabled={visible}>Save</Button>
                                                        </div>
                                                    </div>
                                                </div>
                                                {edit ?
                                                    <div className="mainform">
                                                        <div className="formData">
                                                            <div className="innerform">Full Name</div>
                                                            <div className="innerform1">{data1?.name}</div>
                                                        </div>
                                                        <div className="formData">
                                                            <div className="innerform">Phone Number</div>
                                                            <div className="innerform1">{data1?.phone}</div>
                                                        </div>
                                                        <div className="formData">
                                                            <div className="innerform">Email</div>
                                                            <div className="innerform1">{data1?.email}</div>
                                                        </div>
                                                        <div className="formData">
                                                            <div className="innerform">Address</div>
                                                            <div className="innerform1">{data1?.location}</div>
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
                                <Formik initialValues={state1} validationSchema={validationSchema} onSubmit={(values, { resetForm }) => {
                                    console.log(values.oldpassword, "profile passowrd")
                                    if (data1.profile_password === values.oldpassword) {
                                        dispatch(Update_Profile_Password(values.profile_password))
                                        alert("Data Update successful")
                                        setEdit(true)
                                    }
                                    else {
                                        return <ErrorMessage name={"oldpassword"} component="div" className="text-danger input_error" />
                                    }
                                }} >
                                    {({ values, handleSubmit, handleChange, errors }) => (
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
                                                            <Button variant="primary" type="submit" className="btn-sm" onClick={() => {

                                                            }} disabled={visible}>Save</Button>
                                                        </div>
                                                    </div>
                                                </div>
                                                {edit ?
                                                    <div className="mainform">
                                                        <div className="formData">
                                                            <div className="innerform">UserName</div>
                                                            <div className="innerform1">{data1?.username}</div>
                                                        </div>
                                                        <div className="formData">
                                                            <div className="innerform">Password</div>
                                                            <div className="innerform1">{data1?.profile_password}</div>
                                                        </div>
                                                    </div>
                                                    :
                                                    <div className="mainform">
                                                        <div className="formData">
                                                            <div className="innerform">Old Password</div>
                                                            <div className="innerform1"><Form.Group controlId="formBasicEmail">
                                                                <Field className="forms_input input_error" type="password" name="oldpassword" onChange={handleChange}
                                                                />
                                                            </Form.Group>
                                                                <ErrorMessage name={"oldpassword"} component="div" className="text-danger" />
                                                            </div>
                                                        </div>
                                                        <div className="formData">
                                                            <div className="innerform">New Password</div>
                                                            <div className="innerform1"><Form.Group controlId="formBasicEmail">
                                                                <Field type="password" name="profile_password" className="forms_input input_error" onChange={handleChange} /></Form.Group>
                                                            </div>
                                                        </div>
                                                        <div className="formData">
                                                            <div className="innerform">Confirm Password</div>
                                                            <div className="innerform1"><Form.Group controlId="formBasicEmail">
                                                                <Field type="password" name="confirm" className={"input_error forms_input"} onChange={handleChange} />
                                                                <ErrorMessage name={"confirm"} component="div" className="text-danger" />
                                                            </Form.Group></div>
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