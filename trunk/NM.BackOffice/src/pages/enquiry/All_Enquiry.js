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
import { useDispatch, useSelector } from "react-redux";
import {
  Edit_Enquiry,
  Get_Enquiry,
  Update_Enquiry,
} from "../../Services/redux/action/action";
import { useLayoutEffect } from "react";
import { Filters } from "../../components/header-filter";

// const records = [
//   {
//     Name: "Mark",
//     Phone: "9803836866",
//     Email: "goldygoldy33@gmail.com",
//     message:
//       "We look forward to seeing you, We would like to thank you for your letter inquiring about our product.",
//     status: "pending",
//   },
//   {
//     Name: "adfark",
//     Phone: "8146945394",
//     Email: "Amanpreet33@gmail.com",
//     message:
//       " We hope the information provided ,We would like to thank you for your letter inquiring about our product.",
//     status: "pending",
//   },
//   {
//     Name: "yark",
//     Phone: "9803836866",
//     Email: "ganeshsharma5073@gmail.com",
//     message:
//       " our hopes that the situation is resolved soonest. We would like to thank you for your letter inquiring about our product.",
//     status: "pending",
//   },
// ];
const route = [
  { name: "Dashboard", route: "/" },
  { name: "Enquiry" },
  { name: "All Enquiry", route: "/all-Enquiry" },
];
const options = [
  { value: "Pending", label: "Pending" },
  { value: "Resolved", label: "Resolved" },
];
const All_Enquiry = ({ setRoute }) => {
  const [tableData, setTableData] = useState();
  const [disable, setSdisabled] = useState();
  const [show, setShow] = useState();
  const [data, setdata] = useState();
  const [rowtext, setRowtext] = useState();
  const [showalert, setShowalert] = useState();
  const [message, setmessage] = useState();
  const dispatch = useDispatch();
  const [updateBasonId, setUpdateBasonId] = useState("");
  const handleShow = () => setShow(true);
  /**
   * @method handleClose
   *@description it is for close the modal when we click on close button on modal,it will be hide
   * @returns
   */
  const handlechange = (e) => {
    const { name, value } = e.target;
    setmessage({ ...message, [name]: value });
    console.log(message.message, "this is the first thing forever");
  };

  const handleClose = () => setShow(false);
  //  const handleShow = () => setShow(true);
  const [index, setIndex] = useState();
  const [showPerPage, setShowPerPage] = useState(10);
  const [start, setStart] = useState(1);
  const [pagination1, setpagination] = useState({
    start: start,
    end: showPerPage,
  });
  setRoute(route);
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

  /**
   * @method display
   * @description it is for change  the status, when we click status pending, status change to resolved, oppotiste as well
   */
  const display = () => {
    if (deleteObj.rowStatus) {
      setTableData((oldState) => {
        oldState[deleteObj.index].status = "Resolved";
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
  /**
   *@method useEffect
   *@description it is used for show the document title
   *
   */
  const requestSearch = (searchedVal) => {
    const filteredRows = data?.filter((row) => {
      return row?.name.toLowerCase().includes(searchedVal.toLowerCase());
    });
    setTableData(filteredRows);
  };
  const status = (status) => {
    if (status == "ALL") {
      setTableData(selector?.getenquiry?.data);
    } else {
      const filteredRows = data?.filter((row) => {
        return row?.status.includes(status);
      });
      setTableData(filteredRows);
    }
  };
  const selector = useSelector((state) => state?.data?.apidata);
  useEffect(() => {
    document.title = "All Enquiry";
  }, []);
  useEffect(() => {
    dispatch(Get_Enquiry());
  }, []);
  useEffect(() => {
    setTableData(selector?.getenquiry?.data);
    setmessage(selector?.edit_enquiry?.data);
    setdata(selector?.getenquiry?.data);
  }, [selector]);
  console.log("this is the field", message);
  return (
    <div className="main-enquiry-box">
      <div className="panle_body">
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
                onChange={(e) => {
                  console.log(e.target.value);
                  status(e.target.value);
                }}
              >
                <option disabled>Status</option>
                <option selected value={"ALL"}>
                  All
                </option>
                <option value="Pending">Pending</option>
                <option value="Resolved">Resolved</option>
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
      </div>

      <div className="content_box">
        <div className="data-table">
          <Table striped bordered hover>
            <Modal data-testid="modal" show={showalert} onHide={handleClose}>
              <Modal.Header className="label-size">
                <Modal.Title className="modal-titlee">Alert</Modal.Title>
              </Modal.Header>
              <Modal.Body className="label-size" data-testid="modal">
                <p>{rowtext?.text}</p>
                {rowtext?.id == 0 && (
                  <Form.Group className="mb-3" controlId="message">
                    <Form.Label>Message</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={3}
                      name="message"
                      //value={tableData?.message}
                      onChange={handlechange}
                    />
                  </Form.Group>
                )}
              </Modal.Body>
              <Modal.Footer>
                <Button
                  data-testid="input-field"
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
                  data-testid="dropdown12"
                  onClick={() => {
                    display();
                    setShowalert(false);
                    if (tableData[index]?.status == "pending") {
                      dispatch(Update_Enquiry(message));
                    }
                  }}
                >
                  Yes
                </Button>
              </Modal.Footer>
            </Modal>
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
              {tableData?.length > 0 &&
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
                                    data.status == "Resolved" ? true : false
                                  }
                                  className="btn btn-outlined-secondary fs_13"
                                  onClick={() => {
                                    setIndex(index);
                                    dispatch(Edit_Enquiry(data));
                                    setRowtext({
                                      id: 0,
                                      text: "Are you sure to mark  as enquiry Resolved?",
                                    });
                                    setShowalert(true);
                                    setDeleteObj({
                                      index,
                                      rowStatus: true,
                                    });
                                    setUpdateBasonId(data.basonId);
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
                            {data.status == "Resolved" ? (
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
                      {data.status === "Resolved" ? (
                        <Badge bg="success" size={30}>
                          Resolved
                        </Badge>
                      ) : (
                        <Badge bg="danger">Pending</Badge>
                      )}
                    </td>
                    <td>{capitalizeFirstLetter(data?.name)}</td>
                    <td>{data?.phoneNumber}</td>
                    <td>{capitalizeFirstLetter(data?.email)}</td>
                    <td>{data?.message && subString(data?.message, 95)}</td>
                  </tr>
                ))}
            </tbody>
          </Table>
          {tableData?.length === 0 && (
            <div className="table_no_records">No Record Found</div>
          )}
        </div>
      </div>
      {tableData?.length > 0 ? (
        <CustomPagination
          showPerPage={showPerPage}
          setStart={setpagination}
          total={tableData?.length}
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
export default withHeader(All_Enquiry);
