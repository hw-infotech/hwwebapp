
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
        //setnewsletter-subscriberss(selector?.data?.apidata?.getnewsletterunsubscriber?.data)
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
            <div classNameName="topPadding-10 margin_bottom_">
                <div classNameName="boxshadow">
                    <table className="table">
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
                                <td className="action "><div className="userDetail ">

                                    <button type="button" className="btn "
                                        id="dropdownIconMenu" data-bs-toggle="dropdown"
                                        aria-expanded="false">
                                        <span className="actionIcon"> <i
                                            className="bi bi-three-dots-vertical"></i> </span>
                                    </button>
                                    <ul className="IconDropdown dropdown-menu context-menu1 "
                                        aria-labelledby="dropdownIconMenu">
                                        <li className="dropdownList">
                                            <div className="actionBtns">
                                                <span className="editAction" data-bs-toggle="modal"
                                                    data-bs-target="#editbtn"><i
                                                        className="bi bi-pencil-square"></i></span>
                                                <button type="button" classNameName="btn btn-outlined-secondary fs_13" onClick={handleShow}>View</button>
                                            </div>
                                        </li>

                                        <li className="dropdownList">
                                            <div className="actionBtns">
                                                <span className="viewIcon" data-bs-toggle="modal"
                                                    data-bs-target="#viewbtn"> <i
                                                        className="bi bi-eye"></i></span>
                                                <button type="button" classNameName="btn btn-outlined-secondary fs_13" >Update</button>
                                            </div>
                                        </li>
                                        <li className="dropdownList">
                                            <div className="actionBtns">
                                                <span className="deleteAction" data-bs-toggle="modal"
                                                    data-bs-target="#deletebtn"> <i
                                                        className="bi bi-trash3-fill"></i></span>
                                                <button type="button" classNameName="btn btn-outlined-secondary fs_13">Deletes</button>
                                            </div>
                                        </li>
                                    </ul>
                                </div></td>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                <td>@mdo.jpg</td>
                            </tr>
                            <tr> <td className="action "><div className="userDetail ">
                                <button type="button" className="btn "
                                    id="dropdownIconMenu" data-bs-toggle="dropdown"
                                    aria-expanded="false">
                                    <span className="actionIcon"> <i
                                        className="bi bi-three-dots-vertical"></i> </span>
                                </button>
                                <ul className="IconDropdown dropdown-menu context-menu1 "
                                    aria-labelledby="dropdownIconMenu">
                                    <li className="dropdownList">
                                        <div className="actionBtns">
                                            <span className="editAction" data-bs-toggle="modal"
                                                data-bs-target="#editbtn"><i
                                                    className="bi bi-pencil-square"></i></span>
                                            <button type="button" classNameName="btn btn-outlined-secondary fs_13" onClick={handleShow}>View</button>
                                        </div>
                                    </li>
                                    <li className="dropdownList">
                                        <div className="actionBtns">
                                            <span className="viewIcon" data-bs-toggle="modal"
                                                data-bs-target="#viewbtn"> <i
                                                    className="bi bi-eye"></i></span>
                                            <button type="button" classNameName="btn btn-outlined-secondary fs_13" >Update</button>
                                        </div>
                                    </li>
                                    <li className="dropdownList">
                                        <div className="actionBtns">
                                            <span className="deleteAction" data-bs-toggle="modal"
                                                data-bs-target="#deletebtn"> <i
                                                    className="bi bi-trash3-fill"></i></span>
                                            <button type="button" classNameName="btn btn-outlined-secondary fs_13">Deletes</button>
                                        </div>
                                    </li>
                                </ul>
                            </div></td>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                                <td>@fat</td>
                            </tr>
                            <tr>  <td className="action "><div className="userDetail ">
                                <button type="button" className="btn "
                                    id="dropdownIconMenu" data-bs-toggle="dropdown"
                                    aria-expanded="false">
                                    <span className="actionIcon"> <i
                                        className="bi bi-three-dots-vertical"></i> </span>
                                </button>
                                <ul className="IconDropdown dropdown-menu context-menu1 "
                                    aria-labelledby="dropdownIconMenu">
                                    <li className="dropdownList">
                                        <div className="actionBtns">
                                            <span className="editAction" data-bs-toggle="modal"
                                                data-bs-target="#editbtn"><i
                                                    className="bi bi-pencil-square"></i></span>
                                            <button type="button" classNameName="btn btn-outlined-secondary fs_13">Edit</button>
                                        </div>
                                    </li>
                                    <li className="dropdownList">
                                        <div className="actionBtns">
                                            <span className="viewIcon" data-bs-toggle="modal"
                                                data-bs-target="#viewbtn"> <i
                                                    className="bi bi-eye"></i></span>
                                            <button type="button" classNameName="btn btn-outlined-secondary fs_13" >Update</button>
                                        </div>
                                    </li>
                                    <li className="dropdownList">
                                        <div className="actionBtns">
                                            <span className="deleteAction" data-bs-toggle="modal"
                                                data-bs-target="#deletebtn"> <i
                                                    className="bi bi-trash3-fill"></i></span>
                                            <button type="button" classNameName="btn btn-outlined-secondary fs_13">Deletes</button>
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
                        <div classNameName="w-100">
                            <Formik initialValues={{ name: "", image: "" }}>
                                {() => (
                                    <div classNameName="w-100">
                                        <form >
                                            <div classNameName="content_center ">
                                                <div classNameName="w-100  fs_13">
                                                    <div classNameName="form-group">
                                                        <Input type='text' classNameName="form-control" placeholder='Event Name' name='eventname' label={"Event Name"} id="name" />
                                                    </div>
                                                    <div className="mb-3">
                                                        <label for="exampleFormControlTextarea1" className="form-label">Event Description</label>
                                                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                                    </div>
                                                    <div classNameName="form-group">
                                                        <label>Event Date</label>
                                                        <Field type="date" classNameName="form-control" />
                                                    </div>
                                                    <div className="mb-3">
                                                        <label for="formFile" className="form-label">Choose Audio</label>
                                                        <input className="form-control" type="file" id="formFile" />
                                                    </div>
                                                    <div className="mb-3">
                                                        <label for="formFile" className="form-label">Choose images for Add</label>
                                                        <input className="form-control" type="file" id="formFile" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div classNameName="mt-4">
                                                <ul classNameName="d-flex change_gallery_event_Pics">
                                                    <li classNameName="change_gallery_event_Pics_height_width">  <img src="./assets/images/team_nestormind.png" style={{ width: "100%" }} className="card-img-top" alt="..." />
                                                        <div classNameName="d-flex pt-1 imageTopButton">
                                                            <div className="custom-control custom-switch"  >
                                                                <input type="checkbox" className="custom-control-input" id="customSwitch1" />
                                                                <label className="custom-control-label" for="customSwitch1"></label>
                                                            </div>
                                                            <div>
                                                                <button type="button" classNameName="btn btn-outlined-secondary"><i className="fs-5 bi-trash"></i></button>
                                                            </div>
                                                        </div></li>
                                                    <li classNameName="change_gallery_event_Pics_height_width">  <img src="./assets/images/team_nestormind.png" style={{ width: "100%" }} className="card-img-top" alt="..." />
                                                        <div classNameName="d-flex pt-1 imageTopButton">
                                                            <div className="custom-control custom-switch" style={{ textAlign: "center" }} >
                                                                <input type="checkbox" className="custom-control-input" id="customSwitch1" />
                                                                <label className="custom-control-label" for="customSwitch1"></label>
                                                            </div>
                                                            <div>
                                                                <button type="button" classNameName="btn btn-outlined-secondary"><i className="fs-5 bi-trash"></i></button>
                                                            </div>
                                                        </div></li>
                                                    <li classNameName="change_gallery_event_Pics_height_width">  <img src="./assets/images/team_nestormind.png" style={{ width: "100%" }} className="card-img-top" alt="..." />
                                                        <div classNameName="d-flex pt-1 imageTopButton">
                                                            <div className="custom-control custom-switch" style={{ textAlign: "center" }} >
                                                                <input type="checkbox" className="custom-control-input" id="customSwitch1" />
                                                                <label className="custom-control-label" for="customSwitch1"></label>
                                                            </div>
                                                            <div>
                                                                <button type="button" classNameName="btn btn-outlined-secondary"><i className="fs-5 bi-trash"></i></button>
                                                            </div>
                                                        </div></li>
                                                    <li classNameName="change_gallery_event_Pics_height_width">  <img src="./assets/images/team_nestormind.png" style={{ width: "100%" }} className="card-img-top" alt="..." />
                                                        <div classNameName="d-flex pt-1 imageTopButton">
                                                            <div className="custom-control custom-switch" style={{ textAlign: "center" }} >
                                                                <input type="checkbox" className="custom-control-input" id="customSwitch1" />
                                                                <label className="custom-control-label" for="customSwitch1"></label>
                                                            </div>
                                                            <div>
                                                                <button type="button" classNameName="btn btn-outlined-secondary"><i className="fs-5 bi-trash"></i></button>
                                                            </div>
                                                        </div></li>
                                                    <li classNameName="change_gallery_event_Pics_height_width">  <img src="./assets/images/team_nestormind.png" style={{ width: "100%" }} className="card-img-top" alt="..." />
                                                        <div classNameName="d-flex pt-1 imageTopButton">
                                                            <div className="custom-control custom-switch" style={{ textAlign: "center" }} >
                                                                <input type="checkbox" className="custom-control-input" id="customSwitch1" />
                                                                <label className="custom-control-label" for="customSwitch1"></label>
                                                            </div>
                                                            <div>
                                                                <button type="button" classNameName="btn btn-outlined-secondary"><i className="fs-5 bi-trash"></i></button>
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
                        <div classNameName="pt-3 gallery_add_button" style={{ display: "flex", justifyContent: "end" }}>
                            <button type="button" className="btn btn-outline-secondary gallery_add_button">Submit</button>
                        </div>
                    </Modal.Footer>
                </Modal>
                <div classNameName="row padd_bottm">
                    <div classNameName="col-sm-6 col-lg-6 col-md-6">
                        <div classNameName="padding-30">
                            <select className="form-select w-25 " name={state.row_value} onChange={Chnage}>
                                <option disabled>Rows</option>
                                <option value="10">10</option>
                                <option value="25">25</option>
                                <option value="50">50</option>
                            </select>
                        </div>
                    </div>
                    {/* <div classNameName="col-sm-6 col-lg-6 col-md-6 ">
                        <div classNameName="padding-30 pagination_justify_end ">
                            <Pagination
                                classNameName="paginationDiv"
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