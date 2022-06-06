//import { Pagination } from "@material-ui/lab";
import React, { useEffect, useState } from "react";
//import BasicBreadcrumbs from "../../components/breadcumbs";

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
        //setSubscribers(selector?.data?.apidata?.getnewsletterunsubscriber?.data)
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
    return (
        <div className="margin_bottom_">
            {/*<BasicBreadcrumbs route={route} />*/}
            <div className="content_center pt-3 "><h4>Total Number Of Candidates of Applied Job</h4></div>
            <div className="padding-items  ">
                <div class="input-group ">
                    <div class="form-outline flex-fill content_center">
                        <input type="search" class="form-control searchbar" placeholder="Search for free names and emails" />
                        <label class="form-label" for="form1"></label>
                        <button type="button" class="btn btn-primary Serachbarbtn">
                        <i class="fas fa-search"></i>
                    </button>
                    </div>
                 
                </div>
            </div>
            <div className="topGapPad">
                <div className="boxshadow">
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">Sr No</th>
                                <th scope="col">Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Phone Number</th>
                                <th scope="col">Date</th>
                                <th scope="col">Time</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Otto@gmial.com</td>
                                <td>9803836866</td>
                                <td>13-02-2022</td>
                                <td>3:15 PM</td>
                                <td>
                                    <select class="form-select w-50 ">
                                        <option disabled selected>...</option>
                                        <option value="10">Select</option>
                                        <option value="25">Reject</option>
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Mark</td>
                                <td>Otto@gmial.com</td>
                                <td>9803836866</td>
                                <td>13-02-2022</td>
                                <td>3:15 PM</td>
                                <td>
                                    <select class="form-select w-50 ">
                                        <option disabled selected>...</option>
                                        <option value="10">Select</option>
                                        <option value="25">Reject</option>
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>Mark</td>
                                <td>Otto@gmial.com</td>
                                <td>9803836866</td>
                                <td>13-02-2022</td>
                                <td>3:15 PM</td>
                                <td>
                                    <select class="form-select w-50 ">
                                        <option disabled selected>...</option>
                                        <option value="10">Select</option>
                                        <option value="25">Reject</option>
                                    </select>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="row">
                    <div className="col-sm-6 col-lg-6 col-md-6">
                        <div className="gapPad">
                            <select class="form-select w-25 " name={state.row_value}>
                                <option disabled selected>Rows</option>
                                <option value="10">10</option>
                                <option value="25">25</option>
                                <option value="50">50</option>
                            </select>
                        </div>
                    </div>
                    {/*<div className="col-sm-6 col-lg-6 col-md-6">
                        <div className="gapPad pagination_justify_end ">
                            <Pagination
                                className="paginationDiv"
                                count={10}
                                onChange={handlechange}
                                color="primary" />
                        </div>
    </div>*/}
                </div>
            </div>
        </div>

    )
}
export default Applied_Job