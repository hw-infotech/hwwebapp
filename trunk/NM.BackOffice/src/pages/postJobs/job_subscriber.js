//import { Pagination } from "@material-ui/lab";
import React, { useEffect, useState } from "react";
import BasicBreadcrumbs from "../../components/breadcumbs";
import { BiAddToQueue } from "react-icons/bi";
import { BsArrowUp } from "react-icons/bs";
import { BsArrowDown } from "react-icons/bs";
import {
  Badge,
  Button,
  Collapse,
  Form,
  FormControl,
  InputGroup,
  OverlayTrigger,
  Table,
  Tooltip,
} from "react-bootstrap";
import { useSelector } from "react-redux";
import CustomPagination from "../../shared/pagination";
import { BsFilter } from "react-icons/bs";
import CapitalizeFirstLetter from "../../components/first_letter_capital";

const Job_newsletter = () => {
  const [checked, setChecked] = useState();
  const [disable, setSdisabled] = useState(false);
  const [showPerPage, setShowPerPage] = useState();
  const [row, setRow] = useState(10);
  const [state, setState] = useState({
    row_value: "",
  });
  const [start, setStart] = useState(1);
  const [pagination1, setpagination] = useState({
    start: start,
    end: showPerPage,
  });
  const [dataArray, setDataArray] = useState([]);
  
  const selector = useSelector((state) => state);

  useEffect(() => {}, []);

  const route = [
    { name: "Dashboard", route: "/" },
    { name: "Job Management" },
    { name: "Subscribe-Unsubscribe", route: "/job-subscriber/unsubscriber" },
  ];
  const records = [
    {
      Email: "Ganeshsharma5073@gmail.com",
      phone: "9803836866",
      Name: "mark",
      active: true,
      subscribed:false
    },
    {
      Email: "Amanpreet23@gmail.com",
      phone: "8146945394",
      Name: "Aman",
      active: false,
      subscribed:false
    },
    {
      Email: "goldygoldy33@gmail.com",
      phone: "8146945394",
      Name: "Aman",
      active: false,
      subscribed:true
    },
  ];

  const [tableData, setTableData] = useState(records);
  function sortt() {
    const response = tableData.sort((a, b) =>
      a.Name.toLowerCase() > b.Name.toLowerCase()
        ? 1
        : b.Name.toLowerCase() > a.Name.toLowerCase()
        ? -1
        : 0
    );
    console.log(response);
    setTableData([...response]);
  }
  function sortt1() {
    const response = tableData.sort((a, b) =>
      a.Name.toLowerCase() < b.Name.toLowerCase()
        ? 1
        : b.Name.toLowerCase() < a.Name.toLowerCase()
        ? -1
        : 0
    );
    setTableData([...response]);
  }
  const requestSearch = (searchedVal) => {
    const filteredRows = records.filter((row) => {
      return (
        row.Name.toLowerCase().includes(searchedVal.toLowerCase()) ||
        row.Email.toLowerCase().includes(searchedVal.toLowerCase())
      );
    });
    console.log(filteredRows);
    setTableData([...filteredRows]);
  };
  const [title, setTitle] = useState(false);
  useEffect(() => {
    document.title = "Subscribe-Unsubscribe";
  }, []);

  return (
    <div className="main-jobsubscriber-content">
      <BasicBreadcrumbs route={route} />
      <div className="panle_body">
        <div className="panle_header">
          <div className="left-panle-title">
            <h4>Subscribe-Unsubscribe</h4>
          </div>
          <div className="right_panle_container">
            <Button
              variant=""
              className="btn-sm remove_button_padding"
              onClick={() => setSdisabled((p) => !p)}
            >
              <BsFilter size={25} color="#ff6b01" />
            </Button>
          </div>
        </div>
        <div className="w-100 setupcontent pt-1">
          <Collapse in={disable}>
            <div className="">
              <Form.Select
                aria-label="row"
                className="wreap-content fs_13"
                defaultValue={"ALL"}
              >
                <option disabled hidden>
                  Status
                </option>
                <option value="all">All</option>
                <option value="subscribe">Subscribe</option>
                <option value="unsubscribe">Unsubscribe</option>
              </Form.Select>
            </div>
          </Collapse>
          <Collapse in={disable}>
            <div className="searchbar">
              <InputGroup className="mb-3">
                <FormControl
                  className="fs_13"
                  placeholder="Search by name"
                  aria-label="Search By Email"
                  aria-describedby="basic-addon2"
                  onChange={(e) => {
                    requestSearch(e.target.value);
                  }}
                />
              </InputGroup>
            </div>
          </Collapse>
        </div>
        <div className="status_button_container gap-2 d-flex pb-2">
          <Button variant="primary" size="sm">
            Subscribe
          </Button>
          <Button variant="secondary" size="sm">
            Unsubscribe
          </Button>
        </div>
      </div>
      <div className="content_box">
        <div className="data-table">
          <Table striped bordered hover>
            <thead>
              <tr>
                <th className="action_colwidth " align="center">
                  <Form.Check
                    className="fs_13"
                    onClick={() => setChecked((p) => !p)}
                    label=""
                    onChange={(e) => {
                      setTableData((oldState) => {
                        const newState = oldState.map((_) => {
                          _.active = e.target.checked;
                          return _;
                        });
                        return newState;
                      });
                    }}
                  />
                </th>
                <th className="action_colwidth">Status</th>
                <th
                  className="text-align-center"
                  onClick={() => {
                    setTitle(!title);
                    {
                      title ? sortt() : sortt1();
                    }
                  }}
                >
                  Name {title ? <BsArrowDown /> : <BsArrowUp />}
                </th>
                <th>Phone</th>
                <th>Email</th>
              </tr>
            </thead>
            {tableData.length > 0 ? (
              <tbody>
                {tableData.map((data, index) => (
                  <tr>
                    <td className="content_cente_td">
                      <Form.Check
                        className="fs_13 "
                        name="active"
                        checked={data.subscribed}
                        onChange={(e) => {
                          tableData[index].active = e.target.checked;
                          setTableData([...tableData]);
                        }}
                      />
                    </td>
                    <td>
                      {data.subscribed ? (
                        <Badge bg="success" size={30}>
                          Subscribe
                        </Badge>
                      ) : (
                        <Badge bg="danger" size={30}>
                          Unsubscribe
                        </Badge>
                      )}
                      {/*<Form.Check className="switch_padding"
                                              type="switch"
                                              id="custom-switch1"
                                              value={data.active}
                                              label=""
                                              onChange={(e) => {
                                                  console.log(e.target.checked);
                                                  setTableData(_ => {
                                                      _[index].active = e.target.checked
                                                      return [..._]
                                                  })
                                              }}
                                          />*/}
                    </td>
                    <td>{CapitalizeFirstLetter(data.Name)}</td>
                    <td>{data.phone}</td>
                    <td>{CapitalizeFirstLetter(data.Email)}</td>
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
          showPerPage={showPerPage}
          setStart={setpagination}
          total={tableData.length}
        />
      ) : (
        ""
      )}
    </div>
  );
};
export default Job_newsletter;
