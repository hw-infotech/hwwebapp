//import { Pagination } from "@material-ui/lab";
import React, { useEffect, useState } from "react";
import BasicBreadcrumbs from "../../components/breadcumbs";
import { BiAddToQueue } from "react-icons/bi";
import { BsArrowUp } from "react-icons/bs";
import { BsArrowDown } from "react-icons/bs";
import { Button, Form, FormControl, InputGroup, OverlayTrigger, Table, Tooltip } from "react-bootstrap";
import { VscFilterFilled } from "react-icons/vsc";
import TooltipComp from "../../shared/Tooltipomp";
import Paginationn from "../../components/pagination";
import { useSelector } from "react-redux";
import CustomPagination from "../../shared/pagination";
import { FaFilter } from "react-icons/fa";
const Job_Subscriber = () => {
    const [disable, setSdisabled] = useState(true)
    const [showPerPage, setShowPerPage] = useState()
    const [row, setRow] = useState(10)
    const [state, setState] = useState({
        row_value: ""
    })
    const [start, setStart] = useState(1);
    const [pagination1, setpagination] = useState(
        {
            start: start,
            end: showPerPage
        });

    const selector = useSelector(state => state)
    console.log(selector)

    // const [next, setNext] = useState(0)
    // const [start, setStart] = useState(1);
    // const [pagination1, setpagination] = useState(
    //     {
    //         start: start,
    //         end: showPerPage
    //     })
    useEffect(() => {
        //setSubscribers(selector?.data?.apidata?.getnewsletterunsubscriber?.data)
        //setpagination({ start: start, end: showPerPage })
    }, [])
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
    const route = [
        { name: "Home", route: "/" },
        { name: "Job", route: "/" },
        { name: "Job Subscriber/Unsubscriber", route: "/" },
    ]
    const records = [
        {
            Email: "goldygoldy33@gmail.com",
            phone: "9803836866",
            Name: "mark",
            active: 'false'

        },
        {
            Email: "goldygoldy33@gmail.com",
            phone: "8146945394",
            Name: "Aman",
            active: "false"

        },
        {
            Email: "goldygoldy33@gmail.com",
            phone: "8146945394",
            Name: "Aman",
            active: "false"
        },
    ]
    const [tableData, setTableData] = useState(records)
    function sortt() {
        const response = tableData.sort((a, b) => (a.Name.toLowerCase() > b.Name.toLowerCase()) ? 1 : ((b.Name.toLowerCase() > a.Name.toLowerCase()) ? -1 : 0));
        console.log(response)
        setTableData([...response])
    }
    function sortt1() {
        const response = tableData.sort((a, b) => (a.Name.toLowerCase() < b.Name.toLowerCase()) ? 1 : ((b.Name.toLowerCase() < a.Name.toLowerCase()) ? -1 : 0));
        setTableData([...response])
    }
    const requestSearch = (searchedVal) => {
        const filteredRows = records.filter((row) => {
            return row.Name.toLowerCase().includes(searchedVal.toLowerCase())
        });
        console.log(filteredRows)
        setTableData([...filteredRows])
    };
    const [title, setTitle] = useState(false)
    return (
        <div>
            <div className="margin_bottom_">
                <BasicBreadcrumbs route={route} />
                <div className="filter_header">
                    <div className="filter-title"><h4>Subscriber/Unsubscriber</h4></div>
                    <div className="filter_container">
                        <div className="">
                            <Button className="fitlter-sotry" id="button-addon2" onClick={()=>{
                                setSdisabled(p=>!p)
                            }}>
                                <VscFilterFilled size={17} />
                            </Button>
                        </div>

                    </div>
                </div>
                <div className="w-100 setupcontent topGapPad">
                    <div className="">
                        <Form.Select aria-label="row" className="wreap-content" hidden={disable}>
                            <option disabled hidden selected>Status</option>
                            <option value="1">All</option>
                            <option value="2">Subscriber</option>
                            <option value="3">UnSubscriber</option>
                        </Form.Select>

                    </div>
                    <div className="searchbar">
                        <InputGroup className="mb-3">
                            <FormControl
                            hidden={disable}
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
                </div>
                <div className="topGapPad">
                    <div className="boxshadow">
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th onClick={() => {
                                        setTitle(!title)
                                        { title ? sortt() : sortt1() }
                                    }}>Name {title ? <BsArrowDown /> : <BsArrowUp />}</th>
                                    <th>Phone</th>
                                    <th>Email</th>
                                    <th className="action_colwidth">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {tableData.map((data, index) =>
                                    <tr>
                                        <td>{data.Name}</td>
                                        <td>{data.phone}</td>
                                        <td>{data.Email}</td>
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
                                    </tr>)}
                            </tbody>
                        </Table>
                    </div>
                    <CustomPagination
                        showPerPage={showPerPage}

                        setStart={setpagination}
                        total={1000}
                    />

                </div>
            </div>

        </div>
    );
}
export default Job_Subscriber