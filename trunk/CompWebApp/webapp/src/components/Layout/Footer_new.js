import React, {  Component } from 'react';
import { Link } from "react-router-dom";
import './footer_new.css';

class Footer_new extends Component {
    render() {
      return (
              <section className="footerBox__Panel">
                 <img src="assets/img/nestormind.png" width="250px"/>
              <div className="container">
                <div className="footerContent">
            <div className="row">
               <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
                  <div className="companyLinsk">
                     <h4>About Us</h4>
                     <div className="content">
                        <p>We help new and established businesses to create their unique identity through our website design and development services. We are dedicated to offering brilliant and appealing software solution experiences that connect brands to their potential customers.
                        </p>
                     </div>
                  </div>
               </div>
               <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8">
                  <div className="row">
                     <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
                        <div className="companyLinsk">
                           <h4>Services</h4>
                           <div className="content">
                              <ul>
                                 <li>
                                    <a href="#">Web Design</a>
                                 </li>
                                 <li>
                                    <a href="#">Web Development</a>
                                 </li>
                                 <li>
                                    <a href="#">Data Visualizations</a>
                                 </li>
                                 <li>
                                    <a href="#">Product Development</a>
                                 </li>
                                 <li>
                                    <a href="#">Product Design</a>
                                 </li>
                                 <li>
                                    <a href="#">Graphics Design</a>
                                 </li>
                              </ul>
                           </div>
                        </div>
                     </div>
                    
                     <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
                        <div className="companyLinsk">
                           <h4>Latest Tech</h4>
                           <div className="content">
                              <ul>
                                 <li>
                                    <Link to="">Virtual Reality</Link>
                                 </li>
                                 <li>
                                    <a href="#">Augmented Reality</a>
                                 </li>
                                 <li>
                                    <a href="#">AI</a>
                                 </li>
                                 <li>
                                    <a href="#">Internet of things</a>
                                 </li>
                                 <li>
                                    <a href="#">Blockchain</a>
                                 </li>
                              </ul>
                           </div>
                        </div>
                     </div>
                     <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
                        <div class="companyLinsk">
                           <h4>Company</h4>
                           <div className="content">
                              <ul>
                                 <li>
                                    <a href="#">About us</a>
                                 </li>
                                 <li>
                                    <Link to="/career">Career  </Link>
                                 </li>
                                 <li>
                                 <Link to="/terms_Condition">Terms of service</Link>
                                 </li>
                                 <li>
                                    <Link to="/privacyPolicy">Privacy policy</Link>
                                 </li>
                              </ul>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div class="bottomFooter">
            <div class="leftSec">
            &copy; 2021 All Rights Reserved with <strong style={{textTransform: 'uppercase', fontSize:'14px'}}><span>Nestormind (Pvt) Ltd.</span></strong>
            </div>
            <div class="clb-social">
        <ul class="clb-social-holder font-titles icons"> 
            <li class="clb-social-holder-follow">Follow Us</li>
            <li class="clb-social-holder-dash">–</li>
           <li><a target="_blank" href="#" class="facebook"><i className="bx bxl-facebook"></i> </a></li> 
                    <li><a target="_blank" href="https://in.linkedin.com/company/hindwavesinfotech" class="linkedin"><i className="bx bxl-linkedin"> </i></a></li>
            {/* <li><a target="_blank" href="#" class="twitter"><i className="bx bxl-twitter"></i> </a></li>
            <li><a target="_blank" href="#" class="instagram"><i className="bx bxl-instagram"></i> </a></li>
            <li><a target="_blank" href="#" class="skype"><i className="bx bxl-skype"></i></a></li> */}
        </ul>
    </div>
         </div>
         </div>
                </section>
          
      )
    }
};
export default Footer_new