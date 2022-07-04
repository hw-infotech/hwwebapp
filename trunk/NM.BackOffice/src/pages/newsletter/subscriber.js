import React, { useEffect, useState } from "react";
import { Button, Col, Collapse, Form, FormControl, InputGroup, Modal, Row, Table } from "react-bootstrap";
//import Pagination from '@material-ui/lab/Pagination';
// import Pagination from '@mui/material/Pagination'
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
import CustomPagination from "../../shared/pagination";
import { FaFilter } from "react-icons/fa";
import { VscFilterFilled } from "react-icons/vsc";
import { MdAdd } from "react-icons/md";
import moment from 'moment'
import { BsFilter } from "react-icons/bs";
import { AiOutlinePlusCircle } from "react-icons/ai";
import CapitalizeFirstLetter from "../../components/first_letter_capital";

const SubScriber = () => {
    const [disable, setSdisabled] = useState(false)
    const [row, setRow] = useState(10)
    const [state, setState] = useState({
        row_value: ""
    })
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [showPerPage, setShowPerPage] = useState()
    const [next, setNext] = useState(0)
    const [start, setStart] = useState(1);
    const [pagination1, setpagination] = useState(
        {
            start: start,
            end: showPerPage
        });
    const route = [
        { name: "Dashboard", route: "/" },
        { name: "Newsletter", route: "" },
        { name: "Subscribe/Unsubscribe", route: "" }
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
        //setpagination({ start: start, end: showPerPage })
    }, [selector])

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
    const records = [
        {
            Email: "ggoldygoldy33@gmail.com",
            date: "2-03-2020",
            comment: "Reason Behind",
            active: ""

        },
        {
            Email: "agoldygoldy33@gmail.com",
            date: "26-08-2022",
            comment: "Reason Behind",
        },
        {

            Email: "goldygoldy33@gmail.com",
            date: "23-02-2022",
            comment: "Reason Behind"
        },
    ]

    const [tableData, setTableData] = useState(subscribers)
    function sortt() {
        const response = subscribers.sort((a, b) => (a.email.toLowerCase() > b.email.toLowerCase()) ? 1 : ((b.email.toLowerCase() > a.email.toLowerCase()) ? -1 : 0));
        console.log(response)
        setTableData([...response])
        console.log(selector, "this the selector");
    }
    function sortt1() {
        const response = subscribers?.sort((a, b) => (a.email.toLowerCase() < b.email.toLowerCase()) ? 1 : ((b.email.toLowerCase() < a.email.toLowerCase()) ? -1 : 0));
        console.log(response)
        setTableData([...response])
    }
    const requestSearch = (searchedVal) => {
        const filteredRows = selector?.data?.apidata?.getnewsletterunsubscriber?.data.filter((row) => {
            return row.email.toLowerCase().includes(searchedVal.toLowerCase())
        });
        setSubscribers(filteredRows)
    };
    const [title, setTitle] = useState(false)

    return (
        <div >
            <BasicBreadcrumbs route={route} />
            <div className="filter_header">
                <div className="filter-title"><h4>Subscribe/Unsubscribe</h4></div>
                <div className="filter_container">
                    <BsFilter size={24} color="#ff6b01" onClick={() => setSdisabled(p => !p)} />
                    <Button title="" variant="" className="btn-sm" onClick={handleShow}><AiOutlinePlusCircle title="" size={24} color="#ff6b01" /></Button>
                </div>
            </div>
            <div className="margin_bottom_ topGapPad">
                <div className=" ">
                    <div className="w-100 setupcontent">
                    <Collapse in={disable}>
                        <div className="" ><Form.Select aria-label="row" className="wreap-content font_size" >
                            <option disabled hidden selected>Status</option>
                            <option value="1">All</option>
                            <option value="2">Subscriber</option>
                            <option value="3">UnSubscriber</option>
                        </Form.Select>
                        </div>
                        </Collapse>
                        <Collapse in={disable}>
                        <div className="searchbar">
                            <InputGroup className="mb-3">
                                <FormControl className="font_size"
                                   
                                    placeholder="Search By Email"
                                    aria-label="Search By Email"
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
                <div className="">
                    <div className="boxshadow">
                        <Table striped bordered hover >
                            <thead>
                                <tr>
                                    <th onClick={() => {
                                        setTitle(!title)
                                        { title ? sortt() : sortt1() }
                                    }} >Email {title ? <BsArrowDown /> : <BsArrowUp />}</th>
                                    <th>Created Date</th>
                                    <th className="action_colwidth" >Status</th>
                                </tr>
                            </thead>
                            {subscribers?.length > 0 ? <tbody>
                                {subscribers?.slice(pagination1?.start, pagination1?.end)?.map((data, index) =>
                                    <tr>
                                        <td>
                                            {CapitalizeFirstLetter(data?.email)}
                                        </td>
                                        <td>
                                            {data.createdOn ? moment(data?.createdOn).format("DD-MM-yyyy ") : ""}
                                        </td>

                                        <td >
                                            <Form.Check className="switch_padding"
                                                type="switch"
                                                id="custom-switch1"
                                                value={data.active}
                                                label=""
                                                onChange={(e) => {
                                                    if (e.target.checked == true) {

                                                    }
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
                            </tbody> : "No Record Found"}
                        </Table>
                    </div>
                </div>
                <Modal show={show} onHide={handleClose} size="md">
                    <Modal.Header closeButton>
                        <Modal.Title>Send Newsletter</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Formik initialValues={initialValues} validationSchema={validationschemeaa}>
                            {() => (
                                <form onSubmit={(e) => {
                                    e.preventDefault();
                                }}
                                >
                                    <Input type="text" label="Title" className="form-control" name="title" placeholder="" />
                                    <Input as={"textarea"} className="form-control" placeholder={""} name="content_story" id="exampleFormControlTextarea1" rows="3" label={"Enter the Content"} />
                                </form>
                            )}
                        </Formik>

                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" className=" btn-sm font_size" onClick={handleClose}>Close</Button>
                        <Button className="btn-sm font_size">Send</Button>

                    </Modal.Footer>
                </Modal>
                {tableData.length > 0 ?
                    <div>
                        <CustomPagination
                            // showPerPage={showPerPage}
                            start={pagination1}
                            setStart={setpagination}
                            total={subscribers?.length}
                        />
                    </div> : ""}
            </div>
        </div>
    );
}
export default SubScriber