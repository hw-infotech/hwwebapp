
import React, { useEffect, useState } from "react";
import Layout from "../../components/layout";
import { Modal } from "react-bootstrap";
import { Field, Formik } from "formik";
import { Input } from "../../components/commoninputfield";
import BasicBreadcrumbs from "../../components/breadcumbs";
import withHeader from "../../HOC/withHeader";
import { Pagination } from "@material-ui/lab";
import { initialValues, validationschemeaa } from "./validation-schema";
import $ from 'jquery';

const Edit_postJob = (value1) => {
    const [sortedField, setSortedField] = useState(null);
    const [requirment2, setRequirments] = useState([])
    const [responsibility, setResponsibility] = useState([])
    const [benefits, Setbenefits] = useState([])
    const [formValues, setFormValues] = useState([]);
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
    let handleChange = (i, e) => {
        let newFormValues = [...formValues];
        newFormValues[i][e.target.name] = e.target.value;
        setFormValues(newFormValues);

    }
    let handleChangereq = (i, e) => {
        let requirment1 = [...requirment2]
        requirment2[i][e.target.name] = e.target.value
        setRequirments(requirment1)

    }
    let handleChangebenefits = (i, e) => {
        let benefits1 = [...benefits]
        benefits[i][e.target.name] = e.target.value
        Setbenefits(benefits1)

    }
    let addFormFields = () => {
        setFormValues([...formValues, { responsibility: "" }])
    }
    const addrequirementt = () => {
        setRequirments([...requirment2, { requirements: "" }])
    }
    const addbenefits = () => {
        Setbenefits([...benefits, { benefits: "" }])
    }

    let removeFormFields = (i) => {
        let newFormValues = [...formValues];
        newFormValues.splice(i, 1);
        setFormValues(newFormValues)
    }
    let removeFormFieldbeefits = (i) => {
        let resns = [...benefits];
        resns.splice(i, 1);
        setResponsibility(resns)
    }
    let removeFormFieldsreq = (i) => {
        let requirment = [...requirment2]
        requirment.splice(i, 1);
        setRequirments(requirment)

    }
    const handlechange1 = (event, value) => {
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
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const route = [
        { name: "Home", route: "/" },
        { name: "Job", route: "/" },
        { name: "Edit Post job", route: "/" },

    ]

    return (
        <div title="Change Gallery Events">
            <BasicBreadcrumbs route={route} />
            <div className="topGapPad margin_bottom_">
                <div className="boxshadow">
                    <h4>List Number of Job Posts</h4>
                    <table class="table" id="dtBasicExample">
                        <thead>
                            <tr>
                                <th scope="col">Job title</th>
                                <th scope="col">Job Description</th>
                                <th scope="col">Job Function</th>
                                <th scope="col">Location</th>
                                <th scope="col">Industries</th>
                                <th scope="col">Senority Level</th>
                                <th scope="col">Employement Type</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                <td>@mdo.jpg</td>
                                <td>@mdo.jpg</td>
                                <td>@mdo.jpg</td>
                                <td>@mdo.jpg</td>
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
                            </tr>
                            <tr>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                                <td>@fat</td>
                                <td>@mdo.jpg</td>
                                <td>@mdo.jpg</td>
                                <td>@mdo.jpg</td>
                                <td class="action "><div class="userDetail ">
                                    <button type="button" class="btn "
                                        id="dropdownIconMenu" data-bs-toggle="dropdown"
                                        aria-expanded="false">
                                        <span class="actionIcon"> <i
                                            class="bi bi-three-dots-vertical"></i> </span>
                                    </button>
                                    <ul class="IconDropdown dropdown-menu context-menu1"
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
                            </tr>
                            <tr>
                                <td>Larry</td>
                                <td>the Bird</td>
                                <td>@twitter</td>
                                <td>@twitter</td>
                                <td>@mdo.jpg</td>
                                <td>@mdo.jpg</td>
                                <td>@mdo.jpg</td>
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
                            </tr>
                        </tbody>
                    </table>
                </div>
                <Modal show={show} onHide={handleClose} size="lg">
                    <Modal.Header closeButton>
                        <Modal.Title>Edit Post Job</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="w-100">
                            <div className="content_center margin_bottom_" >
                                <div className="topGapPad p-3 w-75">
                                    <Formik initialValues={initialValues} validationSchema={validationschemeaa}>
                                        {() => (
                                            <form onSubmit={(e) => {
                                                e.preventDefault()
                                            }}>
                                                <div className="boxshadow ">

                                                    <div className="content_center">
                                                        <div className="add_new_post_padding_between_field w-100">
                                                            <div class="form-group">
                                                                <Input as='select' className="form-control" name='jobtitle' label={"Job title"} id="name" options={[
                                                                    { value: "" },
                                                                    { value: "one" },
                                                                    { value: "two" },
                                                                    { value: "three" },
                                                                ]} >
                                                                </Input>
                                                            </div>
                                                            <div className="form-group">
                                                                <Input type='text' className="form-control" placeholder='Job Description' name='jobdescription' label={"Job Description"} id="name" />
                                                            </div>
                                                            <div className="form-group">
                                                                <Input type='text' className="form-control" placeholder='Job Function' name='jobfunction' label={"Job Function"} id="name" />
                                                            </div>
                                                            <div className="form-group">
                                                                <Input as='select' className="form-control" placeholder="Location" name='location' label={"Location"} id="name" options={[
                                                                    { name: "...." },
                                                                    { value: "one" },
                                                                    { value: "two" },
                                                                    { value: "three" },
                                                                ]} ></Input>
                                                            </div>
                                                            <div className="form-group formGroup">
                                                                <Input
                                                                    type='text'
                                                                    className="form-control"
                                                                    placeholder='Responsibility'
                                                                    name='responsibility'
                                                                    label={"Responsibility"}

                                                                />
                                                                <button type="submit" class="btn btn-outline-secondary post_new_job_add_morefield_button" onClick={(e) => {
                                                                    addFormFields()
                                                                }}>+</button>
                                                            </div>
                                                            {formValues?.map((data, index) =>
                                                                <div className="form-group formGroup">
                                                                    <Input
                                                                        type='text'
                                                                        className="form-control"
                                                                        placeholder='Responsibility'
                                                                        name={'responsibility'}
                                                                        label={"Responsibility"}
                                                                        value={data.responsibility || ""}
                                                                        onChange={e => handleChange(index, e)}
                                                                    />
                                                                    <button type="submit" class="btn btn-outline-secondary post_new_job_add_morefield_button" onClick={() => {
                                                                        removeFormFields(index)
                                                                    }}>*</button>
                                                                </div>
                                                            )}

                                                        </div>
                                                        <div className="add_new_post_padding_between_field w-100">

                                                            <div className="form-group  formGroup">
                                                                <Input
                                                                    type='text'
                                                                    className="form-control post_new_job_calcultextfield"
                                                                    placeholder='Requirments'
                                                                    name='requirements'
                                                                    label={"Requirments"}
                                                                // id="requirements"
                                                                />
                                                                <button type="button"
                                                                    class="btn btn-outline-secondary post_new_job_add_morefield_button"
                                                                    onClick={(e) => {
                                                                        addrequirementt()
                                                                    }}>+</button>
                                                            </div>

                                                            {requirment2?.map((data, index) =>
                                                                <div className="form-group  formGroup">
                                                                    <Input
                                                                        type='text'
                                                                        className="form-control"
                                                                        placeholder='Responsibility'
                                                                        name={'requirements'}
                                                                        label={"Requirments"}
                                                                        value={data.requirements || ""}
                                                                        onChange={e => handleChangereq(index, e)}

                                                                    />
                                                                    <button type="submit" class="btn btn-outline-secondary post_new_job_add_morefield_button" onClick={() => {
                                                                        removeFormFieldsreq(index)
                                                                    }}

                                                                    >*</button>
                                                                </div>
                                                            )}
                                                            <div className="form-group ">
                                                                <Input type='text' className="form-control" placeholder='Industries' name='industries' label={"Industries"} id="name" />
                                                            </div>
                                                            <div className="form-group formGroup">
                                                                <Input type='text'
                                                                    className="form-control"
                                                                    placeholder="Benefits"
                                                                    name='benefits'
                                                                    label={"Benefits"}
                                                                    id="name"

                                                                />
                                                                <button type="submit" class="btn btn-outline-secondary post_new_job_add_morefield_button" onClick={() => {
                                                                    addbenefits()
                                                                }}>+</button>
                                                            </div>
                                                            {benefits.map((data, index) =>
                                                                <div className="form-group formGroup">
                                                                    {console.log(data, "data")}
                                                                    <Input type='text'
                                                                        className="form-control"
                                                                        value={data.benefits || ""}
                                                                        placeholder="Benefits"
                                                                        name='benefits'
                                                                        label={"Benefits"}
                                                                        id="name"
                                                                        onChange={e => handleChangebenefits(index, e)}
                                                                    />
                                                                    <button type="submit" class="btn btn-outline-secondary post_new_job_add_morefield_button" onClick={() => {
                                                                        removeFormFieldbeefits(index)
                                                                    }}>*</button>
                                                                </div>
                                                            )}
                                                            <div className="form-group">
                                                                <Input as='select' className="form-control" placeholder="Senority Level" name='senoritylevel' label={"Senority Level"} id="name" options={[
                                                                    { value: "" },
                                                                    { value: "one" },
                                                                    { value: "two" },
                                                                    { value: "three" },
                                                                ]} ></Input>
                                                            </div>
                                                            <div className="form-group">
                                                                <Input as='select' className="form-control" placeholder="Employement type" name='employementtype' label={"Employement type"} id="name" options={[
                                                                    { value: "...." },
                                                                    { value: "one" },
                                                                    { value: "two" },
                                                                    { value: "three" },
                                                                ]} ></Input>
                                                            </div>
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
                            <button type="button" class="btn btn-outline-secondary gallery_add_button">Submit</button>
                        </div>
                    </Modal.Footer>
                </Modal>

            </div>
        </div>
    );


}
export default Edit_postJob