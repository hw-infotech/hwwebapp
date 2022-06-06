import React, { useEffect, useState } from "react";
import { Button, Form, FormCheck, FormControl, InputGroup, Modal, Table } from "react-bootstrap";
import { Field, Formik, FormikProvider } from "formik";
import { Input } from "../../components/commoninputfield";
import { BsSearch } from "react-icons/bs";
import BasicBreadcrumbs from "../../components/breadcumbs";
//import { Pagination } from "@material-ui/lab";
import { initialValues, validationschemeaa } from "./validation-schema";
import { useNavigate } from "react-router";

const Edit_postJob = (value1) => {
    const [requirment2, setRequirments] = useState([])
    const [row, setRow] = useState(10)
    const [state, setState] = useState({
        row_value: ""
    })
    const [showPerPage, setShowPerPage] = useState(10)
    const [next, setNext] = useState(0)
    const [start, setStart] = useState(1);
    const [pagination1, setpagination] = useState(
        {
            start: start,
            end: showPerPage
        })

    const nevigate = useNavigate();

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
    const [tableData, setTableData] = useState([
        {

            Jobtitle: "gtto",
            description: "goldy",
            function: "hg",
            industry: "adf",
            level: "rfs",
            type: "gdg"
        },
        {

            Jobtitle: "gtto",
            description: "goldy",
            function: "hg",
            industry: "adf",
            level: "rgdg",
            type: "gdg"
        },
        {

            Jobtitle: "gtto",
            description: "goldy",
            function: "hg",
            industry: "adf",
            level: "rvbf",
            type: "gdg"
        },
    ])
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
    return (
        <div title="Edit Post Job">
            {<BasicBreadcrumbs route={route} />}
            <div className="topGapPad margin_bottom_">
                <div className="gapbetween ">
                    <div>
                        <Form.Select aria-label="Default select example">
                            <option disabled>Select </option>
                            <option value="1">All</option>
                        </Form.Select>
                    </div>
                    <div className="serachbar" >
                        <InputGroup className="mb-3">
                            <FormControl
                                placeholder="Serach title and name"
                                aria-label="Recipient's username"
                                aria-describedby="basic-addon2"
                            />
                            <Button variant="outline-secondary" id="button-addon2">
                                <BsSearch />
                            </Button>
                        </InputGroup>
                    </div>
                    <div>
                        <Button variant="primary" onClick={() => {
                            nevigate("/postnewjob")
                        }}>Post Job</Button>
                    </div>
                </div>
                <div className="boxshadow">
                    {/*<h4>List Number of Job Posts</h4>*/}
                    <Table id="dtBasicExample">
                        <thead>
                            <tr>
                                <th>Action</th>
                                <th onClick={() => {
                                    // setTitle(!title)
                                    // { title ? sortt() : sortt1() }
                                }}>Job title</th>
                                <th>Job Description</th>
                                <th>Job Function</th>
                                <th>Industries</th>
                                <th>Senority Level</th>
                                <th>Employement Type</th>
                            </tr>
                        </thead>
                        <tbody>
                            {//tableData?.sort((data, index) =>
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
                                                    <button type="button" className="btn btn-outlined-secondary font_size" onClick={handleShow}>View</button>
                                                </div>
                                            </li>
                                            <li class="dropdownList">
                                                <div class="actionBtns">
                                                    <span class="viewIcon" data-bs-toggle="modal"
                                                        data-bs-target="#viewbtn"> <i
                                                            class="bi bi-eye"></i></span>
                                                    <button type="button" className="btn btn-outlined-secondary font_size" >Update</button>
                                                </div>
                                            </li>
                                            <li class="dropdownList">
                                                <div class="actionBtns">
                                                    <span class="deleteAction" data-bs-toggle="modal"
                                                        data-bs-target="#deletebtn"> <i
                                                            class="bi bi-trash3-fill"></i></span>
                                                    <button type="button" className="btn btn-outlined-secondary font_size">Deletes</button>
                                                </div>
                                            </li>
                                        </ul>
                                    </div></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>//)
                            }

                        </tbody>
                    </Table>
                </div>
                <Modal show={show} onHide={handleClose} size="lg">
                    <Modal.Header closeButton>
                        <Modal.Title>Edit Post Job</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="w-100">
                            <div className="content_center margin_bottom_">
                                <div className="topGapPad p-3 w-75">
                                    <Formik initialValues={initialValues} validationSchema={validationschemeaa}>
                                        {() => (
                                            <form onSubmit={(e) => {
                                                e.preventDefault()
                                            }}>
                                                <div className="boxshadow ">
                                                    <div className="content_center">
                                                        <div className="add_new_post_padding_between_field w-100">
                                                            <Form.Group>
                                                                <Input as='select' className="form-control" name='jobtitle' label={"Job title"} id="name" options={[
                                                                    { value: "" },
                                                                    { value: "one" },
                                                                    { value: "two" },
                                                                    { value: "three" },
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
                                                                <Input as='select' className="form-control" placeholder="Location" name='location' label={"Location"} id="name" options={[
                                                                    { name: "...." },
                                                                    { value: "one" },
                                                                    { value: "two" },
                                                                    { value: "three" },
                                                                ]} ></Input>
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
                                                            <Form.Group>
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
                                                            <Form.Group>                                                                <Input type='text'
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
                                                                    { value: "one" },
                                                                    { value: "two" },
                                                                    { value: "three" },
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

                                                </div>
                                            </form>
                                        )}
                                    </Formik>
                                </div>
                            </div>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <div className="pt-3 gallery_add_button" style={{ display: "flex", justifyContent: "end" }}>
                            <Button type="button" class="gallery_add_button">Submit</Button>
                        </div>
                    </Modal.Footer>
                </Modal>

            </div>
        </div>
    );


}
export default Edit_postJob