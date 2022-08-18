import { React, useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";
import { BiEdit } from "react-icons/bi";

const Job_Preview = (values, state) => {
  useEffect(() => {
    document.title = "Preview";
  }, []);
  let tiitle = localStorage?.getItem("key");
  return (
    <div className="preview-content">
      <div className="main-pannle">
        <div className="leftt_pannel">
          <div className="jobes_card">
            <div className="job_icon">
              <img src="assets/images/nestor.jfif" height={80} width={80} />
            </div>

            <div className="titlejob">
              <span>{values.values?.jobtitle || state.jobtitle} - Mohali</span>
            </div>
            <div className="job_location d-flex">
              <span>Nestormind </span>
              <span> - Mohali</span>
            </div>
            <div className="job_date">
              <span>2 months ago</span>
            </div>
          </div>
          <div className="content-box">
            <div className="job_heading">
              <span className="">Job Description</span>
            </div>
            <p className="job_description"> {values?.values?.description}</p>
            <div className="job_heading">
              <span className="">Job Responsibility</span>
            </div>
            <ul className="job__list">
              {values?.values?.responsibility?.map((data, index) => (
                <li> {data?.value}</li>
              ))}
            </ul>
            <div className="job_heading">
              <span>Requirement</span>
            </div>
            <ul className="job__list">
              {values.values?.requirment?.map((data, index) => (
                <li> {data?.value}</li>
              ))}
            </ul>

            <div className="job_heading">
              <span>Nestormind Full Time Employee Benefits</span>
            </div>
            <ul className="job__list">
              {values.values?.benefits?.map((data1, index) => (
                <li >{data1?.value}</li>
              ))}
            </ul>

            <div className="main_information_list">
              <ul className="job_description_level_list">
                <li className="jobes_inner_li">
                  <h6 className="job_description_level">Seniority level</h6>
                  <span className="">{values.values?.level}</span>
                </li>
                <li className="jobes_inner_li">
                  <h6 className="job_description_level">Employment type</h6>
                  <span className="">{values.values?.type}</span>
                </li>
                <li className="jobes_inner_li">
                  <h6 className="job_description_level">Job function</h6>
                  <span className=""> {values.values?.functions}</span>
                </li>
                <li className="jobes_inner_li">
                  <h6 className="job_description_level">Industries</h6>
                  <span className="">{values.values?.industry}</span>
                </li>
              </ul>
            </div>
            {/*<div style={{ float: "right" }}> <Button variant="secondary" onClick={()=>  nevigate(-1)}>Back</Button></div>*/}
          </div>
        </div>
        {/*<div className="mediaqueiry" style={{ paddingLeft: 30 }}>
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
  );
};
export default Job_Preview;
