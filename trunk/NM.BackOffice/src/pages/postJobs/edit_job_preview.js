import { React, useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";
import { BiEdit } from "react-icons/bi";

const Edit_Job_Preview = (values, state) => {
    const nevigate = useNavigate()
    console.log(values)
    let tiitle = localStorage?.getItem("key")
    return (
        <div className="edit-preview-box">
            <div className="jobes_margin">
                <div className="main-pannle">
                    <div className="leftt_pannel">
                        <div className="jobes_card">
                            <div className="jobes_marginbottom">
                                <img src="assets/images/nestor.jfif" height={80} width={80} />
                            </div>
                            <div className="titlejob">
                                <span>{values.values?.jobtitle || state.jobtitle} - Mohali</span>
                            </div>
                            <div className="job_location d-flex jobes_marginbottom">
                                <span >Nestormind </span>
                                <span> - Mohali</span>
                            </div>
                        </div>
                        <div className="">
                            <div className="job_description_heading">
                                <span className="" style={{ textDecoration: "unerlined" }}>Job Responsibility</span>
                            </div>
                            <div className="">
                                <ul className="job_description_list">
                                    {values?.values?.responsibility?.map((data, index) =>
                                        <li className=""> {data}</li>

                                    )}
                                </ul>
                            </div>
                            <div className="job_description_heading">
                                <span className="" style={{ textDecoration: "unerlined" }}>Requirement</span>

                            </div>
                            <div className="">
                                <ul className="job_description_list">
                                    {values.values?.requirment?.map((data, index) =>
                                        <li className=""> {data}</li>
                                    )}
                                </ul>
                            </div>
                            <div className="job_description_heading">
                                <span className="" style={{ textDecoration: "unerlined" }}>Nestormind Full Time Employee Benefits</span>
                            </div>
                            <div className="">
                                <ul className="job_description_list">
                                    {values.values?.benefits?.map((data, index) =>
                                        <li className=""> {data}</li>
                                    )}
                                </ul>
                            </div>
                            <div style={{ marginTop: 80 }}>
                                <ul className="job_description_level_list">
                                    <li>
                                        <h6 className="">Seniority level</h6>
                                        <span className="job_description_level">{values.values?.level}</span>
                                    </li>
                                    <li>
                                        <h6>Employment type</h6>
                                        <span className="job_description_level">{values.values?.type}</span>
                                    </li>
                                    <li>
                                        <h6>Job function</h6>
                                        <span className="job_description_level"> {values.values?.functions}</span>
                                    </li>
                                    <li>
                                        <h6 >Industries</h6>
                                        <span className="job_description_level">{values.values?.industry}</span>
                                    </li>
                                </ul>
                            </div>
                            { /*<div style={{ float: "right" }}> <Button variant="secondary" onClick={()=>  nevigate(-1)}>Back</Button></div>*/}
                        </div>
                    </div>
                    { /*<div className="mediaqueiry" style={{ paddingLeft: 30 }}>
                    <h4 className="right_pannle_main_heading">Nestormind Other Jobs</h4>
                    <ul className="right_pannle_list">
                        <li className="right_pannle_list_itmes">
                            <h6>Ui/UX Designer</h6>
                            <span>20 times</span>
                            <span className="job_date">Mohali, Punjab</span>
                            <span className="job_date">3 months ago   '
                                <Link to='uploadCv'><button type="button" className="right_pannle_button">Apply Now</button></Link>
                            </span>
                        </li>
                        <li className="right_pannle_list_itmes">
                            <h6>Product Manager</h6>
                            <span>10 times</span>
                            <span className="job_date">Mohali, Punjab</span>
                            <span className="job_date">1 months ago   '
                                <Link to='uploadCV'> <button type="button" className="right_pannle_button">Apply Now</button></Link>
                            </span>
                        </li>
                        <li className="right_pannle_list_itmes">
                            <h6>Marketing Manager</h6>
                            <span>20 times</span>
                            <span className="job_date">Mohali, Punjab</span>
                            <span className="job_date">2 months ago   '
                                <button type="button" className="right_pannle_button" onClick={()={
                                  
                                }}>Apply Now</button>
                            </span>
                        </li>
                    </ul>
                 </div>*/}
                </div>

            </div>
        </div>

    )
}
export default Edit_Job_Preview