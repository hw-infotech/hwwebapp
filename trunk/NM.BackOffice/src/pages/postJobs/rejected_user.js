//import { Pagination } from "@material-ui/lab";
import React, { useEffect, useState } from "react";
import { Col, Form, Row, Table } from "react-bootstrap";
//import BasicBreadcrumbs from "../../components/breadcumbs";


const Rejected_user = () => {
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
        { name: "Rejected User", route: "/" },

    ]
    return (
        <div>
            <div title="Rejected Candidates">
                { /*<BasicBreadcrumbs route={route}/>*/}
                <div className="topGapPad margin_bottom_">
                    <h4 style={{ paddingBottom: "10px" }}>List Number of Rejected Candidates</h4>
                    <div className="boxshadow">
                        <Table>
                            <thead>
                                <tr>
                                    <th scope="col">Sr No</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Phone</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">
                                        Add</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                    <td><button type="button" className="btn"><i class="fs-4 bi-plus-circle"></i></button></td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                    <td>@fat</td>
                                    <td><button type="button" className="btn "><i class="fs-4 bi-plus-circle"></i></button></td>
                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td>Larry</td>
                                    <td>the Bird</td>
                                    <td>@twitter</td>
                                    <td><button type="button" className="btn "><i class="fs-4 bi-plus-circle"></i></button></td>
                                </tr>
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
                        { /*<div className="col-sm-6 col-lg-6 col-md-6">
                        <div className="gapPad pagination_justify_end ">
                            <Pagination
                                className="paginationDiv"
                                count={10}
                                onChange={handlechange}
                                color="primary" />
                        </div>
    </div>*/}
                    </Row>
                </div>
            </div>
            );

        </div>
    );
}
export default Rejected_user