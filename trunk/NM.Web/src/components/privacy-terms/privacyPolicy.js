import React, { Component } from 'react';
import { Link } from "react-router-dom";
import NavBar from '../Layout/Navbar';
import Footer from '../Layout/Footer';
import './privacy_terms.css';
import Footer_new from '../Layout/Footer_new';
import { useEffect } from 'react';
import Dashboard from '../../layout/dashboard';

const PrivacyPolicy = () => {
   
   useEffect(() => { window.scrollTo({ top: 0, behavior: 'smooth' }); }, [])
   // this changes the scrolling behavior to "smooth"

   return <Dashboard>
      <div class="conditionsBanner">
         <div class="container">
            <div class="about-content contact">
               <h1 class="heading"> PRIVACY POLICY</h1>
               <div class="sub-heading"></div>
            </div>
         </div>
      </div>
      <div class="mantras">
         <div class="container">
            <div class="mantra-top">
               <div class="mantra-title">Privacy Policy</div>
               <div class="content-fund-section">
                  <p>At Nestormind, we are focused on protecting and saving the security of our visitors. It tends to be planned to depict how we use and procedure your personal
                     information. We are committed to respecting your privacy and choices while visiting our website.<br /> This Privacy Policy discloses the end result for any personal
                     information that you give to us, or that we procure an individual while you visit our site.
                  </p>
                  <p>We do modify Policies every now and then so kindly do survey this
                     Policy consistently.
                  </p>
               </div>
               <div class="mantra-title">Use Of Information</div>
               <div class="content-fund-section">
                  <p>For the purpose behind the privacy, ‘Personal Information’ is any information which identifies with a person who might be distinguished from that information, or from
                     a blend of a lot of information, and other data which is or might be in control of Nestormind.
                  </p>
                  <p>To benefit certain visitors on our Websites, clients are required to
                     give certain data to the registration procedure in particular: – a) your name, b) email address, c) sex, d) age, e) PIN code, and so on., and/or your occupation,
                     interests, and so forth. The Information as provided by the clients empowers us to improve our sites and give you the most user-friendly experience.<br /> Data about
                     your utilization of our site including unpretentious components of your visits, for example, pages saw and the assets that you get to. Such data consolidate traffic
                     information, area information, and other correspondence information.
                  </p>
               </div>
               <div class="mantra-title">Use of Cookies</div>
               <div class="content-fund-section">
                  <p>To improve the responsiveness of the sites for our users, we may utilize cookies, or comparative electronic devices to gather data to allow every guest an exceptional,
                     arbitrary number as a User Identification (User ID) to comprehend the client’s individual advantages utilizing the Identified Computer. Except if you deliberately
                     recognize yourself (through enlistment, for instance), we will have no chance to get of knowing your identity, regardless of whether we allow a treat to your PC.
                     A cookie can’t peruse information off your hard drive. Our publicists may likewise dole out their very own cookies to your program (on the off chance that you click on
                     their advertisements), a procedure that we don’t control.
                  </p>
                  <p>We may put web cookies on a visitors PC/device; web cookies spare information about an individual
                     visitor, for example, the association’s name, secret key, client name, screen inclinations, and the pages of an administration seen by the visitor. At the point
                     when a visitor returns to our site, we may remember them by the web cookie and alter their experience appropriately. Visitors may decrease Internet Cookies,
                     assuming any, by utilizing the proper element of their web customer programming/program, if accessible.
                  </p>
               </div>
               <div class="mantra-title">
                  Use of Information Collected
               </div>
               <div class="content-fund-section">
                  <p>The information is accumulated under two phases by Nestormind. The individual and
                     contact information is asked by individuals reaching us by means of our “hire us” structure. This data is utilized to break down the interest of the
                     prospect and to connect with them back. Upon the start of an undertaking, some other data in regards to the venture points of interest and installments
                     are traded with the client. This data is never bestowed with any other person under any conditions. The data we accumulate is utilized solely to contact
                     the customers and giving them a friendly and speedy administration.
                  </p>
                  <p>Nestormind won’t share any individual’s Personal Information, or even total
                     information on the visitor of our site, to outsiders, for example, showcasing firms without looking for earlier authorization from the concerned individual
                     or people.
                  </p>
               </div>
               <div class="mantra-title">Compliance with Regulatory Authorities</div>
               <div class="content-fund-section">
                  <p>On the off chance that in
                     any probability any lawful or government expert demands your data in any respect, we are liable to give such data to the concerned authority as
                     indicated by law.
                  </p>
               </div>
               <div class="mantra-title">Right to Change the Policy</div>
               <div class="content-fund-section">
                  <p>Nestormind may change the
                     information security practices and update this protection explanation as and when the need emerges, and a similar will be made accessible on the
                     site. In any case, our promise to secure the protection of site clients will keep on remaining.
                  </p>
               </div>
            </div>
         </div>
      </div>
   </Dashboard>
}
export default PrivacyPolicy