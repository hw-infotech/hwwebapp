import React, { Component } from 'react';
import { Link } from "react-router-dom";
import NavBar from '../Layout/Navbar';
import Footer from '../Layout/Footer';
import './career.css';
import Footer_new from '../Layout/Footer_new';
import { useEffect } from 'react';
import Dashboard from '../../layout/dashboard';

const Career = () => {

    useEffect(() => { window.scrollTo({ top: 0, behavior: 'smooth' }); }, [])
    // this changes the scrolling behavior to "smooth"

    return (
      <Dashboard>
        <div className="careerPanle">
          <img className="careerImg" src="assets/img/career-post.svg" />
          <div className="container">
            <div className="careerBanner_Content">
              <div className="row">
                <div className="col-12 col-sm-12 col-md-8 col-lg-8">
                  <div className="careerContent">
                    <h1>Be part of our highly creative team! </h1>
                    <p>
                      If you have a burning desire to become a graphic designer
                      and looking for the perfect plantform from where you can
                      prove yourself them Nestormind is for you! We adore such
                      budding talents and provide a launch pad to showcase the
                      talent that can shape up the career in future.
                    </p>

                    <div className="appi-cta">
                      <Link to="/uploadCv" target="_blank">
                        <span className="text">
                          View current openings
                          <span className="arrow">
                            <i>
                              <span>→</span>
                            </i>
                            <svg
                              className="arrow-icon"
                              xmlns="http://www.w3.org/2000/svg"
                              width="32"
                              height="32"
                              viewBox="0 0 32 32"
                            >
                              <g
                                fill="none"
                                stroke="#fff"
                                stroke-width="2"
                                stroke-linejoin="round"
                                stroke-miterlimit="10"
                              >
                                <circle
                                  className="arrow-icon--circle"
                                  cx="16"
                                  cy="16"
                                  r="15.12"
                                ></circle>
                              </g>
                            </svg>
                          </span>
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="whyNestro">
          <div className="container">
            <div className="small-container">
              <h2 className="heading2">Why Nestormind?</h2>
              <h3 className="heading5">
                Nestormind emphasizes on delivering high quality graphic designs
                that can rightly elevate the stature of business across the
                globe. Our designs are meant to translate core value, business
                culture and vision of the brand. We add feather on the
                imagination and let the business to get their new avatar.
              </h3>
              <p className="para">
                We endorse raw talent and passionate techies. Our creative team
                prefer to deliver result that has never been done before.
                Currently, Nestormind is active in designing and developing
                creative projects that have become the mascots of modern era
                technical world.
              </p>
            </div>
          </div>
        </div>

        <div className="jobOpening">
          <div className="container">
            <div className="small-container" id="open-positions">
              <h2 className="heading2">Open positions</h2>
              <ul className="position_list">
                <li>
                  <a href="" target="_blank">
                    <span className="heading5">UI/UX Designer</span>
                    <span className="location">
                      Mohali, Punjab
                      <figure>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="9.4"
                          height="16"
                          viewBox="0 0 9.4 16"
                        >
                          <g id="ic_arrow" transform="translate(0)">
                            <g id="Group_362" data-name="Group 362">
                              <path
                                id="Path_1363"
                                data-name="Path 1363"
                                d="M110.623,7.376,103.5.256a.877.877,0,0,0-1.238,0L101.74.78a.876.876,0,0,0,0,1.238L107.719,8l-5.986,5.986a.877.877,0,0,0,0,1.238l.524.524a.877.877,0,0,0,1.238,0l7.127-7.127a.883.883,0,0,0,0-1.242Z"
                                transform="translate(-101.478)"
                              ></path>
                            </g>
                          </g>
                        </svg>
                      </figure>
                    </span>
                  </a>
                </li>
                <li>
                  <a href="" target="_blank">
                    <span className="heading5">Product Manager</span>
                    <span className="location">
                      Mohali, Punjab
                      <figure>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="9.4"
                          height="16"
                          viewBox="0 0 9.4 16"
                        >
                          <g id="ic_arrow" transform="translate(0)">
                            <g id="Group_362" data-name="Group 362">
                              <path
                                id="Path_1363"
                                data-name="Path 1363"
                                d="M110.623,7.376,103.5.256a.877.877,0,0,0-1.238,0L101.74.78a.876.876,0,0,0,0,1.238L107.719,8l-5.986,5.986a.877.877,0,0,0,0,1.238l.524.524a.877.877,0,0,0,1.238,0l7.127-7.127a.883.883,0,0,0,0-1.242Z"
                                transform="translate(-101.478)"
                              ></path>
                            </g>
                          </g>
                        </svg>
                      </figure>
                    </span>
                  </a>
                </li>
                <li>
                  <a href="" target="_blank">
                    <span className="heading5">Marketing Manager</span>
                    <span className="location">
                      Mohali, Punjab
                      <figure>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="9.4"
                          height="16"
                          viewBox="0 0 9.4 16"
                        >
                          <g id="ic_arrow" transform="translate(0)">
                            <g id="Group_362" data-name="Group 362">
                              <path
                                id="Path_1363"
                                data-name="Path 1363"
                                d="M110.623,7.376,103.5.256a.877.877,0,0,0-1.238,0L101.74.78a.876.876,0,0,0,0,1.238L107.719,8l-5.986,5.986a.877.877,0,0,0,0,1.238l.524.524a.877.877,0,0,0,1.238,0l7.127-7.127a.883.883,0,0,0,0-1.242Z"
                                transform="translate(-101.478)"
                              ></path>
                            </g>
                          </g>
                        </svg>
                      </figure>
                    </span>
                  </a>
                </li>
                <li>
                  <a href="" target="_blank">
                    <span className="heading5">Project Co-ordinator</span>
                    <span className="location">
                      Mohali, Punjab
                      <figure>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="9.4"
                          height="16"
                          viewBox="0 0 9.4 16"
                        >
                          <g id="ic_arrow" transform="translate(0)">
                            <g id="Group_362" data-name="Group 362">
                              <path
                                id="Path_1363"
                                data-name="Path 1363"
                                d="M110.623,7.376,103.5.256a.877.877,0,0,0-1.238,0L101.74.78a.876.876,0,0,0,0,1.238L107.719,8l-5.986,5.986a.877.877,0,0,0,0,1.238l.524.524a.877.877,0,0,0,1.238,0l7.127-7.127a.883.883,0,0,0,0-1.242Z"
                                transform="translate(-101.478)"
                              ></path>
                            </g>
                          </g>
                        </svg>
                      </figure>
                    </span>
                  </a>
                </li>
                <li>
                  <a href="" target="_blank">
                    <span className="heading5">Senior iOS Developer</span>
                    <span className="location">
                      Mohali, Punjab
                      <figure>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="9.4"
                          height="16"
                          viewBox="0 0 9.4 16"
                        >
                          <g id="ic_arrow" transform="translate(0)">
                            <g id="Group_362" data-name="Group 362">
                              <path
                                id="Path_1363"
                                data-name="Path 1363"
                                d="M110.623,7.376,103.5.256a.877.877,0,0,0-1.238,0L101.74.78a.876.876,0,0,0,0,1.238L107.719,8l-5.986,5.986a.877.877,0,0,0,0,1.238l.524.524a.877.877,0,0,0,1.238,0l7.127-7.127a.883.883,0,0,0,0-1.242Z"
                                transform="translate(-101.478)"
                              ></path>
                            </g>
                          </g>
                        </svg>
                      </figure>
                    </span>
                  </a>
                </li>
                <li>
                  <a href="" target="_blank">
                    <span className="heading5">Sales Manager</span>
                    <span className="location">
                      Mohali, Punjab
                      <figure>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="9.4"
                          height="16"
                          viewBox="0 0 9.4 16"
                        >
                          <g id="ic_arrow" transform="translate(0)">
                            <g id="Group_362" data-name="Group 362">
                              <path
                                id="Path_1363"
                                data-name="Path 1363"
                                d="M110.623,7.376,103.5.256a.877.877,0,0,0-1.238,0L101.74.78a.876.876,0,0,0,0,1.238L107.719,8l-5.986,5.986a.877.877,0,0,0,0,1.238l.524.524a.877.877,0,0,0,1.238,0l7.127-7.127a.883.883,0,0,0,0-1.242Z"
                                transform="translate(-101.478)"
                              ></path>
                            </g>
                          </g>
                        </svg>
                      </figure>
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="min-container">
          <div className="container">
            <div className="newsletter_wrapper">
              <div className="small-container">
                <div className="flex_wrapper space_between">
                  <div className="newsletter_left">
                    <div className="small_text">
                      {/* SUBSCRIBE OUR NEWSLETTER */}
                    </div>
                    <div className="heading3">
                      Interested, but not ready
                      <br /> to apply?
                    </div>
                  </div>
                  <div className="newsletter_right">
                    <p className="para">
                      Share your email &amp; get updates on job openings.
                    </p>
                    <form>
                      <div className="mc4wp-form-fields">
                        <input
                          type="email"
                          name="email"
                          className="type_text"
                          placeholder="Your email address"
                        />
                        <div className="appi-cta">
                          <button type="submit" value="Subscribe">
                            <span className="text">Subscribe</span>
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Dashboard>
    );
}
export default Career

// class Career extends Component {
//     componentDidMount = () => {
//         window.scrollTo({ top: 0, behavior: 'smooth' });
//     }// this changes the scrolling behavior to "smooth"
//     render() {
//         return (
//             <>
//                 <NavBar />

//                 <div className="careerPanle">
//                     <img className="careerImg" src="assets/img/career-post.svg" />
//                     <div className="container">
//                         <div className="careerBanner_Content">

//                             <div className="row">
//                                 <div className="col-12 col-sm-12 col-md-8 col-lg-8">
//                                     <div className="careerContent">
//                                         <h1>Join A Team That  Celebrates You Daily!</h1>
//                                         <p>Join a team of passionate digital technology experts who create progress every day, and take care of each other at every step of the professional journey.</p>

//                                         <div className="appi-cta">
//                                             <Link to="/uploadCv" target="_blank">
//                                                 <span className="text">View current openings
//                                                     <span className="arrow"><i><span>→</span></i>
//                                                         <svg className="arrow-icon" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
//                                                             <g fill="none" stroke="#fff" stroke-width="2" stroke-linejoin="round" stroke-miterlimit="10">
//                                                                 <circle className="arrow-icon--circle" cx="16" cy="16" r="15.12"></circle>
//                                                             </g>
//                                                         </svg>
//                                                     </span>
//                                                 </span>
//                                             </Link>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 <div className="whyNestro">
//                     <div className="container">
//                         <div className="small-container">
//                             <h2 className="heading2">Why Nestormind?</h2>
//                             <h3 className="heading5">Our culture is built on open communication, togetherness and equal opportunities. It is easy to be creative and enthusiastic about your work, when you are a part of such a supportive environment. </h3>
//                             <p className="para">We believe in passionate people. Our highly skilled teams work together to do what's never been done before, every day. Today Nestromind is actively designing and developing, meaningful and challenging projects using cutting-edge technology, with the ultimate goal to raise the bar even higher.</p>
//                         </div>
//                     </div>
//                 </div>

//                 <div className="jobOpening">
//                     <div className="container">
//                         <div className="small-container" id="open-positions">
//                             <h2 className="heading2">Open positions</h2>
//                             <ul className="position_list">
//                                 <li>
//                                     <a href="" target="_blank">
//                                         <span className="heading5">UI/UX Designer</span>
//                                         <span className="location">Mohali,  Punjab
//                                             <figure>
//                                                 <svg xmlns="http://www.w3.org/2000/svg" width="9.4" height="16" viewBox="0 0 9.4 16">
//                                                     <g id="ic_arrow" transform="translate(0)">
//                                                         <g id="Group_362" data-name="Group 362">
//                                                             <path id="Path_1363" data-name="Path 1363" d="M110.623,7.376,103.5.256a.877.877,0,0,0-1.238,0L101.74.78a.876.876,0,0,0,0,1.238L107.719,8l-5.986,5.986a.877.877,0,0,0,0,1.238l.524.524a.877.877,0,0,0,1.238,0l7.127-7.127a.883.883,0,0,0,0-1.242Z" transform="translate(-101.478)"></path>
//                                                         </g>
//                                                     </g>
//                                                 </svg>
//                                             </figure>
//                                         </span>
//                                     </a>
//                                 </li>
//                                 <li>
//                                     <a href="" target="_blank">
//                                         <span className="heading5">Product Manager</span>
//                                         <span className="location">Mohali,  Punjab
//                                             <figure>
//                                                 <svg xmlns="http://www.w3.org/2000/svg" width="9.4" height="16" viewBox="0 0 9.4 16">
//                                                     <g id="ic_arrow" transform="translate(0)">
//                                                         <g id="Group_362" data-name="Group 362">
//                                                             <path id="Path_1363" data-name="Path 1363" d="M110.623,7.376,103.5.256a.877.877,0,0,0-1.238,0L101.74.78a.876.876,0,0,0,0,1.238L107.719,8l-5.986,5.986a.877.877,0,0,0,0,1.238l.524.524a.877.877,0,0,0,1.238,0l7.127-7.127a.883.883,0,0,0,0-1.242Z" transform="translate(-101.478)"></path>
//                                                         </g>
//                                                     </g>
//                                                 </svg>
//                                             </figure>
//                                         </span>
//                                     </a>
//                                 </li>
//                                 <li>
//                                     <a href="" target="_blank">
//                                         <span className="heading5">Marketing Manager</span>
//                                         <span className="location">Mohali,  Punjab
//                                             <figure>
//                                                 <svg xmlns="http://www.w3.org/2000/svg" width="9.4" height="16" viewBox="0 0 9.4 16">
//                                                     <g id="ic_arrow" transform="translate(0)">
//                                                         <g id="Group_362" data-name="Group 362">
//                                                             <path id="Path_1363" data-name="Path 1363" d="M110.623,7.376,103.5.256a.877.877,0,0,0-1.238,0L101.74.78a.876.876,0,0,0,0,1.238L107.719,8l-5.986,5.986a.877.877,0,0,0,0,1.238l.524.524a.877.877,0,0,0,1.238,0l7.127-7.127a.883.883,0,0,0,0-1.242Z" transform="translate(-101.478)"></path>
//                                                         </g>
//                                                     </g>
//                                                 </svg>
//                                             </figure>
//                                         </span>
//                                     </a>
//                                 </li>
//                                 <li>
//                                     <a href="" target="_blank">
//                                         <span className="heading5">Project Co-ordinator</span>
//                                         <span className="location">Mohali,  Punjab
//                                             <figure>
//                                                 <svg xmlns="http://www.w3.org/2000/svg" width="9.4" height="16" viewBox="0 0 9.4 16">
//                                                     <g id="ic_arrow" transform="translate(0)">
//                                                         <g id="Group_362" data-name="Group 362">
//                                                             <path id="Path_1363" data-name="Path 1363" d="M110.623,7.376,103.5.256a.877.877,0,0,0-1.238,0L101.74.78a.876.876,0,0,0,0,1.238L107.719,8l-5.986,5.986a.877.877,0,0,0,0,1.238l.524.524a.877.877,0,0,0,1.238,0l7.127-7.127a.883.883,0,0,0,0-1.242Z" transform="translate(-101.478)"></path>
//                                                         </g>
//                                                     </g>
//                                                 </svg>
//                                             </figure>
//                                         </span>
//                                     </a>
//                                 </li>
//                                 <li>
//                                     <a href="" target="_blank">
//                                         <span className="heading5">Senior iOS Developer</span>
//                                         <span className="location">Mohali,  Punjab
//                                             <figure>
//                                                 <svg xmlns="http://www.w3.org/2000/svg" width="9.4" height="16" viewBox="0 0 9.4 16">
//                                                     <g id="ic_arrow" transform="translate(0)">
//                                                         <g id="Group_362" data-name="Group 362">
//                                                             <path id="Path_1363" data-name="Path 1363" d="M110.623,7.376,103.5.256a.877.877,0,0,0-1.238,0L101.74.78a.876.876,0,0,0,0,1.238L107.719,8l-5.986,5.986a.877.877,0,0,0,0,1.238l.524.524a.877.877,0,0,0,1.238,0l7.127-7.127a.883.883,0,0,0,0-1.242Z" transform="translate(-101.478)"></path>
//                                                         </g>
//                                                     </g>
//                                                 </svg>
//                                             </figure>
//                                         </span>
//                                     </a>
//                                 </li>
//                                 <li>
//                                     <a href="" target="_blank">
//                                         <span className="heading5">Sales Manager</span>
//                                         <span className="location">Mohali,  Punjab
//                                             <figure>
//                                                 <svg xmlns="http://www.w3.org/2000/svg" width="9.4" height="16" viewBox="0 0 9.4 16">
//                                                     <g id="ic_arrow" transform="translate(0)">
//                                                         <g id="Group_362" data-name="Group 362">
//                                                             <path id="Path_1363" data-name="Path 1363" d="M110.623,7.376,103.5.256a.877.877,0,0,0-1.238,0L101.74.78a.876.876,0,0,0,0,1.238L107.719,8l-5.986,5.986a.877.877,0,0,0,0,1.238l.524.524a.877.877,0,0,0,1.238,0l7.127-7.127a.883.883,0,0,0,0-1.242Z" transform="translate(-101.478)"></path>
//                                                         </g>
//                                                     </g>
//                                                 </svg>
//                                             </figure>
//                                         </span>
//                                     </a>
//                                 </li>
//                             </ul>
//                         </div>
//                     </div>
//                 </div>


//                 <div className="min-container">
//                     <div className="container">
//                         <div className="newsletter_wrapper">
//                             <div className="small-container">
//                                 <div className="flex_wrapper space_between">
//                                     <div className="newsletter_left">
//                                         <div className="small_text">
//                                             {/* SUBSCRIBE OUR NEWSLETTER */}
//                                         </div>
//                                         <div className="heading3">
//                                             Interested, but not ready<br /> to apply?
//                                         </div>
//                                     </div>
//                                     <div className="newsletter_right">
//                                         <p className="para">Share your email &amp; get updates on job openings.</p>
//                                         <form>
//                                             <div className="mc4wp-form-fields"><input type="email" name="email" className="type_text" placeholder="Your email address" />
//                                                 <div className="appi-cta">
//                                                     <button type="submit" value="Subscribe">
//                                                         <span className="text">Subscribe
//                                                         </span>
//                                                     </button>
//                                                 </div>
//                                             </div>

//                                         </form>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>


//                 <Footer_new />
//             </>
//         )
//     }
// }
// export default Career;