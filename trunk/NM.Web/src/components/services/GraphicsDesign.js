import React, { useState } from 'react';
import './ServicesMain.css';
import OwlCarousel from 'react-owl-carousel';
import { Link } from "react-router-dom";
import { useEffect } from 'react';
import { Field, Formik } from 'formik';
import * as Yup from "yup";
import { ToastContainer, toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { graphicDesignuserRegister } from '../../Redux/Action/Actionfunction';
import GraphicsPortfolio from '../Home/graphicsPortfolio';
import withNewsletterAddress from '../../Shared/HOC/newsletterAddress';

const GraphicsD = (props) => {
    const dispatch = useDispatch()
    const selector = useSelector(state => state)
    // const [response, setResponse] = useState()

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [])
    // this changes the scrolling behavior to "smooth"

    useEffect(() => {
        // setResponse(selector.apidata?.graphic_design_register?.data)
    }, [selector])

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

    const handleFormSubmit = (values, { resetForm }) => {
        values.services = {
            appdevelopment: false,
            webdevelopment: false,
            uiuxDesign: false,
            seo: false,
            graphic_design: true
        }
        dispatch(graphicDesignuserRegister(values))
        // notify()
        resetForm()
    }

    return (
      <div>
        <GraphicsPortfolio />
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
              <img src="assets/img/graphics-design.png" alt="" />
            </div>
            <div className="Service_contentPanel">
              <small>Graphics Design</small>
              <h1>
                Creative graphic design
                <br />
                That delivers a new incarnation to
              </h1>
              <p>
                We design which involves capturing text and appropriate images
                that are the keys to any graphic design to explain the terms of
                business in a special way to the world.
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
                      <img src="assets/img/photoshop-cc.svg" alt='icon' />
                    </div>
                    <div className="stackTitle"> Photoshop</div>
                  </div>
                </li>
                <li>
                  <div className="stackBox">
                    <div className="icon">
                      <img src="assets/img/adobe-illustrator-cc.svg" alt='icon' />
                    </div>
                    <div className="stackTitle"> illustrator</div>
                  </div>
                </li>
                <li>
                  <div className="stackBox">
                    <div className="icon">
                      <img src="assets/img/lightroom-cc.svg" alt='icon' />
                    </div>
                    <div className="stackTitle">Lightroom</div>
                  </div>
                </li>
                <li>
                  <div className="stackBox">
                    <div className="icon">
                      <img src="assets/img/premiere-cc.svg" alt='icon' />
                    </div>
                    <div className="stackTitle">Premiere</div>
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
                Do share your <br />
                <strong>graphic designing ideas</strong> <br />
                with our designers.
              </h2>
            </div>
            <div className="right">
              <Link to="/contact-us" className="btn-light btn-icon">
                TALK TO OUR EXPERTS{" "}
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
                      <br /> Graphics Design
                      <br /> process
                    </h3>
                    <p>
                      Our designers team explore, identify and implement various
                      graphic design ideas that help the business to get a new
                      visual identification that is unique make the brand
                      standout from others.
                    </p>
                  </div>
                </div>
                <div className="col-12 col-sm-12 col-md-6 col-xl-6 col-lg-6">
                  <div className="processSlider">
                    <div className="webIcon">
                      <img src="assets/img/graphics-slider.svg" alt='icon' />
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
                            Stunning Graphic Designs
                          </div>
                          <p>
                            Our energetic creative team of designers always
                            excels in creating unique brand identity and
                            out-of-box designs that speaks on its own!
                          </p>
                        </div>
                      </div>
                      <div className="item">
                        <div className="processContentPanel">
                          <div className="number">02</div>
                          <div className="processTitle">Unique Logo Design</div>
                          <p>
                            Solidify your business with the designs that render
                            your company identity instantly recognizable with a
                            single icon.
                          </p>
                        </div>
                      </div>
                      <div className="item">
                        <div className="processContentPanel">
                          <div className="number">03</div>
                          <div className="processTitle">Promotional Design</div>
                          <p>
                            Inspire clients and build a strong presence on
                            social media, marketing channels, and public
                            exhibitions availing our creative promotional
                            design.
                          </p>
                        </div>
                      </div>
                      <div className="item">
                        <div className="processContentPanel">
                          <div className="number">04</div>
                          <div className="processTitle">
                            Brand & Corporate Identity
                          </div>
                          <p>
                            Our unique brand and corporate identity exposes
                            individual product elements and packaging, creates
                            message and visual expression of your brand’s unique
                            identity.
                          </p>
                        </div>
                      </div>
                      <div className="item">
                        <div className="processContentPanel">
                          <div className="number">05</div>
                          <div className="processTitle">
                            PowerPoint Presentation and Visualization
                          </div>
                          <p>
                            Highlights tools to make decisions. Nestormind
                            visualizes statistical data in easily consumable PPT
                            format.
                          </p>
                        </div>
                      </div>
                      <div className="item">
                        <div className="processContentPanel">
                          <div className="number">06</div>
                          <div className="processTitle">Infographics </div>
                          <p>
                            Our designers use the right color, layout, and
                            narrative to tell the a story for academics,
                            business campaigns, data analysts, and scientists.
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
                    onSubmit={handleFormSubmit}
                    validationSchema={validationSchema}
                  >
                    {({
                      handleChange,
                      handleSubmit,
                      touched,
                      errors,
                      values,
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
                              id={
                                touched &&
                                touched.phone &&
                                errors &&
                                errors.phone
                                  ? "invalid"
                                  : ""
                              }
                              type="text"
                              className="formControl"
                            />
                            {/*<ErrorMessage component="div" className="text-danger" name="phone" />*/}
                          </div>
                        </div>
                        <div className="input-form">
                          <div className="label">Email</div>
                          <div className="input-filed">
                            <Field
                              name="email"
                              id={
                                touched &&
                                touched.email &&
                                errors &&
                                errors.email
                                  ? "invalid"
                                  : ""
                              }
                              type="email"
                              className="formControl"
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
                                touched && touched.name && errors && errors.name
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
                    Avail the unique
                    <br />
                    and stunning graphic designs!
                  </div>
                  <div className="smallText">
                    We value the aesthetic aspects of your brand and business.
                    Our designers work by making fusion of color, text and
                    texture to deliver outstanding graphics.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
}

export default withNewsletterAddress(GraphicsD);
// class graphicsD extends Component {
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
//                          <small>Graphics Design</small>
//                             <h1>Graphics Design <br/>
//                             Where experience meets
//                             innovation</h1>
//                             <p>We understand that projects come in all shapes and sizes. As trusted partners, our team of experts are here as an extension of your working team to ensure that your projects are met on time and budget.</p>
//                         </div>
//                         <div className="servicesImageHalfBox">
//                             <img src="assets/img/graphics-design.png" alt=""/>
//                         </div>
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
//                                         <img src="assets/img/photoshop-cc.svg" />
//                                         </div>
//                                         <div className="stackTitle"> Photoshop</div>
//                                     </div>
//                                 </li>
//                                 <li>
//                                     <div className="stackBox">
//                                         <div className="icon">
//                                         <img src="assets/img/adobe-illustrator-cc.svg" />
//                                         </div>
//                                         <div className="stackTitle"> illustrator</div>
//                                     </div>
//                                 </li>
//                                 <li>
//                                     <div className="stackBox">
//                                         <div className="icon">
//                                         <img src="assets/img/lightroom-cc.svg" />
//                                         </div>
//                                         <div className="stackTitle">Lightroom</div>
//                                     </div>
//                                 </li>
//                                 <li>
//                                     <div className="stackBox">
//                                         <div className="icon">
//                                         <img src="assets/img/premiere-cc.svg" />
//                                         </div>
//                                         <div className="stackTitle">Premiere</div>
//                                     </div>
//                                 </li>
//                             </ul>
//                         </div>
//                     </div>
//                 </section>

//                 <section className="our-experts">
//                     <div className="container">
//                     <div className="left">
//                     <h2 className="light">Have an awesome <br/><strong>Graphics Design idea </strong> and not sure <br/>how to get started?</h2>
//                     </div>
//                     <div className="right">
//                     <Link to="/contact-us" className="btn-light btn-icon">TALK TO OUR EXPERTS </Link>
//                     </div>
//                     </div>
//                 </section>

//                 <section className="process">
//                     <div className="container">
//                         <div className="processBox">
//                             <div className="row">
//                                 <div className="col-12 col-sm-12 col-md-6 col-xl-6 col-lg-6">
//                                     <div className="ProcessContent">
//                                         <h3>Our<br/> Graphics Design<br/> process</h3>
//                                         <p>We have delivered result-driven iOS application development solutions across industry
//                                             verticals that have helped our clients to achieve their desired digital goals. Be it prototyping,
//                                             application architecture or UI/UX experience; we deliver perfection at every stage.</p>
//                                     </div>
//                                 </div>
//                                 <div className="col-12 col-sm-12 col-md-6 col-xl-6 col-lg-6">
//                                     <div className="processSlider">
//                                         <div className="webIcon">
//                                         <img src="assets/img/graphics-slider.svg" />
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
//                 <Portfolio/>


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
//                                             Graphics Design idea and not sure<br/>
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
// export default graphicsD;