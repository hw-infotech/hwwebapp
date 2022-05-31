import { Pagination } from "@material-ui/lab";
import { SettingsOutlined } from "@mui/icons-material";
import React, { useEffect } from "react";
import BasicBreadcrumbs from "../../components/breadcumbs";
import Layout from "../../components/layout";
import withHeader from "../../HOC/withHeader";

const Resolved = () => {
     //useEffect(()=>{
     // setTitle("Resolved")
    // },[])
    const route = [
        { name: "Home", route: "/" },
        { name: "Enquiry", route: "/" },
        { name: "Resolved", route: "/" },
      
    ]
    return (
        <div title="Resolved">
        <BasicBreadcrumbs route={route}/>
            <div className="topGapPad margin_bottom_">
            <h4>List Number of Resolved Enquiry</h4>
                <div className="boxshadow">
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">Sr No</th>
                                <th scope="col">Name</th>
                                <th scope="col">Phone</th>
                                <th scope="col">Email</th>
                                <th scope="col">Message</th>
                                <th scope="col">Subject</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                <td>@mdo</td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                                <td>@fat</td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>Larry</td>
                                <td>the Bird</td>
                                <td>@twitter</td>
                                <td>@twitter</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="row ">
                <div className="col-sm-6 col-lg-6 col-md-6">
                    <div className="gapPad">
                        <select class="form-select w-25 ">
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
                            className="paginationDiv "
                            count={5}
                           
                            color="primary" />
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
}
export default Resolved
