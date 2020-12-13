import React, { Component } from 'react';
import './footer_new.css';

class Footer_new extends Component {
    render() {
      return (
              <section className="footerBox__Panel">
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
                                    <a href="#">Virtual Reality</a>
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
                                    <a href="#">Career  </a>
                                 </li>
                                 <li>
                                    <a href="#">Partners    </a>
                                 </li>
                                 <li>
                                    <a href="#">Terms of service</a>
                                 </li>
                                 <li>
                                    <a href="#">Privacy policy</a>
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
            &copy; 2020 All Rights Reserved with <strong style={{textTransform: 'uppercase', fontSize:'14px'}}><span>Hindwaves Infotech (Pvt) Ltd.</span></strong>
            </div>
         </div>
         </div>
                </section>
          
      )
    }
};
export default Footer_new