import React, { useEffect, useState } from "react";
import { Button, Col, Collapse, Form, FormCheck, FormControl, InputGroup, Modal, Row, Table } from "react-bootstrap";
import { Field, Formik, FormikProvider } from "formik";
import { Input } from "../../components/commoninputfield";
import { BsSearch } from "react-icons/bs";
import BasicBreadcrumbs from "../../components/breadcumbs";
//import { Pagination } from "@material-ui/lab";
import { initialValues, validationschemeaa } from "./validation-schema";
import { useNavigate } from "react-router";
import { BsArrowUp } from "react-icons/bs";
import { BsArrowDown } from "react-icons/bs";
import { IoAddOutline } from "react-icons/";
import CreatableSelectField from "../../components/selectfield";
import CustomPagination from "../../shared/pagination";
import { FaFilter } from "react-icons/fa";
import { VscFilterFilled } from "react-icons/vsc";
import { MdAdd } from "react-icons/md";
import { subString } from "../../Services/commonFunctions";
import { Edit_Data, getAllEnquries, Send_data } from "../../Services/redux/action/action";
import { useDispatch, useSelector } from "react-redux";
import { BsFilter } from "react-icons/bs";
import { AiOutlinePlusCircle } from "react-icons/ai";
import TooltipComp from "../../shared/Tooltipomp";


const Edit_postJob = (value1) => {
    useEffect(() => {
        document.title = "Job"
    }, [])
    const [jobpost, setjobpost] = useState()
    const [rowtext, setRowtext] = useState()
    const [showalert, setShowalert] = useState(false)
    const [disable, setSdisabled] = useState(false)
    const [requirment2, setRequirments] = useState([])
    const [row, setRow] = useState(10)
    const [state, setState] = useState({
        row_value: ""
    })
    const [showPerPage, setShowPerPage] = useState()
    const [next, setNext] = useState()
    const [start, setStart] = useState();
    const [pagination1, setpagination] = useState(
        {
            start: start,
            end: showPerPage
        })
    const navigate = useNavigate();
    const [paginaion2, setpagination2] = useState({
        start: 0,
        end: showPerPage
    });
    const onPageChange = (start, end) => {
        setpagination({ start: start, end: end });
    };
    useEffect(() => {
        //setnewsletter-subscriberss(selector?.data?.apidata?.getnewsletterunsubscriber?.data)
        setpagination({ start: start, end: showPerPage })
    }, [pagination1])
    const Chnage = (e) => {
        const { name, value } = e.target
        setRow(value)

    }
    const handlechange1 = (event, value) => {
        var value1;
        setNext(value)
        if (next <= value) {
            value1 = row * value
            setShowPerPage(value1)
            setStart(value1 - row)
            setpagination({ start: start, end: showPerPage })
        }
        else {

            setStart(start - row)
            setShowPerPage(showPerPage - row)
            setpagination({ start: start - row, end: showPerPage - row })
        }
    }
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const route = [
        { name: "Dashboard", route: "/" },
        { name: "Job Management", route: "" },
        { name: "Job", route: "" },

    ]
    const [formState, setFormState] = useState()
    const records = [
        {
            jobtitle: "UI/UX",
            description: "We are looking for an experienced Strategy Manager. ",
            functions: "Supervise and manage department team ",
            responsibility: [],
            benfits: [],
            requirment: [],
            industry: "",
            level: "Junior",
            type: "Part time",
            active: "deactive"

        },
        {
            jobtitle: "Project Manager",
            description: "Develop methods for motivating and inspiring stakeholders.",
            functions: "Provide support and training to team members",
            responsibility: [],
            benfits: [],
            requirment: [],
            industry: "",
            level: "Senior",
            type: "Full time",
            active: "deactive"
        },
        {
            Jobtitle: "Project Manager",
            description: "Develop methods for motivating and inspiring stakeholders.",
            functions: "Report to directors and executive staff",
            responsibility: [],
            benfits: [],
            requirment: [],
            industry: "",
            level: "Senior",
            type: "Full time",
            active: "active"
        }
    ]
    const selector = useSelector(state => state.data.apidata?.allEnquries)
    useEffect(() => {


        dispatch(getAllEnquries())
        // setTableData(old=>[...old,selector])  
    }, [])

    const [tableData, setTableData] = useState(selector)
    function sortt() {
        const response = tableData.sort((a, b) => (a.Jobtitle.toLowerCase() > b.Jobtitle.toLowerCase()) ? 1 : ((b.Jobtitle.toLowerCase() > a.Jobtitle.toLowerCase()) ? -1 : 0));

        setTableData([...response])
    }
    function sortt1() {
        const response = tableData.sort((a, b) => (a.Jobtitle.toLowerCase() < b.Jobtitle.toLowerCase()) ? 1 : ((b.Jobtitle.toLowerCase() < a.Jobtitle.toLowerCase()) ? -1 : 0));

        setTableData([...response])
    }
    const [title, setTitle] = useState(false)
    const requestSearch = (searchedVal) => {
        const filteredRows = tableData.filter((row) => {
            return row.jobtitle.toLowerCase().includes(searchedVal.toLowerCase());
        });
        setTableData(filteredRows)

    };
    const onhandlechange = (e) => {
        //const { name, value } = e.target
        // setState({ ...state, [name]: value })
        //console.log(state);
    }
    const dispatch = useDispatch()
    const display = () => {

        setShowalert(true)
        //const result = await confirm(rowtext.text);
        // console.log(rowText);
        if (deleteObj.rowStatus) {
            setTableData(oldState => {
                oldState[deleteObj.index].active = "active"
                return [...oldState]
            })
        }
        if (!deleteObj.rowStatus) {
            setTableData(oldState => {
                oldState[deleteObj.index].active = "deactive"
                return [...oldState]
            })
        }
    };
    const [deleteObj, setDeleteObj] = useState({
        index: 0,
        rowStatus: false
    })

    return (
        <div className="joblist-main-box">
            {<BasicBreadcrumbs route={route} />}
            <div className="panle_body">
                <div className="panle_header">
                    <div className="left-panle-title"><h4>Job</h4></div>
                    <div className="right_panle_container">
                        <TooltipComp component={ <Button variant="" className="btn-sm remove_button_padding" onClick={() => setSdisabled(p => !p)}> <BsFilter size={24} color="#ff6b01" /></Button>} tooltip="filter"/>
                        <TooltipComp component={   <Button variant="" className="btn-sm remove_button_padding" onClick={() => {
                            navigate("/post-new-job")

                        }}> <AiOutlinePlusCircle size={24} color="#ff6b01" /></Button>} tooltip="Add"/>
                      
                    </div>
                </div>
                <div className="gapbetween pt-1">
                    <Collapse in={disable}>
                        <div>
                            {
                                <Form.Select aria-label="Default select example" className="fs_13" onChange={requestSearch} >
                                    <option disabled hidden selected>Status  </option>
                                    <option value="1">All</option>
                                    <option value="1">Subscribe</option>
                                    <option value="1">Unsubscribe</option>
                                </Form.Select>}
                        </div>
                    </Collapse>
                    <Collapse in={disable}>
                        <div className="serachbar" >
                            <InputGroup className="mb-3">
                                <FormControl
                                    className="fs_13"
                                    placeholder="Search by title "
                                    aria-label="Recipient's username"
                                    aria-describedby="basic-addon2"
                                    onChange={(e) => {
                                        requestSearch(e.target.value)
                                    }}
                                />
                                {/*<Button variant="outline-secondary" id="button-addon2">
                                                <BsSearch />
                                            </Button>*/}
                            </InputGroup>
                        </div>
                    </Collapse>
                </div>
            </div>
            <div className="fs-13">
                {/*<h4>List Number of Job Posts</h4>*/}
                <Modal show={showalert} onHide={handleClose} backdrop="static"
                    keyboard={false}>
                    <Modal.Header  className="modal-titlee">
                        <Modal.Title className="modal-titlee">Alert</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p>{rowtext?.text}</p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button className="btn-sm fs_13" variant="secondary" onClick={() => {
                            setShowalert(false)
                        }} >No</Button>
                        <Button className="btn-sm fs_13" variant="primary" onClick={() => {
                            display()
                            setShowalert(false)
                        }}>Yes</Button>
                    </Modal.Footer>
                </Modal>
                <div className="content_box">
                    <div className="data-table">
                        <Table striped bordered hover responsive>
                            <thead>
                                <tr>
                                    <th className="action_colwidth">Action</th>
                                    <th className="action_titlewidth" onClick={() => {
                                        setTitle(!title)
                                        { title ? sortt() : sortt1() }
                                    }}> Title {title ? <BsArrowDown /> : <BsArrowUp />}</th>
                                    <th>Description</th>
                                    <th>Function</th>
                                    <th>Requirement</th>
                                    <th>Benefits</th>
                                    <th>Responsibility</th>
                                    <th>Industry</th>
                                    <th>Level</th>
                                    <th>Employement</th>
                                    <th className="action_colwidth">Status</th>
                                    <th className="action_colwidth">Total Candidates</th>
                                </tr>
                            </thead>
                            {tableData?.length > 0 ?
                                <tbody>
                                    {tableData.map((data, index) =>
                                        <tr>
                                            <td className="action "><div className="userDetail ">
                                                <button type="button" class="btn "
                                                    id="dropdownIconMenu" data-bs-toggle="dropdown"
                                                    aria-expanded="false">
                                                    <span className="actionIcon"> <i
                                                        className="bi bi-three-dots-vertical"></i> </span>
                                                </button>
                                                <ul className="IconDropdown dropdown-menu context-menu11"
                                                    aria-labelledby="dropdownIconMenu">
                                                    <li className="dropdownList">
                                                        <div className="actionBtns  context-menu1">
                                                            <span className="editAction" data-bs-toggle="modal"
                                                                data-bs-target="#editbtn"><i
                                                                    className="bi bi-pencil-square"></i></span>
                                                            <button type="button" className="btn btn-outlined-secondary fs_13" onClick={() => {
                                                                dispatch(Edit_Data(data, index))
                                                                navigate('/particularjob')
                                                            }}>View</button>
                                                        </div>
                                                    </li>
                                                    {data.active == "active" ? <div></div> :
                                                        <li className="dropdownList">
                                                            <div className="actionBtns  context-menu1">
                                                                <span className="viewIcon" data-bs-toggle="modal"
                                                                    data-bs-target="#viewbtn"> <i
                                                                        className="bi bi-eye"></i></span>
                                                                <button type="button" className="btn btn-outlined-secondary fs_13" onClick={() => {
                                                                    localStorage.setItem("key", "Edit Job")
                                                                    dispatch(Edit_Data(data, index))
                                                                    navigate('/edit-job')
                                                                }} >Edit</button>
                                                            </div>
                                                        </li>}
                                                    <li className="dropdownList">
                                                        <div className="actionBtns  context-menu1">
                                                            <span className="deleteAction" data-bs-toggle="modal"
                                                                data-bs-target="#deletebtn"> <i
                                                                    className="bi bi-trash3-fill"></i></span>
                                                            <button type="button" className="btn btn-outlined-secondary fs_13" onClick={() => {
                                                                tableData.splice(index, 1
                                                                )
                                                                setTableData([...tableData])
                                                            }}>Delete</button>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div></td>
                                            <td>{data?.Jobtitle || data?.jobtitle}</td>
                                            <td>{data?.description && subString(data.description, 20)}</td>
                                            <td>{data?.functions && subString(data?.functions, 20)}</td>
                                            <td>
                                                {data?.requirment[0].value}
                                            </td>
                                            <td> {data?.benefits[0].value && subString(data.benefits[0].value, 20)}</td>
                                            <td> {data?.responsibility[0].value && subString(data.responsibility[0].value, 20)   /*data?.responsibility?.map((data1) => <ul>
                                                <li>{data1?.value&& subString(data1.value, 30)}</li>
                                                </ul>)*/} </td>
                                            <td>{data?.industry}</td>
                                            <td>{data?.level}</td>
                                            <td>{data?.type}</td>
                                            <td>
                                                <Form>
                                                    <Form.Check
                                                        type="switch"
                                                        id="custom-switch1"
                                                        checked={data.active === "active" ? true : false}
                                                        label=""
                                                        onChange={(e) => {
                                                            setShowalert(true)
                                                            setRowtext(e.target.checked ? ({
                                                                id: 1,
                                                                text: "Are you sure to  show the job ?",
                                                            }) : ({
                                                                id: 0,
                                                                text: "Are you sure to hide the job ?",
                                                            }))
                                                            if (data.active === "active") {
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
                                                </Form>
                                            </td>
                                            <td>30</td>
                                        </tr>)}
                                </tbody> : <h3 className="table_no_records">No Record Found</h3>}
                        </Table>
                    </div>
                </div>
            </div>
            {/*<Modal show={show} onHide={handleClose} size="lg">
                    <Modal.Header closeButton>
                        <Modal.Title>Edit Post Job</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="content_center">
                            <div className="topPadding-10 p-3 w-100">
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
                                                            <Form.Control as="textarea" style={{ height: "123px" }} name="jobdescription" value={state.jobdescription} onChange={onhandlechange} />
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
                            <Button type="button" className="gallery_add_button">Submit</Button>
                        </div>
                    </Modal.Footer>
                                                        </Modal>*/}

            {tableData?.length > 0 ?
                
                    <CustomPagination
                        showPerPage={showPerPage}
                        onPageChange={onPageChange}
                        setStart={setpagination}
                        total={tableData.length}
                    />
                 : ""}

        </div>
    );


}
export default Edit_postJob