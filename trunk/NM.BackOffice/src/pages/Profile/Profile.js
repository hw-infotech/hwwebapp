import React, { createContext, useContext, useEffect, useState } from "react";
import {
  Alert,
  Button,
  Col,
  Form,
  Modal,
  Row,
  Tab,
  Tabs,
} from "react-bootstrap";
import BasicBreadcrumbs from "../../components/breadcumbs";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { FiMail, FiUser } from "react-icons/fi";
import { GrLocation } from "react-icons/gr";
import {
  initialValues,
  validationschemeaa,
} from "../postJobs/validation-schema";
import { Input } from "../../components/commoninputfield";
import { ErrorMessage, Field, Formik } from "formik";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import * as yup from "yup";
import {
  Edit_profile_data,
  GET_profile_data,
  Profile_Data,
  Update_Profile_Data,
  Update_Profile_Password,
} from "../../Services/redux/action/action";

//export const context=createContext()
const Profile = () => {
  const [show_password, setShowpassword] = useState(false);
  const [showpas, setShowpas] = useState("text");
  const [state, setState] = useState({
    name: "",
    phone: "",
    email: "",
    location: "",
    image: "",
  });
  const [state1, setState1] = useState({
    User: "",
    oldpassword: "",
    confirm: "",
    profile_password: "",
  });
  const [data, setData] = useState();
  const [data1, getdata] = useState("");
  const dispatch = useDispatch();
  const [editData, setEditData] = useState({
    name: "",
    phone: 0,
    email: "",
    location: "",
    image: "",
    username: "",
    profile_password: "",
  });

  useEffect(() => {
    document.title = "My Profile";
    dispatch(GET_profile_data());
  }, []);

  const selector = useSelector((state) => state);
  useEffect(() => {
    getdata(selector?.data?.apidata?.profile_data);
    //console.log("this is the profile page", data1)
  }, [selector]);

  useEffect(() => {
    setData(selector?.data?.apidata?.profile_data);
    setState(selector?.data?.apidata?.profile_data);
    //console.log("this is the profile page", selector?.data?.apidata?.profile_data)
  }, [selector]);

  const [key, setKey] = useState();
  const [visible, setVisible] = useState(true);
  const [edit, setEdit] = useState(false);
  const history = useNavigate();
  const route = [
    { name: "Dashboard", route: "/" },
    { name: "User" },
    { name: "My Profile", route: "/profile" },
  ];

  const validationSchema = yup.object({
    oldpassword: yup.string().required().max(64).label("Old Password"),
    profile_password: yup.string().required().max(64).label("New Password"),
    confirm: yup
      .string()
      .required()
      .max(64)
      .oneOf([yup.ref("profile_password"), null], "New password does not match")
      .label("New Password Confirmation"),
  });
  const validationSchema1 = yup.object({
    name: yup.string().required().label("Name").min(10),
    phone: yup.string().required().max(10).label("Phone Number"),
    email: yup.string().required().max(64).label("Email"),
    location: yup.string().required(),
  });

  const getStar = (len) => {
    let star = [];

    if (len) {
      for (let i = 0; i < len; i++) {
        star.push("*");
      }
      return star.toString().split(",");
    }
  };
  return (
    <div className="main-content-holder">
      <BasicBreadcrumbs route={route} />
      <h4> My Profile</h4>
      <Row>
        <Col md={12} xl={12}>
          <div className="main-Profile-card">
            <div className="Profile-card">
              {/*                           <div className="profile-image">
                           <img src="" className="profile-image11" />
                        </div>*/}
              <div className="buttonContainer">
                <img src={data1.image} name="image" className="profile-image" />
                <input
                  type="file"
                  className="uploadButton"
                  name="image"
                  onChange={(e) => {
                    var file = e?.target.files[0];
                    let reader = new FileReader();
                    reader.readAsDataURL(file);
                    reader.onload = () => {
                      dispatch(
                        Update_Profile_Data({
                          ...data1,
                          image: reader.result,
                        })
                      );
                      setState({
                        ...state,
                        image: reader.result,
                      });
                    };
                    reader.onerror = function (error) {
                      console.log("Error: ", error);
                    };
                  }}
                />
              </div>
              <div className="card-heading4">
                <h4>
                  Welcome, <strong>{data1?.name}</strong>
                </h4>
                <div className="inner_heading">
                  <div className="inner-heading-icon1">
                    <FiUser size={10} />
                    <span>
                      <b>Admin</b>
                    </span>
                  </div>
                  <div className="inner-location-email">
                    <div className="text-muted inner-heading-icon ">
                      <GrLocation size={12} />
                      {data1?.location}
                    </div>
                    <div className="text-muted  inner-heading-icon">
                      <FiMail size={12} />
                      {data1?.email}
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="
              "
              >
                <Button
                  variant=""
                  className="prfille-back-btn btn-sm"
                  onClick={() => {
                    history(-1);
                  }}
                >
                  Back
                </Button>
              </div>
            </div>
          </div>
        </Col>
      </Row>
      <div className="profile_form">
        <Tabs
          id="controlled-tab-example"
          activeKey={key}
          onSelect={(k) => setKey(k)}
          className="mb-3  tab_border_zero"
        >
          <Tab eventKey="Overview" title="My Profile" className="">
            <Row>
              <Col>
                <Formik
                  initialValues={selector?.data?.apidata?.profile_data}
                  validationSchema={validationSchema1}
                  onSubmit={(values, { resetForm }) => {
                    dispatch(Update_Profile_Data(values));
                    setEdit(false);
                  }}
                >
                  {({
                    values,
                    handleSubmit,
                    handleChange,
                    errors,
                    touched,
                  }) => (
                    <form
                      onSubmit={(e) => {
                        e.preventDefault();

                        handleSubmit();
                      }}
                    >
                      <div className="main-Profile-card1">
                        <div className="prfile-card11">
                          <div className="inner-profile1">
                            <span>{!edit ? "" : "Edit Profile"}</span>

                            <div className="changeable_btn">
                              {!edit ? (
                                <Button
                                  variant="primary"
                                  className="btn-sm"
                                  onClick={() => {
                                    setEditData(values);
                                    dispatch(Edit_profile_data());
                                    setVisible(false);
                                    setEdit((p) => !p);
                                  }}
                                >
                                  Edit Profile
                                </Button>
                              ) : (
                                <Button
                                  variant="secondary"
                                  className="btn-sm"
                                  onClick={() => {
                                    setEdit((p) => !p);
                                    setVisible(true);
                                  }}
                                >
                                  Back
                                </Button>
                              )}
                              <Button
                                variant="primary"
                                type="submit"
                                className="btn-sm"
                                onClick={() => {
                                  alert("Data Update successful");
                                }}
                                hidden={visible}
                              >
                                Save
                              </Button>
                            </div>
                          </div>
                        </div>
                        {!edit ? (
                          <div className="mainform">
                            <div className="formData">
                              <div className="innerform">Full Name</div>
                              <div className="innerform1">
                                {values?.name || data1?.name}
                              </div>
                            </div>
                            <div className="formData">
                              <div className="innerform">Phone Number</div>
                              <div className="innerform1">
                                {values?.phone || data1.phone}
                              </div>
                            </div>
                            <div className="formData">
                              <div className="innerform">Email</div>
                              <div className="innerform1">
                                {values?.email || data1?.email}
                              </div>
                            </div>
                            <div className="formData">
                              <div className="innerform">Address</div>
                              <div className="innerform1">
                                {values?.location || data1?.location}
                              </div>
                            </div>
                            {console.log(values, "Values from !edit")}
                          </div>
                        ) : (
                          <div className="mainform">
                            <div className="formData">
                              <div className="innerform">Full Name</div>
                              <div className="innerform1">
                                <Form.Group controlId="formBasicEmail">
                                  <Form.Control
                                    className="fs_13"
                                    name="name"
                                    type="text"
                                    onChange={handleChange}
                                    value={values.name}
                                  />

                                  {errors.name ? (
                                    <label className="text-danger">
                                      {errors.name}
                                    </label>
                                  ) : null}
                                </Form.Group>
                              </div>
                            </div>
                            <div className="formData">
                              <div className="innerform">Phone Number</div>
                              <div className="innerform1">
                                <Form.Group controlId="phone">
                                  <Form.Control
                                    type="number"
                                    name="phone"
                                    className="fs_13"
                                    onChange={handleChange}
                                    value={values.phone}
                                  />
                                  {errors.phone ? (
                                    <label className="text-danger">
                                      {errors.phone}
                                    </label>
                                  ) : null}
                                </Form.Group>
                              </div>
                            </div>
                            <div className="formData">
                              <div className="innerform">Email</div>
                              <div className="innerform1">
                                <Form.Group controlId="email">
                                  <Form.Control
                                    type="email"
                                    name="email"
                                    className="fs_13"
                                    onChange={handleChange}
                                    value={values.email}
                                  />
                                  {errors.email ? (
                                    <label className="text-danger">
                                      {errors.email}
                                    </label>
                                  ) : null}
                                </Form.Group>
                              </div>
                            </div>
                            <div className="formData">
                              <div className="innerform">Address</div>
                              <div className="innerform1">
                                <Form.Group controlId="location">
                                  <Form.Control
                                    type="text"
                                    name="location"
                                    className="fs_13"
                                    onChange={handleChange}
                                    value={values.location}
                                  />
                                  {errors.location ? (
                                    <label className="text-danger">
                                      {errors.location}
                                    </label>
                                  ) : null}
                                </Form.Group>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </form>
                  )}
                </Formik>
              </Col>
            </Row>
          </Tab>
          <Tab eventKey="Security" title="Security">
            <Row>
              <Col>
                <Formik
                  initialValues={state1}
                  validationSchema={validationSchema}
                  onSubmit={(values, { resetForm }) => {
                    console.log(values, "profile passowrd");
                    if (data1.profile_password === values.oldpassword) {
                      dispatch(
                        Update_Profile_Password(values.profile_password)
                      );
                      setEdit(false);
                      alert("Data Update successful");
                    } else {
                      alert("wrong password");
                      return (
                        <ErrorMessage
                          name={"oldpassword"}
                          component="div"
                          className="text-danger input_error"
                        />
                      );
                    }
                  }}
                >
                  {({ values, handleSubmit, handleChange, errors }) => (
                    <form
                      onSubmit={(e) => {
                        e.preventDefault();
                        handleSubmit();
                      }}
                    >
                      {console.log(errors)}
                      <div className="main-Profile-card1">
                        <div className="prfile-card11">
                          <div className="inner-profile1">
                            <div className="">
                              <h6>{!edit ? "" : "Change Password"}</h6>
                            </div>
                            <div className="changeable_btn">
                              {!edit ? (
                                <Button
                                  variant="primary"
                                  className="btn btn-sm"
                                  onClick={() => {
                                    setVisible(false);
                                    setEdit((p) => !p);
                                  }}
                                >
                                  Change Password
                                </Button>
                              ) : (
                                <Button
                                  variant="secondary"
                                  className="btn-sm "
                                  onClick={() => {
                                    setEdit((p) => !p);
                                    setVisible(true);
                                  }}
                                >
                                  Back
                                </Button>
                              )}
                              <Button
                                variant="primary"
                                type="submit"
                                className="btn-sm"
                                onClick={() => {}}
                                hidden={visible}
                              >
                                Save
                              </Button>
                            </div>
                          </div>
                        </div>
                        {!edit ? (
                          <div className="mainform">
                            <div className="formData">
                              <div className="innerform">UserName</div>
                              <div className="innerform1">
                                {data1?.username}
                              </div>
                            </div>
                            <div className="formData">
                              <div className="innerform">Password</div>
                              <div className="innerform1" typeof="password">
                                {!show_password
                                  ? getStar(data1?.profile_password?.length)
                                  : data1?.profile_password}
                                &nbsp; &nbsp;
                                {!show_password ? (
                                  <span onClick={() => setShowpassword(true)}>
                                    <BsEyeSlash />
                                  </span>
                                ) : (
                                  <span onClick={() => setShowpassword(false)}>
                                    <BsEye />
                                  </span>
                                )}
                              </div>
                            </div>
                          </div>
                        ) : (
                          <div className="mainform">
                            <div className="formData">
                              <div className="innerform">Old Password</div>
                              <div className="innerform1 d-flex gap-2">
                                <div className="w-100">
                                  <div className="input-group">
                                    <Field
                                      className="fs_13 input_error form-control"
                                      type={showpas}
                                      name="oldpassword"
                                      onChange={handleChange}
                                    />
                                    <div className="input-group-append">
                                      {showpas == "text" ? (
                                        <span
                                          className="input-group-text h-100"
                                          onClick={() => setShowpas("password")}
                                        >
                                          <BsEye />
                                        </span>
                                      ) : (
                                        <span
                                          className="input-group-text h-100"
                                          onClick={() => setShowpas("text")}
                                        >
                                          <BsEyeSlash />
                                        </span>
                                      )}
                                    </div>
                                  </div>
                                  <Form.Group controlId="oldpassword"></Form.Group>
                                  <ErrorMessage
                                    name={"oldpassword"}
                                    component="div"
                                    className="text-danger"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="formData">
                              <div className="innerform">New Password</div>
                              <div className="innerform1">
                                <Form.Group controlId="Newpassword">
                                  <Field
                                    type="password"
                                    name="profile_password"
                                    className="fs_13 input_error form-control"
                                    onChange={handleChange}
                                  />
                                </Form.Group>
                              </div>
                            </div>
                            <div className="formData">
                              <div className="innerform">Confirm Password</div>
                              <div className="innerform1">
                                <Form.Group controlId="confirmpassword">
                                  <Field
                                    type="password"
                                    name="confirm"
                                    className={"input_error fs_13 form-control"}
                                    onChange={handleChange}
                                  />
                                  <ErrorMessage
                                    name={"confirm"}
                                    component="div"
                                    className="text-danger"
                                  />
                                </Form.Group>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </form>
                  )}
                </Formik>
              </Col>
            </Row>
          </Tab>
        </Tabs>
      </div>
    </div>
  );
};
export default Profile;
