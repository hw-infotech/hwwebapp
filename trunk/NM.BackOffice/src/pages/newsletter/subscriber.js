import React, { useEffect, useState } from "react";
import { Button, Form, FormControl, InputGroup, Modal, Pagination } from "react-bootstrap";
//import Pagination from '@material-ui/lab/Pagination';
import BasicBreadcrumbs from "../../components/breadcumbs";
import { useDispatch, useSelector } from "react-redux";
import { BsSearch } from "react-icons/bs";
import { NewsLetter_Unsubscriber, News_letter_Subscribe } from "../../Services/redux/action/action";
import { Formik } from "formik";
import { initialValues, validationschemeaa } from "../postJobs/validation-schema";
import { Input } from "../../components/commoninputfield";
import { BiAddToQueue } from "react-icons/bi";
import { BsArrowUp } from "react-icons/bs";
import { BsArrowDown } from "react-icons/bs";
import TooltipComp from "../../shared/Tooltipomp";
import CustomPagination from "../../shared/pagination";

const SubScriber = () => {
    const [row, setRow] = useState(10)
    const [state, setState] = useState({
        row_value: ""
    })

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [showPerPage, setShowPerPage] = useState(10)
    const [next, setNext] = useState(0)
    const [start, setStart] = useState(1);
    const [pagination1, setpagination] = useState(
        {
            start: start,
            end: showPerPage
        });
    const route = [
        { name: "Home", route: "/" },
        { name: "Newsletter", route: "/" },
        { name: "Subscriber/Unsubscriber", route: "/" }
    ]
    const selector = useSelector(state => state),
        dispatch = useDispatch(),
        [subscribers, setSubscribers] = useState([])
    useEffect(() => {
        dispatch(News_letter_Subscribe())
        dispatch(NewsLetter_Unsubscriber())
    }, [])

    useEffect(() => {
        setSubscribers(selector?.data?.apidata?.getnewsletterunsubscriber?.data)
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
    const records = [
        {
            Email: "ggoldygoldy33@gmail.com",
            date: "23-02-2022",
            comment: "Reason Behind"

        },
        {
            Email: "agoldygoldy33@gmail.com",
            date: "23-02-2022",
            comment: "Reason Behind"
        },
        {

            Email: "goldygoldy33@gmail.com",
            date: "23-02-2022",
            comment: "Reason Behind"
        },
    ]
    const [tableData, setTableData] = useState(records)
    function sortt() {
        const response = tableData.sort((a, b) => (a.Email.toLowerCase() > b.Email.toLowerCase()) ? 1 : ((b.Email.toLowerCase() > a.Email.toLowerCase()) ? -1 : 0));
        console.log(response)
        setTableData([...response])
    }
    function sortt1() {
        const response = tableData.sort((a, b) => (a.Email.toLowerCase() < b.Email.toLowerCase()) ? 1 : ((b.Email.toLowerCase() < a.Email.toLowerCase()) ? -1 : 0));
        console.log(response)
        setTableData([...response])
    }
    const requestSearch = (searchedVal) => {
        const filteredRows = records.filter((row) => {
            return row.Email.toLowerCase().includes(searchedVal.toLowerCase())
        });
        setTableData(filteredRows)

    };
    const [title, setTitle] = useState(false)
    let paginationConfig = {
        Item: 20,
        size: "sm",
        threeDots: true,
        prevNext: true,
        borderColor: 'red',
    };
    return (
        <div >
            <div className=""><h4>Newsletter Subscriber/Unsubscriber</h4></div>
            <BasicBreadcrumbs route={route} />
            <div className="margin_bottom_">
                <div className="gapPad">
                    <div className="w-100 setupcontent">
                        <div className="" >   <TooltipComp
                            component={<Form.Select aria-label="row" className="wreap-content">
                                <option disabled hidden selected>Select</option>
                                <option value="1">All</option>
                                <option value="2">Subscriber</option>
                                <option value="3">UnSubscriber</option>
                            </Form.Select>}
                            placement="top"
                            tooltip={"Filter as Active/inactive"}
                        /></div>
                        <div className="searchbar">
                            <TooltipComp placement={"top"} tooltip="Type here to search by email" component={<InputGroup className="mb-3">
                                <FormControl
                                    placeholder="Search By Email"
                                    aria-label="Search By Email"
                                    aria-describedby="basic-addon2"
                                    onChange={(e) => {
                                        requestSearch(e.target.value)
                                    }}
                                />
                                <Button variant="outline-secondary" id="button-addon2">
                                    <BsSearch />
                                </Button>
                            </InputGroup>} />
                        </div>
                        <div>
                            <TooltipComp component={<Button variant="outline-secondary" onClick={handleShow}>
                                <BiAddToQueue size="23px" />
                            </Button>} placement="top" tooltip="Add New" />
                        </div>
                    </div>
                </div>
                <div className="">
                    <div className="boxshadow">
                        <table class="table" >
                            <thead>
                                <tr>
                                    <th scope="col" onClick={() => {
                                        setTitle(!title)
                                        { title ? sortt() : sortt1() }
                                    }} >Email {title ? <BsArrowDown /> : <BsArrowUp />}</th>
                                    <th scope="col">Created Date</th>
                                    <th scope="col">Comments</th>
                                    <th scope="col">Unsubscriber/Subscriber</th>
                                </tr>
                            </thead>
                            <tbody>
                                {tableData.map((data, index) =>
                                    <tr>
                                        <td>
                                            {data.Email}
                                        </td>
                                        <td>
                                            {data.date}
                                        </td>
                                        <td>
                                            {data.comment}
                                        </td>
                                        <td >
                                            <Form.Check className="switch_padding"
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
                                        </td>
                                    </tr>
                                )}

                                {/*subscribers?.slice(pagination1?.start, pagination1?.end).map((data, index) => (<tr>
                                    <td>{data?.email}</td>
                                    <td>{data?.createdOn}</td>
                                </tr>))*/}
                            </tbody>
                        </table>
                    </div>
                </div>
                <Modal show={show} onHide={handleClose} size="md">
                    <Modal.Header closeButton>
                        <Modal.Title>Add</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {<div className="">
                            <div className="cardBoard2">
                                <h3></h3>
                                <Formik initialValues={initialValues} validationSchema={validationschemeaa}>
                                    {() => (
                                        <form onSubmit={(e) => {
                                            e.preventDefault();
                                        }}
                                        >
                                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                                <Input type="text" label="Title" className="form-control" name="title" placeholder="Enter the NewsLetter title" />
                                            </Form.Group>

                                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                                <Input as={"textarea"} className="form-control" placeholder={"Enter the Content for NewsLetter"} name="content_story" id="exampleFormControlTextarea1" rows="3" label={"Enter the Content"} />
                                            </Form.Group>

                                            <br />
                                            <div style={{ float: "right", }}>
                                                <Button className="newsletter-addbtn">Add</Button>
                                            </div>
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
                <div>
                    <CustomPagination
                        showPerPage={showPerPage}
                        total={1000}
                    />
                </div>
            </div>
        </div>
    );
}
export default SubScriber