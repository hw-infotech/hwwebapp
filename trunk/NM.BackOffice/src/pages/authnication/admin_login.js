import { Formik } from "formik";
import React from "react";
import { Input } from '../../components/commoninputfield'

const Admin_Login = () => {

    return (
        <div className="centeritmes">
            <div className="sign-page-box">
                <div className="padding_around">
                    <div className="gapPad text-center "><h2 >Admin Login</h2></div>
                    <Formik initialValues={{ name: "", password: "" }}>
                        {() => (
                            <form>
                                <div class="form-group">
                                    <Input type='text' className="form-control form-control-lg styleinput" placeholder='Email Address' name='email' label={"Email address"} id="name" />
                                </div>
                                <div class="form-group">

                                    <Input type='password' className="form-control form-control-lg styleinput" placeholder='Password' name='password' label={"Password"} id="name" />
                                </div>
                                <div class="form-check">
                                    <label class="form-check-label" style={{ float: "right" }}>Forget Password</label>
                                </div>
                                <br />
                                <div className="">
                                    <button type="submit" class="btn btn-primary widthbtn  styleinput">Sign in</button>
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