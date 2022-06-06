//import { Pagination } from "@mui/material";
import { Col, Form, Modal, Row, Table } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import BasicBreadcrumbs from "../../components/breadcumbs";
import { News_letter_Subscribe } from "../../Services/redux/action/action";
import { useDispatch, useSelector } from "react-redux";
import { Formik } from "formik";
import { BsArrowUp } from "react-icons/bs";
import { BsArrowDown } from "react-icons/bs";
const All_Enquiry = () => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const route = [
        { name: "Home", route: "/" },
        { name: "Enquiry", route: "/" },
        { name: "All Enquiry", route: "/" },

    ]
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
        });
    const selector = useSelector(state => state),
        dispatch = useDispatch(),
        [subscribers, setSubscribers] = useState([])
    // console.log("hellow", subscribers);
    useEffect(() => {
        dispatch(News_letter_Subscribe())
    }, [])
    if (selector) {

    }
    else {

    }
    useEffect(() => {
        // setSubscribers(selector?.data?.apidata?.getnewsletterunsubscriber?.data)
        setpagination({ start: start, end: showPerPage })
    }, [selector, pagination1])
    const Chnage = (e) => {
        const { name, value } = e.target
        setRow(value)
        console.log("this is the select field value", value)
    }

    const handlechange = (event, value) => {
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
    const [tableData, setTableData] = useState([
        {
            Name: "Mark",
            Phone: "gtto",
            Email: "goldy",
            message: "hg",
            subject: "tdf"


        },
        {
            Name: "adfark",
            Phone: "ertto",
            Email: "goldy",
            message: "ahg",
            subject: "hadf"


        },
        {
            Name: "yMark",
            Phone: "ogtto",
            Email: "lgkoldy",
            message: "ehg",
            subject: "poadf"
        },
    ])
    function sortt() {
        const response = tableData.sort((a, b) => a.Name > b.Name ? 1 : -1).map(
            (item, i) => item)
        console.log(response)
        setTableData([...response])
    }

    function sortt1() {
        const response = tableData.sort((a, b) => a.Name < b.Name ? 1 : -1).map(
            (item, i) => item)
        setTableData([...response])
    }
    const [title, setTitle] = useState(false)
    return (
        <div title="All Enquiry">
            <BasicBreadcrumbs route={route} />
            <div className="topGapPad margin_bottom_">
                <div className="wrap">
                    <Form.Select aria-label="Default select example">
                        <option >Select </option>
                        <option value="1">All</option>
                        <option value="1">Resolved</option>
                        <option value="1">Pending</option>

                    </Form.Select>
                </div>
                <div className="boxshadow">
                    <Table>
                        <thead>
                            <tr>
                                <th >Action</th>
                                <th className="headerSortUp " onClick={() => {
                                    setTitle(!title)
                                    { title ? sortt() : sortt1() }
                                }}>Name{title ? <BsArrowUp /> : <BsArrowDown />}</th>
                                <th>Phone</th>
                                <th >Email</th>
                                <th >Message</th>
                                <th >Subject</th>
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
                                    <td>{data.Name}</td>
                                    <td>{data.Phone}</td>
                                    <td>{data.Email}</td>
                                    <td>{data.message}</td>
                                    <td>{data.subject}</td>
                                </tr>)}
                        </tbody>
                    </Table>
                </div>
                <div>
                    <div className="padd_bottm">
                        <Row>
                            <Col md={6}>
                                <div className="gapPad">
                                    <Form.Select aria-label="row" className="w-25">
                                        <option>Row</option>
                                        <option value="1">10</option>
                                        <option value="2">25</option>
                                        <option value="3">50</option>
                                    </Form.Select>
                                </div>
                            </Col>
                            {/*<div className="col-sm-6 col-lg-6 col-md-6">
                                <div className="gapPad pagination_justify_end ">
                                    <Pagination
                                        className="paginationDiv "
                                        count={10}
                                        color="primary" />
                                </div>
    </div>*/}
                        </Row>
                    </div>
                </div>
                <Modal show={show} onHide={handleClose} size="sm">
                    <Modal.Header closeButton>
                        <Modal.Title>Enter the Remarks</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="w-100">
                            <Formik>
                                {() => (
                                    <div className="w-100">
                                        <form>
                                            <div class="form-group">
                                                <label for="exampleFormControlTextarea1">Enter the Remarks for Resolving the Enquiry</label>
                                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                            </div>
                                        </form>
                                    </div>
                                )}
                            </Formik>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <div className="pt-3 gallery_add_button" style={{ display: "flex", justifyContent: "end" }}>
                            <button type="button" class="btn btn-outline-secondary gallery_add_button">Submit</button>
                        </div>
                    </Modal.Footer>
                </Modal>
            </div>
        </div>
    );
}
export default All_Enquiry