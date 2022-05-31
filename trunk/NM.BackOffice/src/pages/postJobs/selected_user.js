import { Pagination } from "@material-ui/lab";
import React, { useEffect, useState } from "react";
import BasicBreadcrumbs from "../../components/breadcumbs";
import Layout from "../../components/layout";
//import withHeader from "../../HOC/withHeader";

const Selected_User = () => {
    //useEffect(() => {
       // setTitle("Selected User")
   // }, [])
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
    const route = [
        { name: "Home", route: "/" },
        { name: "Job", route: "/" },
        { name: "Selected User", route: "/" },

    ]

    return (
        <div title="Selected Candidates">
            <BasicBreadcrumbs route={route} />
            <div className="topGapPad margin_bottom_">
                <h4 style={{ paddingBottom: "10px" }}>List Number of Selected Candidates</h4>
                <div className="boxshadow">
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">Sr No</th>
                                <th scope="col">Name</th>
                                <th scope="col">Phone</th>
                                <th scope="col">Email</th>
                                <th scope="col">
                                    Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                <td><button type="button" className="btn"><i class="fs-5 bi-trash"></i></button></td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                                <td><button type="button" className="btn "><i class="fs-5 bi-trash"></i></button></td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>Larry</td>
                                <td>the Bird</td>
                                <td>@twitter</td>
                                <td><button type="button" className="btn "><i class="fs-5 bi-trash"></i></button></td>
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
                    <div className="col-sm-6 col-lg-6 col-md-6">
                        <div className="gapPad pagination_justify_end ">
                            <Pagination
                                className="paginationDiv"
                                count={10}
                                onChange={handlechange}
                                color="primary" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}
export default Selected_User