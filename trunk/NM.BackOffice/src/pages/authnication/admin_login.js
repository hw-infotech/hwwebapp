import { Formik } from "formik";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Input } from '../../components/commoninputfield'
import * as Yup from "yup";

const Admin_Login = () => {
    const history = useNavigate()
    return (
        <div className="centeritmes">
            <div className="sign-page-box">
                <div className="padding_around">
                    <div className="padding-30 text-center "><h2 >Admin Login</h2></div>
                    <Formik
                        initialValues={{ email: "", password: "" }}
                        onSubmit={(values) => {
                            console.log("called", values)
                            localStorage.setItem("nestor.user", JSON.stringify(values))
                            history('/', { replace: true })
                            window.location.reload()
                        }}
                        validationSchema={Yup.object().shape({
                            email: Yup.string().email().required(),
                            password: Yup.string().required().min(6).max(15)
                        })}
                    >
                        {({ handleChange, handleSubmit, errors, values }) => (
                            <form onSubmit={(e) => {
                                e.preventDefault()
                                handleSubmit()
                            }}>
                                <div className="form-group">
                                    <Input
                                        type='text'
                                        className="form-control form-control-lg styleinput"
                                        placeholder='Email Address'
                                        name='email'
                                        label={"Email address"}
                                        id="email"
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <Input
                                        type='password'
                                        className="form-control form-control-lg styleinput"
                                        placeholder='Password'
                                        name='password'
                                        label={"Password"}
                                        id="password"
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="form-check">
                                    <label className="form-check-label" style={{ float: "right" }}>Forget Password</label>
                                </div>
                                <br />
                                <div className="">
                                    <button
                                        type="submit"
                                        className="btn btn-primary widthbtn  styleinput">Sign in
                                    </button>
                                </div>
                            </form>
                        )}
                    </Formik>
                </div>
            </div>
        </div>

    )
}
export default Admin_Login