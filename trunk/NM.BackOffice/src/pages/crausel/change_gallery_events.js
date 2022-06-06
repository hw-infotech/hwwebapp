
import React, { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import { Field, Formik } from "formik";
import { Input } from "../../components/commoninputfield";
//import BasicBreadcrumbs from "../../components/breadcumbs";
//import { Pagination } from "@material-ui/lab";

const Change_Gallery_Events = () => {
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
    useEffect(() => {
        //setSubscribers(selector?.data?.apidata?.getnewsletterunsubscriber?.data)
        setpagination({ start: start, end: showPerPage })
    }, [pagination1])
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
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const route = [
        { name: "Home", route: "/" },
        { name: "Crausel", route: "/" },
        { name: "Change_Gallery_event", route: "/" },

    ]
    return (
        <div title="Change Gallery Events">
            {/*<BasicBreadcrumbs route={route} />*/}
            <div className="topGapPad margin_bottom_">
                <div className="boxshadow">
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">Action</th>
                                <th scope="col">Name</th>
                                <th scope="col">Description</th>
                                <th scope="col">images</th>
                                <th scope="col">Music</th>
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
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                <td>@mdo.jpg</td>
                            </tr>
                            <tr> <td class="action "><div class="userDetail ">
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
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                                <td>@fat</td>
                            </tr>
                            <tr>  <td class="action "><div class="userDetail ">
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
                                            <button type="button" className="btn btn-outlined-secondary font_size">Edit</button>
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
                                <td>Larry</td>
                                <td>the Bird</td>
                                <td>@twitter</td>
                                <td>@twitter</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <Modal show={show} onHide={handleClose} size="md">
                    <Modal.Header closeButton>
                        <Modal.Title>Edit Event</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="w-100">
                            <Formik initialValues={{ name: "", image: "" }}>
                                {() => (
                                    <div className="w-100">
                                        <form >
                                            <div className="content_center ">
                                                <div className="w-100  font_size">
                                                    <div className="form-group">
                                                        <Input type='text' className="form-control" placeholder='Event Name' name='eventname' label={"Event Name"} id="name" />
                                                    </div>
                                                    <div class="mb-3">
                                                        <label for="exampleFormControlTextarea1" class="form-label">Event Description</label>
                                                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                                    </div>
                                                    <div className="form-group">
                                                        <label>Event Date</label>
                                                        <Field type="date" className="form-control" />
                                                    </div>
                                                    <div class="mb-3">
                                                        <label for="formFile" class="form-label">Choose Audio</label>
                                                        <input class="form-control" type="file" id="formFile" />
                                                    </div>
                                                    <div class="mb-3">
                                                        <label for="formFile" class="form-label">Choose images for Add</label>
                                                        <input class="form-control" type="file" id="formFile" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mt-4">
                                                <ul className="d-flex change_gallery_event_Pics">
                                                    <li className="change_gallery_event_Pics_height_width">  <img src="./assets/images/team_nestormind.png" style={{ width: "100%" }} class="card-img-top" alt="..." />
                                                        <div className="d-flex pt-1 imageTopButton">
                                                            <div class="custom-control custom-switch"  >
                                                                <input type="checkbox" class="custom-control-input" id="customSwitch1" />
                                                                <label class="custom-control-label" for="customSwitch1"></label>
                                                            </div>
                                                            <div>
                                                                <button type="button" className="btn btn-outlined-secondary"><i class="fs-5 bi-trash"></i></button>
                                                            </div>
                                                        </div></li>
                                                    <li className="change_gallery_event_Pics_height_width">  <img src="./assets/images/team_nestormind.png" style={{ width: "100%" }} class="card-img-top" alt="..." />
                                                        <div className="d-flex pt-1 imageTopButton">
                                                            <div class="custom-control custom-switch" style={{ textAlign: "center" }} >
                                                                <input type="checkbox" class="custom-control-input" id="customSwitch1" />
                                                                <label class="custom-control-label" for="customSwitch1"></label>
                                                            </div>
                                                            <div>
                                                                <button type="button" className="btn btn-outlined-secondary"><i class="fs-5 bi-trash"></i></button>
                                                            </div>
                                                        </div></li>
                                                    <li className="change_gallery_event_Pics_height_width">  <img src="./assets/images/team_nestormind.png" style={{ width: "100%" }} class="card-img-top" alt="..." />
                                                        <div className="d-flex pt-1 imageTopButton">
                                                            <div class="custom-control custom-switch" style={{ textAlign: "center" }} >
                                                                <input type="checkbox" class="custom-control-input" id="customSwitch1" />
                                                                <label class="custom-control-label" for="customSwitch1"></label>
                                                            </div>
                                                            <div>
                                                                <button type="button" className="btn btn-outlined-secondary"><i class="fs-5 bi-trash"></i></button>
                                                            </div>
                                                        </div></li>
                                                    <li className="change_gallery_event_Pics_height_width">  <img src="./assets/images/team_nestormind.png" style={{ width: "100%" }} class="card-img-top" alt="..." />
                                                        <div className="d-flex pt-1 imageTopButton">
                                                            <div class="custom-control custom-switch" style={{ textAlign: "center" }} >
                                                                <input type="checkbox" class="custom-control-input" id="customSwitch1" />
                                                                <label class="custom-control-label" for="customSwitch1"></label>
                                                            </div>
                                                            <div>
                                                                <button type="button" className="btn btn-outlined-secondary"><i class="fs-5 bi-trash"></i></button>
                                                            </div>
                                                        </div></li>
                                                    <li className="change_gallery_event_Pics_height_width">  <img src="./assets/images/team_nestormind.png" style={{ width: "100%" }} class="card-img-top" alt="..." />
                                                        <div className="d-flex pt-1 imageTopButton">
                                                            <div class="custom-control custom-switch" style={{ textAlign: "center" }} >
                                                                <input type="checkbox" class="custom-control-input" id="customSwitch1" />
                                                                <label class="custom-control-label" for="customSwitch1"></label>
                                                            </div>
                                                            <div>
                                                                <button type="button" className="btn btn-outlined-secondary"><i class="fs-5 bi-trash"></i></button>
                                                            </div>
                                                        </div></li>
                                                </ul>
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
                <div className="row padd_bottm">
                    <div className="col-sm-6 col-lg-6 col-md-6">
                        <div className="gapPad">
                            <select class="form-select w-25 " name={state.row_value} onChange={Chnage}>
                                <option disabled selected>Rows</option>
                                <option value="10">10</option>
                                <option value="25">25</option>
                                <option value="50">50</option>
                            </select>
                        </div>
                    </div>
                    {/* <div className="col-sm-6 col-lg-6 col-md-6 ">
                        <div className="gapPad pagination_justify_end ">
                            <Pagination
                                className="paginationDiv"
                                count={5}
                                onChange={handlechange}
                                color="primary" />
                        </div>
                    </div>*/}
                </div>
            </div>
        </div>
    );
}
export default Change_Gallery_Events