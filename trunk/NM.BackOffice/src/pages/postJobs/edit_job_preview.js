import { React, useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";
import { BiEdit } from "react-icons/bi";


const Edit_Job_Preview = (values, state) => {
  const nevigate = useNavigate();
  console.log(values, "this is edit values");
  let tiitle = localStorage?.getItem("key");

 
  // private encryptDecryptService: EncryptDecryptService
  //  var result = this.encryptDecryptService.decryptData(value);
  return (
    <div className="edit-preview-box">
      <div className="view_main_box">
        <div className="main-pannle">
          <div className="leftt_pannel">
            <div className="jobes_card">
              <div className="jobes_marginbottom">
                <img src="assets/images/nestor.jfif" height={80} width={80} />
              </div>
              <div className="titlejob">
                <span>{values.state?.title} - Mohali</span>
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
              <p className="job_description"> {values?.state?.description}</p>
              <div className="job_heading">
                <span className="">Job Responsibility</span>
              </div>
              <ul className="job__list">
                {/*values?.state?.jobResponsibilityTypes?.map((data, index) => {
                  return <li key={index}>{data.value}</li>;
                })*/}
              </ul>

              <div className="job_heading">
                <span className="">Requirement</span>
              </div>
              <ul className="job__list">
                {/*values?.state?.jobRequirments?.map((data, index) => {
                  return <li key={index}>{data.value}</li>;
                })*/}
              </ul>
              <div className="job_heading">
                <span className="">Nestormind Full Time Employee Benefits</span>
              </div>
              <div className="">
                <ul className="job__list">
                  {/*values?.state?.jobBenefits
                    ? JSON.parse(values?.state?.jobBenefits)?.map(
                        (data, index) => {
                          return <li key={index}>{data.value}</li>;
                        }
                      )
                      : []*/}
                </ul>
              </div>
              <div className="main_information_list">
                <ul className="job_description_level_list">
                  <li className="jobes_inner_li">
                    <h6 className="job_description_level">Seniority level</h6>
                    <span className="level_contentl">
                      {values.state?.level}
                    </span>
                  </li>
                  <li className="jobes_inner_li">
                    <h6 className="job_description_level">Employment type</h6>
                    <span className="level_content">
                      {values.state?.jobType}
                    </span>
                  </li>
                  <li className="jobes_inner_li">
                    <h6 className="job_description_level">Job function</h6>
                    <span className="level_content">
                      {" "}
                      {values.state?.functions}
                    </span>
                  </li>
                  <li className="jobes_inner_li">
                    <h6 className="job_description_level">Industries</h6>
                    <span className="level_content">
                      {values.state?.industries}
                    </span>
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
    </div>
  );
};
export default Edit_Job_Preview;
