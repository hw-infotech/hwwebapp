import {
  Badge,
  Button,
  Col,
  Collapse,
  Form,
  FormControl,
  InputGroup,
  Modal,
  Row,
  Table,
} from "react-bootstrap";
import React, { useEffect, useState } from "react";
import BasicBreadcrumbs from "../../components/breadcumbs";
import { BsArrowUp } from "react-icons/bs";
import { BsArrowDown } from "react-icons/bs";
import CustomPagination from "../../shared/pagination";
import { MdOutlinePendingActions } from "react-icons/md";
import { BsFilter } from "react-icons/bs";
import capitalizeFirstLetter from "../../components/first_letter_capital";
import { sortData, subString } from "../../Services/commonFunctions";
import withHeader from "../../HOC/withHeader";

const records = [
  {
    Name: "Mark",
    Phone: "9803836866",
    Email: "goldygoldy33@gmail.com",
    message:
      "We look forward to seeing you, We would like to thank you for your letter inquiring about our product.",
    status: "pending",
  },
  {
    Name: "adfark",
    Phone: "8146945394",
    Email: "Amanpreet33@gmail.com",
    message:
      " We hope the information provided ,We would like to thank you for your letter inquiring about our product.",
    status: "pending",
  },
  {
    Name: "yark",
    Phone: "9803836866",
    Email: "ganeshsharma5073@gmail.com",
    message:
      " our hopes that the situation is resolved soonest. We would like to thank you for your letter inquiring about our product.",
    status: "pending",
  },
];
const route = [
  { name: "Dashboard", route: "/" },
  { name: "Enquiry" },
  { name: "All Enquiry", route: "/all-Enquiry" },
];
const options = [
  { value: "Pending", label: "Pending" },
  { value: "Resolved", label: "Resolved" },
];
const All_Enquiry = ({
  tableData,
  setTableData,
  setRoute,
  settitle,
  setPlaceholder,
  setShow,
  show,
  setSearchwith,
  setOptions
}) => {
  const [rowtext, setRowtext] = useState();
  const [showalert, setShowalert] = useState();
  // const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [showPerPage, setShowPerPage] = useState(10);
  const [start, setStart] = useState(1);
  const [pagination1, setpagination] = useState({
    start: start,
    end: showPerPage,
  });
  setPlaceholder("Search by name");
  settitle("All Enquiry");
  setRoute(route);
  setSearchwith("Name");
  setOptions(options)
  //const [tableData, setTableData] = useState(records);
  const [title, setTitle] = useState(false);
  // const requestSearch = (searchedVal) => {
  //   const filteredRows = records.filter((row) => {
  //     return (
  //       row.Name.toLowerCase().includes(searchedVal.toLowerCase()) ||
  //       row.Email.toLowerCase().includes(searchedVal.toLowerCase())
  //     );
  //   });
  //   setTableData(filteredRows);
  // };
  const [deleteObj, setDeleteObj] = useState({
    index: 0,
    rowStatus: false,
  });
  const [wait, setwait] = useState(false);
  const display = () => {
    console.log(deleteObj);
    if (deleteObj.rowStatus) {
      setTableData((oldState) => {
        oldState[deleteObj.index].status = "resolved";
        setShowalert(false);
        return [...oldState];
      });
    }
    if (!deleteObj.rowStatus) {
      setTableData((oldState) => {
        oldState[deleteObj.index].status = "pending";
        setShowalert(false);
        return [...oldState];
      });
    }
  };
  useEffect(() => {
    document.title = "All Enquiry";
  }, []);
  return (
    <div className="main-enquiry-box">
      {/*<div className="panle_body">
    <div className="panle_header">
      <div className="left-panle-title">
        <h4>All Enquiry</h4>
      </div>
      <div className="right_panle_container">
        <Button
          variant=""
          title="Filter"
          className="btn-sm remove_button_padding"
          onClick={() => setSdisabled((p) => !p)}
        >
          <BsFilter size={25} color="#ff6b01" />
        </Button>
      </div>
    </div>
    <div className="gapbetween pt-1">
      <Collapse in={disable}>
        <div className="status_filter">
          <Form.Select
            className="fs_13"
            aria-label="Default select example"
            id="example-collapse-text"
            defaultValue={"all"}
          >
            <option disabled>Status</option>
            <option selected value={"ALL"}>
              All
            </option>
            <option value="1">Pending</option>
            <option value="1">Resolved</option>
          </Form.Select>
        </div>
      </Collapse>
      <Collapse in={disable}>
        <div className="serachbar">
          <InputGroup className="mb-3">
            <FormControl
              className="fs_13"
              placeholder="Serach by Name"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
              onChange={(e) => {
                requestSearch(e.target.value);
              }}
            />
          </InputGroup>
        </div>
      </Collapse>
    </div>
            </div>*/}
      <Modal show={showalert} onHide={handleClose}>
        <Modal.Header className="label-size">
          <Modal.Title className="modal-titlee">Alert</Modal.Title>
        </Modal.Header>
        <Modal.Body className="label-size">
          <p>{rowtext?.text}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button
            className="btn-sm fs_13"
            variant="secondary"
            onClick={() => {
              setShowalert(false);
            }}
          >
            No
          </Button>
          <Button
            className="btn-sm fs_13"
            variant="primary"
            onClick={() => {
              display();
              setShowalert(false);
            }}
          >
            Yes
          </Button>
        </Modal.Footer>
      </Modal>
      <div className="content_box">
        <div className="data-table">
          <Table striped bordered hover>
            <thead>
              <tr>
                <th className="action_colwidth">Action</th>
                <th className="action_colwidth">Status</th>
                <th
                  className="headerSortUp "
                  onClick={() => {
                    setTitle(!title);
                    {
                      title
                        ? setTableData(sortData(tableData, "Name", "asc"))
                        : setTableData(sortData(tableData, "Name", "desc"));
                    }
                  }}
                >
                  Name{title ? <BsArrowUp /> : <BsArrowDown />}
                </th>
                <th>Phone</th>
                <th>Email</th>
                <th>Message</th>
              </tr>
            </thead>
            <tbody>
              {tableData.length > 0 &&
                tableData.map((data, index) => (
                  <tr key={index}>
                    <td>
                      <div className="userDetail">
                        <button
                          type="button"
                          className="btn "
                          id="dropdownIconMenu"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <span className="actionIcon">
                            {" "}
                            <i className="bi bi-three-dots-vertical"></i>{" "}
                          </span>
                        </button>
                        <ul
                          className="IconDropdown dropdown-menu context-menu11 "
                          aria-labelledby="dropdownIconMenu"
                        >
                          <li className="dropdownList">
                            {data.status == "pending" ? (
                              <div className="actionBtns context-menu1">
                                <span
                                  className="editAction"
                                  data-bs-toggle="modal"
                                  data-bs-target="#editbtn"
                                >
                                  <i className="bi bi-pencil-square"></i>
                                </span>
                                <button
                                  type="button"
                                  hidden={
                                    data.status == "resolved" ? true : false
                                  }
                                  className="btn btn-outlined-secondary fs_13"
                                  onClick={() => {
                                    setwait(true);
                                    setRowtext({
                                      id: 0,
                                      text: "Are you sure to mark  as enquiry Resolved?",
                                    });
                                    setShowalert(true);
                                    setDeleteObj({
                                      index,
                                      rowStatus: true,
                                    });
                                  }}
                                >
                                  Resolved
                                </button>
                              </div>
                            ) : (
                              ""
                            )}
                          </li>
                          <li className="dropdownList">
                            {data.status == "resolved" ? (
                              <div className="actionBtns  context-menu1">
                                <span
                                  className="deleteAction"
                                  data-bs-toggle="modal"
                                  data-bs-target="#deletebtn"
                                >
                                  {" "}
                                  <MdOutlinePendingActions />
                                </span>
                                <button
                                  type="button"
                                  key={index}
                                  className="btn btn-outlined-secondary fs_13"
                                  onClick={() => {
                                    setwait(false);
                                    setShowalert(true);

                                    setDeleteObj({
                                      index,
                                      rowStatus: false,
                                    });
                                    setRowtext({
                                      id: 1,
                                      text: "Are you sure to mark as enquiry Panding?",
                                    });
                                  }}
                                >
                                  Pending
                                </button>
                              </div>
                            ) : (
                              ""
                            )}
                          </li>
                        </ul>
                      </div>
                    </td>
                    <td>
                      {data.status === "resolved" ? (
                        <Badge bg="success" size={30}>
                          Resolved
                        </Badge>
                      ) : (
                        <Badge bg="danger">Pending</Badge>
                      )}
                    </td>
                    <td>{capitalizeFirstLetter(data.Name)}</td>
                    <td>{data.Phone}</td>
                    <td>{capitalizeFirstLetter(data.Email)}</td>
                    <td>{data.message && subString(data.message, 95)}</td>
                  </tr>
                ))}
            </tbody>
          </Table>
          {tableData.length === 0 && (
            <div className="table_no_records">No Record Found</div>
          )}
        </div>
      </div>
      {tableData.length > 0 ? (
        <CustomPagination
          showPerPage={showPerPage}
          setStart={setpagination}
          total={tableData.length}
        />
      ) : (
        ""
      )}
      {/*<Modal show={show} onHide={handleClose} size="sm">
                    <Modal.Header closeButton>
                        <Modal.Title>Enter the Remarks</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="w-100">
                            <Formik>
                                {() => (
                                    <div className="w-100">
                                        <form>
                                            <div class="form-group">
                                                <label for="exampleFormControlTextarea1">Enter the Remarks for Resolving the Enquiry</label>
                                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                            </div>
                                        </form>
                                    </div>
                                )}
                            </Formik>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <div className="pt-3 gallery_add_button d-flex justify-content-end" >
                            <Button variant="outline-secondary" type="button" className="gallery_add_button">Submit</Button>
                        </div>
                    </Modal.Footer>
                                </Modal>*/}
    </div>
  );
};
export default withHeader(All_Enquiry, records, false);
