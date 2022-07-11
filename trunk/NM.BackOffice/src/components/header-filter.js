
import React, { useState } from "react";
import { BsFilter } from "react-icons/bs";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { Button, Collapse, Form, FormControl, InputGroup, Modal, Table } from "react-bootstrap";
import TooltipComp from "../shared/Tooltipomp";

export const Filters = ({ requestSearch, showalert, setShowalert, handleShow, titl, placeholder }) => {
    const [disable, setSdisabled] = useState(false)
    const [open, setOpen] = useState(false);
    const [show, setShow] = useState(false);

    return (
        <div className="panle_body">
            <div className="panle_header" >
                <div className="left-panle-title"><h4>{titl}</h4></div>
                <div className="right_panle_container"  >
                <TooltipComp component={<Button variant="" className="btn-sm remove_button_padding" onClick={() => setSdisabled(p => !p)}> <BsFilter size={25} color="#ff6b01" /></Button>} tooltip="Filter" />
                <TooltipComp component={<Button variant="" aria-controls="example-collapse-text"
                aria-expanded={disable} className="btn-sm remove_button_padding" onClick={handleShow} ><AiOutlinePlusCircle size={25} color="#ff6b01" /></Button>} tooltip="Add" />
                    
                </div>
            </div>
            <div className="fs_13 pt-1">
                <div className="gapbetween">
                    <Collapse in={disable}>
                        <div id="example-collapse-text">
                            <Form.Select className="fs_13" aria-label="Default select example" id="example-collapse-text" >
                                <option hidden selected>Status</option>
                                <option value="1">All</option>
                                <option value="1">Active</option>
                                <option value="1">Deactive</option>
                            </Form.Select>
                        </div>
                    </Collapse>
                    <Collapse in={disable}>
                        <div className="serachbar" >
                            <InputGroup className="mb-3"  >
                                <FormControl className="fs_13"
                                    placeholder={placeholder}
                                    aria-label="Recipient's username"
                                    aria-describedby="basic-addon2"
                                    onChange={(e) => {
                                        console.log(e)
                                        requestSearch(e.target.value)
                                    }}
                                />
                            </InputGroup>
                        </div>
                    </Collapse>
                </div>
            </div>
        </div>

    )
}
