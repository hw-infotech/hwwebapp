import React, { useEffect, useState } from "react";
import { BsSearch } from "react-icons/bs";
//import { Pagination } from "@material-ui/lab";
import BasicBreadcrumbs from "../../components/breadcumbs";
import { ErrorMessage, Formik } from "formik";
import { initialValues, validationschemeaa } from "../postJobs/validation-schema";
import { Input } from "../../components/commoninputfield";
import { Button, Form, FormControl, InputGroup, Modal, Table } from "react-bootstrap";
import { BsArrowUp } from "react-icons/bs";
import { BsArrowDown } from "react-icons/bs";
import { BiAddToQueue } from "react-icons/bi";

const route = [
    { name: "Home", route: "/" },
    { name: "Carousel", route: "/" },
    { name: "Success-Stories", route: "/" },

]
const Success_Stories = () => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [tableData, setTableData] = useState([
        {
            title: "Mark",
            content: "gtto",
            image: "./assets/images/f.jpg",
            active: false

        },
        {
            title: "aark",
            content: "ptto",
            image: "./assets/images/f.jpg",
            active: false
        },
        {
            title: "cark",
            content: "rtto",
            image: "./assets/images/f.jpg",
            active: false
        }
    ])
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
    return (
        <div title="Success Stories">
            <h4>Success Stories</h4>
            {<BasicBreadcrumbs route={route} />}
            <div className="margin_bottom_ topGapPad">
                <div className="font_size">
                    <div className="">
                        <div className="">
                            <div className="gapbetween">
                                <div>
                                    <Form.Select aria-label="Default select example">
                                        <option >Select </option>
                                        <option value="1">All</option>
                                    </Form.Select>
                                </div>
                                <div>
                                    <Form.Select aria-label="Default select example">
                                        <option >Select </option>
                                        <option value="1">Active All</option>
                                        <option value="1">Deactive All</option>
                                    </Form.Select>
                                </div>
                                <div className="serachbar">
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
                                <div className="">
                                    <Button variant="outline-secondary" className="" onClick={handleShow}><BiAddToQueue size="24px" /></Button></div>
                            </div>
                            <div>
                                <Table>
                                    <thead>
                                        <tr>
                                            <th>Action</th>
                                            <th onClick={() => {
                                                setTitle(!title)
                                                { title ? sortt() : sortt1() }
                                            }}>Title {title ? <BsArrowUp /> : <BsArrowDown />}</th>
                                            <th>Content</th>
                                            <th>Image</th>
                                            <th>Active/Deactive</th>
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
                                                                <button type="button" className="btn btn-outlined-secondary font_size" onClick={handleShow}>Edit</button>
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
                                                <td>{data.title}</td>
                                                <td>{data.content}</td>
                                                <td><img src={data.image} width={40} height={40} /></td>
                                                <td><Form>
                                                    <Form.Check className=""
                                                        type="switch"
                                                        id="custom-switch1"
                                                        value={data.active}

                                                        label=""
                                                        onChange={(e) => {
                                                            console.log(e.target.checked);
                                                            setTableData(_ => {
                                                                _[index].active = e.target.checked
                                                                return [..._]
                                                            })
                                                        }}

                                                    />
                                                </Form></td>

                                            </tr>)}

                                    </tbody>
                                </Table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Modal show={show} onHide={handleClose} size="md">
                <Modal.Header closeButton>
                    <Modal.Title>Project</Modal.Title>
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
                                            <Input type="text" label="Project Title" className="form-control" name="storytitle" placeholder="Enter the Project title" />
                                        </Form.Group>

                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Input as={"textarea"} className="form-control" name="content_story" id="exampleFormControlTextarea1" rows="3" label={"Enter the Content"} />
                                        </Form.Group>

                                        <Form.Group controlId="formFile" className="mb-3 w-100">
                                            <Form.Label>Choose Image</Form.Label>
                                            <Form.Control type="file" />
                                        </Form.Group>

                                        <br />
                                        <div style={{ float: "right", }}>
                                            <Button className="addbtn">Add</Button>
                                        </div>
                                        <Form.Check
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
                    {/*<div className="pt-3 gallery_add_button" style={{ display: "flex", justifyContent: "end" }}>
                        <button type="button" class="btn btn-outline-secondary gallery_add_button">Submit</button>
                                </div>*/}
                </Modal.Footer>
            </Modal>
        </div>
    );
}
export default Success_Stories