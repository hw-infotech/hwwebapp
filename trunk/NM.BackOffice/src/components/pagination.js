import React, { useState } from "react";
import Pagination from '@mui/material/Pagination'
import { Col, Form, Row } from "react-bootstrap";

const Paginationn = () => {
    const [row, setRow] = useState(10)
    const [show, setShow] = useState(false);
    const [showPerPage, setShowPerPage] = useState(10)
    const [next, setNext] = useState(0)
    const [start, setStart] = useState(1);
    const [pagination1, setpagination] = useState(
        {
            start: start,
            end: showPerPage
        });

    const handlechange = (event, value) => {
        var value1;
        setNext(value)
        if (next <= value) {
            value1 = row * value
            setShowPerPage(value1)
           
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
    const Chnage = (e) => {
        const { name, value } = e.target
        setRow(value)
        console.log("this is the select field value", value)
    }
    return (<div>
        <Row>
                <Col md={6}>
                <div className="gapPad">
                    <Form.Select aria-label="row" className="w-25" >
                        <option>Row</option>
                        <option value="1">10</option>
                        <option value="2">25</option>
                        <option value="3">50</option>
                    </Form.Select>
                    </div>
                </Col>
                <Col md={6}>
                    <div className=" gapPad pagination_justify_end">
                    <Pagination
                    className="paginationDiv"
                    count={10}
                    onChange={handlechange}
                    color="primary" />
                    </div>
                </Col>

            </Row>
        
    </div>
    )

}

export default Paginationn


