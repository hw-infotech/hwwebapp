//import { Pagination } from "@material-ui/lab";
import React, { useEffect, useState } from "react";
import BasicBreadcrumbs from "../../components/breadcumbs";
import { BiAddToQueue } from "react-icons/bi";
import { BsArrowUp } from "react-icons/bs";
import { BsArrowDown } from "react-icons/bs";
import { Badge, Button, Collapse, Form, FormControl, InputGroup, OverlayTrigger, Table, Tooltip } from "react-bootstrap";
import { VscFilterFilled } from "react-icons/vsc";
import Paginationn from "../../components/pagination";
import { useSelector } from "react-redux";
import CustomPagination from "../../shared/pagination";
import { FaFilter } from "react-icons/fa";
import { BsFilter } from "react-icons/bs";
import CapitalizeFirstLetter from "../../components/first_letter_capital";
const Job_newsletter = () => {
    const [checked, setChecked]=useState()
    const [disable, setSdisabled] = useState(false)
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
        //setnewsletter-subscriberss(selector?.data?.apidata?.getnewsletterunsubscriber?.data)
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
        { name: "Dashboard", route: "/" },
        { name: "Job Management", route: "job-subscriber/unsubscriber" },
        { name: "Subscriber Unsubscriber", route: "/job-subscriber/unsubscriber" },
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
            return row.Name.toLowerCase().includes(searchedVal.toLowerCase()) || row.Email.toLowerCase().includes(searchedVal.toLowerCase())
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
                    <div className="filter-title"><h4>Subscriber Unsubscriber</h4></div>
                    <div className="filter_container">
                        <BsFilter size={24} color="#ff6b01" onClick={() => setSdisabled(p => !p)} />
                    </div>
                </div>
                <div className="w-100 setupcontent">
                <Collapse in={disable}>
                    <div className="">
                        <Form.Select aria-label="row" className="wreap-content font_size" >
                            <option disabled hidden selected>Status</option>
                            <option value="1">All</option>
                            <option value="2">Subscribe</option>
                            <option value="3">Unsubscribe</option>
                        </Form.Select>
                    </div>
                    </Collapse>
                    <Collapse in={disable}>
                    <div className="searchbar">
                        <InputGroup className="mb-3">
                            <FormControl
                                className="font_size" 
                                placeholder="Search by name"
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
               
                    <div className="boxshadow pt-2">
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th className="action_colwidth"> 
                                    <Form.Check
                                        className="font_size mt-2"
                                        onClick={()=> setChecked(p=>!p)}
                                      
                                        label="All"
                                    /></th>
                                    <th onClick={() => {
                                        setTitle(!title)
                                        { title ? sortt() : sortt1() }
                                    }}>Name {title ? <BsArrowDown /> : <BsArrowUp />}</th>
                                    <th>Phone</th>
                                    <th>Email</th>
                                    <th className="action_colwidth">Status</th>
                                </tr>
                            </thead>
                            {tableData.length > 0 ?
                                <tbody>
                                    {tableData.map((data, index) =>
                                        <tr>  <td className="content_cente_td"><Form.Check
                                                  className="font_size mt-2"
                                                  checked={checked}
                                        /></td>
                                            <td>{CapitalizeFirstLetter(data.Name)}</td>
                                            <td>{data.phone}</td>
                                            <td>{CapitalizeFirstLetter(data.Email)}</td>
                                            <td >
                                                {<Badge bg="success" size={30} >Subscribe</Badge>}
                                                { /*<Form.Check className="switch_padding"
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
                                            />*/}
                                            </td>
                                        </tr>)}
                                </tbody> : "No Record Found"}
                        </Table>

                    </div>
                    {tableData.length > 0 ?
                        <CustomPagination
                            showPerPage={showPerPage}
                            setStart={setpagination}
                            total={tableData.length}
                        /> : ""}

                
            </div>

        </div>
    );
}
export default Job_newsletter