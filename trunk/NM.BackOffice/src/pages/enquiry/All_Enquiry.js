import { Button, Col, Form, FormControl, InputGroup, Modal, Row, Table } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import BasicBreadcrumbs from "../../components/breadcumbs";
import { News_letter_Subscribe } from "../../Services/redux/action/action";
import { useDispatch, useSelector } from "react-redux";
import { Formik } from "formik";
import { BsArrowUp } from "react-icons/bs";
import { BsArrowDown } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";
import { RiChatDeleteLine } from "react-icons/ri";
import { FcCheckmark, FcDeleteColumn } from "react-icons/fc";
import TooltipComp from "../../shared/Tooltipomp";
// import { alert } from 'react-bootstrap-confirmation';
import { confirm } from 'react-bootstrap-confirmation';

const All_Enquiry = () => {

    const [status, setStatus] = useState()
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
    // const selector = useSelector(state => state),
    //     dispatch = useDispatch(),
    //     [subscribers, setSubscribers] = useState([])
    // console.log("hellow", subscribers);
    // useEffect(() => {
    //     dispatch(News_letter_Subscribe())
    // }, [])

    // useEffect(() => {
    //     // setSubscribers(selector?.data?.apidata?.getnewsletterunsubscriber?.data)
    //     setpagination({ start: start, end: showPerPage })
    // }, [selector, pagination1])

    const records = [
        {
            Name: "Mark",
            Phone: "gtto",
            Email: "goldy",
            message: "hg",
            status: "pending"

        },
        {
            Name: "adfark",
            Phone: "ertto",
            Email: "goldy",
            message: "ahg",
            status: "pending"
        },
        {
            Name: "yMark",
            Phone: "ogtto",
            Email: "lgkoldy",
            message: "ehg",
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
    const display = async (index) => {
        const result = await confirm('Are you sure to update status as Rsolved ?');
        if (result) {
            setTableData(oldState => {
                oldState[index].status = "resolved"
                return [...oldState]
            })
        }
    };
    return (
        <div title="All Enquiry">
            <h4>All Enquiry</h4>
            <BasicBreadcrumbs route={route} />
            <div className="topGapPad margin_bottom_">
                <div className="gapbetween">
                    <div><TooltipComp
                        component={<Form.Select aria-label="row" className="wreap-content">
                            <option disabled hidden selected>Select</option>
                            <option value="1">All</option>
                            <option value="2">Pending</option>
                            <option value="3">Resolved</option>
                        </Form.Select>}
                        placement="top"
                        tooltip={"Filter as Active/inactive"}
                    />
                    </div>
                    <div className="serachbar">
                        <TooltipComp component={<InputGroup className="mb-3">
                            <FormControl
                                placeholder="Serach Email and Name"
                                aria-label="Recipient's username"
                                aria-describedby="basic-addon2"
                                onChange={(e) => {
                                    requestSearch(e.target.value)
                                }}
                            />
                            <Button variant="outline-secondary" id="button-addon2">
                                <BsSearch />
                            </Button>
                        </InputGroup>} placement="top" tooltip={"Type here to search by name and email"} />
                    </div>
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
                                <th >Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tableData.map((data, index) =>
                                <tr key={index}>
                                    <td>
                                        <div style={{ display: "flex", gap: "10px" }}>
                                            <Button
                                                variant=""
                                                key={index}
                                                style={{ padding: "0px" }}
                                                onClick={(e) => {
                                                    display(index)
                                                    console.log(status)
                                                    if (status == true) {
                                                        // setTableData(oldState => {
                                                        //     oldState[index].status = "resolved"
                                                        //     return [...oldState]
                                                        // })
                                                    }
                                                    else {

                                                    }
                                                }}>
                                                <FcCheckmark size={20} />
                                            </Button>
                                            <Button variant="" key={index} style={{ padding: "0px" }} onClick={() => setTableData(oldState => {
                                                oldState[index].status = "pending"
                                                return [...oldState]
                                            })}><FcDeleteColumn size={22} /></Button>
                                        </div>
                                    </td>
                                    <td>{data.Name}</td>
                                    <td>{data.Phone}</td>
                                    <td>{data.Email}</td>
                                    <td>{data.message}</td>
                                    <td>
                                        <Form.Check className="switch_pad_enquiry"
                                            type="switch"
                                            key={index}
                                            label=""
                                            checked={data.status === "resolved" ? true : false}
                                        />
                                    </td>
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