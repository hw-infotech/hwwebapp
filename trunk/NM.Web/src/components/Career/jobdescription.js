
import React from "react";
import withNewsletterAddress from "../../Shared/HOC/newsletterAddress";
import NavBar from "../Layout/Navbar";
import "./career.css";

const Job_Description = () => {

    return (
        <div className="jobdes_margin">
            <div className="container">
                <div className="main-pannle">
                    <div className="leftt_pannel">
                        <div className="jobdes_card">
                            <div className="jobdes_marginbottom">
                                <img src="assets/nestor.jfif" height={80} width={80} />
                            </div>
                            <div className="titlejob">
                                <span>Product Manager - Mohali</span>
                            </div>
                            <div className="job_location d-flex jobdes_marginbottom">
                                <span >Nestormind </span>
                                <span> - Mohali</span>
                            </div>
                            <div className="job_date">
                                <span>2 months ago</span>
                            </div>
                            <div className="" style={{ display: "flex", gap: "10px" }}>
                                <button type="button" className="jobapply_button">Apply On Nestormind <i class="fs-6 bi-box-arrow-in-up-right"></i>
                                </button>


                            </div>
                        </div>
                        <div className="">
                            <div className="job_description_heading ">
                                <span className="" style={{ textDecoration: "unerlined" }}>About Nestormind</span>
                            </div>
                            <div className="padd"> <p className="size_font">Initiated in 2010, Nestormind has come a long way based on honesty, hard-working and commitment. Our mantra is “Serve the clients beyond his expectation”. We forge each relationship with utmost dedication and with an intention to deliver exceptional client service. Ushering digital transformation along with product engineering strategies, our team assists the organization to develop a device or software solution that enhances business operations.
                            </p>
                                <p className="size_font">Being the industry leader, Nestormind provides web design, web development, UI/design, different type of application development, IoT solutions, Blockchain solutions, Digital marketing, and IT consulting services to both domestic and global business organizations. Our dedicated team works hand in hand along with the client and ensures that the product on which they are working, not only draws business success but also empowers that business entity to solve futuristic solutions. Due to our excellent customer-friendly services, we have already delivered more than 1500 projects so far and created a strong 200 satisfied client base.</p>
                            </div>
                            <div className="job_description_heading">
                                <span className="" style={{ textDecoration: "unerlined" }}>Job Responsibility</span>
                            </div>
                            <div className="">
                                <ul className="job_description_list">
                                    <li className="">
                                        Merchant Acquisition: Onboard new merchants basis understanding of transaction volume and pattern in the assigned geography.
                                    </li>
                                    <li className="">
                                        Merchant Acquisition: Onboard new merchants basis understanding of transaction volume and pattern in the assigned geography.
                                    </li>
                                    <li>Competition Mapping: Study, map and report competition activity in assigned geography basis geographical or category based initiatives to enable faster response.</li>
                                </ul>
                            </div>
                            <div className="job_description_heading">
                                <span className="" style={{ textDecoration: "unerlined" }}>Requirement</span>
                            </div>
                            <div className="">
                                <ul className="job_description_list">
                                    <li className="">
                                        Graduation
                                    </li>
                                    <li className="">
                                        Minimum B to C sales experience of 1 year with good performance
                                    </li>
                                </ul>
                            </div>
                            <div className="job_description_heading">
                                <span className="" style={{ textDecoration: "unerlined" }}>Nestormind Full Time Employee Benefits</span>
                            </div>
                            <div className="">
                                <ul className="job_description_list">
                                    <li className="">
                                        Insurance Benefits - Medical Insurance, Critical Illness Insurance, Accidental Insurance, Life Insurance
                                    </li>
                                    <li className="">
                                        Wellness Program - Employee Assistance Program, Onsite Medical Center, Emergency Support System
                                    </li>
                                </ul>
                            </div>
                            <div style={{ marginTop: 80 }}>
                                <ul className="job_description_level_list">
                                    <li>
                                        <h3 className="job_description_level">Seniority level</h3>
                                        <span>Entry level</span>
                                    </li>
                                    <li>
                                        <h5 className="job_description_level">Employment type</h5>
                                        <span>   Full-time</span>
                                    </li>
                                    <li>
                                        <h5 className="job_description_level">Job function</h5>
                                        <span>  Sales and Business Development</span>
                                    </li>
                                    <li>
                                        <h5 className="job_description_level">Industries</h5>
                                        <span>Internet Publishing</span>
                                    </li>
                                </ul>

                            </div>
                        </div>
                    </div>
                    <div className="mediaqueiry" style={{ paddingLeft: 30 }}>
                        <h4 className="right_pannle_main_heading">Nestormind Other Jobs</h4>
                        <ul className="right_pannle_list">
                            <li className="right_pannle_list_itmes">
                                <h6>Ui/UX Designer</h6>
                                <span>20 times</span>
                                <span className="job_date">Mohali, Punjab</span>
                                <span className="job_date">3 months ago   '
                                    <button type="button" className="right_pannle_button">Apply Now</button>
                                </span>
                            </li>
                            <li className="right_pannle_list_itmes">
                                <h6>Product Manager</h6>
                                <span>10 times</span>
                                <span className="job_date">Mohali, Punjab</span>
                                <span className="job_date">1 months ago   '
                                    <button type="button" className="right_pannle_button">Apply Now</button>
                                </span>
                            </li>
                            <li className="right_pannle_list_itmes">
                                <h6>Marketing Manager</h6>
                                <span>20 times</span>
                                <span className="job_date">Mohali, Punjab</span>
                                <span className="job_date">2 months ago   '
                                    <button type="button" className="right_pannle_button">Apply Now</button>
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default withNewsletterAddress(Job_Description)