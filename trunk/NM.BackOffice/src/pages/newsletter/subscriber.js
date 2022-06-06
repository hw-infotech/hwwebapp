import React, { useEffect, useState } from "react";
import { Button, Form, FormControl, InputGroup } from "react-bootstrap";
//import Pagination from '@material-ui/lab/Pagination';
import BasicBreadcrumbs from "../../components/breadcumbs";
import { useDispatch, useSelector } from "react-redux";
import { BsSearch } from "react-icons/bs";
import { NewsLetter_Unsubscriber, News_letter_Subscribe } from "../../Services/redux/action/action";
const SubScriber = () => {
    const [row, setRow] = useState(10)
    const [state, setState] = useState({
        row_value: ""
    })
    //useEffect(() => { setTitle("Subscriber") }, [])
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
    const [tableData, setTableData] = useState([
        {
            Email: "goldy",
            date: "hg"

        },
        {
            Email: "goldy",
            date: "hg"

        },
        {
            Email: "goldy",
            date: "hg"
        },
    ])
    function sortt() {
        const response = tableData.sort((a, b) => (a.Name.toLowerCase() > b.Name.toLowerCase()) ? 1 : ((b.Name.toLowerCase() > a.Name.toLowerCase()) ? -1 : 0));
        console.log(response)
        setTableData([...response])
    }
    function sortt1() {
        const response = tableData.sort((a, b) => (a.Name.toLowerCase() < b.Name.toLowerCase()) ? 1 : ((b.Name.toLowerCase() < a.Name.toLowerCase()) ? -1 : 0));
        console.log(response)
        setTableData([...response])
    }
    const [title, setTitle] = useState(false)
    return (
        <div >
            <BasicBreadcrumbs route={route} />
            <div className="margin_bottom_">
                <div className=""><h4></h4></div>
                <div className="gapPad">
                    <div className="w-100" style={{ display: "flex" }}>
                        <div className="w-100" >  <Form>
                            <Form.Select aria-label="row" className="wreap-content">
                                <option>Select</option>
                                <option value="1">All</option>
                                <option value="2">Subscriber</option>
                                <option value="3">UnSubscriber</option>
                            </Form.Select></Form></div>
                        <div className="searchbar">
                            <InputGroup className="mb-3">
                                <FormControl
                                    placeholder="Search By Email"
                                    aria-label="Search By Email"
                                    aria-describedby="basic-addon2"
                                />
                                <Button variant="outline-secondary" id="button-addon2">
                                    <BsSearch />                                
                                    </Button>
                            </InputGroup>
                        </div>
                    </div>
                </div>
                <div className="">
                    <div className="boxshadow">
                        <table class="table" >
                            <thead>
                                <tr>
                                    <th scope="col">Email</th>
                                    <th scope="col">Created Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/*subscribers?.slice(pagination1?.start, pagination1?.end).map((data, index) => (<tr>
                                    <td>{data?.email}</td>
                                    <td>{data?.createdOn}</td>
                                </tr>))*/}
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="row padd_bottm">
                    <div className="col-sm-6 col-lg-6 col-md-6">
                        <div className="gapPad">
                            <Form.Select aria-label="row" className="w-25">
                                <option>Row</option>
                                <option value="1">10</option>
                                <option value="2">25</option>
                                <option value="3">50</option>
                            </Form.Select>
                        </div>
                    </div>
                    {/*<div className="col-sm-6 col-lg-6 col-md-6 ">
                        <div className="gapPad pagination_justify_end ">
                            <Pagination
                                className="paginationDiv"
                                count={Math.ceil(subscribers?.length / row)}
                                onChange={handlechange}
                                color="primary" />
                        </div>
                            </div>*/}
                </div>
            </div>
        </div>
    );
}
export default SubScriber