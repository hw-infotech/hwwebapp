import { Pagination } from "@mui/material";
import { Modal } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import BasicBreadcrumbs from "../../components/breadcumbs";
import Layout from "../../components/layout";
import { News_letter_Subscribe } from "../../Services/redux/action/action";
import { useDispatch, useSelector } from "react-redux";
import withHeader from "../../HOC/withHeader";
import { Formik } from "formik";

const All_Enquiry = () => {
    //useEffect(() => {
    //   setTitle("All Enquiry")
    // }, [])
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
    // console.log(subscribers, "subscribers");
    const handlechange = (event, value) => {
        var value1;
        setNext(value)
        //console.log(value, "comp", next)
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
    return (
        <div title="All Enquiry">
            <BasicBreadcrumbs route={route} />
            <div className="topGapPad margin_bottom_">
                <h4>List Number of Enquiry</h4>
                <div className="boxshadow">
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">Action</th>
                                <th scope="col">Sr No</th>
                                <th scope="col">Name</th>
                                <th scope="col">Phone</th>
                                <th scope="col">Email</th>
                                <th scope="col">Message</th>
                                <th scope="col">Subject</th>

                            </tr>
                        </thead>
                        <tbody>
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
                           
                            <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                <td>@mdo</td>
                                <td>@mdo</td>
                              
                            </tr>
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
                                <th scope="row">2</th>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                                <td>@fat</td>
                                <td>@fat</td>
                              
                            </tr>
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
                                <th scope="row">3</th>
                                <td>Larry</td>
                                <td>the Bird</td>
                                <td>@twitter</td>
                                <td>@twitter</td>
                                <td>@twitter</td>
                                
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div>
                    <div className="padd_bottm">
                        <div className="row ">
                            <div className="col-sm-6 col-lg-6 col-md-6">
                                <div className="gapPad">
                                    <select class="form-select w-25 " name={state.row_value}>
                                        <option disabled selected>Rows</option>
                                        <option value="10">10</option>
                                        <option value="25">25</option>
                                        <option value="50">50</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-sm-6 col-lg-6 col-md-6">
                                <div className="gapPad pagination_justify_end ">
                                    <Pagination
                                        className="paginationDiv "
                                        count={10}
                                        color="primary" />
                                </div>
                            </div>
                        </div>
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