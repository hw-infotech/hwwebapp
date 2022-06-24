import React, { useEffect, useState } from "react";
import { MdFilterAlt, MdAdd } from "react-icons/md";
import { VscFilterFilled } from "react-icons/vsc";
import BasicBreadcrumbs from "../../components/breadcumbs";
import { ErrorMessage, Formik } from "formik";
import { initialValues, validationschemeaa } from "../postJobs/validation-schema";
import { Input } from "../../components/commoninputfield";
import { Button, Form, FormControl, InputGroup, Modal, Table } from "react-bootstrap";
import { BsArrowUp } from "react-icons/bs";
import { BsArrowDown } from "react-icons/bs";
import { FaFilter } from "react-icons/fa";

import TooltipComp from "../../shared/Tooltipomp";
import CustomPagination from "../../shared/pagination";
import { confirm } from "react-bootstrap-confirmation";

const route = [
    { name: "Home", route: "/" },
    { name: "Carousel", route: "/" },
    { name: "Success-Stories", route: "/" },

]

const records = [
    {
        title: "Birthday Post",
        content: "it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown",
        active: "resolved"

    },
    {
        title: "Christmas Post",
        content: "it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown",
        active: "resolved"
    },
    {
        title: "New Year Post",
        content: "it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown",
        active: "pending"
    }
]
const Success_Stories = () => {
    const [rowtext, setRowtext] = useState()
    const [showalert, setShowalert] = useState(false)
    const [disable, setSdisabled] = useState(true)
    const [edit, setEdit] = useState();
    const [show, setShow] = useState(false);
    const [showPerPage, setShowPerPage] = useState()
    const [start, setStart] = useState();
    const [pagination1, setpagination] = useState(
        {
            start: start,
            end: showPerPage
        });
    const handleClose = () => {
        setShow(false)
        setEdit(false)
    };
    const handleShow = () => setShow(true);

    const [tableData, setTableData] = useState(records)
    const requestSearch = (searchedVal) => {
        const filteredRows = records.filter((row) => {
            return row.title.toLowerCase().includes(searchedVal.toLowerCase());
        });
        setTableData(filteredRows)
        // if (searchedVal.length < 1) {
        //     setTableData(tableData)
        //     console.log("it is for if condition",searchedVal)
        // }
        // else {

        // }
    };
    function sortt() {
        const response = tableData.sort((a, b) => (a.title.toLowerCase() > b.title.toLowerCase()) ? 1 : ((b.title.toLowerCase() > a.title.toLowerCase()) ? -1 : 0));
        console.log(response)
        setTableData([...response])
    }
    function sortt1() {
        const response = tableData.sort((a, b) => (a.title.toLowerCase() < b.title.toLowerCase()) ? 1 : ((b.title.toLowerCase() < a.title.toLowerCase()) ? -1 : 0));
        console.log(response)
        setTableData([...response])
    }
    const [title, setTitle] = useState(false)
    const [deleteObj, setDeleteObj] = useState({
        index: 0,
        rowStatus: false
    })

    const display = () => {
        console.log(deleteObj);
        setShowalert(true)
        //const result = await confirm(rowtext.text);
        // console.log(rowText);
        if (deleteObj.rowStatus) {
            setTableData(oldState => {
                oldState[deleteObj.index].active = "resolved"
                return [...oldState]
            })
        }
        if (!deleteObj.rowStatus) {
            setTableData(oldState => {
                oldState[deleteObj.index].active = "pending"
                return [...oldState]
            })
        }
    };
    
    return (
        <div>
            {<BasicBreadcrumbs route={route} />}
            <div className="filter_header">
                <div className="filter-title"><h4>Success Stories</h4></div>
                <div className="filter_container">
                    <div className="">
                        <Button className="fitlter-sotry" onClick={() => setSdisabled(p => !p)}>
                            <VscFilterFilled size={17} />
                        </Button>
                    </div>
                    <div>
                        <Button variant="" className="popoup-btn" onClick={handleShow} >Add Project</Button>
                    </div>
                </div>
            </div>
            <div className="margin_bottom_ topGapPad">
                <div className="font_size">
                    <div className="">
                        <div className="gapbetween">
                            <div>
                                <Form.Select aria-label="Default select example" hidden={disable} >
                                    <option hidden selected>Status</option>
                                    <option value="1">All</option>
                                    <option value="1">Active</option>
                                    <option value="1">Deactive</option>
                                </Form.Select>

                            </div>
                            <div className="serachbar">
                                <InputGroup className="mb-3" >
                                    <FormControl
                                        hidden={disable}
                                        placeholder="Search by title"
                                        aria-label="Recipient's username"
                                        aria-describedby="basic-addon2"
                                        onChange={(e) => {

                                            console.log(e)
                                            requestSearch(e.target.value)
                                        }}
                                    />
                                    {/*<Button variant="outline-secondary" id="button-addon2">
                                    <BsSearch />
                                </Button>*/}
                                </InputGroup>
                            </div>
                            <Modal show={showalert} onHide={handleClose} >
                                <Modal.Header >
                                    <Modal.Title>Alert</Modal.Title>
                                </Modal.Header>

                                <Modal.Body>
                                    <p>{rowtext?.text}</p>
                                </Modal.Body>

                                <Modal.Footer>
                                    <Button variant="secondary" onClick={() => {
                                        
                                        setShowalert(false)
                                    }} >Cancel</Button>
                                    <Button variant="primary" onClick={() => {
                                        display()
                                        setShowalert(false)
                                    }}>Confirm</Button>
                                </Modal.Footer>
                            </Modal>
                        </div>
                        <div>
                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                        <th className="action_colwidth">Action</th>
                                        <th className="action_titlewidth" onClick={() => {
                                            setTitle(!title)
                                            { title ? sortt() : sortt1() }
                                        }}>Title {title ? <BsArrowDown /> : <BsArrowUp />}</th>
                                        <th>Content</th>
                                        <th className="action_colwidth">Status</th>
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
                                                <ul class="IconDropdown dropdown-menu context-menu11"
                                                    aria-labelledby="dropdownIconMenu">
                                                    <li class="dropdownList ">
                                                        <div class="actionBtns  context-menu1 ">
                                                            <span class="editAction" data-bs-toggle="modal"
                                                                data-bs-target="#editbtn"><i
                                                                    class="bi bi-pencil-square"></i></span>
                                                            <button type="button" className="btn btn-outlined-secondary font_size" onClick={() => {
                                                                handleShow()
                                                                setEdit(true)
                                                            }}>Edit</button>
                                                        </div>
                                                    </li>
                                                    <li class="dropdownList">
                                                        <div class="actionBtns context-menu1">
                                                            <span class="deleteAction" data-bs-toggle="modal"
                                                                data-bs-target="#deletebtn"> <i
                                                                    class="bi bi-trash3-fill"></i></span>
                                                            <button type="button" className="btn btn-outlined-secondary font_size">Delete</button>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div></td>
                                            <td>{data.title}</td>
                                            <td>{data.content}</td>
                                            <td><Form>
                                                <Form.Check className="switch_padding"
                                                    type="switch"
                                                    id="custom-switch1"
                                                    checked={data.active === "resolved" ? true : false}
                                                    label=""
                                                    onChange={(e) => {
                                                       setShowalert(true)
                                                        setRowtext(e.target.checked ? ({
                                                            id: 1,
                                                            text: "Are you sure to update status as Rsolved ?",
                                                        }) : ({
                                                            id: 0,
                                                            text: "Are you sure to update status as Pending ?",
                                                        }))
                                                        if (data.active === "resolved") {
                                                            setDeleteObj({
                                                                index,
                                                                rowStatus: e.target.checked
                                                            })
                                                        }
                                                        else {
                                                            setDeleteObj({
                                                                index,
                                                                rowStatus: e.target.checked
                                                            })
                                                        }

                                                    }}
                                                />
                                            </Form></td>
                                        </tr>)}
                                </tbody>
                            </Table>
                        </div>
                    </div>

                    <div>
                        <CustomPagination
                            start={pagination1}
                            setStart={setpagination}
                            total={100}
                        />
                    </div>
                </div>
            </div>
            <Modal show={show} onHide={handleClose} size="md">
                <Modal.Header closeButton>
                    <Modal.Title>{edit ? "Edit Project" : "Add Project"}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {<div className="">
                        <div className="cardBoard">
                            <h3></h3>
                            <Formik initialValues={initialValues} validationSchema={validationschemeaa}>
                                {() => (
                                    <form onSubmit={(e) => {
                                        e.preventDefault();
                                    }}
                                    >
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Input type="text" label="Project Title" className="form-control" name="storytitle" placeholder="" />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Input as={"textarea"} className="form-control" name="content_story" id="exampleFormControlTextarea1" rows="3" label={"Description"} />
                                        </Form.Group>
                                        <Form.Group controlId="formFile" className="mb-3 w-100">
                                            <Form.Label>Choose Image</Form.Label>
                                            <Form.Control type="file" />
                                        </Form.Group>
                                        <br />
                                        <Form.Check className="custom1-switch"
                                            type="switch"
                                            id="Active"
                                            label="Active"
                                        />
                                    </form>
                                )}
                            </Formik>
                        </div>
                    </div>}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" className="addbtn" onClick={handleClose}>Close</Button>
                    <div style={{ float: "right", }}>
                        {edit ? <Button className="addbtn" onClick={() => {
                        }}>Update</Button> :
                            <Button className="addbtn" onClick={() => {
                            }}>Add</Button>}
                    </div>
                </Modal.Footer>
            </Modal>
        </div>
    );
}
export default Success_Stories