import React, { useEffect, useState } from "react";
import {
  Button,
  Col,
  Collapse,
  Form,
  FormCheck,
  FormControl,
  InputGroup,
  Modal,
  Row,
  Table,
} from "react-bootstrap";
import { Field, Formik, FormikProvider } from "formik";
import { Input } from "../../components/commoninputfield";
import BasicBreadcrumbs from "../../components/breadcumbs";
//import { Pagination } from "@material-ui/lab";
import { initialValues, validationschemeaa } from "./validation-schema";
import { useNavigate } from "react-router";
import { BsArrowUp } from "react-icons/bs";
import { BsArrowDown } from "react-icons/bs";
import CustomPagination from "../../shared/pagination";
import { subString } from "../../Services/commonFunctions";
import {
  Delete_job,
  Edit_Data,
  getAllEnquries,
  Get_jobList,
  Send_data,
} from "../../Services/redux/action/action";
import { useDispatch, useSelector } from "react-redux";
import { BsFilter } from "react-icons/bs";
import { AiOutlinePlusCircle } from "react-icons/ai";
import TooltipComp from "../../shared/Tooltipomp";
import withHeader from "../../HOC/withHeader";
import { useCallback } from "react";
import { useMemo } from "react";
import jwt_decode from "jwt-decode";
const route = [
  { name: "Dashboard", route: "/" },
  { name: "Job Management", route: "" },
  { name: "Job", route: "" },
];
const options = [
  { value: "Subscribe", label: "Subscribe" },
  { value: "Unsubscribe", label: "Unsubscribe" },
];

const Edit_postJob = (value1) => {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);
  const [requir, setRequirment] = useState();
  console.log(selector, "selector");
  const [openmodal, setmodal] = useState(false);
  const [title, setTitle] = useState(false);
  const [indexx, setIndex] = useState();
  const [rowtext, setRowtext] = useState();
  const [showalert, setShowalert] = useState(false);
  const [disable, setSdisabled] = useState(false);
  const [pagination1, setpagination] = useState({
    start: 1,
    end: 10,
  });
  const [deleteObj, setDeleteObj] = useState({
    index: 0,
    rowStatus: false,
  });
  const navigate = useNavigate();
  const [tableData, setTableData] = useState([]);
  useEffect(() => {
    document.title = "Job";
    dispatch(Get_jobList());
  }, []);

  console.log(selector.data.apidata?.job_list?.data, "requri");
  useEffect(() => {
    setTableData(selector.data.apidata?.job_list?.data);
  }, [selector, tableData]);
  /**
   * @method sortt
   * @description this sortt function for sorting the data in table in ascending order
   */
  function sortt() {
    const response = selector.data.apidata?.job_list?.data.sort((a, b) =>
      a.title.toLowerCase() > b.title.toLowerCase()
        ? 1
        : b.title.toLowerCase() > a.title.toLowerCase()
        ? -1
        : 0
    );
    setTableData([...response]);
  }
  // useEffect(() => {
  //   setTableData((old) => {
  //     const newState = {
  //       ...selector.data.apidata?.job_list?.data,
  //       jobResponsibilityTypes: selector.data.apidata?.job_list?.data
  //         ?.jobResponsibilityTypes
  //         ? JSON.parse(
  //             selector.selector.data.apidata?.job_list?.data
  //               ?.jobResponsibilityTypes
  //           )
  //         : [],
  //       jobBenefits: selector.data.apidata?.job_list?.data?.jobBenefits
  //         ? JSON.parse(selector.data.apidata?.job_list?.data?.jobRequirments)
  //         : [],
  //       jobRequirments: selector.data.apidata?.job_list?.data?.jobRequirments
  //         ? JSON.parse(selector.data.apidata?.job_list?.data?.jobRequirments)
  //         : [],
  //     };
  //     return newState;
  //   });
  // }, []);
  /**
   * @method sortt1
   * @description this sortt1 function for sorting the data in descending order
   */
  function sortt1() {
    const response = selector.data.apidata?.job_list?.data.sort((a, b) =>
      a.title.toLowerCase() < b.title.toLowerCase()
        ? 1
        : b.title.toLowerCase() < a.title.toLowerCase()
        ? -1
        : 0
    );
    setTableData([...response]);
  }
  /**
   * @method requestSearch
   * @description this function for seraching the value of particular column in table data
   * @param {*} searchedVal this argument get the serach field value
   */
  const requestSearch = (searchedVal) => {
    const filteredRows = selector.data.apidata?.job_list?.data.filter((row) => {
      return row.title.toLowerCase().includes(searchedVal.toLowerCase());
    });
    setTableData(filteredRows);
  };
  /**
   * @method display
   * @description display function change the status according the condition, when we click status switch, if active then deactive after clikcing, opposite as well
   */
  const display = () => {
    setShowalert(true);
    if (deleteObj.rowStatus) {
      setTableData((oldState) => {
        oldState[deleteObj.index].status = true;
        return [...oldState];
      });
    }
    if (!deleteObj.rowStatus) {
      setTableData((oldState) => {
        oldState[deleteObj.index].status = false;
        return [...oldState];
      });
    }
  };
  const status = (status) => {
    if (status == "ALL") {
      setTableData(selector.data.apidata?.job_list?.data);
    } else if (status == "subscribe") {
      const filterData = tableData?.filter((row) => row.status == true);
      setTableData([...filterData]);
    } else {
      const filterData = tableData?.filter((row) => row.status == false);
      setTableData([...filterData]);
    }
  };
  var token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySWQiOiIxIiwiZXhwIjoxNjYzNTg2MDE2LCJpc3MiOiJodHRwczovL2xvY2FsaG9zdDo0NDMzNi8iLCJhdWQiOiIqIn0.8tUR-8WWx3HEqls8rWzmGGG-GUYjU0lQh3ciRVKUqQc";
  var decoded = jwt_decode(token);
  console.log(decoded, "ghf");
  return (
    <div className="joblist-main-box">
      {<BasicBreadcrumbs route={route} />}
      <div className="panle_body">
        <div className="panle_header">
          <div className="left-panle-title">
            <h4>Job</h4>
          </div>
          <div className="right_panle_container">
            <Button
              title="Filter"
              variant=""
              className="btn-sm remove_button_padding"
              onClick={() => setSdisabled((p) => !p)}
            >
              <BsFilter size={24} color="#ff6b01" />
            </Button>

            <Button
              variant=""
              title="Add"
              className="btn-sm remove_button_padding"
              onClick={() => {
                navigate("/add-job");
              }}
            >
              <AiOutlinePlusCircle size={24} color="#ff6b01" />
            </Button>
          </div>
        </div>
        <div className="gapbetween pt-1">
          <Collapse in={disable}>
            <div id="example-collapse-text">
              <Form.Select
                aria-label="Default select example"
                className="fs_13"
                defaultValue={"all"}
                id="example-collapse-text"
                onChange={(e) => {
                  status(e.target.value);
                }}
              >
                <option disabled>Status</option>
                <option selected value={"All"}>
                  All
                </option>
                <option value="subscribe">Subscribe</option>
                <option value="unsubscribe">Unsubscribe</option>
              </Form.Select>
            </div>
          </Collapse>
          <Collapse in={disable}>
            <div className="serachbar">
              <InputGroup className="mb-3">
                <FormControl
                  className="fs_13"
                  placeholder="Search by title "
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
      <Modal
        show={openmodal}
        onHide={() => {
          setmodal(false);
        }}
        backdrop="static"
        keyboard={false}
        className="fs-13"
      >
        <Modal.Header className="modal-titlee ">
          <Modal.Title className="modal-titlee">Alert</Modal.Title>
        </Modal.Header>
        <Modal.Body className="label-size">
          <p>{"Are you sure want to delete"}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button
            className="btn-sm fs_13"
            variant="secondary"
            onClick={() => {
              setmodal(false);
            }}
          >
            No
          </Button>
          <Button
            className="btn-sm fs_13"
            variant="primary"
            onClick={() => {
              dispatch(Delete_job(indexx));
              //tableData.splice(indexx, 1);

              //setTableData([...tableData]);
              setmodal(false);
              dispatch(Get_jobList());
            }}
          >
            Yes
          </Button>
        </Modal.Footer>
      </Modal>
      {/*<h4>List Number of Job Posts</h4>*/}
      <Modal
        show={showalert}
        onHide={() => {
          setShowalert(false);
        }}
        backdrop="static"
        keyboard={false}
        className="fs-13"
      >
        <Modal.Header className="modal-titlee ">
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
                  className=""
                  onClick={() => {
                    setTitle(!title);
                    {
                      title ? sortt() : sortt1();
                    }
                  }}
                >
                  Title {title ? <BsArrowDown /> : <BsArrowUp />}
                </th>
                <th>Description</th>
                <th>Function</th>
                <th>Requirement</th>
                <th>Benefits</th>
                <th>Responsibility</th>
                <th>Industry</th>
                <th>Level</th>
                <th>Employement</th>
                <th className="action_colwidth">Candidates</th>
              </tr>
            </thead>
            <tbody>
              {tableData?.length > 0 &&
                tableData
                  ?.slice(pagination1.start, pagination1.end)
                  ?.map((data, index) => (
                    <tr key={index}>
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
                            className="IconDropdown dropdown-menu context-menu11"
                            aria-labelledby="dropdownIconMenu"
                          >
                            <li className="dropdownList">
                              <div className="actionBtns  context-menu1">
                                <span
                                  className="editAction"
                                  data-bs-toggle="modal"
                                  data-bs-target="#editbtn"
                                >
                                  <i className="bi bi-pencil-square"></i>
                                </span>
                                <button
                                  type="button"
                                  className="btn btn-outlined-secondary fs_13"
                                  onClick={() => {
                                    dispatch(Edit_Data(data, index));
                                    navigate("/particularjob");
                                  }}
                                >
                                  View
                                </button>
                              </div>
                            </li>
                            {data?.status == true ? (
                              <div></div>
                            ) : (
                              <li className="dropdownList">
                                <div className="actionBtns  context-menu1">
                                  <span
                                    className="viewIcon"
                                    data-bs-toggle="modal"
                                    data-bs-target="#viewbtn"
                                  >
                                    <i className="bi bi-eye"></i>
                                  </span>
                                  <button
                                    type="button"
                                    className="btn btn-outlined-secondary fs_13"
                                    onClick={() => {
                                      localStorage.setItem("key", "Edit Job");
                                      dispatch(Edit_Data(data, index));
                                      navigate("/edit-job");
                                    }}
                                  >
                                    Edit
                                  </button>
                                </div>
                              </li>
                            )}
                            <li className="dropdownList">
                              <div className="actionBtns  context-menu1">
                                <span
                                  className="deleteAction"
                                  data-bs-toggle="modal"
                                  data-bs-target="#deletebtn"
                                >
                                  <i className="bi bi-trash3-fill"></i>
                                </span>
                                <button
                                  type="button"
                                  className="btn btn-outlined-secondary fs_13"
                                  onClick={() => {
                                    setIndex(data);
                                    setmodal(true);
                                  }}
                                >
                                  Delete
                                </button>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </td>
                      <td>
                        <Form.Check
                          type="switch"
                          id="custom-switch1"
                          checked={data?.status == true ? true : false}
                          label=""
                          onChange={(e) => {
                            const { value, name, checked } = e.target;
                            setShowalert(true);
                            setRowtext((oldState) => {
                              const newState = checked
                                ? {
                                    id: 1,
                                    text: "Are you sure to  show the job ?",
                                  }
                                : {
                                    id: 0,
                                    text: "Are you sure to hide the job ?",
                                  };
                              return newState;
                            });
                            setDeleteObj({
                              index,
                              rowStatus: checked,
                            });
                          }}
                        />
                      </td>
                      <td>{data?.title || data?.title}</td>
                      <td>
                        {data?.description && subString(data?.description, 10)}
                      </td>
                      <td>
                        {data?.functions && subString(data?.functions, 10)}
                      </td>
                      <td>
                        {
                          JSON.parse(data.jobResponsibilityTypes)?.[0].value
                          //selector.data.apidata?.job_list?.data
                          //           ?.jobResponsibilityTypes ? JSON.parse(data?.jobResponsibilityTypes):[]
                          // data.jobResponsibilityTypes
                        }
                      </td>
                      <td>{JSON.parse(data.jobBenefits)?.[0].value}</td>
                      <td>
                        {
                          JSON.parse(data.jobResponsibilityTypes)?.[0].value
                          //data?.responsibility[0]?.value &&
                          //subString(data?.responsibility[0]?.value, 10)
                        }
                      </td>
                      <td>{data?.industries}</td>
                      <td>{data?.level}</td>
                      <td>{data?.jobType}</td>
                      <td>30</td>
                    </tr>
                  ))}
            </tbody>
          </Table>
          {tableData?.length == 0 && (
            <div className="table_no_records">No Record Found</div>
          )}
        </div>
      </div>

      {tableData?.length > 0 ? (
        <CustomPagination setStart={setpagination} total={tableData?.length} />
      ) : (
        ""
      )}
    </div>
  );
};
export default Edit_postJob;
