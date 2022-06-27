import { React, useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";
import { BiEdit } from "react-icons/bi";

const Job_Preview = () => {
    const nevigate=useNavigate()
    const [state, setState] = useState({
        jobtitle: "",
        responsibility: [],
        requirment: [],
        benefits: [],
        employement: "",
        seneritylevel: "",
        jobfunction: "",
        industry: ""
    })
    return (
        <div>
      
            <div className="jobdes_margin">
                <div className="">
                    <div className="main-pannle">
                        <div className="leftt_pannel">
                            <div className="jobdes_card">
                                <div className="jobdes_marginbottom">
                                    <img src="assets/images/nestor.jfif" height={80} width={80} />
                                </div>
                                <div className="titlejob">
                                    <span>{state.jobtitle} - Mohali</span>
                                </div>
                                <div className="job_location d-flex jobdes_marginbottom">
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
                                        {state?.responsibility?.map((data, index) =>
                                            <li className=""> {data?.value}</li>
                                        )}
                                    </ul>
                                </div>
                                <div className="job_description_heading">
                                    <span className="" style={{ textDecoration: "unerlined" }}>Requirement</span>

                                </div>
                                <div className="">
                                    <ul className="job_description_list">
                                        {state?.requirment?.map((data, index) =>
                                            <li className=""> {data?.value}</li>
                                        )}
                                    </ul>
                                </div>
                                <div className="job_description_heading">
                                    <span className="" style={{ textDecoration: "unerlined" }}>Nestormind Full Time Employee Benefits</span>
                                </div>
                                <div className="">
                                    <ul className="job_description_list">
                                        {state?.benefits?.map((data, index) =>
                                            <li className=""> {data?.value}</li>
                                        )}
                                    </ul>
                                </div>
                                <div style={{ marginTop: 80 }}>
                                    <ul className="job_description_level_list">
                                        <li>
                                            <h3 className="job_description_level">Seniority level</h3>
                                            <span>{state.seneritylevel}</span>
                                        </li>
                                        <li>
                                            <h5 className="job_description_level">Employment type</h5>
                                            <span>{state.employement}</span>
                                        </li>
                                        <li>
                                            <h5 className="job_description_level">Job function</h5>
                                            <span> {state.jobfunction}</span>
                                        </li>
                                        <li>
                                            <h5 className="job_description_level">Industries</h5>
                                            <span>{state.industry}</span>
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
        </div>

    )

}
export default Job_Preview