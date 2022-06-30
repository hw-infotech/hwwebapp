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
import CustomPagination from "../../shared/pagination";
import { confirm } from "react-bootstrap-confirmation";
import { subString } from "../../Services/commonFunctions";

const route = [
    { name: "Dashboard", route: "/" },
    { name: "Sliders/Carousels", route: "/success-stories" },
    { name: "Success Stories", route: "/success-stories" },
]
const records = [
    {
        title: "Birthday Post",
        content: "it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown",
        active: false,
        image: ""

    },
    {
        title: "Christmas Post",
        content: "it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown",
        active: true,
        image: ""
    },
    {
        title: "New Year Post",
        content: "it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown",
        active: false,
        image: ""
    }
]
const Success_Stories = () => {
    const [values, setValues] = useState()
    const [index, setindex] = useState()
    const [state, setState] = useState({
        title: "",
        content: "",
        active: false,
        image: ""
    })

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
        setState({
            title: "",
            content: "",
            active: null,
            image: ""
        })
        // alert(JSON.stringify(state))
    };
    const handleShow = () => setShow(true);

    const [tableData, setTableData] = useState(records)
    const requestSearch = (searchedVal) => {
        const filteredRows = records.filter((row) => {
            return row.title.toLowerCase().includes(searchedVal.toLowerCase());
        });
        setTableData(filteredRows)
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
                oldState[deleteObj.index].active = true
                return [...oldState]
            })
        }
        if (!deleteObj.rowStatus) {
            setTableData(oldState => {
                oldState[deleteObj.index].active = false
                return [...oldState]
            })
        }
    };
    const onhandlechange = (e) => {
        const { name, value } = e.target
        setState({ ...state, [name]: value })
    }

    const handleFormSubmit = (values, { resetForm }) => {
        const { name, value } = values
        setState({ ...state, [name]: value })
        handleClose()
        setState({
            title: "",
            content: "",
            active: "",
            image: ""
        })
        // resetForm()
    }

    return (
        <div>
            {<BasicBreadcrumbs route={route} />}
            <div className="filter_header">
                <div className="filter-title"><h4>Success Stories</h4></div>
                <div className="filter_container">
                    <div className="" >
                        <FaFilter size={25} color="#ff6b01" onClick={() => setSdisabled(p => !p)} />
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
                                <Form.Select aria-label="Default select example" hidden={disable}  >
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
                                </InputGroup>
                            </div>
                            <Modal show={showalert} onHide={handleClose} >
                                <Modal.Header closeButton>
                                    <Modal.Title>Alert</Modal.Title>
                                </Modal.Header>

                                <Modal.Body>
                                    <p>{rowtext?.text}</p>
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button variant="secondary" className="btn btn-sm" onClick={() => {

                                        setShowalert(false)
                                    }} >No</Button>
                                    <Button variant="primary" className="btn btn-sm" onClick={() => {
                                        display()
                                        setShowalert(false)
                                    }}>Yes</Button>
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
                                    {tableData?.map((data, index) =>
                                        <tr>

                                            <td class="action ">
                                                <div class="userDetail ">
                                                    <button type="button" className="btn actionIcon " key={index}
                                                        id="dropdownIconMenu" data-bs-toggle="dropdown"
                                                        aria-expanded="false">
                                                        <span class="actionIcon"> <i
                                                            class="bi bi-three-dots-vertical"></i>
                                                        </span>
                                                    </button>
                                                    <ul class="IconDropdown dropdown-menu context-menu11"
                                                        aria-labelledby="dropdownIconMenu">
                                                        <li class="dropdownList ">
                                                            <div class="actionBtns  context-menu1 ">
                                                                <span class="editAction" data-bs-toggle="modal"
                                                                    data-bs-target="#editbtn"><i
                                                                        class="bi bi-pencil-square"></i></span>
                                                                <button type="button" key={index} className="btn btn-outlined-secondary font_size" onClick={() => {
                                                                    setState(data)
                                                                    handleShow()
                                                                    setEdit(true)
                                                                    { setindex(index) }
                                                                }}>Edit</button>
                                                            </div>
                                                        </li>
                                                        <li class="dropdownList">
                                                            <div class="actionBtns context-menu1">
                                                                <span class="deleteAction" data-bs-toggle="modal"
                                                                    data-bs-target="#deletebtn"> <i
                                                                        class="bi bi-trash3-fill"></i></span>
                                                                <button type="button" key={index} className="btn btn-outlined-secondary font_size" onClick={() => {
                                                                    tableData.splice(index, 1)
                                                                    setTableData([...tableData])
                                                                }}>Delete</button>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </td>
                                            <td>{data.title}</td>
                                            {<td>{data.content && subString(data.content, 115)}</td>}
                                            <td><Form>
                                                {console.log(data?.active)}
                                                <Form.Check className="switch_padding"
                                                    type="switch"
                                                    key={index}
                                                    id="custom-switch1"
                                                    checked={data.active}
                                                    label=""
                                                    onChange={(e) => {
                                                        setShowalert(true)
                                                        setRowtext(e.target.checked ? ({
                                                            id: 1,
                                                            text: "Are you sure to Active the  Story ?",
                                                        }) : ({
                                                            id: 0,
                                                            text: "Are you sure to Deactive the Story  ?",
                                                        }))
                                                        if (data.active === true) {
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
                            total={tableData.length}
                        />
                    </div>
                </div>
            </div>
            <Modal show={show} onHide={handleClose} size="md">
                <Modal.Header closeButton>
                    <Modal.Title>{edit ? "Edit Project" : "Add Project"}</Modal.Title>
                </Modal.Header>
                <Formik
                    initialValues={state}
                    // validationSchema={validationschemeaa}
                    onSubmit={handleFormSubmit}
                >
                    {({ values, handleSubmit, handleChange }) => (
                        <form onSubmit={(e) => {
                            e.preventDefault()
                            handleSubmit()
                        }}>
                            {setValues(values?.active)}
                            {console.log(values)}
                            <Modal.Body>
                                {<div className="">
                                    <div className="cardBoard">
                                        <Form.Group className="" controlId="formBasicEmail">
                                            <Input
                                                type="text"
                                                label="Project Title"
                                                className="form-control"
                                                name="title"
                                                placeholder=""
                                                onChange={handleChange}
                                                id="title"
                                                value={values.title}
                                            />

                                            <Input as={"textarea"} className="form-control" name="content" id="exampleFormControlTextarea1" rows="3" label={"Description"} onChange={handleChange} value={values.content} />

                                            <Form.Label className="label-size">Choose Image</Form.Label>
                                            <Form.Control className="label-size" type="file" name="image" onChange={handleChange} value={values.image} />
                                        </Form.Group>
                                        <br />
                                        <Form.Check className="custom1-switch label-size"
                                            type="switch"
                                            id="Active"
                                            label="Active"
                                            name="active"
                                            checked={values?.active}
                                            onChange={handleChange}
                                            color="#eb7823"
                                        />
                                    </div>
                                </div>}
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" className="addbtn" onClick={handleClose}>Close</Button>
                                <div style={{ float: "right", }}>
                                    {edit ? <Button className="addbtn" type="submit" onClick={() => {
                                        tableData[index].title = values.title
                                        tableData[index].content = values.content
                                        tableData[index].image = values.image
                                        tableData[index].active = values.active
                                        setTableData([...tableData])
                                        setShowalert(false)
                                    }}>Update</Button> :
                                        <Button className="addbtn" onClick={() => {

                                            setTableData(old => [...old, values])
                                            setShowalert(false)
                                            console.log("tabledata", tableData)

                                        }}>Add</Button>}
                                </div>
                            </Modal.Footer>
                        </form>
                    )}
                </Formik>
            </Modal>
        </div>
    );
}
export default Success_Stories