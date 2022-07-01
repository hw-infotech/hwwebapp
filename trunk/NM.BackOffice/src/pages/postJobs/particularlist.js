import React, { useState } from "react"
import { Button, Col, Form, FormCheck, FormControl, InputGroup, Modal, Row, Tab, Table, Tabs } from "react-bootstrap";
import { Link } from "react-router-dom"
import { BsArrowUp } from "react-icons/bs";
import { BsArrowDown } from "react-icons/bs";
import { useNavigate, useParams } from "react-router";
import { Formik } from "formik";
import { initialValues, validationschemeaa } from "./validation-schema";
import { Input } from "../../components/commoninputfield";
import { AiOutlineCheck, AiOutlineCloseCircle } from "react-icons/ai";
import CustomPagination from "../../shared/pagination";
import { AiOutlineUser } from "react-icons/ai";
import CapitalizeFirstLetter from "../../components/first_letter_capital";
import BasicBreadcrumbs from "../../components/breadcumbs";
import { BiEdit } from "react-icons/bi";
import { BsFilter } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";
import {BiUserCheck,BiUserX, BiDirections, BiTab, BiWallet } from "react-icons/bi";

const Particularjob = () => {
    const data = useParams()
    const [showalert, setShowalert] = useState(false)
    const [index, setIndex] = useState()
    const [disabled, setSdisabled] = useState(true)
    const [showPerPage, setShowPerPage] = useState()
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    let [key, setKey] = useState("Description")
    const [start, setStart] = useState(1);
    const [pagination1, setpagination] = useState(
        {
            start: start,
            end: showPerPage
        });
    const [tr, settr] = useState(false)
    const records = [
        {
            Jobtitle: "UI/UX",
            name: "amit Sharma",
            email: "ganesharma5073@gmail.com",
            phone: "9803836866",
            active: false

        },
        {

            Jobtitle: "UI/UX",
            name: "Vikas Sharma",
            email: "ganesharma5073@gmail.com",
            phone: "9803836866",
            active: true
        },
        {

            Jobtitle: "UI/UX",
            name: "Ganesh Sharma",
            email: "ganesharma5073@gmail.com",
            phone: "9803836866",
            active: false
        }
    ]
    const [tableData, setTableData] = useState(records)
    function sortt() {
        const response = tableData.sort((a, b) => (a.name.toLowerCase() > b.name.toLowerCase()) ? 1 : ((b.name.toLowerCase() > a.name.toLowerCase()) ? -1 : 0));
        console.log(response)
        setTableData([...response])
    }
    function sortt1() {
        const response = tableData.sort((a, b) => (a.name.toLowerCase() < b.name.toLowerCase()) ? 1 : ((b.name.toLowerCase() < a.name.toLowerCase()) ? -1 : 0));
        console.log(response)
        setTableData([...response])
    }
    const [title, setTitle] = useState(false)
    const requestSearch = (searchedVal) => {
        const filteredRows = records.filter((row) => {
            return row.name.toLowerCase().includes(searchedVal.toLowerCase()) || row.Jobtitle.toLowerCase().includes(searchedVal.toLowerCase());
        });
        setTableData(filteredRows)

    };
    const display = (e) => {
        if (e) {
            setShowalert(true)
        }
        else {
            setShowalert(true)
        }
    }
    const route = [
        { name: "Dashboard", route: "/" },
        { name: "Job Management", route: "" },
        { name: "Job List", route: "/all-jobs" },
        { name: "Detail Applied", route: "/particularjob" },

    ]
    return (
        <div className="content_center margin_bottom_ ">
            <div className="topGapPad  w-100">
                {<BasicBreadcrumbs route={route} />}
                <Tabs activeKey={key}
                    id="uncontrolled-tab-example"
                    onSelect={(k) => setKey(k)}
                    className="mb-3">
                    <Tab eventKey="Description" title="Detail" onSelect={() => {
                        setKey("Description")
                    }}>
                        <Modal show={showalert} onHide={handleClose} >
                            <Modal.Header closeButton>
                                <Modal.Title>Alert</Modal.Title>
                            </Modal.Header>

                            <Modal.Body>
                                <p>{"Are You Really want to change the status"}</p>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" className="btn-sm font_size" onClick={() => {
                                    setShowalert(false)
                                }} >No</Button>
                                <Button variant="primary" className="btn-sm font_size" onClick={() => {
                                    { tr ? tableData[index].acitve = true : tableData[index].acitve = false }
                                    setShowalert(false)
                                }}>Yes</Button>
                            </Modal.Footer>
                        </Modal>
                        <div className="jobdes_margin">
                            <div className="d-flex buton_positin gap-2" >
                                <Button variant="secondary" className="btn-sm ">Back</Button>
                                <Button variant="primary" className="btn-sm ">Edit</Button></div>
                            <div className="">
                                <div className="main-pannle">
                                    <div className="leftt_pannel">
                                        <div className="jobdes_card">
                                            <div className="jobdes_marginbottom">
                                                <img src="assets/images/nestor.jfif" height={80} width={80} />
                                            </div>
                                            <div className="titlejob">
                                                <span>{/*state.jobtitle*/} - Mohali</span>
                                            </div>
                                            <div className="job_location d-flex jobdes_marginbottom">
                                                <span >Nestormind </span>
                                                <span> - Mohali</span>
                                            </div>
                                        </div>
                                        <div className="">
                                            <div className="job_description_heading">
                                                <span className="" style={{ textDecoration: "unerlined" }}>Job Responsibility</span>
                                            </div>
                                            <div className="">
                                                <ul className="job_description_list">
                                                    { /*state.responsibility.map((data,index))*/}
                                                    <li className="">
                                                        {/*state.responsibility*/}
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="job_description_heading">
                                                <span className="" style={{ textDecoration: "unerlined" }}>Requirement</span>
                                            </div>
                                            <div className="">
                                                <ul className="job_description_list">
                                                    <li className="">
                                                        Graduation
                                                    </li>
                                                    <li className="">
                                                        Minimum B to C sales experience of 1 year with good performance
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="job_description_heading">
                                                <span className="" style={{ textDecoration: "unerlined" }}>Nestormind Full Time Employee Benefits</span>
                                            </div>
                                            <div className="">
                                                <ul className="job_description_list">
                                                    <li className="">
                                                        Insurance Benefits - Medical Insurance, Critical Illness Insurance, Accidental Insurance, Life Insurance
                                                    </li>
                                                    <li className="">
                                                        Wellness Program - Employee Assistance Program, Onsite Medical Center, Emergency Support System
                                                    </li>
                                                </ul>
                                            </div>
                                            <div style={{ marginTop: 80 }}>
                                                <ul className="job_description_level_list">
                                                    <li>
                                                        <h3 className="job_description_level">Seniority level</h3>
                                                        <span>{/*state.seneritylevel*/}</span>
                                                    </li>
                                                    <li>
                                                        <h5 className="job_description_level">Employment type</h5>
                                                        <span>{/*state.employement*/}</span>
                                                    </li>
                                                    <li>
                                                        <h5 className="job_description_level">Job function</h5>
                                                        <span> {/*state.jobfunction*/}</span>
                                                    </li>
                                                    <li>
                                                        <h5 className="job_description_level">Industries</h5>
                                                        <span>{/*state.industry*/}</span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    {/*<div className="mediaqueiry" style={{ paddingLeft: 30 }}>
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

                    <Tab eventKey="Aplied" title="Applied" >    
                        <div style={{ marginTop: "50px",marginBottom:"20px" }}>
                        <Row>
                            <Col md={6} sm={12} lg={3} xl={3}>
                                <div className="card1">
                                    <div className="card-header1">
                                        <div className="icon-card1 background_box1">
                                            <AiOutlineUser size={24} />
                                        </div>
                                        <div className="innerCard">
                                            <span>Total Candidates</span>
                                            <h4 style={{ fontWeight: "400" }}>$5k</h4>
                                        </div>
                                    </div>
            {/*<div className="card-footer1"> <span className="decoration">+5% </span>than yesterday</div>*/}
                                </div>
                            </Col>
                            <Col md={6} sm={12} lg={3} xl={3}>
                                <div className="card1">
                                    <div className="card-header1">
                                        <div className="icon-card1 background_box2">
                                            <BiUserCheck size={24} />
                                        </div>
                                        <div className="innerCard">
                                            <span>Selected Candidates</span>
                                            <h4 style={{ fontWeight: "400" }}>$53k</h4>
                                        </div>
                                    </div>
                                    {/*<div className="card-footer1"> <span className="text-decorationn1">-3%</span> than yesterday</div>*/}
                                </div>
                            </Col>
                            <Col md={6} sm={12} lg={3} xl={3}>
                                <div className="card1">
                                    <div className="card-header1">
                                        <div className="icon-card1 background_box3">
                                            <BiUserX size={24} />
                                        </div>
                                        <div className="innerCard">
                                            <span >Rejected Candidates</span>
                                            <h4 style={{ fontWeight: "400" }}>$53k</h4>
                                        </div>
                                    </div>
                      {/*<div className="card-footer1"> <span className="decoration">+9% </span>than yesterday</div>*/}
                                </div>
                            </Col>
                            <Col md={6} sm={12} lg={3} xl={3}>
                                <div className="card1">
                                    <div className="card-header1">
                                        <div className="icon-card1 background_box4" >
                                            <BsSearch size={24} />
                                        </div>
                                        <div className="innerCard">
                                            <span>Performance</span>
                                            <h4 style={{ fontWeight: "400" }}>$3k</h4>
                                        </div>
                                    </div>
                                    {/*<div className="card-footer1"> <span className="decoration">+8% </span>than yesterday</div>*/}
                                </div>
                            </Col>
                        </Row>
                        </div>
                        <div className="gapbetween">
                            <div className="w-25">
                                <Form.Select aria-label="Default select example" className="font_size" hidden={disabled}>
                                    <option disabled selected hidden>Status</option>
                                    <option value="1">All</option>
                                    <option value="1">Reject</option>
                                    <option value="1">Select</option>
                                </Form.Select>
                            </div>
                            <div className="w-100" >
                                <InputGroup className="mb-3">
                                    <FormControl
                                        className="font_size"
                                        hidden={disabled}
                                        placeholder="Search by title and name"
                                        aria-label="Recipient's username"
                                        aria-describedby="basic-addon2"
                                        onChange={(e) => {
                                            requestSearch(e.target.value)
                                        }}
                                    />
                                    {/*<Button variant="outline-secondary" id="button-addon2">
                                    <BsSearch />
                                    </Button>*/}
                                </InputGroup>
                            </div>
                            <div style={{ width: "100%", height: "100%", }}>
                                <BsFilter style={{ float: "right" }} size={24} color="#ff6b01" onClick={() => setSdisabled(p => !p)} />
                            </div>
                        </div>
                        <div className="boxshadow">
                            <Table striped bordered hover >
                                <thead>
                                    <tr>
                                        <th>Action</th>
                                        <th 
                                        >Job getTitle</th>
                                        <th onClick={() => {
                                            setTitle(!title)
                                            { title ? sortt() : sortt1()}}}>Name{title ? <BsArrowDown /> : <BsArrowUp />}</th>
                                        <th>Email</th>
                                        <th>Phone Number</th>
                                        <th className="action-col">Status</th>
                                    </tr>
                                </thead>
                                {tableData.length > 0 ?
                                    <tbody>
                                        {tableData.map((data, index) =>
                                            <tr>
                                                <td class="action "><div class="userDetail ">
                                                    <button type="button" class="btn "
                                                        id="dropdownIconMenu" data-bs-toggle="dropdown"
                                                        aria-expanded="false">
                                                        <span class="actionIcon"> <i
                                                            class="bi bi-three-dots-vertical"></i> </span>
                                                    </button>
                                                    <ul class="IconDropdown dropdown-menu context-menu11 "
                                                        aria-labelledby="dropdownIconMenu">
                                                        <li class="dropdownList ">
                                                            {data.active == false ?
                                                                <div class="actionBtns context-menu1">
                                                                    <span class="editAction" data-bs-toggle="modal"
                                                                        data-bs-target="#editbtn"><AiOutlineCheck /></span>
                                                                    <button type="button" className="btn btn-outlined-secondary font_size " onClick={() => {
                                                                        setShowalert(true)
                                                                        setIndex(index)
                                                                        settr(true)
                                                                    }}>Accept</button>
                                                                </div> : ""}
                                                        </li>
                                                        <li class="dropdownList">
                                                            {data.active == true ?
                                                                <div class="actionBtns context-menu1">
                                                                    <span class="deleteAction" data-bs-toggle="modal"
                                                                        data-bs-target="#deletebtn"> <AiOutlineCloseCircle /></span>
                                                                    <button type="button" key={index} className="btn btn-outlined-secondary font_size">Reject</button>
                                                                </div> : ""}
                                                        </li>
                                                    </ul>
                                                </div></td>
                                                <td>{data.Jobtitle}</td>
                                                <td>{CapitalizeFirstLetter(data.name)}</td>
                                                <td>{CapitalizeFirstLetter(data.email)}</td>
                                                <td>{data.phone}</td>
                                                <td><Form>
                                                    <Form.Check className="switch_padding1"
                                                        type="switch"
                                                        key={index}
                                                        id="custom-switch1"
                                                        value={data.active}
                                                        checked={data.active}
                                                        onChange={(e) => {
                                                            display(e)
                                                            setIndex(index)
                                                        }}
                                                        label="" />
                                                </Form></td>
                                            </tr>)}
                                    </tbody> : "No Record Found"}
                            </Table>
                        </div>
                        {tableData.length > 0 ?
                            <div>
                                <CustomPagination
                                    total={tableData.length}
                                    start={pagination1}
                                    setStart={setpagination}
                                />
                            </div> : ""}
                    </Tab>
                </Tabs>
                <Modal show={show} onHide={handleClose} size="sm">
                    <Modal.Header closeButton>
                        <Modal.Title>Project</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {<div className="">
                            <div className="userdetails">
                                <h3></h3>
                                <Formik initialValues={initialValues} validationSchema={validationschemeaa}>
                                    {() => (
                                        <form onSubmit={(e) => {
                                            e.preventDefault();
                                        }}
                                        >
                                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                                <Input type="text" label="Name" className="form-control" name="storytitle" />
                                            </Form.Group>
                                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                                <Input type="text" label="Email" className="form-control" name="Email" />
                                            </Form.Group>
                                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                                <Input type="text" label="Phone Number" className="form-control" name="Email" />
                                            </Form.Group>
                                        </form>
                                    )}
                                </Formik>
                            </div>
                        </div>}
                    </Modal.Body>

                </Modal>
            </div>
        </div>
    )
}

export default Particularjob