import React, { useEffect, useRef, useState } from "react";
import { ErrorMessage, Formik } from "formik";
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
import CustomPagination from "../../shared/pagination";
import {
  requestSearch,
  sortData,
  subString,
} from "../../Services/commonFunctions";
import { Filters } from "../../components/header-filter";
import * as yup from "yup";
import Customhook from "../../components/customhook";
import withHeader from "../../HOC/withHeader";

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
      "Glory to God in the highest, and on earth peace, goodwill toward men. Jesus is the reason for the season,Joy to the world, the Lord has come or not",
    active: true,
    image: "",
  },
  {
    title: "New Year Post",
    content:
      "it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown or not to know",
    active: false,
    image: "",
  },
];
const validationSchema = yup.object({
  title: yup.string().required().label("Title"),
  content: yup.string().required().label("Content"),
  image: yup.string().required().label("image"),
});
const options = [
  { value: "Active", label: "Active" },
  { value: "Deactive", label: "Deactive" },
];
const Success_Stories = ({
  tableData,
  setTableData,
  setRoute,
  settitle,
  setPlaceholder,
  setShow,
  show,
  setOptions,
}) => {
  const [img, setImg] = useState("sunil");
  const [title, setTitle] = useState(false);
  const [deleteObj, setDeleteObj] = useState({
    index: 0,
    rowStatus: false,
  });
  const [indexx, setIndexx] = useState();
  const [values, setValues] = useState();
  const [index, setindex] = useState();
  const [state, setState] = useState({
    title: "",
    content: "",
    active: false,
    image: "",
  });

  useEffect(() => {}, [state]);
  const [openmodal, setmodal] = useState(false);
  const [rowtext, setRowtext] = useState();
  const [showalert, setShowalert] = useState(false);
  const [edit, setEdit] = useState();
  const [showPerPage, setShowPerPage] = useState();
  const [start, setStart] = useState();
  const [pagination1, setpagination] = useState({
    start: start,
    end: showPerPage,
  });

  useEffect(() => {
    document.title = "Success Stories";
  }, []);

  setPlaceholder("Search by title");
  settitle("Success Stories");
  setRoute(route);
  setOptions(options);
  const inputFileRef = useRef(null);
  const handleShow = () => setShow(true);
  /**
   * @method handleClose
   * @description handle close function  for empty the state, when we add the projet after we need to empty the input fields
   */
  const handleClose = () => {
    setState({
      title: "",
      content: "",
      active: null,
      image: "",
    });
    setShow(false);
    setEdit(false);
  };

  /**
   * @method display
   * @handleClose display function is for open modal accroding to status in this function, if status is active alet box will show oposite status when we click on switch to deactive the status
   */
  const display = () => {
    setShowalert(true);
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
  /**
   * @method handleformSubmit
   * @description handlesubmit function for submit the from the data  and sumbit the data in store using redux
   * @param  values it is the formik or form data that we will fill in input fields
   */
  const handleFormSubmit = (values) => {
    const { name, value } = values;
    setState({ ...state, [name]: value });
    handleClose();
    setState({
      title: "",
      content: "",
      active: false,
      image: "",
    });
  };
  /**
   *@description getBase64 function used for uploading the image
   * @param {*} e  in this we get props of  input field
   * @param {* } setFieldValue set fieldvalue is the formik props that used to store the particular value of the field into formik values
   */
  const getBase64 = (e, setFieldValue) => {
    var file = e.target.files[0];
    console.log(file, "file");

    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setFieldValue("image", reader.result);
      setImg(true);
    };
    reader.onerror = function (error) {
      console.log("Error: ", error);
    };
  };
  /**
   * @method delete_confomtation
   *@description delete_conformation function for delete the table data of particular index
   */
  const delete_confomtation = () => {
    tableData.splice(indexx, 1);
    setTableData([...tableData]);
  };

  return (
    <>
      <div className="Main-story-box">
        <Modal show={openmodal} onHide={handleClose}>
          <Modal.Header>
            <Modal.Title className="modal-titlee">Alert</Modal.Title>
          </Modal.Header>
          <Modal.Body className="label-size">
            <p>Are you sure want to delete</p>
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="secondary"
              className="btn btn-sm"
              onClick={() => {
                setmodal(false);
              }}
            >
              No
            </Button>
            <Button
              variant="primary"
              className="btn btn-sm"
              onClick={() => {
                delete_confomtation();
                setmodal(false);
              }}
            >
              Yes
            </Button>
          </Modal.Footer>
        </Modal>
        <Modal
          show={showalert}
          onHide={handleClose}
          data-testid="my-modal-window"
        >
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
            <Table striped bordered hover responsive className="table-content">
              <thead>
                <tr>
                  <th className="action_colwidth">Action</th>
                  <th className="action_colwidth">Status</th>
                  <th
                    className="action_titlewidth"
                    onClick={() => {
                      setTitle(!title);
                      {
                        title
                          ? setTableData(sortData(tableData, "title", "asc"))
                          : setTableData(sortData(tableData, "title", "desc"));
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
                                  data-testid="butoon1"
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
                                    setmodal(true);
                                    setIndexx(index);
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
                      {<td>{data.content && subString(data.content, 132)}</td>}
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
            onSubmit={(values) => {
              setTableData((old) => [...old, values]);
              handleFormSubmit(values);
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
                      {}
                      <Form.Group className="" controlId="formBasicEmail">
                        <Input
                          type="text"
                          label="Title"
                          className="form-control label-size"
                          name="title"
                          placeholder="Title"
                          onChange={handleChange}
                          id={touched.title && errors.title ? "invalid" : ""}
                          value={values?.title}
                        />
                      </Form.Group>
                      <Form.Group>
                        {/*touched.title && errors.title ? (
                          <label className="text-danger  label-size">
                            {errors.title}
                          </label>
                        ) : (
                          ""
                        )*/}
                        <Input
                          as={"textarea"}
                          className="form-control label-size"
                          name="content"
                          placeholder={"Description"}
                          id={
                            touched.content && errors.content ? "invalid" : ""
                          }
                          rows={3}
                          label={"Description"}
                          onChange={handleChange}
                          value={values?.content}
                        />
                        {/*errors?.content && touched.content ? (
                          <label className="text-danger label-size">
                            {errors.content}
                          </label>
                        ) : (
                          ""
                        )*/}
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
                      <Form.Label className="label-size">
                        Upload Image
                      </Form.Label>
                      {/*  <div className="story_image_selector">
                        <div className="d-flex w-100">
                          <input
                            type="file"
                            ref={inputFileRef}
                            className="uploadButton "
                            name="image"
                            onChange={(e) => {
                              getBase64(e, setFieldValue);
                              // e.target.__reactFiber$te5pkx1j4bn._valueTracker = "";
                              e.target.files[0].name = "v.png";
                              console.log(
                                e.target.files[0].name,
                                "Value Tracker"
                              );
                            }}
                          />
                          <label
                            className="image_filld_text form-control"
                            htmlFor="image"
                          >
                            Upload image
                          </label>
                          <Form.Group className="image_selector_design"></Form.Group>
                        </div>
                    
                      </div>*/}
                      <div className={img ? "hiddenAttr1" : "hiddenAttr"}>
                        <Form.Control
                          className="label-size remove_label"
                          type="file"
                          id={touched.image && errors.image ? "invalid" : ""}
                          ref={inputFileRef}
                          accept=".png,.jpg"
                          aria-label="Image"
                          name="image"
                          onChange={(e) => {
                            getBase64(e, setFieldValue);
                          }}
                          //value={values?.image}
                        />

                        {/*errors?.image && touched.image ? (
                          <label className="text-danger label-size">
                            {errors.image}
                          </label>
                        ) : (
                          ""
                        )*/}
                      </div>
                      {values.image ? (
                        <div className="remove_img">
                          <i
                            className=" bi-x closeIcon"
                            onClick={() => {
                              inputFileRef.current.value = "";
                              setFieldValue("image", "");
                              setImg(false);
                            }}
                          ></i>
                        </div>
                      ) : (
                        ""
                      )}
                      {values.image ? (
                        <div className="imageCard  mt-3">
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
                    Cancel
                  </Button>

                  {edit ? (
                    <Button
                      className="btn-sm fs_13"
                      type="button"
                      onClick={() => {
                        tableData[index].title = values.title;
                        tableData[index].content = values.content;
                        tableData[index].image = values.image;
                        tableData[index].active = values.active;
                        setShow(false);
                        setTableData([...tableData]);
                      }}
                    >
                      Update
                    </Button>
                  ) : (
                    <Button
                      className=" btn-sm fs_13"
                      type="submit"
                      onClick={() => {
                        setShow(false);
                      }}
                    >
                      Save
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
export default withHeader(Success_Stories, records, true);
