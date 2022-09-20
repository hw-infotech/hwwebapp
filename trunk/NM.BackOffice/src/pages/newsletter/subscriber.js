import React, { useEffect, useState } from "react";
import {
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
//import Pagination from '@material-ui/lab/Pagination';
// import Pagination from '@mui/material/Pagination'
import BasicBreadcrumbs from "../../components/breadcumbs";
import { useDispatch, useSelector } from "react-redux";
import { BsSearch } from "react-icons/bs";
import {
  NewsLetter_Unsubscriber,
  News_letter_Subscribe,
  News_letter_Subscribe_Unsubscribe,
  Send_Newsletter,
} from "../../Services/redux/action/action";
import { Formik } from "formik";
import { Input } from "../../components/commoninputfield";
import { BiAddToQueue } from "react-icons/bi";
import { BsArrowUp } from "react-icons/bs";
import { BsArrowDown } from "react-icons/bs";
import CustomPagination from "../../shared/pagination";
import { FaFilter } from "react-icons/fa";
import { VscFilterFilled } from "react-icons/vsc";
import { MdAdd } from "react-icons/md";
import moment from "moment";
import { BsFilter } from "react-icons/bs";
import { AiOutlinePlusCircle } from "react-icons/ai";
import CapitalizeFirstLetter from "../../components/first_letter_capital";
import { Filters } from "../../components/header-filter";
import { object } from "yup";
import * as yup from "yup";
import withHeader from "../../HOC/withHeader";

const records = [
  {
    Email: "ggoldygoldy33@gmail.com",
    date: "2-03-2020",
    comment: "Reason Behind",
    active: "",
  },
  {
    Email: "agoldygoldy33@gmail.com",
    date: "26-08-2022",
    comment: "Reason Behind",
  },
  {
    Email: "goldygoldy33@gmail.com",
    date: "23-02-2022",
    comment: "Reason Behind",
  },
];
const route = [
  { name: "Dashboard", route: "/" },
  { name: "Newsletter", route: "" },
  { name: "Subscribe-Unsubscribe", route: "" },
];
const SubScriber = () => {
  const [values, setValues] = useState();
  const [show, setShow] = useState(false);
  const [firstpage, setFirstPage] = useState();
  const [data, setData] = useState();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [showPerPage, setShowPerPage] = useState();
  const [disable, setSdisabled] = useState(false);
  const [start, setStart] = useState(1);
  const [pagination1, setpagination] = useState({
    start: start,
    end: showPerPage,
  });

  /**
   * @constant selector
   * @description selector variable used to get the store data .
   */
  const selector = useSelector((state) => state),
    dispatch = useDispatch(),
    [subscribers, setSubscribers] = useState([]);
  /**
   * @method useEffect
   * @description useEffect used here becaure we need only dispath one time, if we dont used useEffect then dispatch all again ,that will create rendering issue.
   */
  useEffect(() => {
    dispatch(News_letter_Subscribe_Unsubscribe());
    dispatch(NewsLetter_Unsubscriber());
  }, []);
  /**
   * @method useEffect
   * @description this is used for set the selector the data into subscriber state and pass the dependencies to the useEffect when selector change the value then useEffect call
   */
  useEffect(() => {
    setSubscribers(selector?.data?.apidata?.getnewsletterall?.data);
    setData(selector?.data?.apidata?.getnewsletterall?.data);
    //setpagination({ start: start, end: showPerPage })
  }, [selector]);

  const initialValues = {
    title: "",
    description: "",
  };
  const validationschemeaa = yup.object({
    title: yup.string().label("Title").required(),
    content_story: yup.string().label("Content").required(),
  });
  const [tableData, setTableData] = useState(subscribers);
  /**
   * @method sorrt
   * @description sortt function created for sorting the data of particular column, this function sort in assending order
   */
  function sortt() {
    const response = subscribers.sort((a, b) =>
      a.email.toLowerCase() > b.email.toLowerCase()
        ? 1
        : b.email.toLowerCase() > a.email.toLowerCase()
        ? -1
        : 0
    );

    setTableData([...response]);
    console.log(selector, "this the selector");
  }
  /**
   * @method sortt1
   * @description sortt1 function created for sorting the data of particular column, this function sort in descending order
   */
  function sortt1() {
    const response = subscribers?.sort((a, b) =>
      a.email.toLowerCase() < b.email.toLowerCase()
        ? 1
        : b.email.toLowerCase() < a.email.toLowerCase()
        ? -1
        : 0
    );

    setTableData([...response]);
  }
  /**
   * @method requestSearch
   * @description requestSearch function created for seraching the table data using the value of particular column
   * @param {*} searchedVal in this argument we get input filed value that we type
   */
  const requestSearch = (searchedVal) => {
    const filteredRows = selector?.data?.apidata?.getnewsletterall?.data.filter(
      (row) => {
        return row.email.toLowerCase().includes(searchedVal.toLowerCase());
      }
    );
    setSubscribers(filteredRows);
  };
  const status = (status) => {
    if (status == "ALL") {
      setSubscribers(selector?.data?.apidata?.getnewsletterall?.data);
    } else if (status == "subscribe") {
      const filterData = data.filter((row) => row.isSubscribe == true);
      setSubscribers([...filterData]);
      // setTableData([...filterData]);
      //   const filteredRows = data?.filter((row) => {
      //     // return row?.status.includes(status)
      //     if (row.isSubscribe === true) {
      //       console.log(row, "subscibe", status);
      //       return row;
      //     } else {
      //       console.log(row, "unsubscribe", status);
      //       return row;
      //     }
      //   });
      //   setTableData([...filteredRows]);
    } else {
      const filterData = data?.filter((row) => row.isSubscribe == false);
      setSubscribers([...filterData]);
    }
  };
  console.log(subscribers);
  const [title, setTitle] = useState(false);
  /**
   * @method useEffect
   * @description this useeffect for show the title of this page
   */
  useEffect(() => {
    document.title = "Subscribe-Unsubscribe";
  }, []);
  let titl = "Subscribe-Unsubscribe";
  let placeholder = "Search by email";
  return (
    <div className="main-newsletter-panle">
      <BasicBreadcrumbs route={route} />
      <div className="panle_body">
        <div className="panle_header">
          <div className="left-panle-title">
            <h4>{titl}</h4>
          </div>
          <div className="right_panle_container">
            <Button
              title="Filter"
              variant=""
              className="btn-sm remove_button_padding"
              onClick={() => setSdisabled((p) => !p)}
            >
              <BsFilter size={25} color="#ff6b01" />
            </Button>
            <Button
              variant=""
              title="Add"
              aria-expanded={disable}
              className="btn-sm remove_button_padding"
              onClick={handleShow}
            >
              <AiOutlinePlusCircle size={25} color="#ff6b01" />
            </Button>
          </div>
        </div>
        <div className="gapbetween fs_13 pt-1">
          <Collapse in={disable}>
            <div id="example-collapse-text">
              <Form.Select
                className="fs_13"
                aria-label="Default select example"
                id="example-collapse-text"
                defaultValue={"all"}
                onChange={(e) => {
                  status(e.target.value);
                }}
              >
                <option disabled>Status</option>
                <option selected value={"ALL"}>
                  All
                </option>
                <option selected value={"subscribe"}>
                  Subscribe
                </option>
                <option selected value={"unsubscribe"}>
                  Unsubscribe
                </option>
              </Form.Select>
            </div>
          </Collapse>
          <Collapse in={disable}>
            <div className="serachbar">
              <InputGroup className="mb-3">
                <FormControl
                  className="fs_13"
                  placeholder={placeholder}
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                  onChange={(e) => {
                    console.log(e);
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
            <thead>
              <tr>
                <th
                  onClick={() => {
                    setTitle(!title);
                    {
                      title ? sortt() : sortt1();
                    }
                  }}
                >
                  Email {title ? <BsArrowDown /> : <BsArrowUp />}
                </th>
                <th>Created Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {subscribers?.length > 0 &&
                subscribers
                  ?.slice(pagination1?.start, pagination1?.end)
                  ?.map((data, index) => (
                    <tr>
                      <td>{CapitalizeFirstLetter(data?.email)}</td>
                      <td>
                        {data.createdOn
                          ? moment(data?.createdOn).format("DD-MM-yyyy ")
                          : ""}
                      </td>

                      <td colSpan={1}>
                        <Form.Check
                          className="switch_padding"
                          type="switch"
                          id="custom-switch1"
                          value={data.active}
                          label=""
                          onChange={(e) => {
                            if (e.target.checked == true) {
                            }

                            setTableData((_) => {
                              _[index].active = e.target.checked;
                              return [..._];
                            });
                          }}
                        />
                      </td>
                    </tr>
                  ))}
            </tbody>
          </Table>
          {!subscribers && (
            <div className="table_no_records">No Record Found</div>
          )}
        </div>
      </div>
      <Modal show={show} onHide={handleClose} size="md">
        <Modal.Header className=" text-white">
          <Modal.Title className="modal-titlee">Send Newsletter</Modal.Title>
        </Modal.Header>
        <Formik
          initialValues={initialValues}
          validationSchema={validationschemeaa}
          onSubmit={(values, actions) => {
            actions.resetForm({
              values: {
                title: "",
                content: "",
              },
            });
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
                console.log(values, "this is the values");
                dispatch(Send_Newsletter(values));
              }}
            >
              <Modal.Body>
                <Input
                  type="text"
                  label="Title"
                  className="form-control label-size"
                  name="title"
                  id={touched.title && errors.title ? "invalid" : ""}
                  placeholder="Title"
                  onChange={handleChange}
                />
                {/*errors?.title && touched?.title ? (
                  <label className="text-danger label-size">
                {errors.title}
                  </label>
                ) : (
                  ""
                )*/}
                <Input
                  as={"textarea"}
                  className="form-control label-size"
                  id={
                    touched.description && errors.description
                      ? "invalid"
                      : ""
                  }
                  placeholder={"Description"}
                  name="description"
                  onChange={handleChange}
                  rows={3}
                  label={"Descirption"}
                />
                {/*errors?.content_story && touched?.content_story ? (
                  <label className="text-danger label-size">
                    {errors.content_story}
                  </label>
                ) : (
                  ""
                )*/}
              </Modal.Body>
              <Modal.Footer>
                <Button
                  variant="secondary"
                  className=" btn-sm fs_13"
                  onClick={handleClose}
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  className="btn-sm fs_13"
                  onClick={() => {}}
                >
                  Send
                </Button>
              </Modal.Footer>
            </form>
          )}
        </Formik>
      </Modal>

      <CustomPagination
        start={pagination1}
        setStart={setpagination}
        total={subscribers?.length}
        firstpage={10}
      />
    </div>
  );
};
export default SubScriber;
