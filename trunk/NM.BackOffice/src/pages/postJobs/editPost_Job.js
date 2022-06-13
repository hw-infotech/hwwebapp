import React, { useEffect, useState } from "react";
import { Button, Col, Form, FormCheck, FormControl, InputGroup, Modal, Row, Table } from "react-bootstrap";
import { Field, Formik, FormikProvider } from "formik";
import { Input } from "../../components/commoninputfield";
import { BsSearch } from "react-icons/bs";
import BasicBreadcrumbs from "../../components/breadcumbs";
//import { Pagination } from "@material-ui/lab";
import { initialValues, validationschemeaa } from "./validation-schema";
import { useNavigate } from "react-router";
import { BsArrowUp } from "react-icons/bs";
import { BsArrowDown } from "react-icons/bs";
import { MdOutlineNoteAdd } from "react-icons/md";
import TooltipComp from "../../shared/Tooltipomp";
import CreatableSelectField from "../../components/selectfield";
import CustomPagination from "../../shared/pagination";
;

const Edit_postJob = (value1) => {

    const [requirment2, setRequirments] = useState([])
    const [row, setRow] = useState(10)
    const [state, setState] = useState({
        row_value: ""
    })
    const [showPerPage, setShowPerPage] = useState(100)
    const [next, setNext] = useState(0)
    const [start, setStart] = useState(1);
    const [pagination1, setpagination] = useState(
        {
            start: start,
            end: showPerPage
        })
    const nevigate = useNavigate();
    const [pagination2, setpagination2] = useState({
        start: 0,
        end: showPerPage
    });
    const onPageChange = (start, end) => {
        setpagination({ start: start, end: end });
    };
    useEffect(() => {
        //setSubscribers(selector?.data?.apidata?.getnewsletterunsubscriber?.data)
        setpagination({ start: start, end: showPerPage })
    }, [pagination1])
    const Chnage = (e) => {
        const { name, value } = e.target
        setRow(value)
        console.log("this is the select field value", value)
    }
    const handlechange1 = (event, value) => {
        var value1;
        setNext(value)
        if (next <= value) {
            value1 = row * value
            setShowPerPage(value1)
            console.log("this is the if conditon", value, showPerPage, state.row_value)
            setStart(value1 - row)
            setpagination({ start: start, end: showPerPage })
        }
        else {
            console.log("else", start, showPerPage)
            setStart(start - row)
            setShowPerPage(showPerPage - row)
            setpagination({ start: start - row, end: showPerPage - row })
        }
    }
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const route = [
        { name: "Home", route: "/" },
        { name: "Job", route: "/" },
        { name: "Edit Post job", route: "/" },

    ]
    const [formState, setFormState] = useState()
    const records = [
        {
            Jobtitle: "UI/UX",
            description: "Great Opportunity",
            functions: "Handle events",
            industry: "Great",
            level: "Higher",
            type: "Full time"
        },
        {
            Jobtitle: "Project Manager",
            description: "Great Opportunity",
            functions: "Handle events",
            industry: "Great",
            level: "Higher",
            type: "Full time"
        },
        {
            Jobtitle: "gtto",
            description: "Great Opportunity",
            functions: "Handle events",
            industry: "Great",
            level: "Higher",
            type: "Full time"
        }
    ]
    const [tableData, setTableData] = useState(records)
    function sortt() {
        const response = tableData.sort((a, b) => (a.Jobtitle.toLowerCase() > b.Jobtitle.toLowerCase()) ? 1 : ((b.Jobtitle.toLowerCase() > a.Jobtitle.toLowerCase()) ? -1 : 0));
        console.log(response)
        setTableData([...response])
    }
    function sortt1() {
        const response = tableData.sort((a, b) => (a.Jobtitle.toLowerCase() < b.Jobtitle.toLowerCase()) ? 1 : ((b.Jobtitle.toLowerCase() < a.Jobtitle.toLowerCase()) ? -1 : 0));
        console.log(response)
        setTableData([...response])
    }
    const [title, setTitle] = useState(false)
    const requestSearch = (searchedVal) => {
        const filteredRows = records.filter((row) => {
            return row.title.toLowerCase().includes(searchedVal.toLowerCase());
        });
        setTableData(filteredRows)

    };
    const onhandlechange = (e) => {
        //const { name, value } = e.target
        // setState({ ...state, [name]: value })
        //console.log(state);
    }

    return (
        <div title="Edit Post Job">
            <h4>List Number of Post Jobs</h4>
            {<BasicBreadcrumbs route={route} />}
            <div className="topGapPad margin_bottom_">
                <div className="gapbetween ">
                    <div>
                        <TooltipComp component={
                            <Form.Select aria-label="Default select example">
                                <option disabled>Select </option>
                                <option value="1">All</option>
                                <option value="1">Active all</option>
                                <option value="1">Deactive all</option>
                            </Form.Select>}
                            placement="top"
                            tooltip={"Filteration Active/Deactive"}
                        />
                    </div>
                    <div className="serachbar" >
                        <TooltipComp
                            component={<InputGroup className="mb-3">
                                <FormControl
                                    placeholder="Search title and name"
                                    aria-label="Recipient's username"
                                    aria-describedby="basic-addon2"
                                    onChange={(e) => {
                                        requestSearch(e.target.value)
                                    }}
                                />
                                <Button variant="outline-secondary" id="button-addon2">
                                    <BsSearch />
                                </Button>
                            </InputGroup>}
                            tooltip="Type here to search by name and title"
                            placement="top"
                        />
                    </div>
                    <div>
                        <TooltipComp
                            component={<Button variant="secondary" onClick={() => {
                                nevigate("/postnewjob")
                            }}><MdOutlineNoteAdd size={24} /></Button>}
                            placement="top"
                            tooltip="Add new job "
                        />
                    </div>
                </div>
                <div className="boxshadow">
                    {/*<h4>List Number of Job Posts</h4>*/}
                    <Table id="dtBasicExample">
                        <thead>
                            <tr>
                                <th>Action</th>
                                <th onClick={() => {
                                    setTitle(!title)
                                    { title ? sortt() : sortt1() }
                                }}>Job title {title ? <BsArrowDown /> : <BsArrowUp />}</th>
                                <th>Job Description</th>
                                <th>Job Function</th>
                                <th>Industries</th>
                                <th>Senority Level</th>
                                <th>Employement Type</th>
                                <th>Status</th>
                                <th>Total Candidates</th>
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
                                                        nevigate('/particularjob')
                                                    }}>View</button>
                                                </div>
                                            </li>
                                            <li class="dropdownList">
                                                <div class="actionBtns">
                                                    <span class="viewIcon" data-bs-toggle="modal"
                                                        data-bs-target="#viewbtn"> <i
                                                            class="bi bi-eye"></i></span>
                                                    <button type="button" className="btn btn-outlined-secondary font_size" onClick={handleShow} >Edit</button>
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
                                    <td>{data.description}</td>
                                    <td>{data.functions}</td>
                                    <td>{data.industry}</td>
                                    <td>{data.level}</td>
                                    <td>{data.type}</td>
                                    <td><Form>
                                        <Form.Check className="switch_padding1"
                                            type="switch"
                                            id="custom-switch1"
                                            value={data.active}
                                            label="" />
                                    </Form></td>
                                    <td>30</td>
                                </tr>)}
                        </tbody>
                    </Table>
                </div>
                <Modal show={show} onHide={handleClose} size="lg">
                    <Modal.Header closeButton>
                        <Modal.Title>Edit Post Job</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="content_center">
                            <div className="topGapPad p-3 w-100">

                                <Formik initialValues={initialValues} validationSchema={validationschemeaa}>
                                    {() => (
                                        <form onSubmit={(e) => {
                                            e.preventDefault()
                                        }}>
                                            <div className="">
                                                <div className="content_center">
                                                    <div className="add_new_post_padding_between_field w-100">
                                                        <Form.Group className="mb-3">
                                                            <Input as='select' name='jobtitle' onChange={onhandlechange} label={"Job title"} id="jobtitle" className="form-control" options={[
                                                                { value: "..." },
                                                                { value: "UI/UX" },
                                                                { value: "Project Manager" },
                                                                { value: "Web Development" },
                                                            ]} >
                                                            </Input>
                                                        </Form.Group>
                                                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1" >
                                                            <Form.Label>Enter Descritption</Form.Label>
                                                            <Form.Control as="textarea" style={{ height: "119px" }} name="jobdescription" value={state.jobdescription} onChange={onhandlechange} />
                                                        </Form.Group>
                                                        <Form.Group>
                                                            <Input type='text' placeholder='Job Function' className="form-control" name='jobfunction' label={"Job Function"} id="name" onChange={onhandlechange} />
                                                        </Form.Group>
                                                        <Form.Group>
                                                            <Form.Label>Responsibility</Form.Label>
                                                            <CreatableSelectField placeholder="Type Reponsibility and press tab button..." onChange={onhandlechange} formState={formState} setFormState={setFormState}
                                                                label={"type the text and press tab button..."} />
                                                        </Form.Group>
                                                    </div>
                                                    <div className="add_new_post_padding_between_field w-100" >
                                                        <Form.Group className="">
                                                            <Form.Label>Requirments</Form.Label>
                                                            <div style={{ marginBottom: "1rem" }}>
                                                                <CreatableSelectField placeholder="Type requirenments and press tab button..." formState={formState} setFormState={setFormState} onChange={onhandlechange} />
                                                            </div>
                                                        </Form.Group>
                                                        <Form.Group>
                                                            <Input type='text' placeholder='Industry' className="form-control" name='industry' label={"Industry"} id="name" onChange={onhandlechange} />
                                                        </Form.Group>
                                                        <Form.Group>
                                                            <Form.Label>Benefits</Form.Label>
                                                            <div style={{ marginBottom: "1rem" }}>
                                                                <CreatableSelectField placeholder="Type benefits and press tab button..." formState={formState} setFormState={setFormState} onChange={onhandlechange} />
                                                            </div>
                                                        </Form.Group>
                                                        <Form.Group>
                                                            <Input as='select' placeholder="Senority Level" className="form-control" name='seneritylevel'
                                                                onChange={onhandlechange} label={"Senority Level"} id="seneritylevel" options={[
                                                                    { value: "", label: "" },
                                                                    { value: "Senior", label: "Senior" },
                                                                    { value: "Junior", label: "Junior" },

                                                                ]} ></Input>
                                                        </Form.Group>
                                                        <Form.Group>
                                                            <Input as='select' className="form-control" onChange={onhandlechange} placeholder="Employement type" name='employement' label={"Employement type"} id="name" options={[
                                                                { value: "...." },
                                                                { value: "Full time" },
                                                                { value: "Part time" },

                                                            ]} ></Input>
                                                        </Form.Group>
                                                    </div>
                                                </div>

                                            </div>
                                        </form>
                                    )}
                                </Formik>
                            </div>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <div className="pt-3 gallery_add_button" style={{ display: "flex", justifyContent: "end" }}>
                            <Button type="button" class="gallery_add_button">Submit</Button>
                        </div>
                    </Modal.Footer>
                </Modal>

                <div>
                    <CustomPagination
                        showPerPage={showPerPage}
                        onPageChange={onPageChange}
                        total={1000}
                    />
                </div>
            </div>
        </div>
    );


}
export default Edit_postJob