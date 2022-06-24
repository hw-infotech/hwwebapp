import React, { useState } from "react";
import { Button, Col, Form, Modal, Row, Tab, Tabs } from "react-bootstrap";
import BasicBreadcrumbs from "../../components/breadcumbs";
import { AiOutlineUser } from "react-icons/ai";
import { FiMail, FiUser } from "react-icons/fi";
import { GrLocation } from "react-icons/gr";
import { initialValues, validationschemeaa } from "../postJobs/validation-schema";
import { Input } from "../../components/commoninputfield";
import { ErrorMessage, Formik } from "formik";
import TooltipComp from "../../shared/Tooltipomp";
import { useNavigate } from "react-router";

const Profile = () => {
    const [key, setKey] = useState()
    const [visible, setVisible] = useState(true)
    const [edit, setEdit] = useState(true)
    const history = useNavigate()

    const route = [
        { name: "Home", route: "/" },
        { name: "User", route: "/" },
        { name: "Profile", route: "/" }
    ]

    return (
        <div className="margin_bottom_">
            <BasicBreadcrumbs route={route} />
            <h4>Profile</h4>
            <Row>
                <Col md={12} xl={12}>
                    <div className="main-Profile-card">
                        <div className="Profile-card">
                            <div className=""><img src="/assets/images/team_nestormind.png" className="profile-image" width={120} height={120} />
                            </div>
                            <div className="card-heading4"><h1>Welcome, <strong>Ganesh</strong></h1>
                                <div className="inner_heading">
                                    <div className="inner-heading-icon1"> <FiUser size={10} /><span><b>Admin</b></span></div>
                                    <div className="inner-location-email">
                                        <div className="text-muted inner-heading-icon "><GrLocation size={12} /> Mohali</div>
                                        <div className="text-muted  inner-heading-icon"><FiMail size={12} />Ganeshsharma5073@gmail.com</div>
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
                                <div className="main-Profile-card1">
                                    <div className="prfile-card11">
                                        <div className="inner-profile1">
                                            <div className=""><h6>{edit ? "Profile Details" : "Edit Profile"}</h6></div>
                                            <div className="changeable_btn">{edit ? <Button variant="" className="popoup-btn" onClick={() => {
                                                setVisible(false)
                                                setEdit(p => !p)
                                            }}>Edit Profile</Button> : <Button variant="" className="popoup-btn" onClick={() => {
                                                setEdit(p => !p)
                                                setVisible(true)
                                            }}>Back</Button>}
                                                <div><Button variant="" className="popoup-btn" disabled={visible}>Save</Button></div>
                                            </div>

                                        </div>
                                    </div>
                                    {edit ?
                                        <div className="mainform">
                                            <div className="formData">
                                                <div className="innerform">Full Name</div>
                                                <div className="innerform1">Ganesh</div>
                                            </div>
                                            <div className="formData">
                                                <div className="innerform">Phone Number</div>
                                                <div className="innerform1">9803836866</div>
                                            </div>
                                            <div className="formData">
                                                <div className="innerform">Email</div>
                                                <div className="innerform1">Ganeshsharma5073@gmail.com</div>
                                            </div>
                                            <div className="formData">
                                                <div className="innerform">Address</div>
                                                <div className="innerform1">Mohali</div>
                                            </div>
                                        </div>
                                        :
                                        <div className="mainform">
                                            <div className="formData">
                                                <div className="innerform">Full Name</div>
                                                <div className="innerform1"><Form.Group controlId="formBasicEmail">
                                                    <Form.Control className="forms_input" type="email" value={"Ganesh"} /></Form.Group></div>
                                            </div>
                                            <div className="formData">
                                                <div className="innerform">Phone Number</div>
                                                <div className="innerform1"><Form.Group controlId="formBasicEmail">
                                                    <Form.Control type="email" className="forms_input" value={"9803836866"} /></Form.Group></div>
                                            </div>
                                            <div className="formData">
                                                <div className="innerform">Email</div>
                                                <div className="innerform1"><Form.Group controlId="formBasicEmail">
                                                    <Form.Control type="email" className="forms_input" value={"ganeshsharma5073@gmail.com"} /></Form.Group></div>
                                            </div>
                                            <div className="formData">
                                                <div className="innerform">Address</div>
                                                <div className="innerform1"><Form.Group controlId="formBasicEmail">
                                                    <Form.Control type="email" className="forms_input" value={"Mohali"} /></Form.Group></div>
                                            </div>
                                        </div>
                                    }
                                </div>
                            </Col>
                        </Row>
                    </Tab>
                    <Tab eventKey="Security" title="Security">

                    </Tab>

                </Tabs>

            </div>


        </div >
    )
}
export default Profile