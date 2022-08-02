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
import ReactTooltip from "react-tooltip";
import { tab } from "@testing-library/user-event/dist/tab";

const Job_newsletter = () => {
  const [checked, setChecked] = useState();
  const [indexx, setindex] = useState();
  const [subscribed1, setsubscribed] = useState(true);
  const [unsubscribed, setUnsubscribed] = useState(true);
  const [selected, setSelected] = useState([]);
  const [disable, setSdisabled] = useState(false);
  const [showPerPage, setShowPerPage] = useState();
  const [row, setRow] = useState();
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
      subscribed: false,
      status: "subscribed",
    },
    {
      Email: "Amanpreet23@gmail.com",
      phone: "8146945394",
      Name: "Aman",
      active: false,
      subscribed: false,
      status: "unsubscribed",
    },
    {
      Email: "goldygoldy33@gmail.com",
      phone: "8146945394",
      Name: "Aman",
      active: false,
      subscribed: false,
      status: "unsubscribed",
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

  useEffect(() => {
    const data = tableData.map((data, index) => {
      return data.active;
    });
    data.indexOf(false) != -1 ? setsubscribed(false) : setsubscribed(true);
    data.indexOf(true) != -1 ? setUnsubscribed(false) : setUnsubscribed(true);
  }, [tableData]);

  useEffect(() => {
    const res = tableData.map((data, index) => {
      return data.subscribed;
    });
    res.indexOf(false) != -1 ? setChecked(false) : setChecked(true);
  }, [tableData]);

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
            <h4 className="margin_zero">Subscribe-Unsubscribe</h4>
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
          </div>
        </div>
        <small>Use checkbox for mark as selected</small>&nbsp;
        <div className="w-100 setupcontent pt-1">
          <Collapse in={disable}>
            <div className="">
              <Form.Select
                aria-label="row"
                className="fs_13"
                defaultValue={"ALL"}
              >
                <option hidden>Status</option>
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
          {tableData[indexx]?.subscribed == true &&
          tableData[indexx]?.active == false ? (
            <Button
              variant="primary"
              hidden={subscribed1}
              size="sm"
              onClick={() => {
                tableData.map((a, index) => {
                  let v = selected.map(
                    (b, index) => (tableData[b].active = true)
                  );
                });
                setTableData([...tableData]);
              }}
            >
              Subscribe
            </Button>
          ) : (
            ""
          )}
          {tableData[indexx]?.subscribed == true &&
          tableData[indexx].active == true ? (
            <Button
              hidden={unsubscribed}
              variant="primary"
              size="sm"
              onClick={() => {
                tableData.map((a, index) => {
                  let v = selected.map(
                    (b, index) => (tableData[b].active = false)
                  );
                });
                setTableData([...tableData]);
              }}
            >
              Unsubscribe
            </Button>
          ) : (
            ""
          )}
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
                    onClick={(e) => setChecked(e.target.checked)}
                    checked={checked}
                    label=""
                    onChange={(e) => {
                      setsubscribed((p) => !p);
                      setUnsubscribed((p) => !p);

                      // setTableData((oldState) => {
                      //   const newState = oldState.map((_) => {
                      //     _.su = e.target.checked;
                      //     return _;
                      //   });
                      //   return newState;
                      // });
                      tableData.map((data, index) => {
                        tableData[index].subscribed = e.target.checked;
                        setTableData([...tableData]);
                        {
                          e.target.checked
                            ? setSelected((old) => [...old, index])
                            : setSelected([]);
                        }
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
                        className="fs_13"
                        name="active"
                        checked={data.subscribed && row}
                        value={data.active}
                        onChange={(e) => {
                          if (data.subscribed != tableData[0].active) {
                            setRow(false)
                            alert("not ejskds")
                            tableData[index].subscribed = false;
                          }
                          else{
                            tableData[index].subscribed = true;
                          }
                          setindex(index);
                          tableData[index].subscribed = e.target.checked;
                          setTableData([...tableData]);
                          const sel = selected.filter((r) => r == index);
                          if (sel.length > 0) {
                            const res = selected.filter((r) => r != index);
                            setSelected(res);
                          } else {
                            setSelected((oldState) => [...oldState, index]);
                          }
                          if (data.active == true) {
                            setsubscribed(false);
                            setUnsubscribed(true);
                          } else {
                            setsubscribed(true);
                            setUnsubscribed(false);
                          }
                        }}
                      />
                    </td>
                    <td>
                      {data.active ? (
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
