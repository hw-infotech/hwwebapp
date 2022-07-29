import React, { useEffect, useState } from "react";
import {
  Badge,
  Button,
  Col,
  Collapse,
  Form,
  FormCheck,
  FormControl,
  InputGroup,
  Modal,
  Row,
  Tab,
  Table,
  Tabs,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { BsArrowUp } from "react-icons/bs";
import { BsArrowDown } from "react-icons/bs";
import { useNavigate, useParams } from "react-router";
import { Formik } from "formik";
import { initialValues, validationschemeaa } from "./validation-schema";
import { Input } from "../../components/commoninputfield";
import { AiOutlineCheck, AiOutlineCloseCircle } from "react-icons/ai";
import CustomPagination from "../../shared/pagination";
import { GoCloudDownload } from "react-icons/go";
import CapitalizeFirstLetter from "../../components/first_letter_capital";
import BasicBreadcrumbs from "../../components/breadcumbs";
import { BiEdit } from "react-icons/bi";
import { BsFilter } from "react-icons/bs";

import { FiArrowLeftCircle } from "react-icons/fi";
import { tab } from "@testing-library/user-event/dist/tab";
import { useDispatch, useSelector } from "react-redux";
import { Edit_Data } from "../../Services/redux/action/action";
import TooltipComp from "../../shared/Tooltipomp";
import ReactTooltip from "react-tooltip";

const Particularjob = () => {
  const data = useParams();
  const [showalert, setShowalert] = useState(false);
  const [index, setIndex] = useState();
  const [disabled, setSdisabled] = useState(false);
  const [showPerPage, setShowPerPage] = useState();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  let [key, setKey] = useState("Description");
  const [start, setStart] = useState(1);
  const [pagination1, setpagination] = useState({
    start: start,
    end: showPerPage,
  });
  const [tr, settr] = useState(false);
  const nevigate = useNavigate();
  const dispatch = useDispatch();
  const records = [
    {
      Jobtitle: "UI/UX",
      name: "amit Sharma",
      email: "goldygoldy33@gmail.com",
      phone: "9801551856",
      active: "accepted",
    },
    {
      Jobtitle: "UI/UX",
      name: "Vikas Sharma",
      email: "ganesharma5073@gmail.com",
      phone: "9803836866",
      active: "rejected",
    },
    {
      Jobtitle: "UI/UX",
      name: "Ganesh Sharma",
      email: "amanpreet@gmail.com",
      phone: "8146945394",
      active: "accepted",
    },
  ];
  const [tableData, setTableData] = useState(records);
  function sortt() {
    const response = tableData.sort((a, b) =>
      a.name.toLowerCase() > b.name.toLowerCase()
        ? 1
        : b.name.toLowerCase() > a.name.toLowerCase()
        ? -1
        : 0
    );
    console.log(response);
    setTableData([...response]);
  }
  function sortt1() {
    const response = tableData.sort((a, b) =>
      a.name.toLowerCase() < b.name.toLowerCase()
        ? 1
        : b.name.toLowerCase() < a.name.toLowerCase()
        ? -1
        : 0
    );
    console.log(response);
    setTableData([...response]);
  }
  const [title, setTitle] = useState(false);
  const requestSearch = (searchedVal) => {
    const filteredRows = records.filter((row) => {
      return (
        row.name.toLowerCase().includes(searchedVal.toLowerCase()) ||
        row.Jobtitle.toLowerCase().includes(searchedVal.toLowerCase())
      );
    });
    setTableData(filteredRows);
  };
  const display = (e) => {
    if (e) {
      setShowalert(true);
    } else {
      setShowalert(true);
    }
  };
  const route = [
    { name: "Dashboard", route: "/" },
    { name: "Job Management", route: "" },
    { name: "Job", route: "/all-jobs" },
    { name: "View", route: "/particularjob" },
  ];
  var selector = useSelector((state) => state.data?.apidata?.edit_data?.data);
  useEffect(() => {
    document.title = "View";
  }, []);
  return (
    <div className="box__content">
      <div className="topPadding-10 w-100">
        {<BasicBreadcrumbs route={route} />}
        <div className="panle_body">
          <div className="panle_header">
            <div className="left-panle-title">
              <h4>View</h4>
            </div>
            <div className="right_panle_container">
              <Button
                variant=""
                className="back-buttonn btn-sm "
                onClick={() => {
                  nevigate(-1);
                }}
              >
              Back
              </Button>
             
            </div>
          </div>
        </div>
        <Tabs
          activeKey={key}
          id="uncontrolled-tab-example"
          onSelect={(k) => setKey(k)}
          className="mb-3"
        >
          <Tab
            eventKey="Description"
            title="General Detail"
            onSelect={() => {
              setKey("Description");
            }}
          >
            <Modal show={showalert} onHide={handleClose}>
              <Modal.Header>
                <Modal.Title className="modal-titlee ">Alert</Modal.Title>
              </Modal.Header>
              <Modal.Body className="label-size">
                <p>{"Are You Really want to change the status"}</p>
              </Modal.Body>
              <Modal.Footer>
                <Button
                  variant="secondary"
                  className="btn-sm fs_13"
                  onClick={() => {
                    setShowalert(false);
                  }}
                >
                  No
                </Button>
                <Button
                  variant="primary"
                  className="btn-sm fs_13"
                  onClick={() => {
                    setTableData((oldState) => {
                      oldState[index].active =
                        oldState[index].active == "accepted"
                          ? "rejected"
                          : "accepted";
                      return oldState;
                    });
                    //setTableData([...tableData])
                    setShowalert(false);
                  }}
                >
                  Yes
                </Button>
                {console.log(tableData)}
              </Modal.Footer>
            </Modal>
            <div className="view_main_box">
              <div className="main-pannle">
                <div className="leftt_pannel">
                  <div className="jobes_card">
                    <div className="job_icon">
                      <div className="box-inner-content">
                        <img
                          src="assets/images/nestor.jfif"
                          height={80}
                          width={80}
                        />
                        {selector?.active == "deactive" ? (
                          <Button
                            variant="primary"
                            className="btn-sm edit_button "
                            onClick={() => {
                              nevigate("/edit-job");
                              localStorage.setItem("key", "Edit Job");
                            }}
                          >
                            Edit
                          </Button>
                        ) : (
                          ""
                        )}
                      </div>

                      <div className="titlejob">
                        <span>{selector?.jobtitle} - Mohali</span>
                      </div>
                    </div>
                    <div className="job_location d-flex">
                      <span>Nestormind </span>
                      <span> - Mohali</span>
                    </div>
                    <div className="job_date">
                      <span>2 months ago</span>
                    </div>
                  </div>

                  <div className="job_heading">
                    <span className="">Job Description</span>
                  </div>
                  <p className="job_description"> {selector?.description}</p>
                  <div className="job_heading">Job Responsibility</div>
                  <ul className="job__list">
                    {selector?.responsibility?.map((data, index) => (
                      <li>{data.value}</li>
                    ))}
                  </ul>
                  <div className="job_heading">
                    <span className="">Requirement</span>
                  </div>
                  <ul className="job__list">
                    {selector?.requirment?.map((data, index) => (
                      <li>{data.value}</li>
                    ))}
                  </ul>
                  <div className="job_heading">
                    <span className="">
                      Nestormind Full Time Employee Benefits
                    </span>
                  </div>
                  <div className="main-description-box">
                    <ul className="job__list">
                      {selector?.benefits?.map((data, index) => (
                        <li>{data.value}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="main_information_list">
                    <ul className="job_description_level_list">
                      <li className="jobes_inner_li">
                        <h3 className="job_description_level">
                          Seniority level
                        </h3>
                        <span className="level_content">{selector?.level}</span>
                      </li>
                      <li className="jobes_inner_li">
                        <h5 className="job_description_level">
                          Employment type
                        </h5>
                        <span className="level_content">{selector?.type}</span>
                      </li>
                      <li className="jobes_inner_li">
                        <h5 className="job_description_level">Job function</h5>
                        <span className="level_content">
                          {selector?.functions}
                        </span>
                      </li>
                      <li className="jobes_inner_li">
                        <h5 className="job_description_level">Industries</h5>
                        <span className="level_content">
                          {selector?.industry}
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
                {/*<div className="mediaqueiry" style={{ paddingLeft: 30 }}>
                                        <h4 className="right_pannle_main_heading">Nestormind Other Jobs</h4>
                                        <ul className="right_pannle_list">
                                            <li className="right_pannle_list_itmes">
                                                <h6>Ui/UX Designer</h6>
                                                <span>20 times</span>
                                                <span className="job_date">Mohali, Punjab</span>
                                                <span className="job_date">3 months ago   '
                                                    <Link to='uploadCv'><button type="button" className="right_pannle_button">Apply Now</button></Link>
                                                </span>
                                            </li>
                                            <li className="right_pannle_list_itmes">
                                                <h6>Product Manager</h6>
                                                <span>10 times</span>
                                                <span className="job_date">Mohali, Punjab</span>
                                                <span className="job_date">1 months ago   '
                                                    <Link to='uploadCV'> <button type="button" className="right_pannle_button">Apply Now</button></Link>
                                                </span>
                                            </li>
                                            <li className="right_pannle_list_itmes">
                                                <h6>Marketing Manager</h6>
                                                <span>20 times</span>
                                                <span className="job_date">Mohali, Punjab</span>
                                                <span className="job_date">2 months ago   '
                                                    <Link to='uploadCV'> <button type="button" className="right_pannle_button">Apply Now</button></Link>
                                                </span>
                                            </li>
                                        </ul>
                </div>*/}
              </div>
            </div>
          </Tab>
          <Tab eventKey="Aplied" title=" Applied  Candidates">
            <div className="main-applied-contaier">
              <div>
                <Row className=" align-items-center">
                  <Col md={6} sm={12} lg={2} xl={2}>
                    <div className="card2">
                      <div className="card-header2">
                        <div className="innerCard1">
                          <span>Total Candidates</span>
                          <h4 className="font-weight-bold">56</h4>
                        </div>
                      </div>
                      {/*<div className="card-footer1"> <span className="text-decoration-green">+5% </span>than yesterday</div>*/}
                    </div>
                  </Col>
                  <Col md={6} sm={12} lg={2} xl={2}>
                    <div className="card2">
                      <div className="card-header2">
                        <div className="innerCard1">
                          <span>Selected</span>
                          <h4 className="font-weight-bold">53</h4>
                        </div>
                      </div>
                      {/*<div className="card-footer1"> <span className="text-decoration-red">-3%</span> than yesterday</div>*/}
                    </div>
                  </Col>
                  <Col md={6} sm={12} lg={2} xl={2}>
                    <div className="card2">
                      <div className="card-header2">
                        <div className="innerCard1">
                          <span>Rejected</span>
                          <h4 className="font-weight-bold">10</h4>
                        </div>
                      </div>
                      {/*<div className="card-footer1"> <span className="text-decoration-green">+9% </span>than yesterday</div>*/}
                    </div>
                  </Col>
                  <Col md={6} sm={1} lg={6} xl={6}>
                    <div className="d-flex justify-content-end align-items-end mt-5">
                      <Button
                        data-tip
                        data-for="job-filter"
                        variant=""
                        className="btn-sm remove_button_padding"
                        onClick={() => setSdisabled((p) => !p)}
                      >
                        <BsFilter size={25} color="#ff6b01" />
                      </Button>
                      <ReactTooltip id="job-filter" place="top" effect="solid">
                        Filter
                      </ReactTooltip>
                    </div>
                  </Col>
                </Row>
              </div> 
              <div className="gapbetween mt-3 w-100" >
                <Collapse in={disabled}>
                  <div className="status_filter">
                    <Form.Select
                      aria-label="Default select example"
                      className="fs_13 wreap-content"
                    >
                      <option hidden>Status</option>
                      <option defaultValue={"ALL"}>All</option>
                      <option value="1">Reject</option>
                      <option value="1">Select</option>
                    </Form.Select>
                  </div>
                </Collapse>
                <Collapse in={disabled} className="">
                  <div className="w-100">
                    <InputGroup className="mb-3 w-25">
                      <FormControl
                        className="fs_13 w-25"
                        placeholder="Search by  name"
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                        onChange={(e) => {
                          requestSearch(e.target.value);
                        }}
                      />
                      {/*<Button variant="outline-secondary" id="button-addon2">
                                <BsSearch />
                                </Button>*/}
                    </InputGroup>
                  </div>
                </Collapse>
              </div>
            </div>
            <div className="content_box">
              <div className="data-table">
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th className="action_colwidth">Action</th>
                      <th className="action_colwidth">Resume</th>
                      <th className="action_colwidth">Status</th>
                      <th>Title</th>
                      <th
                        onClick={() => {
                          setTitle(!title);
                          {
                            title ? sortt() : sortt1();
                          }
                        }}
                      >
                        Name{title ? <BsArrowDown /> : <BsArrowUp />}
                      </th>
                      <th>Email</th>
                      <th>Phone Number</th>
                    </tr>
                  </thead>
                  {tableData.length > 0 ? (
                    <tbody>
                      {tableData.map((data, index) => (
                        <tr>
                          <td className="action">
                            <div className="userDetail ">
                              <button
                                type="button"
                                className="btn "
                                id="dropdownIconMenu"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <span className="actionIcon">
                                  <i className="bi bi-three-dots-vertical"></i>
                                </span>
                              </button>
                              <ul
                                className="IconDropdown dropdown-menu context-menu11 "
                                aria-labelledby="dropdownIconMenu"
                              >
                                <li className="dropdownList ">
                                  {data?.active === "rejected" ? (
                                    <div className="actionBtns context-menu1">
                                      <span
                                        className="editAction"
                                        data-bs-toggle="modal"
                                        data-bs-target="#editbtn"
                                      >
                                        <AiOutlineCheck />
                                      </span>
                                      <button
                                        type="button"
                                        className="btn btn-outlined-secondary fs_13 "
                                        onClick={() => {
                                          setShowalert(true);
                                          setIndex(index);
                                          settr(true);
                                        }}
                                      >
                                        Accept
                                      </button>
                                    </div>
                                  ) : (
                                    ""
                                  )}
                                </li>
                                <li className="dropdownList">
                                  {data.active == "accepted" ? (
                                    <div className="actionBtns context-menu1">
                                      <span
                                        className="deleteAction"
                                        data-bs-toggle="modal"
                                        data-bs-target="#deletebtn"
                                      >
                                        <AiOutlineCloseCircle />
                                      </span>
                                      <button
                                        type="button"
                                        key={index}
                                        className="btn btn-outlined-secondary fs_13"
                                        onClick={() => {
                                          setShowalert(true);
                                          setIndex(index);
                                          settr(false);
                                        }}
                                      >
                                        Reject
                                      </button>
                                    </div>
                                  ) : (
                                    ""
                                  )}
                                </li>
                              </ul>
                            </div>
                          </td>
                          <td className="content_cente_td">
                            <a
                              target="_blank"
                              href="http://www.africau.edu/images/default/sample.pdf"
                            >
                              <GoCloudDownload size={20} color="green" />
                            </a>
                          </td>
                          <td>
                            {/*<Form>
                                                    <Form.Check className="switch_padding1"
                                                        type="switch"
                                                        key={index}
                                                        id="custom-switch1"
                                                        value={data.active}
                                                        checked={data.active}
                                                        onChange={(e) => {
                                                            display(e)
                                                            setIndex(index)
                                                        }}
                                                        label="" />
                                                    </Form>*/}
                            {data?.active == "accepted" ? (
                              <Badge bg="success" size={30}>
                                Accepted
                              </Badge>
                            ) : (
                              <Badge bg="danger" size={30}>
                                Rejected
                              </Badge>
                            )}
                          </td>
                          <td>{data.Jobtitle}</td>
                          <td>{CapitalizeFirstLetter(data.name)}</td>
                          <td>{CapitalizeFirstLetter(data.email)}</td>
                          <td>{data.phone}</td>
                        </tr>
                      ))}
                    </tbody>
                  ) : (
                    <h3 className="table_no_records">No Record Found</h3>
                  )}
                </Table>
              </div>
            </div>
            {tableData.length > 0 ? (
              <CustomPagination
                total={tableData.length}
                start={pagination1}
                setStart={setpagination}
              />
            ) : (
              ""
            )}
          </Tab>
        </Tabs>
        <Modal show={show} onHide={handleClose} size="sm">
          <Modal.Header className="fs_13">
            <Modal.Title className="modal-titlee">Project</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {
              <div className="userdetails">
                <h3></h3>
                <Formik
                  initialValues={initialValues}
                  validationSchema={validationschemeaa}
                >
                  {() => (
                    <form
                      onSubmit={(e) => {
                        e.preventDefault();
                      }}
                    >
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Input
                          type="text"
                          label="Name"
                          className="form-control"
                          name="storytitle"
                        />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Input
                          type="text"
                          label="Email"
                          className="form-control"
                          name="Email"
                        />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Input
                          type="text"
                          label="Phone Number"
                          className="form-control"
                          name="Email"
                        />
                      </Form.Group>
                    </form>
                  )}
                </Formik>
              </div>
            }
          </Modal.Body>
        </Modal>
      </div>
    </div>
  );
};

export default Particularjob;
