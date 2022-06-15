import React, { useState } from "react";
import { Button, Col, Form, Modal, Row } from "react-bootstrap";
import BasicBreadcrumbs from "../../components/breadcumbs";
import { FcEditImage } from "react-icons/fc";
import { initialValues, validationschemeaa } from "../postJobs/validation-schema";
import { Input } from "../../components/commoninputfield";
import { ErrorMessage, Formik } from "formik";
import TooltipComp from "../../shared/Tooltipomp";
const Profile = () => {
    const [show, setShow] = useState()
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const route = [
        { name: "Home", route: "/" },
        { name: "User", route: "/" },
        { name: "Profile", route: "/" },

    ]
    return (
        <div>
            <h4>Profile</h4>
            <BasicBreadcrumbs route={route} />
            <div className="pt-4 w-75 m-auto">
                <Row>
                    <Col md={12} sm={12} lg={8} xl={4}>
                        <div className="Profile-card">
                            <div className="">
                                <img src="/assets/images/ava3.png" className="image-decorate" height={150} width={150} />
                            </div>
                            <div className=""><h5 className="card-heading4">John Smith</h5>
                            </div>
                            <p className="text-muted mb-1">Full Stack Developer</p>
                            <p className="text-muted mb-4">Bay Area, San Francisco, CA</p>
                            {/*<div><Button variant="primary">Message</Button>
                                <Button variant="primary" className="mesg-butn">Follow  </Button></div>*/}
                        </div>
                    </Col>
                    <Col md={12} sm={12} lg={8}>
                        <div className="Profile-card11">
                            <Row>
                                <Col lg={3} md={12}>
                                    <p className="mb-0"> Full Name</p>
                                </Col>
                                <Col lg={9} md={12} >
                                    <div style={{ display: "flex" }}>
                                        <div className="w-100"><p>Ganesh Sharma</p></div>
                                        <div style={{ display: "flex", justifyContent: "end", width: "100%" }}>
                                            <TooltipComp
                                                component={<Button variant="" style={{ padding: 0, margin: 0 }} onClick={handleShow}><FcEditImage size={"28px"} /></Button>}
                                                tooltip={"Edit"} />
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                            <hr />
                            <Row>
                                <Col lg={3} md={12}>
                                    <p className="mb-0">Email</p>
                                </Col>
                                <Col lg={9} md={12}>
                                    <p>Goldy2Gmail.com</p>
                                </Col>
                            </Row>
                            <hr />
                            <Row>
                                <Col lg={3} md={12}>
                                    <p className="mb-0">Phone</p>
                                </Col>
                                <Col lg={9} md={12}>
                                    <p>9803836866</p>
                                </Col>
                            </Row>
                            <hr />
                            <Row>
                                <Col lg={3} md={12}>
                                    <p className="mb-0">Address</p>
                                </Col>
                                <Col lg={9} md={12}>
                                    <p>Fazilka,</p>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
                <Modal show={show} onHide={handleClose} size="md">
                    <Modal.Header closeButton>
                        <Modal.Title>Edit Profile</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {<div className="">
                            <div className="modal-card">
                                <h3></h3>
                                <Formik initialValues={initialValues} validationSchema={validationschemeaa}>
                                    {() => (
                                        <form onSubmit={(e) => {
                                            e.preventDefault();
                                        }}
                                        >
                                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                                <Input type="text" label="Full Name" className="form-control" name="name" placeholder="Enter the Full Name" />
                                            </Form.Group>

                                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                                <Input type="text" label="Email" className="form-control" name="email" placeholder="Enter the Email" />
                                            </Form.Group>
                                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                                <Input type="text" label="Phone Number" className="form-control" name="phone" placeholder="Enter the Phone" />
                                            </Form.Group>
                                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                                <Input type="text" label="Address" className="form-control" name="address" placeholder="Enter the Address" />
                                            </Form.Group>
                                            <br />
                                            <div style={{ float: "right", }}>
                                                <Button className="addbtn" onClick={() => {

                                                }}>Update</Button>

                                            </div>
                                        </form>
                                    )}
                                </Formik>
                            </div>
                        </div>}
                    </Modal.Body>
                    <Modal.Footer>
                    </Modal.Footer>
                </Modal>
            </div>
        </div>
    )
}
export default Profile