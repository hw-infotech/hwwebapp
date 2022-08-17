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
const SubScriber = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [showPerPage, setShowPerPage] = useState();
  const [next, setNext] = useState(0);
  const [start, setStart] = useState(1);
  const [pagination1, setpagination] = useState({
    start: start,
    end: showPerPage,
  });
  const route = [
    { name: "Dashboard", route: "/" },
    { name: "Newsletter", route: "" },
    { name: "Subscribe-Unsubscribe", route: "" },
  ];
  const selector = useSelector((state) => state),
    dispatch = useDispatch(),
    [subscribers, setSubscribers] = useState([]);
  useEffect(() => {
    dispatch(News_letter_Subscribe());
    dispatch(NewsLetter_Unsubscriber());
  }, []);

  useEffect(() => {
    setSubscribers(selector?.data?.apidata?.getnewsletterunsubscriber?.data);
    //setpagination({ start: start, end: showPerPage })
  }, [selector]);

  const initialValues = {
    title: "",
    content_story: "",
  };
  const validationschemeaa = yup.object({
    title: yup.string().label("Title").required(),
    content_story: yup.string().label("Content").required(),
  });
  const [tableData, setTableData] = useState(subscribers);
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
  const requestSearch = (searchedVal) => {
    const filteredRows =
      selector?.data?.apidata?.getnewsletterunsubscriber?.data.filter((row) => {
        return row.email.toLowerCase().includes(searchedVal.toLowerCase());
      });
    setSubscribers(filteredRows);
  };
  const [title, setTitle] = useState(false);
  useEffect(() => {
    document.title = "Subscribe-Unsubscribe";
  }, []);
  let titl = "Subscribe-Unsubscribe";
  let placeholder = "Search by email";
  return (
    <div className="main-newsletter-panle">
      <BasicBreadcrumbs route={route} />
      <Filters
        placeholder={placeholder}
        requestSearch={requestSearch}
        handleShow={handleShow}
        titl={titl}
      />
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
        <Modal.Body>
          <Formik
            initialValues={initialValues}
            validationSchema={validationschemeaa}
            onSubmit={() => {}}
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
                }}
              >
                <Input
                  type="text"
                  label="Title"
                  className="form-control label-size"
                  name="title"
                  placeholder="Title"
                  onChange={handleChange}
                />
                {errors?.title && touched?.title ? (
                  <label className="text-danger label-size">
                    {errors.title}
                  </label>
                ) : (
                  ""
                )}
                <Input
                  as={"textarea"}
                  className="form-control label-size"
                  placeholder={"Description"}
                  name="content_story"
                  onChange={handleChange}
                  id="exampleFormControlTextarea1"
                  rows={3}
                  label={"Descirption"}
                />
                {errors?.content_story && touched?.content_story ? (
                  <label className="text-danger label-size">
                    {errors.content_story}
                  </label>
                ) : (
                  ""
                )}
              </form>
            )}
          </Formik>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            className=" btn-sm fs_13"
            onClick={handleClose}
          >
            Cancel
          </Button>
          <Button className="btn-sm fs_13" type="submit">
            Send
          </Button>
        </Modal.Footer>
      </Modal>
      {tableData.length > 0 ? (
        <CustomPagination
          start={pagination1}
          setStart={setpagination}
          total={subscribers?.length}
        />
      ) : (
        ""
      )}
    </div>
  );
};
export default withHeader(SubScriber, records, true);
