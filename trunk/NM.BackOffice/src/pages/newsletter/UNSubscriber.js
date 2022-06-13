import React, { useEffect, useState } from "react";
//import Pagination from '@material-ui/lab/Pagination';
//import { NewsLetter_Unsubscriber, News_letter_Subscribe } from "../../Services/redux/action/action";
//import { useDispatch, useSelector } from "react-redux";
//import BasicBreadcrumbs from "../../components/breadcumbs";

const UNSubScriber = () => {
    
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
    useEffect(() => {

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
        { name: "Newsletter", route: "/" },
        { name: "UnSubscriber", route: "/" },

    ]
    return (
        <div title="UnSubscriber">
            <div className="margin_bottom_">
                {/*<BasicBreadcrumbs route={route} />*/}
                <div className="content_center pt-3"><h4>Number of Newsletter UnSubscriber</h4></div>
                <div className="gapPad content_center">
                    <div class="input-group  ">
                        <div class="form-outline flex-fill  content_center">
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
                                    <th scope="col">Name</th>
                                    <th scope="col">Email</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/*subscribers.map((data, index) => (<tr>
                                    <td>{data?.email}</td>
                                    <td>{data?.createdOn}</td>
                                </tr>))*/}
                            </tbody>
                        </table>
                    </div>
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
    );
}
export default UNSubScriber