//import { Pagination } from "@material-ui/lab";
import React, { useEffect, useState } from "react";
import { Col, Form, Pagination, Row, Table } from "react-bootstrap";
//import BasicBreadcrumbs from "../../components/breadcumbs";
import { BsArrowUp } from "react-icons/bs";
import { BsArrowDown } from "react-icons/bs";

const Resolved = () => {
    const route = [
        { name: "Home", route: "/" },
        { name: "Enquiry", route: "/" },
        { name: "Resolved", route: "/" },
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
        <div title="Resolved">
            {/*<BasicBreadcrumbs route={route}/>*/}
            <div className="topGapPad margin_bottom_">
                <h4>List Number of Resolved Enquiry</h4>
                <div className="boxshadow">
                    <Table class="table">
                        <thead>
                            <tr>
                                <th onClick={() => {
                                    setTitle(!title)
                                    { title ? sortt() : sortt1() }
                                }}>Name
                                {title ? <BsArrowDown/>:<BsArrowUp/>}</th>
                                <th>Phone</th>
                                <th>Email</th>
                                <th>Message</th>
                                <th>Subject</th>
                                <th>Reason</th>
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
                                </tr>)}
                        </tbody>
                    </Table>
                </div>
                <Row>
                    <Col md={6}>
                        <div className="gapPad">
                            <Form.Select aria-label="row" className="w-25">
                                <option>Row</option>
                                <option value="1">10</option>
                                <option value="2">25</option>
                                <option value="3">50</option>
                            </Form.Select>
                        </div>
                    </Col>
                    <Col md={6} className="gapPad">
                        <Pagination>
                            <Pagination.First />
                            <Pagination.Prev />
                            <Pagination.Item>{1}</Pagination.Item>
                            <Pagination.Ellipsis />
                            <Pagination.Item>{10}</Pagination.Item>
                            <Pagination.Item>{11}</Pagination.Item>
                            <Pagination.Item >{12}</Pagination.Item>
                            <Pagination.Item>{13}</Pagination.Item>
                            <Pagination.Item >{14}</Pagination.Item>

                            <Pagination.Ellipsis />
                            <Pagination.Item>{20}</Pagination.Item>
                            <Pagination.Next />
                            <Pagination.Last />
                        </Pagination>
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
export default Resolved
