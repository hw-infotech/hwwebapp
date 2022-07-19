import React, { useEffect, useState } from "react";
import { MdFilterAlt, MdAdd } from "react-icons/md";
import { AiOutlinePlusCircle } from "react-icons/ai";
import BasicBreadcrumbs from "../../components/breadcumbs";
import { ErrorMessage, Formik } from "formik";
import {
  initialValues,
  validationschemeaa,
} from "../postJobs/validation-schema";
import { Input } from "../../components/commoninputfield";
import {
  Button,
  Collapse,
  Form,
  FormControl,
  InputGroup,
  Modal,
  Table,
} from "react-bootstrap";
import { BsArrowUp } from "react-icons/bs";
import { BsArrowDown } from "react-icons/bs";
import { BsFilter } from "react-icons/bs";
import { BsFilterLeft } from "react-icons/bs";
import CustomPagination from "../../shared/pagination";
import { confirm } from "react-bootstrap-confirmation";
import { subString } from "../../Services/commonFunctions";
import { Filters } from "../../components/header-filter";
import * as yup from "yup";
import { tab } from "@testing-library/user-event/dist/tab";

const route = [
  { name: "Dashboard", route: "/" },
  { name: "Sliders/Carousels", route: "/success-stories" },
  { name: "Success Stories", route: "/success-stories" },
];
const records = [
  {
    title: "Birthday Post",
    content:
      " The passage is attributed to an unknown, oday, the flowers are bloomier, the sun is sunnier, and life is awesomer – all because it’s your birthday!",
    active: false,
    image: "",
  },
  {
    title: "Christmas Post",
    content:
      "Glory to God in the highest, and on earth peace, goodwill toward men. Jesus is the reason for the season,Joy to the world, the Lord has come!",
    active: true,
    image: "",
  },
  {
    title: "New Year Post",
    content:
      "it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown",
    active: false,
    image: "",
  },
];
const validationSchema = yup.object({
  title: yup.string().required().label("Title"),
  content: yup.string().required().label("Content"),
  image: yup.string().required().label("image"),
});
const Success_Stories = () => {
  const [upload, setUpload] = useState();
  const [img, setImge] = useState();
  const [open, setOpen] = useState(false);
  const [values, setValues] = useState();
  const [index, setindex] = useState();
  const [state, setState] = useState({
    title: "",
    content: "",
    active: false,
    image: "",
  });

  const [rowtext, setRowtext] = useState();
  const [showalert, setShowalert] = useState(false);
  const [disable, setSdisabled] = useState(false);
  const [edit, setEdit] = useState();
  const [show, setShow] = useState(false);
  const [showPerPage, setShowPerPage] = useState();
  const [start, setStart] = useState();
  const [pagination1, setpagination] = useState({
    start: start,
    end: showPerPage,
  });
  const handleClose = () => {
    setShow(false);
    setEdit(false);
    setState({
      title: "",
      content: "",
      active: null,
      image: "",
    });
    // alert(JSON.stringify(state))
  };
  useEffect(() => {
    document.title = "Success Stories";
  }, []);
  const handleShow = () => setShow(true);

  const [tableData, setTableData] = useState(records);
  const requestSearch = (searchedVal) => {
    const filteredRows = records.filter((row) => {
      return row.title.toLowerCase().includes(searchedVal.toLowerCase());
    });
    setTableData(filteredRows);
  };
  function sortt() {
    const response = tableData.sort((a, b) =>
      a.title.toLowerCase() > b.title.toLowerCase()
        ? 1
        : b.title.toLowerCase() > a.title.toLowerCase()
        ? -1
        : 0
    );

    setTableData([...response]);
  }
  function sortt1() {
    const response = tableData.sort((a, b) =>
      a.title.toLowerCase() < b.title.toLowerCase()
        ? 1
        : b.title.toLowerCase() < a.title.toLowerCase()
        ? -1
        : 0
    );

    setTableData([...response]);
  }
  const [title, setTitle] = useState(false);
  const [deleteObj, setDeleteObj] = useState({
    index: 0,
    rowStatus: false,
  });

  const display = () => {
    setShowalert(true);
    //const result = await confirm(rowtext.text);
    // console.log(rowText);
    if (deleteObj.rowStatus) {
      setTableData((oldState) => {
        oldState[deleteObj.index].active = true;
        return [...oldState];
      });
    }
    if (!deleteObj.rowStatus) {
      setTableData((oldState) => {
        oldState[deleteObj.index].active = false;
        return [...oldState];
      });
    }
  };
  const onhandlechange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const handleFormSubmit = (values, { resetForm }) => {
    const { name, value } = values;
    setState({ ...state, [name]: value });
    handleClose();
    setState({
      title: "",
      content: "",
      active: "",
      image: "",
    });
    // resetForm()
  };
  let titl = "Success Stories";
  let placeholder = "Search by title";

  const getBase64 = (e, setFieldValue) => {
    var file = e.target.files[0];
    console.log(file, "file");
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setFieldValue("image", reader.result);
      setImge(file.name);
    };
    reader.onerror = function (error) {
      console.log("Error: ", error);
    };
  };
  return (
    <>
      <div className="Main-story-box">
        <title>Success_Stories</title>
        {<BasicBreadcrumbs route={route} />}
        <Filters
          placeholder={placeholder}
          requestSearch={requestSearch}
          showalert={showalert}
          handleShow={handleShow}
          setShowalert={setShowalert}
          titl={titl}
        />
        <Modal show={showalert} onHide={handleClose}>
          <Modal.Header>
            <Modal.Title className="modal-titlee">Alert</Modal.Title>
          </Modal.Header>
          <Modal.Body className="label-size">
            <p>{rowtext?.text}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="secondary"
              className="btn btn-sm"
              onClick={() => {
                setShowalert(false);
              }}
            >
              No
            </Button>
            <Button
              variant="primary"
              className="btn btn-sm"
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
            <Table striped bordered hover className="table-content">
              <thead>
                <tr>
                  <th>Action</th>
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

                  <th>Content</th>
                </tr>
              </thead>

              <tbody>
                {tableData?.length > 0 &&
                  tableData?.map((data, index) => (
                    <tr key={index}>
                      <td className="action">
                        <div className="userDetail ">
                          <button
                            type="button"
                            className="btn actionIcon "
                            key={index}
                            id="dropdownIconMenu"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <span className="actionIcon">
                              {" "}
                              <i className="bi bi-three-dots-vertical"></i>
                            </span>
                          </button>
                          <ul
                            className="IconDropdown dropdown-menu context-menu11"
                            aria-labelledby="dropdownIconMenu"
                          >
                            <li className="dropdownList ">
                              <div className="actionBtns  context-menu1 ">
                                <span
                                  className="editAction"
                                  data-bs-toggle="modal"
                                  data-bs-target="#editbtn"
                                >
                                  <i className="bi bi-pencil-square"></i>
                                </span>

                                <button
                                  type="button"
                                  key={index}
                                  className="btn btn-outlined-secondary fs_13"
                                  onClick={() => {
                                    setState(data);
                                    handleShow();
                                    setEdit(true);
                                    {
                                      setindex(index);
                                    }
                                  }}
                                >
                                  Edit
                                </button>
                              </div>
                            </li>
                            <li className="dropdownList">
                              <div className="actionBtns context-menu1">
                                <span
                                  className="deleteAction"
                                  data-bs-toggle="modal"
                                  data-bs-target="#deletebtn"
                                >
                                  {" "}
                                  <i className="bi bi-trash3-fill"></i>
                                </span>
                                <button
                                  type="button"
                                  key={index}
                                  className="btn btn-outlined-secondary fs_13"
                                  onClick={() => {
                                    tableData.splice(index, 1);
                                    setTableData([...tableData]);
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
                        <Form>
                          {/*console.log(data?.active)*/}
                          <Form.Check
                            className="switch_padding"
                            type="switch"
                            key={index}
                            id="custom-switch1"
                            checked={data.active}
                            label=""
                            onChange={(e) => {
                              setShowalert(true);
                              setRowtext(
                                e.target.checked
                                  ? {
                                      id: 1,
                                      text: "Are you sure to Active the  Story ?",
                                    }
                                  : {
                                      id: 0,
                                      text: "Are you sure to Deactive the Story  ?",
                                    }
                              );
                              if (data.active === true) {
                                setDeleteObj({
                                  index,
                                  rowStatus: e.target.checked,
                                });
                              } else {
                                setDeleteObj({
                                  index,
                                  rowStatus: e.target.checked,
                                });
                              }
                            }}
                          />
                        </Form>
                      </td>
                      <td>{data.title}</td>
                      {<td>{data.content && subString(data.content, 115)}</td>}
                    </tr>
                  ))}
              </tbody>
            </Table>
            {tableData.length === 0 && (
              <div className="table_no_records">No Record Found</div>
            )}
          </div>
          {tableData.length > 0 ? (
            <CustomPagination
              start={pagination1}
              setStart={setpagination}
              total={tableData.length}
            />
          ) : (
            ""
          )}
        </div>
        <Modal show={show} onHide={handleClose} size="md">
          <Modal.Header className="modal-header text-white ">
            <Modal.Title className="modal-titlee  ">
              {edit ? "Edit Project" : "Add Project"}
            </Modal.Title>
          </Modal.Header>
          <Formik
            validationSchema={validationSchema}
            initialValues={state}
            onSubmit={() => {
              setTableData((old) => [...old, values]);
              handleFormSubmit();
            }}
          >
            {({
              values,
              handleSubmit,
              handleChange,
              setFieldValue,
              errors,
              touched,
            }) => (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSubmit();
                }}
              >
                {setValues(values?.active)}
                {console.log(values)}
                <Modal.Body>
                  {
                    <div className="cardBoard">
                      <Form.Group className="" controlId="formBasicEmail">
                        <Input
                          type="text"
                          label="Title"
                          className="form-control"
                          name="title"
                          placeholder=""
                          onChange={handleChange}
                          id="title"
                          value={values.title}
                        />
                      </Form.Group>
                      <Form.Group>
                        {touched.title && errors.title ? (
                          <label className="text-danger  label-size">
                            {errors.title}
                          </label>
                        ) : (
                          ""
                        )}
                        <Input
                          as={"textarea"}
                          className="form-control"
                          name="content"
                          id="exampleFormControlTextarea1"
                          rows={3}
                          label={"Description"}
                          onChange={handleChange}
                          value={values.content}
                        />
                        {errors?.content && touched.content ? (
                          <label className="text-danger label-size">
                            {errors.content}
                          </label>
                        ) : (
                          ""
                        )}
                      </Form.Group>
                      <Form.Label className="label-size">Active</Form.Label>
                      <Form.Check
                        className=""
                        type="switch"
                        id="Active"
                        label=""
                        name="active"
                        value={true}
                        checked={values?.active}
                        onChange={handleChange}
                        color="#eb7823"
                      />
                        <Form.Label className="label-size " >Upload Image</Form.Label>
                      <div className="story_image_selector">
                        <div className="d-flex w-100">
                          <input
                            type="file"
                            className="uploadButton"
                            name="image"
                            onChange={(e) => {
                              getBase64(e, setFieldValue);
                            }}
                          />
                          <label className=" image_filld_text" htmlFor="image">
                            {img ? "Upload Image" : "Choose Image"}
                          </label>
                          <Form.Group className="image_selector_design">
                            {img}
                          </Form.Group>
                        </div>
                        <i
                          className="fs-4 bi-x remove-img closeIcon"
                          onClick={() => {
                            setFieldValue("image", "");
                            setImge("");
                          }}
                        ></i>
                        <Form.Label />
                      </div>
                      {/*<Form.Control
                        className="label-size"
                        type="file"
                        accept=".png,.jpg"
                        aria-label="Upload Images"
                        name="image"
                        onChange={(e) => {
                          getBase64(e, setFieldValue);
                        }}
                        value={values.image}
                      />*/}
                      {errors?.image && touched.image ? (
                        <label className="text-danger label-size">
                          {errors.image}
                        </label>
                      ) : (
                        ""
                      )}
                      {values.image ? (
                        <div className="imageCard  mt-2">
                         
                          <img
                            src={values.image}
                            className="icon"
                            width={80}
                            height={80}
                          ></img>
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                  }
                </Modal.Body>
                <Modal.Footer>
                  <Button
                    variant="secondary"
                    className="btn-sm fs_13"
                    onClick={handleClose}
                  >
                    Close
                  </Button>

                  {edit ? (
                    <Button
                      className="btn-sm fs_13"
                      type="submit"
                      onClick={() => {
                        tableData[index].title = values.title;
                        tableData[index].content = values.content;
                        tableData[index].image = values.image;
                        tableData[index].active = values.active;
                        setTableData([...tableData]);
                        setShowalert(false);
                      }}
                    >
                      Update
                    </Button>
                  ) : (
                    <Button
                      className=" btn-sm fs_13"
                      type="submit"
                      onClick={() => {
                        setShowalert(false);
                      }}
                    >
                      Add
                    </Button>
                  )}
                </Modal.Footer>
              </form>
            )}
          </Formik>
        </Modal>
      </div>
    </>
  );
};
export default Success_Stories;
