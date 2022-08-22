//import { Pagination } from "@material-ui/lab";
import React, { useEffect, useRef, useState } from "react";
import BasicBreadcrumbs from "../../components/breadcumbs";
import { BsArrowUp } from "react-icons/bs";
import { BsArrowDown } from "react-icons/bs";
import {
  Badge,
  Button,
  Collapse,
  Form,
  FormControl,
  InputGroup,
  Modal,
  Tab,
  Table,
  Tabs,
} from "react-bootstrap";
import { useSelector } from "react-redux";
import CustomPagination from "../../shared/pagination";
import { BsFilter } from "react-icons/bs";
import CapitalizeFirstLetter from "../../components/first_letter_capital";
import withHeader from "../../HOC/withHeader";
import { sortData } from "../../Services/commonFunctions";

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
    status: false,
    isdisable: false,
  },
  {
    Email: "amanpreet@.com",
    phone: "7973818502",
    Name: "amit",
    active: true,
    subscribed: false,
    status: false,
    isdisable: false,
  },
  {
    Email: "Amanpreet23@gmail.com",
    phone: "8146945394",
    Name: "sunil",
    active: false,
    subscribed: false,
    status: false,
    isdisable: false,
  },
  {
    Email: "goldygoldy33@gmail.com",
    phone: "8146945394",
    Name: "Aman",
    active: false,
    subscribed: false,
    status: false,
    isdisable: false,
  },
];
const options = [
  { value: "Subscribe", label: "Subscribe" },
  { value: "Unsubscribe", label: "Unsubscribe" },
];
const Job_newsletter = ({
  
}) => {
  const [key, setKey] = useState("subscribe");
  const [checked, setChecked] = useState();
  const [indexx, setindex] = useState();
  const[disable,setSdisabled]=useState()
  const [title, setTitle] = useState(false);
  const [subscribed1, setsubscribed] = useState(false);
  const [unsubscribed, setUnsubscribed] = useState(false);
  const [selected, setSelected] = useState([]);
  const [showPerPage, setShowPerPage] = useState();
  const [start, setStart] = useState(1);
  const [pagination1, setpagination] = useState({
    start: start,
    end: showPerPage,
  });

  const selector = useSelector((state) => state);
  // setPlaceholder("Search by name");
  // settitle("Subscribe-Unsubscribe");
  // setRoute(route);
  // setOptions(options);
  // setSearchwith("Name");
  const [tableData, setTableData] = useState(records);

  function sortt() {
    const response = tableData.sort((a, b) =>
      a.Name.toLowerCase() > b.Name.toLowerCase()
        ? 1
        : b.Name.toLowerCase() > a.Name.toLowerCase()
        ? -1
        : 0
    );

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

  /**
   * @method useEffect
   * @description this useEffect for check the condition because when click on checkbox we need to change the state , this is the only way change the state using useEffect and also pass dependencies in useEffect
   */
  useEffect(() => {
    const data = tableData.map((data, index) => {
      return data.subscribed;
    });
    if (
      (tableData[indexx]?.subscribed == true &&
        tableData[indexx]?.active == true) ||
      checked
    ) {
      setUnsubscribed(true);
    } else if (
      (tableData[indexx]?.subscribed == true &&
        tableData[indexx]?.active == false) ||
      checked
    ) {
      setsubscribed(true);
    }
  }, [tableData]);
  /**
   * @method useEffect
   *  @description this useEffect for checking condition in whole tableData
   */
  useEffect(() => {
    const data = tableData.map((data, index) => {
      return data.subscribed;
    });
    if (checked) {
      data.indexOf(true) != -1 ? setUnsubscribed(true) : setUnsubscribed(false);
      data.indexOf(true) != -1 ? setsubscribed(true) : setsubscribed(false);
    }
  }, [tableData]);

  const requestSearch = (searchedVal) => {
    const filteredRows = records.filter((row) => {
      return (
        row.Name.toLowerCase().includes(searchedVal.toLowerCase()) ||
        row.Email.toLowerCase().includes(searchedVal.toLowerCase())
      );
    });

    setTableData([...filteredRows]);
  };

  useEffect(() => {
    document.title = "Subscribe-Unsubscribe";
  }, []);
  return (
    <div className="main-jobsubscriber-content">
       <BasicBreadcrumbs route={route} />
       <div className="left-panle-title">
       <h4 className="">Subscribe-Unsubscribe</h4>
     </div>
      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className=""
      >
        <Tab eventKey="subscribe" title="Subscribe">
          {
            <Button
              hidden={!unsubscribed}
              variant="primary"
              size="sm"
              onClick={() => {
                tableData.map((a, index) => {
                  let v = selected.map(
                    (b, indexx) => (tableData[b.index].active = false)
                  );
                });
                setTableData([...tableData]);
              }}
            >
              Unsubscribe
            </Button>
          }
          <div className="panle_body">
          <div className="panle_header">
           
  
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
            </div>
          <div className="content_box">
            <div className="data-table">
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th className="action_colwidth" align="center">
                      <Form.Check
                        className="fs_13"
                        label=""
                        onChange={(e) => {
                          setUnsubscribed(e.target.checked);
                          tableData.map((data, index) => {
                            if (tableData[index].active == true) {
                              tableData[index].subscribed = e.target.checked;
                              setTableData([...tableData]);
                              {
                                e.target.checked
                                  ? setSelected((old) => [
                                      ...old,
                                      { item: tableData[index], index },
                                    ])
                                  : setSelected([]);
                              }
                            }
                          });
                          if (e.target.checked == false) {
                            tableData.map((data, index) => {
                              tableData[index].subscribed = false;
                              setTableData([...tableData]);
                            });
                          }
                          // setUnsubscribed(e.target.checked);
                          //  setTableData((oldState) => {
                          // const newState = oldState.map((_) => {
                          //    _.su = e.target.checked;
                          //      return _;
                          //    });
                          //    return newState;
                          //  });
                        }}
                      />
                    </th>
                    <th className="action_colwidth">Status</th>
                    <th
                      className="text-align-center"
                      onClick={() => {
                        setTitle(!title);
                        {
                          title
                            ? setTableData(sortData(tableData, "Name", "asc"))
                            : setTableData(sortData(tableData, "Name", "desc"));
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
                    {tableData.map((data, index) =>
                      tableData[index].active == true ? (
                        <tr>
                          <td className="content_cente_td">
                            <Form.Check
                              className="fs_13"
                              name="active"
                              checked={data?.subscribed}
                              value={data.active}
                              key={index}
                              onChange={(e) => {
                                setUnsubscribed(e.target.checked);
                                tableData[index].subscribed = e.target.checked;
                                setTableData([...tableData]);
                                const response = selected.filter(
                                  (old) => old.index == index
                                );
                                if (response.length > 0) {
                                  setSelected((_) => {
                                    return selected.filter(
                                      (__) => __.index != index
                                    );
                                  });
                                } else {
                                  setSelected((_) => [
                                    ..._,
                                    { item: data, index },
                                  ]);
                                }

                                setindex(index);
                              }}
                            />
                          </td>
                          <td>
                            {data.active ? (
                              <Badge bg="success" size={30}>
                                Subscribe
                              </Badge>
                            ) : (
                              ""
                            )}
                          </td>
                          <td>{CapitalizeFirstLetter(data.Name)}</td>
                          <td>{data.phone}</td>
                          <td>{CapitalizeFirstLetter(data.Email)}</td>
                        </tr>
                      ) : (
                        ""
                      )
                    )}
                  </tbody>
                ) : (
                  <h3 className="table_no_records">No Record Found</h3>
                )}
              </Table>
            </div>
          </div>
        </Tab>
        <Tab eventKey="UnSubscribe" title="Unsubscribe">
          {
            <Button
              variant="primary"
              hidden={!subscribed1}
              size="sm"
              onClick={() => {
                tableData.map((a, indexa) => {
                  let v = selected.map(
                    (b, index) => (tableData[b.index].active = true)
                  );
                });
                setTableData([...tableData]);
              }}
            >
              Subscribe
            </Button>
          }
          <div className="panle_body">
          <div className="panle_header">
           
  
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
            </div>
          <div className="content_box">
            <div className="data-table">
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th className="action_colwidth" align="center">
                      <Form.Check
                        className="fs_13"
                        label=""
                        onChange={(e) => {
                          // setUnsubscribed(false);
                          setsubscribed(e.target.checked);
                          tableData.map((data, index) => {
                            if (tableData[index].active == false) {
                              tableData[index].subscribed = e.target.checked;
                              setTableData([...tableData]);
                              {
                                e.target.checked
                                  ? setSelected((old) => [
                                      ...old,
                                      { item: tableData[index], index },
                                    ])
                                  : setSelected([]);
                              }
                            }
                          });
                          if (e.target.checked == false) {
                            tableData.map((data, index) => {
                              tableData[index].subscribed = false;
                              setTableData([...tableData]);
                            });
                          }
                          // setUnsubscribed(e.target.checked);
                          //  setTableData((oldState) => {
                          // const newState = oldState.map((_) => {
                          //    _.su = e.target.checked;
                          //      return _;
                          //    });
                          //    return newState;
                          //  });
                        }}
                      />
                    </th>
                    <th className="action_colwidth">Status</th>
                    <th
                      className="text-align-center"
                      onClick={() => {
                        setTitle(!title);
                        {
                          title
                            ? setTableData(sortData(tableData, "Name", "asc"))
                            : setTableData(sortData(tableData, "Name", "desc"));
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
                    {tableData.map((data, index) =>
                      tableData[index].active == false ? (
                        <tr>
                          <td className="content_cente_td">
                            <Form.Check
                              className="fs_13"
                              name="active"
                              checked={data?.subscribed}
                              value={data.active}
                              key={index}
                              onChange={(e) => {
                                tableData[index].subscribed = e.target.checked;
                                setTableData([...tableData]);

                                const response = selected.filter(
                                  (old) => old.index == index
                                );

                                if (response.length > 0) {
                                  setSelected((_) => {
                                    return selected.filter(
                                      (__) => __.index != index
                                    );
                                  });
                                } else {
                                  setSelected((_) => [
                                    ..._,
                                    { item: data, index },
                                  ]);
                                }
                                // const sel = selected.filter((r) => r == data);
                                // if (sel.length > 0) {
                                //   const res = selected.filter((r) => r != data);
                                //   setSelected(res);
                                // } else {
                                //   setSelected((oldState) => [...oldState, data]);
                                // }
                                if (data?.subscribed == false) {
                                  setsubscribed(false);
                                  setUnsubscribed(false);
                                }

                                // let previous_value = selected[0]?.active;
                                // console.log(previous_value, "previous_value");
                                // for (var i = 0; i < tableData.length; i++) {
                                //   var current_value = tableData[i]?.active;

                                //   if (previous_value != current_value) {
                                //     tableData[i].status = true;
                                //   } else {
                                //     tableData[i].status = false;
                                //   }
                                // }
                                // setRow(e.target.checked);
                                // if (data.subscribed != tableData[index].active) {
                                //   setRow(false);
                                //   tableData[index].subscribed = false;
                                // } else {
                                //   tableData[index].subscribed = true;
                                // }

                                setindex(index);
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
                      ) : (
                        ""
                      )
                    )}
                  </tbody>
                ) : (
                  <h3 className="table_no_records">No Record Found</h3>
                )}
              </Table>
            </div>
          </div>
        </Tab>
      </Tabs>

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
export default (Job_newsletter);
