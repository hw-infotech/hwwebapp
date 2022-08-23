import React, { useState } from "react";
import { BsFilter } from "react-icons/bs";
import { AiOutlinePlusCircle } from "react-icons/ai";
import ReCAPTCHA from "react-google-recaptcha";
import BasicBreadcrumbs from "../../components/breadcumbs";
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
const route = [
  { name: "Dashboard", route: "/" },
  { name: "Notification", route: "" },
  { name: "View all", route: "" },
];
const Notification = () => {
  function onChange(value) {
    console.log("Captcha value:", value);
  }
  const [disable, setSdisabled] = useState(false);
  function onSubmit(token) {
    document.getElementById("demo-form").submit();
  }
  // let a = [1, 2, 1, 5, 6, 4, 5, 5];
  // var filteredArray = a.filter(function (item, pos) {
  //   return a.indexOf(item) == pos;
  // });
  return (
    <div className="notification_content " id="demo-form">
      <BasicBreadcrumbs route={route} />
      <div className="panle_body">
        <div className="panle_header">
          <div className="left-panle-title">
            <h4>Notification</h4>
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
          </div>
        </div>
        <div className="gapbetween pt-1">
          <Collapse in={disable}>
            <div className="custom-date-box mb-3">
              <input
                type={"date"}
                name="date"
                className="form-control custom-date-filter"
              />
            </div>
          </Collapse>
        </div>
      </div>

      <div className="notification_panel ">
        <div className="notification_inner_part">
          <img
            src="./assets/images/NM-ICON.png"
            className="img-decorate"
            height="30px"
            width="30px"
          />
          <div>
            <p>John doe React your post</p>
            <p className="text-muted">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde,
              dolorem.
            </p>
            <p className="text-muted">
              <small>10 minutes ago</small>
            </p>
          </div>
        </div>
        <div>
          <img
            src="./assets/images/ava3.png"
            className="img-decorate"
            width={"30px"}
            height={"30px"}
          />
        </div>
      </div>
      <div className="notification_panel mt-4">
        <div className="notification_inner_part">
          <img
            src="./assets/images/team_nestormind.png"
            className="img-decorate"
            height="30px"
            width="30px"
          />
          <div>
            <p>Richard Miles liked your post</p>
            <p className="text-muted">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde,
              dolorem.
            </p>
            <p className="text-muted">
              <small>10 minutes ago</small>
            </p>
          </div>
        </div>
        <div>
          <img
            src="./assets/images/ava3.png"
            className="img-decorate"
            width={"30px"}
            height={"30px"}
          />
        </div>
      </div>
      <div className="notification_panel mt-4 mb-4">
        <div className="notification_inner_part">
          <img
            src="./assets/images/NM-ICON.png"
            className="img-decorate"
            height="30px"
            width="30px"
          />
          <div>
            <p>John doe React your post</p>
            <p className="text-muted">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde,
              dolorem.
            </p>
            <p className="text-muted">
              <small>10 minutes ago</small>
            </p>
          </div>
        </div>
        <div>
          <img
            src="./assets/images/diwaliCel.jpg"
            className="img-decorate"
            width={"30px"}
            height={"30px"}
          />
        </div>
      </div>
    </div>
  );
};
export default Notification;
