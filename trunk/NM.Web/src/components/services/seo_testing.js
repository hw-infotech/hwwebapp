import React from 'react';
import './ServicesMain.css';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Link } from "react-router-dom";
import { useEffect } from 'react';
import * as Yup from "yup";
import { Field, Formik } from 'formik';
import { ToastContainer, toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { SEOuserRegister } from '../../Redux/Action/Actionfunction';
import withNewsletterAddress from '../../Shared/HOC/newsletterAddress';
import SeoPortfolio from '../Home/seoPortfolio';

const SeoTest = (props) => {
    const dispatch = useDispatch()

    useEffect(() => { window.scrollTo({ top: 0, behavior: 'smooth' }); }, [])
    // this changes the scrolling behavior to "smooth"

    const initialValues = {
        services: {
            appdevelopment: false,
            webdevelopment: false,
            uiuxDesign: false,
            seo: false,
            graphic_design: false
        },
        name: "",
        phone: "",
        email: "",
        message: ""
    }

    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

    const validationSchema = Yup.object().shape({
        email: Yup.string().email('Invalid email format').required('Required'),
        name: Yup.string().required("Required").min(3).max(25).matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field "),
        phone: Yup.string().required("Required")
            .matches(phoneRegExp, 'Phone number is not valid')
            .min(10, "Minimum 10 number's reuired")
            .max(10, "Maximum 10 number's required"),
        message: Yup.string().required("Required").min(15)
    })

    const notify = () => toast.success("Successfully Submitted");//, { theme: "colored" }

    const handlFormSubmit = (values, { resetForm }) => {
        values.services = {
            appdevelopment: false,
            webdevelopment: false,
            uiuxDesign: false,
            seo: true,
            graphic_design: false
        }
        dispatch(SEOuserRegister(values))
        resetForm()
    }

    return (
      <div>
      <SeoPortfolio/>
        <section className="ServiceMainBanners webDevlopBox">
          <ToastContainer
            position="top-right"
            autoClose={4000}
            hideProgressBar={false}
            newestOnTop={false}
            // closeOnClick
            rtl
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />

          <div className="container">
            <div className="servicesImageHalfBox">
              <img src="assets/img/seo-mainBanner.png" alt="" />
            </div>
            <div className="Service_contentPanel">
              <small>SEO Testing</small>

              <h1>
                Elevate your brand <br />
                value availing latest SEO techniques.
              </h1>
              <p>
                We have a pool of expert SEO processionals who deliver awesome
                result to your brand by elevating its current position in Search
                Engine Result Pages. We have partnership with Google and have a
                solid track record on providing SEO services.
              </p>
            </div>
          </div>
        </section>

        <section className="technologyStack">
          <div className="container">
            <div className="stacks">
              <div className="stackTitle">
                <h2>
                  Technology <strong>Stack</strong> We Used.
                </h2>
              </div>
              <ul>
                <li>
                  <div className="stackBox">
                    <div className="icon">
                      <img src="assets/img/brandLogo/angular-icon.svg" />
                    </div>
                    <div className="stackTitle">Angular</div>
                  </div>
                </li>
                <li>
                  <div className="stackBox">
                    <div className="icon">
                      <img src="assets/img/brandLogo/nodejs-icon.svg" />
                    </div>
                    <div className="stackTitle">Node.js</div>
                  </div>
                </li>
                <li>
                  <div className="stackBox">
                    <div className="icon">
                      <img src="assets/img/brandLogo/react.svg" />
                    </div>
                    <div className="stackTitle">React.js</div>
                  </div>
                </li>
                <li>
                  <div className="stackBox">
                    <div className="icon">
                      <img src="assets/img/brandLogo/firebase.svg" />
                    </div>
                    <div className="stackTitle">Firebase</div>
                  </div>
                </li>
                <li>
                  <div className="stackBox">
                    <div className="icon">
                      <img src="assets/img/brandLogo/vue-js-logo.svg" />
                    </div>
                    <div className="stackTitle">Vue.js</div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="our-experts">
          <div className="container">
            <div className="left">
              <h2 className="light">
                Let us know your
                <br />
                <strong> Business Requirement</strong>
                <br />
                and we will solve that with proven SEO techniques.
              </h2>
            </div>
            <div className="right">
              <Link to="/contact-us" className="btn-light btn-icon">
                Let’s talk with our SEO team
              </Link>
            </div>
          </div>
        </section>

        <section className="process">
          <div className="container">
            <div className="processBox">
              <div className="row">
                <div className="col-12 col-sm-12 col-md-6 col-xl-6 col-lg-6">
                  <div className="ProcessContent">
                    <h3>
                      Our
                      <br /> SEO process
                    </h3>
                    <p>
                      Our SEO service starts from locating the current position
                      of the business in major search engines like Google, Yahoo
                      and Bing. Then our team plan out which type techniques
                      will be best to apply for meeting the client’s objective.
                    </p>
                  </div>
                </div>
                <div className="col-12 col-sm-12 col-md-6 col-xl-6 col-lg-6">
                  <div className="processSlider">
                    <div className="webIcon">
                      <img src="assets/img/SEO_GRAPHIHCS.png" />
                    </div>
                    <OwlCarousel
                      className="owl-theme"
                      loop
                      autoplay={true}
                      items={1}
                      margin={10}
                      nav
                    >
                      <div className="item">
                        <div className="processContentPanel">
                          <div className="number">01</div>
                          <div className="processTitle">
                            Search Engine Optimization
                          </div>
                          <p>
                            From SEO Audit to SEO Strategy and from On-page SEO
                            to Link Building, Nestormind offers the best of it
                            kind Search Engine Optimization services if you want
                            to acquire the top of Google Search results.
                          </p>
                        </div>
                      </div>
                      <div className="item">
                        <div className="processContentPanel">
                          <div className="number">02</div>
                          <div className="processTitle">
                            Online Reputation Management
                          </div>
                          <p>
                            We understand that your reputation builds your
                            brand; allow the SEO experts at Nestormind to
                            monitor, protect and build your online reputation.
                          </p>
                        </div>
                      </div>
                      <div className="item">
                        <div className="processContentPanel">
                          <div className="number">03</div>
                          <div className="processTitle">
                            Video Marketing & YouTube SEO
                          </div>
                          <p>
                            Get a big boost in organic video views, engagement
                            metrics and subscribers for your YouTube channel
                            with our proven video SEO services.
                          </p>
                        </div>
                      </div>
                      <div className="item">
                        <div className="processContentPanel">
                          <div className="number">04</div>
                          <div className="processTitle">
                            Conversion Rate Optimization (CRO)
                          </div>
                          <p>
                            Avail our CRO strategy and multiply your conversion.
                            We have proven techniques to converse the visitors
                            to potential customers that your business needs.
                          </p>
                        </div>
                      </div>
                      <div className="item">
                        <div className="processContentPanel">
                          <div className="number">05</div>
                          <div className="processTitle">Content Marketing </div>
                          <p>
                            Our robust and award winning Content marketing
                            services can help your brand to establish trust,
                            authority and thought leadership while engaging with
                            your target audience.
                          </p>
                        </div>
                      </div>
                    </OwlCarousel>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="formBox">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-5">
                <div className="form">
                  <div className="title">Need Help with Development?</div>
                  <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handlFormSubmit}
                  >
                    {({
                      handleSubmit,
                      handleChange,
                      errors,
                      values,
                      touched,
                    }) => (
                      <form
                        onSubmit={(e) => {
                          e.preventDefault();
                          handleSubmit();
                        }}
                      >
                        <div className="input-form">
                          <div className="label">Name</div>
                          <div className="input-filed">
                            <Field
                              id={
                                touched && touched.name && errors && errors.name
                                  ? "invalid"
                                  : ""
                              }
                              name="name"
                              type="text"
                              className="formControl"
                            />
                            {/*<ErrorMessage component="div" className="text-danger" name="name" />*/}
                          </div>
                        </div>
                        <div className="input-form">
                          <div className="label">Phone</div>
                          <div className="input-filed">
                            <Field
                              name="phone"
                              type="text"
                              className="formControl"
                              id={
                                touched &&
                                touched.phone &&
                                errors &&
                                errors.phone
                                  ? "invalid"
                                  : ""
                              }
                            />
                            {/*<ErrorMessage component="div" className="text-danger" name="phone" />*/}
                          </div>
                        </div>
                        <div className="input-form">
                          <div className="label">Email</div>
                          <div className="input-filed">
                            <Field
                              name="email"
                              type="email"
                              className="formControl"
                              id={
                                touched &&
                                touched.email &&
                                errors &&
                                errors.email
                                  ? "invalid"
                                  : ""
                              }
                            />
                            {/*<ErrorMessage component="div" className="text-danger" name="email" />*/}
                          </div>
                        </div>
                        <div className="input-form">
                          <div className="label">Message</div>
                          <div className="input-filed">
                            <Field
                              name="message"
                              id={
                                touched &&
                                touched.message &&
                                errors &&
                                errors.message
                                  ? "invalid"
                                  : ""
                              }
                              as="textarea"
                              type="text"
                              rows="3"
                              className="formControl"
                            />
                            {/*<ErrorMessage component="div" className="text-danger" name="message" />*/}
                          </div>
                        </div>
                        <div className="input-form">
                          <div className="input-filed">
                            <input
                              type="submit"
                              className="getintouch"
                              value="Get In Touch"
                            />
                          </div>
                        </div>
                      </form>
                    )}
                  </Formik>
                </div>
              </div>
              <div className="col-12 col-md-1"> </div>
              <div className="col-12 col-md-6">
                <div className="formContent">
                  <div className="bigText">
                    Want to meet <br />
                    Business goals but don’t know how?
                  </div>
                  <div className="smallText">
                    Mingle with us for availing the cost-effective SEO service
                    that can propel your brand value to another level. Our
                    proven SEO techniques will deliver certain result.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
}

export default withNewsletterAddress(SeoTest);
// class seoTest extends Component {
//     componentDidMount = () => {
//         window.scrollTo({ top: 0, behavior: 'smooth' });
//     }// this changes the scrolling behavior to "smooth"
//     render() {
//         return (
//             <>
//                 <NavBar />
//                 <section className="ServiceMainBanners webDevlopBox">

//                     <div className="container">
//                         <div className="Service_contentPanel">
//                          <small>SEO Testing</small>
//                             <h1>SEO Testing <br/>
//                             Where experience meets
//                             innovation</h1>
//                             <p>We understand that projects come in all shapes and sizes. As trusted partners, our team of experts are here as an extension of your working team to ensure that your projects are met on time and budget.</p>
//                         </div>
//                         <div className="servicesImageHalfBox">
//                              <img src="assets/img/seo-mainBanner.png" alt=""/>
//                     </div>
//                     </div>
//                 </section>

//                 <section className="technologyStack">
//                     <div className="container">
//                         <div className="stacks">
//                             <div className="stackTitle">
//                                 <h2>Technology <strong>Stack</strong> We Used.</h2>
//                             </div>
//                             <ul>
//                                 <li>
//                                     <div className="stackBox">
//                                         <div className="icon">
//                                         <img src="assets/img/brandLogo/angular-icon.svg" />
//                                         </div>
//                                         <div className="stackTitle">Angular</div>
//                                     </div>
//                                 </li>
//                                 <li>
//                                     <div className="stackBox">
//                                         <div className="icon">
//                                         <img src="assets/img/brandLogo/nodejs-icon.svg" />
//                                         </div>
//                                         <div className="stackTitle">Node.js</div>
//                                     </div>
//                                 </li>
//                                 <li>
//                                     <div className="stackBox">
//                                         <div className="icon">
//                                         <img src="assets/img/brandLogo/react.svg" />
//                                         </div>
//                                         <div className="stackTitle">React.js</div>
//                                     </div>
//                                 </li>
//                                 <li>
//                                     <div className="stackBox">
//                                         <div className="icon">
//                                         <img src="assets/img/brandLogo/firebase.svg" />
//                                         </div>
//                                         <div className="stackTitle">Firebase</div>
//                                     </div>
//                                 </li>
//                                 <li>
//                                     <div className="stackBox">
//                                         <div className="icon">
//                                         <img src="assets/img/brandLogo/vue-js-logo.svg" />
//                                         </div>
//                                         <div className="stackTitle">Vue.js</div>
//                                     </div>
//                                 </li>
//                             </ul>
//                         </div>
//                     </div>
//                 </section>

//                 <section className="our-experts">
//                     <div className="container">
//                     <div className="left">
//                     <h2 className="light">Have an awesome <br/><strong>App Application idea </strong> and not sure <br/>how to get started?</h2>
//                     </div>
//                     <div className="right">
//                      <Link to="/contact-us" className="btn-light btn-icon">TALK TO OUR EXPERTS </Link>
//                     </div>
//                     </div>
//                 </section>

//                 <section className="process">
//                     <div className="container">
//                         <div className="processBox">
//                             <div className="row">
//                                 <div className="col-12 col-sm-12 col-md-6 col-xl-6 col-lg-6">
//                                     <div className="ProcessContent">
//                                         <h3>Our<br/> App Development<br/> process</h3>
//                                         <p>We have delivered result-driven iOS application development solutions across industry
//                                             verticals that have helped our clients to achieve their desired digital goals. Be it prototyping,
//                                             application architecture or UI/UX experience; we deliver perfection at every stage.</p>
//                                     </div>
//                                 </div>
//                                 <div className="col-12 col-sm-12 col-md-6 col-xl-6 col-lg-6">
//                                     <div className="processSlider">
//                                         <div className="webIcon">
//                                         <img src="assets/img/SEO_GRAPHIHCS.png" />
//                                         </div>
//                                         <OwlCarousel
//                                                 className="owl-theme"
//                                                 loop
//                                                 autoplay={true}
//                                                 items={1}
//                                                 margin={10}
//                                                 nav
//                                             >
//                                             <div className="item">
//                                                 <div className="processContentPanel">
//                                                     <div className="number">01</div>
//                                                     <div className="processTitle">Research and Consulting </div>
//                                                     <p>We start with what we call Phase Zero, a data collection and marketing research phase in which we study your app idea, your company, and your end users.</p>
//                                                 </div>
//                                             </div>
//                                             <div className="item">
//                                                 <div className="processContentPanel">
//                                                     <div className="number">02</div>
//                                                     <div className="processTitle">Wireframe and Prototype  </div>
//                                                     <p>We start with what we call Phase Zero, a data collection and marketing research phase in which we study your app idea, your company, and your end users.</p>
//                                                 </div>
//                                             </div>
//                                             <div className="item">
//                                                 <div className="processContentPanel">
//                                                     <div className="number">03</div>
//                                                     <div className="processTitle">Architecture and Database  </div>
//                                                     <p>We start with what we call Phase Zero, a data collection and marketing research phase in which we study your app idea, your company, and your end users.</p>
//                                                 </div>
//                                             </div>
//                                             <div className="item">
//                                                 <div className="processContentPanel">
//                                                     <div className="number">04</div>
//                                                     <div className="processTitle">Web Development </div>
//                                                     <p>We start with what we call Phase Zero, a data collection and marketing research phase in which we study your app idea, your company, and your end users.</p>
//                                                 </div>
//                                             </div>
//                                             <div className="item">
//                                                 <div className="processContentPanel">
//                                                     <div className="number">05</div>
//                                                     <div className="processTitle">Testing and QA</div>
//                                                     <p>We start with what we call Phase Zero, a data collection and marketing research phase in which we study your app idea, your company, and your end users.</p>
//                                                 </div>
//                                             </div>
//                                             <div className="item">
//                                                 <div className="processContentPanel">
//                                                     <div className="number">06</div>
//                                                     <div className="processTitle">Deployment to Live Server  </div>
//                                                     <p>We start with what we call Phase Zero, a data collection and marketing research phase in which we study your app idea, your company, and your end users.</p>
//                                                 </div>
//                                             </div>
//                                         </OwlCarousel>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </section>



//                 <section className="formBox">
//                     <div className="container">
//                         <div className="row">
//                             <div className="col-12 col-md-5">
//                                 <div className="form">
//                                     <div className="title">Need Help with Development?</div>
//                                     <div className="input-form">
//                                         <div className="label">Name</div>
//                                         <div className="input-filed">
//                                             <input type="text" className="formControl" />
//                                         </div>
//                                     </div>
//                                     <div className="input-form">
//                                         <div className="label">Phone</div>
//                                         <div className="input-filed">
//                                             <input type="text" className="formControl" />
//                                         </div>
//                                     </div>
//                                     <div className="input-form">
//                                         <div className="label">Email</div>
//                                         <div className="input-filed">
//                                             <input type="email" className="formControl" />
//                                         </div>
//                                     </div>
//                                     <div className="input-form">
//                                         <div className="label">Message</div>
//                                         <div className="input-filed">
//                                             <textarea type="text" rows="3" className="formControl" />
//                                         </div>
//                                     </div>
//                                     <div className="input-form">

//                                         <div className="input-filed">
//                                             <input type="submit" className="getintouch" value="Get In Touch" />
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="col-12 col-md-1"> </div>
//                             <div className="col-12 col-md-6">
//                                 <div className="formContent">
//                                     <div className="bigText">
//                                             Have an awesome<br/>
//                                             App Application idea and not sure<br/>
//                                             how to get started?
//                                     </div>
//                                     <div className="smallText">
//                                     Partner with us for affordable development supported by advanced frameworks, processes, automation, and expertise.
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </section>

//                  <Footer_new/>

//             </>
//         )
//     }
// };
// export default seoTest;