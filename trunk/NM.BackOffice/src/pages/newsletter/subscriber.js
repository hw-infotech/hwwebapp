import React, { useEffect, useState } from "react";
import Layout from "../../components/layout";
import Pagination from '@material-ui/lab/Pagination';
import BasicBreadcrumbs from "../../components/breadcumbs";
import { useDispatch, useSelector } from "react-redux";
import { NewsLetter_Unsubscriber, News_letter_Subscribe } from "../../Services/redux/action/action";
import { useDropzone } from 'react-dropzone';
import withHeader from "../../HOC/withHeader";
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
    // console.log("hellow", subscribers);
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
    // console.log(subscribers, "subscribers");
    const handlechange = (event, value) => {
        var value1;
        setNext(value)
        //console.log(value, "comp", next)
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
    return (
        <div >
            <BasicBreadcrumbs route={route} />
            <div className="margin_bottom_">
                <div className="content_center pt-3"><h4>Number of Newsletter Subscriber/Unsubscriber</h4></div>
                <div className="gapPad">
                   
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
                    <div class="form-check  form-switch" style={{paddingBottom:20}}>
                    <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" />
                    <label class="form-check-label" for="flexSwitchCheckChecked">SubScribe/Unsubscribe</label>
                </div>
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
                            <select class="form-select w-25 " name={state.row_value} onChange={Chnage}>
                                <option disabled selected>Rows</option>
                                <option value="10">10</option>
                                <option value="25">25</option>
                                <option value="50">50</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-sm-6 col-lg-6 col-md-6 ">
                        <div className="gapPad pagination_justify_end ">
                            <Pagination
                                className="paginationDiv"
                                count={Math.ceil(subscribers?.length / row)}
                                onChange={handlechange}
                                color="primary" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default SubScriber