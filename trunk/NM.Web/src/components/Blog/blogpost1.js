import React, { Component, useState } from 'react';
import NavBar from '../Layout/Navbar';
import Footer from '../Layout/Footer';
import './blog.css';
import Footer_new from '../Layout/Footer_new';
import { Link } from "react-router-dom";
import { useEffect } from 'react';
import newsletter from './newsletter.png'
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
                  <h4>Jul</h4>
                  <h2>21</h2>
                  <h4>2020</h4>
                </div>
                <div className="title">
                  <h1>
                    <a href="">
                      Why New Businesses Need the Support of Web Development Companies?

                    </a>
                  </h1>
                </div>
                <div className="comments">
                  <ul>
                    <li>
                      {" "}
                      <i> </i> <a href="">78</a>{" "}
                    </li>
                    <li>
                      {" "}
                      <i> </i> <a href="">0</a>{" "}
                    </li>
                  </ul>
                </div>
                <div className="clearfix"></div>

                <div className="post_image">
                  <a href="#">
                    <img src="assets/img/blogBanners/webdevelop_design.png" />
                  </a>
                </div>
                <div className="post_content">
                  <p>
                    The research found that 46% of new firms do not have a website. On the contrary, 97% of individuals use the internet to locate a local company. So, if your company doesn't have a website, those 97/100 individuals won't be able to find you and won't know your identity. This post will discuss why every new business needs a website and why having an online presence is becoming increasingly important for businesses of all kinds.

                  </p>

                  <p>
                    There is a significant movement toward modernizing outdated
                    systems in the financial services industry and introducing
                    an agile manner of working across business units. Companies
                    are attempting to reorganize their operational models in
                    order to become more agile and efficient. To fulfill
                    consumer requests, investments in new online banking,
                    digital platforms, channel exploration, client-valued
                    insurance apps, and enhancing data quality to benefit from
                    more accurate reporting are continuing. The use of
                    technology is a vital component in making these
                    transformations possible.
                  </p>

                  <p>
                    There are millions of websites competing for your attention. How will you make your company's website more relevant and appealing in order to stand out and outperform the competition? The best way is to keep an eye out for new web development trends and integrate them as soon as possible.

                  </p>

                  <h3>The First Impression is Often the Last in Business
                  </h3>

                  <p>
                    Your website determines the way you bring clients into the funnel. As a business owner, you should know that 38% of your visitors will abandon your site if the design is unappealing. Creating a visually appealing layout that will entice potential consumers to take action is critical.

                  </p>
                  <p>People assess your website in a matter of seconds. As a result, the aesthetic components, the interaction of visuals and words, and the platform's usability must all be properly integrated.
                  </p>
                  <p>Instead, failure to make an impression with a great website provides your competitors an advantage. Because visitors will go on to other websites, you will likely miss out on valuable leads.
                  </p>
                  <p>This is when experienced web developers that can work closely with your in-house team come in handy. They have a significant impact on how potential customers view your company.
                  </p>
                  <p>Professional designers and developers collaborate to incorporate all critical components - from colors to graphics, navigation to UX – into the design so that the target audience's collective psychology is affected.
                  </p>

                  <h3>Why is web design important and what makes it good?
                  </h3>
                 

                  <div className="post_image m-0 mb-2">
                    <a href="#">
                      <img src="assets/img/blogBanners/web2.png" />
                    </a>
                  </div>
                  <p>
                    Poorly designed websites leave a negative impression on visitors. A website that has been coded correctly, on the other hand, may easily generate confidence.

                  </p>
                  <p>When it comes to developing or revamping a website for your business, you may be wondering why web design is essential and what makes it good. How do you know this, and how can you make sure you've covered all of the important website design principles?
                  </p>
                  <p>The fact is that web design and development is more than simply about aesthetics. It's one of the most important variables in determining whether a user has a positive or negative experience when exploring your site. It has a direct impact on the overall perception of your business.
                  </p>
                  <div className="post_image m-0 mb-2">
                    <a href="#">
                      <img src="assets/img/blogBanners/beaware_advantage_website.png" />
                    </a>
                  </div>
                  <b>The following are some of the advantages of website development and design:
                  </b>
                  <p>
                    The number of websites on the internet is quickly expanding today. The website's key benefit is that it is open 24 hours a day, seven days a week, and can be accessed from anywhere in the world. Any information may be gathered from a website. In order to compete with corporations, businesses must create a user-friendly website that helps them gain popularity, sell products and services, and maintain connections with clients and consumers, among other things. So, to balance your business outcomes, be aware of the advantages of Website Design & Web Development services.

                  </p>
                  <ul>
                    <li>
                      <b>	Makes Navigation Simple :</b> : For an online platform to be effective, the user must be able to navigate it easily. Users may use the search feature to find the area they want easily, and the developer should test the pages for ease of navigation regularly. This eliminates or solves problems that may make it difficult to load online pages.

                    </li>
                    <li>
                      <b>	Search engine optimization : </b>(SEO) has become an important factor to consider when it comes to websites. The user-friendliness of a website is achieved through optimization.

                    </li>
                    <li>
                      <b>	Provide visual content : </b>The owner is in charge of selecting the photographs. The amount of promotional films and photos is entirely up to the business. The main benefit of employing visual information is that it gives customers a clear idea of how the product appears. All clients do not always understand Text-based services and goods. As a result, the use of graphics makes it simple to convey the idea

                    </li>
                    <li>
                      <b>	Increase sales : </b>: Creating a website might help a company endeavor to gain more customers. More and more company owners are turning to the internet to conduct their operations. Increased sales are linked to an increase in the number of customers. It's critical to update and upgrade the website's functions, as well as to include promotions from time to time, in order to promote sales.


                    </li>
                    <li>
                      <b>	Importance of marketing and advertising techniques : </b>Marketing and advertising strategies are critical in selling a brand. As a result, website building is cost-effective. A corporation can use this web platform to publish all important information. This contains the items and services supplied and the location, pricing, and contact information. On the developer's website, he or she may easily post appealing offers.

                    </li>
                  </ul>


                  <h3>To sum it up</h3>
                 
                  <p>
                    People now spend two out of every three minutes on their mobile devices online. With the growing popularity of responsive designs, it's more crucial than ever to give mobile consumers a better experience. At the same time, you must reduce your expenses.

                  </p>

                  { /*<ul>
                    <li>Compliance and security:</li>
</ul>*/}

                  <p>
                    Working with a skilled group of web developers can help you find the best solution. A consultant's job is to help customers address problems while concentrating on the long-term development of their company.

                  </p>

                  <p>
                    User experience (UX) expectations: The goal of digital
                    transformation in the finance industry is to provide
                    consumers with better efficiency and a consistent user
                    experience across platforms. Traditional banks and
                    businesses struggle to do this because offering the proper
                    options to clients involves substantial study, effort,
                    strategy, and marketing.
                  </p>

                  <p>
                    Given the numerous advantages that a well-designed website can provide, it makes sense to enlist the help of a reputable developer.

                  </p>


                  <p>
                    Customers demand an appealing visual layout, even if a successful website is much more than simply the design. And they'll rate your company based on its appearance before reading a single word.

                  </p>

                </div>

                <div className="subscriptionPlan">
                  <div className="container">
                    <div className="subBox">
                      <div className="labelIcon">
                        <img
                          src={newsletter}
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
                                  placeholder="Email"
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