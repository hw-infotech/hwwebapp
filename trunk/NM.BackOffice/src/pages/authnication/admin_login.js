import { Formik, setNestedObjectValues } from "formik";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "../../components/commoninputfield";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Login } from "../../Services/redux/action/action";
import { useState } from "react";

const Admin_Login = () => {
  const [state, setState] = useState();
  const dispatch = useDispatch();
  const history = useNavigate();
  const selector = useSelector((state) => state?.data?.apidata?.login?.token);

  useEffect(() => {}, []);
  return (
    <div className="centeritmes">
      <div className="sign-page-box">
        <div className="padding_around">
          <div className="padding-30 text-center ">
            <h2>Admin Login</h2>
          </div>
          <Formik
            initialValues={{ emailId: "", password: "" }}
            onSubmit={(values) => {
              dispatch(Login(values, history));
              //window.location.href = "/";
            }}
            validationSchema={Yup.object().shape({
              emailId: Yup.string().email().required(),
              password: Yup.string().required(),
            })}
          >
            {({ handleChange, handleSubmit, errors, values, touched }) => (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSubmit();
                }}
              >
                <div className="form-group">
                  <Input
                    type="text"
                    className={
                      touched.emailId && errors.emailId
                        ? "invalid form-control styleinput fs_13"
                        : "form-control styleinput fs_13"
                    }
                    placeholder="Email Address"
                    name="emailId"
                    label={"Email address"}
                    id="email"
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <Input
                    type="text"
                    className={
                      touched.password && errors.password
                        ? "invalid form-control styleinput fs_13"
                        : " form-control styleinput fs_13"
                    }
                    placeholder="Password"
                    name="password"
                    label={"Password"}
                    id="password"
                    onChange={handleChange}
                  />
                </div>
                <div className="form-check">
                  {
                    //<label
                    //     className="form-check-label"
                    //     style={{ float: "right" }}
                    //   >
                    //     Forget Password
                    //   </label>
                  }
                </div>
                <br />
                <div className="">
                  <button
                    type="submit"
                    className="btn btn-primary widthbtn  styleinput"
                    onClick={() => {
                      console.log(state, "this is the");
                    }}
                  >
                    Sign in
                  </button>
                </div>
              </form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};
export default Admin_Login;
