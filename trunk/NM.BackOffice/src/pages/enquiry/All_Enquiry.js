import { Badge, Button, Col, Form, FormControl, InputGroup, Modal, Row, Table } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import BasicBreadcrumbs from "../../components/breadcumbs";
import { News_letter_Subscribe } from "../../Services/redux/action/action";
import { useDispatch, useSelector } from "react-redux";
import { Formik } from "formik";
import { VscFilterFilled } from "react-icons/vsc";
import { BsArrowUp } from "react-icons/bs";
import { BsArrowDown } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";
import { RiChatDeleteLine } from "react-icons/ri";
import { FcCheckmark, FcDeleteColumn } from "react-icons/fc";
// import { alert } from 'react-bootstrap-confirmation';
import { confirm } from 'react-bootstrap-confirmation';
import Paginationn from "../../components/pagination";
import CustomPagination from "../../shared/pagination";
import { FaFilter } from "react-icons/fa";
import { BsFilter } from "react-icons/bs";
import capitalizeFirstLetter from "../../components/first_letter_capital";

const All_Enquiry = () => {
    const [rowtext, setRowtext] = useState()
    const [showalert, setShowalert] = useState()
    const [disable, setSdisabled] = useState(true)
    const [status, setStatus] = useState()
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const route = [
        { name: "Dashboard", route: "/" },
        { name: "Enquiry", route: "/AllEnquiry" },
        { name: "All Enquiry", route: "/AllEnquiry" },

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
    // const selector = useSelector(state => state),
    //     dispatch = useDispatch(),
    //     [subscribers, setnewsletter-subscriberss] = useState([])
    // console.log("hellow", subscribers);
    // useEffect(() => {
    //     dispatch(News_letter_Subscribe())
    // }, [])

    // useEffect(() => {
    //     // setnewsletter-subscriberss(selector?.data?.apidata?.getnewsletterunsubscriber?.data)
    //     setpagination({ start: start, end: showPerPage })
    // }, [selector, pagination1])

    const records = [
        {
            Name: "Mark",
            Phone: "9803836866",
            Email: "goldygoldy33@gmail.com",
            message: "not capable",
            status: "pending"

        },
        {
            Name: "adfark",
            Phone: "9803836866",
            Email: "goldygoldy33@gmail.com",
            message: "not capable",
            status: "pending"
        },
        {
            Name: "yark",
            Phone: "9803836866",
            Email: "goldygoldy33@gmail.com",
            message: "not capable",
            status: "pending"
        },
    ]
    // const Chnage = (e) => {
    //     const { name, value } = e.target
    //     setRow(value)
    //     console.log("this is the select field value", value)
    // }

    // const handlechange = (event, value) => {
    //     var value1;
    //     setNext(value)
    //     if (next <= value) {
    //         value1 = row * value
    //         setShowPerPage(value1)
    //         console.log("this is the if conditon", value, showPerPage, state.row_value)
    //         setStart(value1 - row)
    //         setpagination({ start: start, end: showPerPage })
    //     }
    //     else {
    //         console.log("else", start, showPerPage)
    //         setStart(start - row)
    //         setShowPerPage(showPerPage - row)
    //         setpagination({ start: start - row, end: showPerPage - row })
    //     }
    // }
    const [tableData, setTableData] = useState(records)
    function sortt() {
        const response = tableData.sort((a, b) => (a.Name.toLowerCase() > b.Name.toLowerCase()) ? 1 : ((b.Name.toLowerCase() > a.Name.toLowerCase()) ? -1 : 0));
        setTableData([...response])
    }
    function sortt1() {
        const response = tableData.sort((a, b) => (a.Name.toLowerCase() < b.Name.toLowerCase()) ? 1 : ((b.Name.toLowerCase() < a.Name.toLowerCase()) ? -1 : 0));
        setTableData([...response])
    }
    const [title, setTitle] = useState(false)

    const requestSearch = (searchedVal) => {
        const filteredRows = records.filter((row) => {
            return row.Name.toLowerCase().includes(searchedVal.toLowerCase()) || row.Email.toLowerCase().includes(searchedVal.toLowerCase())
        });
        setTableData(filteredRows)

    };
    const [deleteObj, setDeleteObj] = useState({
        index: 0,
        rowStatus: false
    })
    const [wait, setwait] = useState(false)
    const display = () => {
        console.log(deleteObj);

        //const result = await confirm(rowtext.text);
        // console.log(rowText);
        if (deleteObj.rowStatus) {
            setTableData(oldState => {
                oldState[deleteObj.index].status = "resolved"
                setShowalert(false)
                return [...oldState]

            })
        }
        if (!deleteObj.rowStatus) {
            setTableData(oldState => {
                oldState[deleteObj.index].status = "pending"
                setShowalert(false)
                return [...oldState]

            })
        }
    };

    return (
        <div>
            <BasicBreadcrumbs route={route} />
            <div className="filter_header">
                <div className="filter-title"><h4>All Enquiry</h4></div>
                <div className="filter_container">
                    <div className="">
                        <BsFilter size={24} color="#eb7823" onClick={() => setSdisabled(p => !p)} />
                    </div>
                </div>
            </div>
            <div className="topGapPad margin_bottom_">
                <div className="gapbetween">
                    <div><Form.Select aria-label="row" className="wreap-content font_size" hidden={disable}>
                        <option disabled hidden selected>Status</option>
                        <option value="1">All</option>
                        <option value="2">Pending</option>
                        <option value="3">Resolved</option>
                    </Form.Select>
                    </div>
                    <div className="serachbar">
                        <InputGroup className="mb-3">
                            <FormControl className="font_size"
                                hidden={disable}
                                placeholder="Serach by Email and Name"
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
                </div>
                <Modal show={showalert} onHide={handleClose} >
                    <Modal.Header >
                        <Modal.Title>Alert</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <p>{rowtext?.text}</p>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button className="btn-sm font_size" variant="secondary" onClick={() => {

                            setShowalert(false)

                        }} >No</Button>
                        <Button className="btn-sm font_size" variant="primary" onClick={() => {
                            display()
                            setShowalert(false)

                        }}>Yes</Button>
                    </Modal.Footer>
                </Modal>
                <div className="boxshadow">
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th className="action_colwidth">Action</th>
                                <th className="headerSortUp " onClick={() => {
                                    setTitle(!title)
                                    { title ? sortt() : sortt1() }
                                }}>Name{title ? <BsArrowUp /> : <BsArrowDown />}</th>
                                <th>Phone</th>
                                <th >Email</th>
                                <th >Message</th>
                                <th className="action_colwidth">Status</th>
                            </tr>
                        </thead>
                        {tableData.length > 0 ?
                            <tbody>
                                {tableData.map((data, index) =>
                                    <tr key={index}>
                                        <td>
                                            <div class="userDetail ">
                                                <button type="button" class="btn "
                                                    id="dropdownIconMenu" data-bs-toggle="dropdown"
                                                    aria-expanded="false">
                                                    <span class="actionIcon"> <i
                                                        class="bi bi-three-dots-vertical"></i> </span>
                                                </button>
                                                <ul class="IconDropdown dropdown-menu context-menu11 "
                                                    aria-labelledby="dropdownIconMenu">
                                                    <li class="dropdownList">
                                                    {data.status=="pending" ?
                                                        <div class="actionBtns context-menu1" >
                                                      
                                                            <span class="editAction" data-bs-toggle="modal"
                                                                data-bs-target="#editbtn"><i
                                                                    class="bi bi-pencil-square"></i></span>
                                                            <button type="button" hidden={data.status=="resolved" ?true:false}
                                                         className="btn btn-outlined-secondary font_size" onClick={() => {
                                                                setwait(true)
                                                                setRowtext(({
                                                                    id: 0,
                                                                    text: "Are you sure to update status as Resolved ?",
                                                                }))
                                                                setShowalert(true)


                                                                setDeleteObj({
                                                                    index,
                                                                    rowStatus: true

                                                                })

                                                            }}>Resolved</button>
                                                        </div>:""}
                                                    </li>
                                                    <li class="dropdownList">
                                                    {data.status=="resolved" ?
                                                        <div class="actionBtns  context-menu1">
                                                            <span class="deleteAction" data-bs-toggle="modal"
                                                                data-bs-target="#deletebtn"> <i
                                                                    class="bi bi-trash3-fill"></i></span>
                                                            <button type="button" key={index} className="btn btn-outlined-secondary font_size" onClick={() => {
                                                                setwait(false)

                                                                setShowalert(true)

                                                                setDeleteObj({
                                                                    index,
                                                                    rowStatus: false
                                                                })
                                                                setRowtext({
                                                                    id: 1,
                                                                    text: "Are you sure to update status as Panding ?",
                                                                })

                                                            }}>Pending</button>
                                                        </div>:""}
                                                    </li>
                                                </ul>
                                            </div>
                                        </td>
                                        <td>{capitalizeFirstLetter(data.Name)}</td>
                                        <td>{data.Phone}</td>
                                        <td>{capitalizeFirstLetter(data.Email)}</td>
                                        <td>{data.message}</td>
                                        <td>
                                            {data.status === "resolved" ? <Badge bg="success" size={30} >Resolved</Badge> : <Badge bg="danger">Pending</Badge>
                                            }
                                            {/*<Form.Check className="switch_pad_enquiry"
                                            type="switch"
                                            key={index}
                                            label=""
                                            checked={data.status === "resolved" ? true : false}
                                                    />*/}
                                        </td>
                                    </tr>)}
                            </tbody>:"No Record Found"}
                    </Table>
                   
                </div>
                {tableData.length>0 ?
                <CustomPagination
                    showPerPage={showPerPage}
                    setStart={setpagination}
                    total={tableData.length}
                />:""}
                {/*<Modal show={show} onHide={handleClose} size="sm">
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
                            <Button variant="outline-secondary" type="button" className="gallery_add_button">Submit</Button>
                        </div>
                    </Modal.Footer>
                                </Modal>*/}
            </div>
        </div>
    );
}
export default All_Enquiry

// <Button
// variant=""
// key={index}
// style={{ padding: "0px" }}
// onClick={(e) => {
//     display(index)
//     console.log(status)
//     if (status == true) {
//         // setTableData(oldState => {
//         //     oldState[index].status = "resolved"
//         //     return [...oldState]
//         // })
//     }
//     else {

//     }
// }}>
// <FcCheckmark size={20} />
// </Button>

// <Button variant="" key={index} style={{ padding: "0px" }} onClick={() => setTableData(oldState => {
//     oldState[index].status = "pending"
//     return [...oldState]
// })}><FcDeleteColumn size={22} /></Button>