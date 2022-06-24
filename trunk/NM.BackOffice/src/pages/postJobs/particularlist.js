import React, { useState } from "react"
import { Button, Form, FormCheck, FormControl, InputGroup, Modal, Tab, Table, Tabs } from "react-bootstrap";
import { Link } from "react-router-dom"
import { BsArrowUp } from "react-icons/bs";
import { BsArrowDown } from "react-icons/bs";
import { useNavigate } from "react-router";
import { Formik } from "formik";
import { initialValues, validationschemeaa } from "./validation-schema";
import { Input } from "../../components/commoninputfield";
import { BsSearch } from "react-icons/bs";
import TooltipComp from "../../shared/Tooltipomp";
import CustomPagination from "../../shared/pagination";

const Particularjob = () => {
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
    const records = [
        {
            Jobtitle: "UI/UX",
            name: "Ganesh Sharma",
            email: "ganesharma5073@gmail.com",
            phone: "9803836866",

        },
        {

            Jobtitle: "UI/UX",
            name: "Ganesh Sharma",
            email: "ganesharma5073@gmail.com",
            phone: "9803836866",
        },
        {

            Jobtitle: "UI/UX",
            name: "Ganesh Sharma",
            email: "ganesharma5073@gmail.com",
            phone: "9803836866",
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
            return row.name.toLowerCase().includes(searchedVal.toLowerCase());
        });
        setTableData(filteredRows)

    };

    return (
        <div className="content_center margin_bottom_ ">
            <div className="topGapPad p-3 w-100">
                <Tabs activeKey={key}
                    id="uncontrolled-tab-example"
                    onSelect={(k) => setKey(k)}
                    className="mb-3">
                    <Tab eventKey="Description" title="Description" onSelect={() => {
                        setKey("Description")
                    }}>
                        <div className="jobdes_margin">
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
                                    <div className="mediaqueiry" style={{ paddingLeft: 30 }}>
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
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Tab>

                    <Tab eventKey="Aplied" title="Applied" >
                        <div className="gapbetween ">
                           
                                    <div>
                                        <Form.Select aria-label="Default select example">
                                            <option disabled selected hidden>Status</option>
                                            <option value="1">All</option>
                                            <option value="1">Reject</option>
                                            <option value="1">Select</option>
                                        </Form.Select>
                                    </div>

                                
                               
                            <div className="serachbar" >
                                <InputGroup className="mb-3">
                                    <FormControl
                                        placeholder="Search title and name"
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
                        </div>
                        <div className="boxshadow">
                            <Table striped bordered hover >
                                <thead>
                                    <tr>
                                        <th>Action</th>
                                        <th onClick={() => {
                                            setTitle(!title)
                                            { title ? sortt() : sortt1() }
                                        }}>Job title {title ? <BsArrowDown /> : <BsArrowUp />}</th>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Phone Number</th>
                                        <th className="action-col">Status</th>
                                    </tr>
                                </thead>
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
                                                <ul class="IconDropdown dropdown-menu context-menu1 "
                                                    aria-labelledby="dropdownIconMenu">
                                                    <li class="dropdownList">
                                                        <div class="actionBtns">
                                                            <span class="editAction" data-bs-toggle="modal"
                                                                data-bs-target="#editbtn"><i
                                                                    class="bi bi-pencil-square"></i></span>
                                                            <button type="button" className="btn btn-outlined-secondary font_size" onClick={() => {
                                                                handleShow()
                                                            }}>View</button>
                                                        </div>
                                                    </li>

                                                    <li class="dropdownList">
                                                        <div class="actionBtns">
                                                            <span class="deleteAction" data-bs-toggle="modal"
                                                                data-bs-target="#deletebtn"> <i
                                                                    class="bi bi-trash3-fill"></i></span>
                                                            <button type="button" className="btn btn-outlined-secondary font_size">Delete</button>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div></td>

                                            <td>{data.Jobtitle}</td>
                                            <td>{data.name}</td>
                                            <td>{data.email}</td>
                                            <td>{data.phone}</td>
                                            <td><Form>
                                                <Form.Check className="switch_padding1"
                                                    type="switch"
                                                    id="custom-switch1"
                                                    value={data.active}
                                                    label="" />
                                            </Form></td>

                                        </tr>)}

                                </tbody>
                            </Table>
                        </div>
                        <div>
                            <CustomPagination
                                total={100}
                                start={pagination1}
                                setStart={setpagination}
                            />
                        </div>
                    </Tab>
                </Tabs>
                <Modal show={show} onHide={handleClose} size="md">
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
                    <Modal.Footer>
                        {/*<div className="pt-3 gallery_add_button" style={{ display: "flex", justifyContent: "end" }}>
                        <button type="button" class="btn btn-outline-secondary gallery_add_button">Submit</button>
                                </div>*/}
                    </Modal.Footer>
                </Modal>
            </div>
        </div>
    )
}

export default Particularjob