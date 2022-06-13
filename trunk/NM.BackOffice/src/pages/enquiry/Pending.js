import React, { useEffect, useState } from "react";
import { Col, Form, Row, Table } from "react-bootstrap";
import { BsArrowUp } from "react-icons/bs";
import { BsArrowDown } from "react-icons/bs";
import BasicBreadcrumbs from "../../components/breadcumbs";
//import Pagination from '@material-ui/lab/Pagination';


const Pending_Enquiry = () => {

    const route = [
        { name: "Home", route: "/" },
        { name: "Enquiry", route: "/" },
        { name: "Pending", route: "/" },

    ]
    const [tableData, setTableData] = useState([
        {
            Name: "Mark",
            Phone: "gtto",
            Email: "goldy",
            message: "hg",
            subject: "adf",
            Reason: "rrt"


        },
        {
            Name: "sdfark",
            Phone: "ertto",
            Email: "goldy",
            message: "ahg",
            subject: "hadf",
            Reason: "trt"


        },
        {
            Name: "yMark",
            Phone: "ogtto",
            Email: "lgkoldy",
            message: "ehg",
            subject: "poadf",
            Reason: "brt"

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
        <div title="Pending Enquiry">
            {<BasicBreadcrumbs route={route} />}
            <div className="topGapPad margin_bottom_">
                <h4>List Number of Pending Enquiry</h4>
                <div className="boxshadow">
                    <Table id="dtBasicExample">
                        <thead>
                            <tr>
                                <th scope="col">Phone</th>
                                <th onClick={() => {
                                    setTitle(!title)
                                    { title ? sortt() : sortt1() }
                                }}>Name{title ? <BsArrowUp /> : <BsArrowDown />}</th>
                                <th >Email</th>
                                <th>Message</th>
                                <th >Reason</th>
                                <th >Subject</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tableData.map((data, index) =>
                                <tr>
                                    <td>{data.Name}</td>
                                    <td>{data.Phone}</td>
                                    <td>{data.Email}</td>
                                    <td>{data.message}</td>
                                    <td>{data.subject}</td>
                                    <td>{data.Reason}</td>
                                </tr>
                            )}
                        </tbody>
                    </Table>
                </div>
                <Row>
                    <Col md={6}>
                        <div className="gapPad">
                            <Form.Select aria-label="Row" className="w-25">
                                <option>Row</option>
                                <option value="1">10</option>
                                <option value="2">25</option>
                                <option value="3">50</option>
                            </Form.Select>
                        </div>
                    </Col>
                    {/*<div className="col-sm-6 col-lg-6 col-md-6">
                        <div className="gapPad pagination_justify_end ">
                            <Pagination
                                className="paginationDiv "
                                count={5}
                                color="primary" />
                        </div>
    </div>*/}
                </Row>
            </div>
        </div>
    );
}
export default Pending_Enquiry