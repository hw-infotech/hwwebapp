//import { Pagination } from "@material-ui/lab";
import React, { useEffect, useState } from "react";
import { Form, FormControl, InputGroup, Table, Button, Row, Col } from "react-bootstrap";
import BasicBreadcrumbs from "../../components/breadcumbs";
import { BsArrowUp } from "react-icons/bs";
import { BsArrowDown } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";
import Paginationn from "../../components/pagination";

const Applied_Job = () => {
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
    const route = [
        { name: "Home", route: "/" },
        { name: "Job", route: "/" },
        { name: "Applied Jobs", route: "/" },
    ]
    const records = [

        {
            name: "mark",
            email: "Ganeshsharma5073@gmail.com",
            phone: "9803836866",
            date: "31-02-2022",
            time: "3:25",
            action: ""

        },
        {

            name: "rark",
            email: "Ganeshsharma5073@gmail.com",
            phone: "9803836866",
            date: "31-02-2022",
            time: "3:25",
            active: ""

        },
        {
            name: "mark",
            email: "Ganeshsharma5073@gmail.com",
            phone: "9803836866",
            date: "31-02-2022",
            time: "3:25",
            active: ""
        }
    ]
    const [tableData, setTableData] = useState(records)
    function sortt() {
        const response = tableData.sort((a, b) => (a.name.toLowerCase() > b.name.toLowerCase()) ? 1 : ((b.name.toLowerCase() > a.name.toLowerCase()) ? -1 : 0));
        console.log(response)
        setTableData([...response])
    }
    function sortt1() {
        const response = tableData.sort((a, b) => (a.name.toLowerCase() < b.name.toLowerCase()) ? 1 : ((b.name.toLowerCase() < a.name.toLowerCase()) ? -1 : 0));
        console.log(response)
        setTableData([...response])
    }
    const [title, setTitle] = useState(false)

    const requestSearch = (searchedVal) => {
        const filteredRows = records.filter((row) => {
            return row.name.toLowerCase().includes(searchedVal.toLowerCase())
        });
        console.log(filteredRows)
        setTableData([...filteredRows])
    };
    return (
        <div className="margin_bottom_">
            <div><h4> Posted Job's</h4></div>
            <BasicBreadcrumbs route={route} />
            <div><h4> Posted Job's</h4></div>
            <div className="w-100 setupcontent">
                <div className="">
                    <Form.Select aria-label="row" className="wreap-content">
                        <option disabled hidden selected>Select</option>
                        <option value="1">All</option>
                        <option value="2">newsletter-subscribers</option>
                        <option value="3">Unnewsletter-subscribers</option>
                    </Form.Select>
                </div>
                <div className="searchbar">
                    <InputGroup className="mb-3">
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
                    </InputGroup>
                </div>
            </div>
            <div className="topGapPad">
                <div className="boxshadow">
                    <Table>
                        <thead>
                            <tr>
                                <th onClick={() => {
                                    setTitle(!title)
                                    { title ? sortt() : sortt1() }
                                }}>Name{title ? <BsArrowDown /> : <BsArrowUp />}</th>
                                <th>Email</th>
                                <th>Phone Number</th>
                                <th>Date</th>
                                <th>Time</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tableData.map((data, index) =>
                                <tr>
                                    <td>{data.name}</td>
                                    <td>{data.email}</td>
                                    <td>{data.phone}</td>
                                    <td>{data.date}</td>
                                    <td>{data.time}</td>
                                </tr>
                            )}
                        </tbody>
                    </Table>
                </div>
                <Paginationn />
            </div>
        </div>
    )
}
export default Applied_Job