import React, { Component, useState } from 'react';
import './blog.css';
import { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { Field, Formik } from 'formik';
import * as Yup from 'yup'
import { useDispatch } from 'react-redux';
import { subscribeNewsletter } from '../../Redux/Action/Actionfunction';
import Dashboard from '../../layout/dashboard';

const Blogpost = () => {
  const dispatch = useDispatch()
  const [newsletter1, setNewsLetter] = useState()

  const handleNewsChange = (e) => {
    const { name, value } = e.target
    setNewsLetter(value)
  }

  useEffect(() => { window.scrollTo({ top: 0, behavior: 'smooth' }); }, [])
  // this changes the scrolling behavior to "smooth"

  const handleFormSubmit = (values, { resetForm }) => {
    console.log("values ", values.email);
    dispatch(subscribeNewsletter(values.email))
    // notify()
    resetForm()
  }

  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email format').required('Required'),
  })

  return (
    <Dashboard>
      <div className="blogContant">
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
          <div className="whiteWrap">
            <div className="leftPanel">
              <div className="post">
                <div className="date">
                  <h4>Feb</h4>
                  <h2>21</h2>
                  <h4>2022</h4>
                </div>
                <div className="title">
                  <h1>
                    <a href="">
                      How automation reduce your management cost?
                    </a>
                  </h1>
                </div>
                <div className="comments">
                <ul>
                <li>
                  <i class="bi bi-eye"></i> <a href="">78</a>{" "}
                </li>
                <li>
                  <i class="bi bi-hand-thumbs-up"></i> <a href="">0</a>{" "}
                </li>
              </ul>
                </div>
                <div className="clearfix"></div>

                <div className="post_image">
                  <a href="#">
                    <img src="assets/img/blogBanners/automationreducemanagement.png" />
                  </a>
                </div>
                <div className="post_content">
                  <p>
                    Intelligent Automation is becoming an increasingly important aspect of how we work, putting an end to the days of manually processing data and filling out forms.
                  </p>

                  <p>
                    Every year, the cost of conducting a business's operations rises. Experts previously estimated that firm operational expenditures double every 14 years. As a result, we can observe that the increase in expenditures is not only a few percentage points. It might be difficult for a company to stay competitive under such circumstances. That's where BPA (business process automation) comes in. Change is a never-ending process. Industries evolve often, new technology emerges, and organisations might look for ways to lower operational expenses. They can develop a variety of strategies to lower current and future expenditures.

                  </p>

                  <p>
                    There are millions of websites competing for your attention. How will you make your company's website more relevant and appealing in order to stand out and outperform the competition? The best way is to keep an eye out for new web development trends and integrate them as soon as possible.

                  </p>

                  <p>
                    Businesses now have a variety of alternatives because of the ever-changing technological world. They can automate jobs that take up the majority of their time. They will get a significant number of advantages from business system automation. This will save money for the company, but it will also make things easier for the staff. If a company decides to automate its process, it will reap several benefits from system automation.
                  </p>

                  <p>
                    The financial services sector has a strong drive toward
                    modernizing obsolete systems and adopting an agile way of
                    working across business divisions. Companies are trying to
                    restructure their operations models to become more flexible
                    and efficient. Investments in new online banking, digital
                    platforms, channel discovery, client-valued insurance apps,
                    and improving data quality to benefit from more accurate
                    reporting continue to meet customer needs. The use of
                    technology is a critical component in achieving these
                    transitions.
                  </p>

                  <h3>What are the benefits of Automation for management</h3>
                  <p>
                    Automating computer activities may be surprisingly simple and beneficial if you have the correct tools. Understanding these advantages—as well as some potential stumbling blocks—will assist you in gaining support for an operations automation project. "What do you regard as the essential benefits of an automated or unattended computer centre?" recent research by a top trade publication questioned. Cost savings, productivity, availability, dependability, and performance, were the most often mentioned advantages of operations automation.
                  </p>
                  <p>For every corporation or organization, management is one of the most tough and challenging duties. It is just as critical as the technical aspects of any business or organization. Good managerial abilities are the only way for a company to succeed. Most of an organization's revenue is spent on data management and maximizing production. A business owner chooses the most competent individual for their management team in order to improve profits.
                  </p>
                  <p>Automation is an excellent answer for management issues. It will provide us with better security than our previous management system. It is critical to automate IT management procedures in order to reduce costs and complexity.
                  </p>

                  <h3>Why Is It Important to Automate Business Procedures?
                  </h3>
                  <div className="post_image m-0 mb-2">
                    <a href="#">
                      <img src="assets/img/blogBanners/businessprocedure.png" />
                    </a>
                  </div>
                  <p>Business procedures have traditionally been difficult to optimize successfully since many of them were difficult to monitor and analyze on a timely basis. Because they lacked the human resources and data management capabilities that their bigger counterparts had, small enterprises found this business process management component (BPM) particularly difficult. Businesses of all sizes in the twenty-first century have acquired considerably better transparency into and control over their processes, thanks to digitization in general and digital transformation in particular.
                  </p>
                  <p>These features are unlocked through business process automation (BPA). BPA is leveraging automation software (such as PLANERGY's procurement software solution) to take control of high-volume, repetitive activities to enhance efficiency, accuracy, and speed. This saves money in the short term by lowering costs. Still, it also adds value by allowing team members to focus their time and talents on innovation, strategic development, and planning while still being able to act when necessary.</p>

                  <h3>The Basics of Business Process Automation
                  </h3>
                  <div className="post_image m-0 mb-2">
                    <a href="#">
                      <img src="assets/img/blogBanners/basicofbusinessprocess.png" />
                    </a>
                  </div>

                  <p>
                    Businesses should not look at Automation through rose-colored glasses before using it. Making planning and automating the entire process may be a rewarding experience. It isn't, however, the be-all and end-all of work. Automation technology must be updated regularly, and it still needs some back-end maintenance. Employees will save a significant amount of attention to their work if they have well-organized information within easy reach.

                  </p>

                  <p>
                    While no two businesses will approach business process automation in the same way, several fundamental ideas are at the heart of every implementation:

                  </p>

                  <ul>
                    <li><b>Needs Analysis:</b>It's critical to understand which aspects of your business will benefit from Automation and how integrating an automation solution will assist your company reaches its objectives before using any automation technologies.
                    </li>
                    <li><b>Integration:</b>When correctly deployed, an automation solution will not only interface easily with your existing ERP, CRM, and accounting software but will also serve as the foundation for a completely integrated software environment with centralized data management.

                    </li>
                    <li><b>Modularity:</b>: Best-in-class automation software allows both large and small enterprises to create their route to digital transformation by automating in phases as budget, strategy, and corporate culture demand.

                    </li>
                    <li><b>Accessibility:</b>: A well-implemented business process automation system anticipates the difficulties in gaining management and employee buy-in and provides both education and training.

                    </li>
                    <li><b>User-Friendliness:</b>: To efficiently streamline operations, business process automation aims to simplify and improve. In reality, this means designing automated processes as efficiently as possible while being simple enough for your team members to understand and handle if human intervention is necessary.
                    </li>
                  </ul>

                  <h3>Key Takeaways</h3>
                  <p>Finally, here are some crucial points to know concerning business automation:
                  </p>
                  <ul><li>Business automation is when a company uses technology to automate cyclical operations and tasks that would otherwise need manual labor. Organizations may save money, standardize best practices, and enhance productivity by eliminating the risk of human error with manual operations.
                  </li>
                    <li>Eliminating paper, freeing up talent for more essential activities, boosting visibility, enhancing forecasts, discovering inefficiencies, creating new sales, and the flexibility to be open for longer hours are all advantages of business automation. Business automation has several drawbacks, including a high initial investment, employment losses, and a loss of flexibility.
                    </li>
                    <li>Reduced operating expenses, greater customer service, increased productivity, increased staff morale, and enforced best practices are all advantages of business process automation.
                    </li>
                    <li>Automated software solutions have advantages: fewer costs, better efficiency, reduced risks, increased dependability, and the capacity to keep a competitive edge.
                    </li>
                    <li>Developing your automated processes with these notions in mind can help you identify and address your company's needs more quickly and efficiently.
                    </li>

                  </ul>
                  <p>Business executives and IT must work together to satisfy market expectations in today's environment. Businesses increasingly focus on establishing innovative methods to automate the entire organization rather than merely optimizing and automating a few internal business operations. As a result, business automation managers aim to create process-driven, agile programs that can swiftly adapt to changing customer requirements.
                  </p>
                </div>
                <div className="subscriptionPlan">
                  <div className="container">
                    <div className="subBox">
                      <div className="labelIcon">
                        <img
                          src={"./assets/img/blogBanners/newsletter.png"}
                          alt="image"
                          className="lazyloaded"
                          data-ll-status="loaded"
                        />
                      </div>
                      <div className="headings">
                        <h4>Subscribe to Newsletter</h4>
                        <p>
                          Subscribe to be the first to hear about updates, tips
                          and recommendations!
                        </p>
                      </div>
                      <div className="newsletterPlan">
                        <div className="tnp tnp-subscription-minimal ">
                          <Formik
                            onSubmit={handleFormSubmit}
                            initialValues={{ email: "" }}
                            validationSchema={validationSchema}
                          >
                            {({ handleSubmit, values }) => (
                              <form
                                onSubmit={(e) => {
                                  e.preventDefault();
                                  handleSubmit();
                                }}
                              >
                                <Field
                                  className="tnp-email"
                                  type="email"
                                  name="email"
                                  placeholder="Enter your email here"
                                />
                                <input
                                  className="tnp-submit"
                                  type="submit"
                                  value="Subscribe"
                                ></input>
                              </form>
                            )}
                          </Formik>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              id="secondary"
              className="widget-area rightPanel"
              role="complementary"
              aria-label="Blog Sidebar"
            >
              <div className="inner">
                <form
                  role="search"
                  method="get"
                  className="search-form searchForm"
                  action=""
                >
                  <div className="wrap">
                    <label for="search-form-60b9d7068e4c0">
                      <span className="screen-reader-text">Search for:</span>
                    </label>
                    <input
                      type="search"
                      id="search-form-60b9d7068e4c0"
                      className="search-field"
                      placeholder="Search …"
                      value=""
                      name="s"
                    />
                    <input name="" value="" type="submit" />
                  </div>
                </form>
                <div className="listing-right">
                  <h3>Popular</h3>
                  <ul>
                    <li>
                      <a href="">
                        Assessing Global Unemployment and Hiring Trends Amid
                        COVID-19
                      </a>
                      <span className="datepost">July 21, 2020</span>
                    </li>
                    <li>
                      <a href="">
                        Secret to Making People Open Emails Faster and
                        Frequently DEBUNKED!
                      </a>
                      <span className="datepost">August 23, 2013</span>
                    </li>
                    <li>
                      <a href="">
                        Social Media Presence – Why your business deserves it?
                      </a>
                      <span className="datepost">August 26, 2013</span>
                    </li>
                    <li>
                      <a href="">
                        When Sun Kissed Beaches and Spirit of Nestormind Came
                        Together
                      </a>
                      <span className="datepost">November 18, 2014</span>
                    </li>
                    <li>
                      <a href="">
                        Nestormind Bags the Most Promising Web Design and
                        Development Company Award
                      </a>
                      <span className="datepost">April 29, 2015</span>
                    </li>
                  </ul>
                </div>
                <div
                  id="fatbit_category_widget-2"
                  className="widget listing-right"
                >
                  <div className="top">
                    <h3 className="widget-title">CATEGORIES</h3>
                  </div>
                  <div className="middle">
                    <ul className="categories">
                      <li>
                        <a href="">
                          Nestormind <span>(1)</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          Nestormind web design company <span>(1)</span>
                        </a>
                      </li>
                      <li>
                        <a href="">
                          Nestrolife <span>(8)</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          {" "}
                          <span>(14)</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          Nestormind Hiring <span>(1)</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          Nestormind Team <span>(10)</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          Nestormind web design company <span>(5)</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          Nestormind Women’s Day <span>(1)</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          Nestormind100 <span>(1)</span>
                        </a>
                      </li>
                      <li className="noBorderBottom">
                        <a href="#">
                          Celebration <span>(3)</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div
                    id="fatbit_category_widget-2"
                    className="widget listing-right"
                  >
                    <div className="top">
                      <h3 className="widget-title">CATEGORIES</h3>
                    </div>
                    <div className="middle">
                      <ul className="categories">
                        <li>
                          <a href="">
                            Nestormind <span>(1)</span>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            Nestormind web design company <span>(1)</span>
                          </a>
                        </li>
                        <li>
                          <a href="">
                            Nestrolife <span>(8)</span>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            {" "}
                            <span>(14)</span>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            Nestormind Hiring <span>(1)</span>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            Nestormind Team <span>(10)</span>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            Nestormind web design company <span>(5)</span>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            Nestormind Women’s Day <span>(1)</span>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            Nestormind100 <span>(1)</span>
                          </a>
                        </li>
                        <li className="noBorderBottom">
                          <a href="#">
                            Celebration <span>(3)</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Dashboard>
  );
}
export default Blogpost