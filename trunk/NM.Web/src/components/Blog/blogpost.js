import React, { Component, useState } from 'react';
import './blog.css';
import { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { Field, Formik } from 'formik';
import * as Yup from 'yup'
import { useDispatch } from 'react-redux';
import { subscribeNewsletter } from '../../Redux/Action/Actionfunction';
import Dashboard from '../../layout/dashboard';
import RightPannel from './rightPanel';
import NewsLetter from './NewsLetter';
import swal from 'sweetalert';

const Blogpost = ({ local, setLocal }) => {
  const dispatch = useDispatch()
  const [newsletter1, setNewsLetter1] = useState()

  const handleNewsChange = (e) => {
    const { name, value } = e.target
    setNewsLetter1(value)
  }
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'smooth' }); }, [])
  // this changes the scrolling behavior to "smooth"

  const handleFormSubmit = (values, { resetForm }) => {
    console.log("values ", values.email);
    dispatch(subscribeNewsletter(values.email))
    // notify()
    resetForm()
  }

   const notify = () =>
     toast.success("Thanks for subscription", {
       position: "top-right",
       autoClose: 5000,
       hideProgressBar: true,
       closeOnClick: true,
       pauseOnHover: true,
       draggable: true,
       progress: undefined,
     });

  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email format').required('Required'),
  })

const emailValidation = () => {
  const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  return !(!newsletter1 || regex.test(newsletter1) === false);
};
  const newsletterEmail = (e)=>{
     const { name, value } = e.target;
     setNewsLetter1(value);
    }
    console.log("newsletter1",newsletter1);
  const sendNewsletterEmail= ()=>{
    if (newsletter1 === "" || !emailValidation()) {
      swal({
        text: "Enter valid Email",
        title: "Warning",
        icon: "warning",
      });
    } else {
      dispatch(subscribeNewsletter(newsletter1));
      // console.log("email", dispatch(subscribeNewsletter(newsletter1)));
      document.getElementById("blogEmail").value = "";
    }
  }

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
                  <h4>April</h4>
                  <h2>6</h2>
                  <h4>2022</h4>
                </div>
                <div className="title">
                  <h1>
                    <a href="">
                      Impact of digital transformation in financial services
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
                    <img src="assets/img/blogBanners/digital-transformation-financial-services.jpg" />
                  </a>
                </div>
                <div className="post_content">
                  <p>
                    In the face of pandemic-driven disruption, the financial
                    services industry, like many others, has had to adapt and
                    speed its digital transformation activities. With consumer
                    demand for increasingly digital, frictionless, and
                    customized experiences increasing, businesses must take an
                    integrated strategy to technology-driven transformation—one
                    that maintains the customer at the center while modernizing
                    to secure long-term development. How can your financial
                    institution not only satisfy but also shape these changing
                    expectations in order to prosper in the human-centered
                    future of financial services? Learn how strategic digital
                    transformation of finance can help businesses enhance
                    customer experiences, staff skills, and operational
                    efficiencies, resulting in a higher bottom line that
                    combines people and profit.
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

                  <h2>
                    What does it mean to go through a digital transformation?
                  </h2>

                  <p>
                    A digital transformation for finance uses digital technology
                    to improve existing processes or introduce new ways of
                    carrying out corporate tasks, resulting in a better customer
                    experience and improved conversion rates.
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

                  <h3>What does it mean to be digitally transformed?</h3>

                  <div className="post_image m-0 mb-2">
                    <a href="#">
                      <img src="assets/img/blogBanners/digitally-transformed.jpg" />
                    </a>
                  </div>
                  <p>
                    The use of digital technology to enhance existing processes
                    or introduce new methods of carrying out corporate duties,
                    resulting in a better customer experience and higher
                    conversion rates, is known as digital transformation.
                    Automated services, including purchase orders, invoice
                    production, KYC verification, and money transfer, have
                    increased the productivity and efficiency of financial
                    institutions.
                  </p>

                  <ul>
                    <li>
                      <b>Improved performance:</b> Processes like a budget
                      prediction to conclude month-end cycles on time become
                      more accessible and faster thanks to Big Data analytics
                      and other Machine Learning techniques.
                    </li>
                    <li>
                      <b>Functions based on intuition: </b>The goal of
                      artificial intelligence and data analysis is to deliver
                      insights into financial models based on the information
                      gathered.
                    </li>
                  </ul>

                  <h3>Challenges of digital transition</h3>

                  <p>
                    The globe has progressed to the global era of digitization
                    due to a paradigm change in technological breakthroughs.
                    Innovative technologies are causing a constant change in
                    every industry today. Smart use of technology, such as
                    employing mobile phones to automate everyday tasks, data
                    analysis for extracting insights, and other various use
                    cases, has become a vital part of our daily life.
                  </p>

                  <p>
                    The adoption of such breakthrough technology results in
                    digital transformation and the finance function. In finance,
                    digital transformation refers to drastically redesigning
                    financial services using technology to improve the present
                    system.
                  </p>

                  <ul>
                    <li>Systems from the past:</li>
                  </ul>

                  <p>
                    Moving from legacy to new technology infrastructure and
                    digital competence necessitates significant expenditures and
                    costs.
                  </p>

                  <ul>
                    <li>Compliance and security:</li>
                  </ul>

                  <p>
                    Banks and conventional financial institutions, unlike
                    fintech and other new financial actors, face considerable
                    security risks owing to large amounts of personal data and
                    transaction records, making it difficult to implement
                    changes while fulfilling compliance standards.
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
                    Changes in workforce and workplace culture are crucial as
                    the talent model shifts and rely on data scientists and
                    analysts, requiring employees to upskill. Time, planning,
                    clear objectives, and communication are all required in this
                    endeavor.
                  </p>

                  <h6>Competition:</h6>
                  <p>
                    Customers deal directly with fintech and emerging online
                    financial companies like Amazon, Google, and Facebook,
                    leaving banks out of the process. On the other hand, banks
                    are more secure and regulated, providing them an advantage
                    when it comes to becoming digital.
                  </p>
                  <p>
                    While overcoming these issues in the early stages requires a
                    lot of time and work, digital transformation in Finance
                    opens the door to stabilizing and securing an organization's
                    market position.
                  </p>
                  <p>
                    <b>
                      The Financial Sector's Digital transformation: What Does
                      It Mean?
                    </b>
                  </p>
                  <p>
                    We'll look at a few areas where digital transformation can
                    make a big difference.
                  </p>

                  <h6>Improves Agility :</h6>
                  <p>
                    It enhances the financial company's capacity to respond
                    effectively to disruptions based on previous events and
                    experiences. Financial institutions can develop novel
                    solutions based on actionable data.
                  </p>

                  <h6>Enhances the risk assessment :</h6>
                  <p>
                    The financial industry is heavily regulated, and every
                    finance business must hold and disclose consumer data with
                    the highest level of security. Improved risk assessment can
                    be aided by digital transformation.
                  </p>

                  <h6>Collaboration is improved. :</h6>
                  <p>
                    Digital transformation solutions may help companies increase
                    communication and cooperation across divisions. It is simple
                    to collaborate to achieve a common objective using advanced
                    operational models.
                  </p>

                  <p>
                    The influence of digital transformation may be seen in any
                    form, whether it's a digital payment solution or a fintech
                    solution. Let's take a closer look at the digital
                    transformation trends affecting the financial sector and the
                    implications for traditional financial services.
                  </p>

                  <h3>
                    The Fintech Sector's Impact on Digital transformation Trends
                  </h3>

                  <div className="post_image m-0 mb-2">
                    <a href="#">
                      <img src="assets/img/blogBanners/digitally-transformed-trend.jpg" />
                    </a>
                  </div>

                  <p>
                    All developing technologies beneficial for banks and other
                    financial organizations are included in the fintech or
                    financial technology industry. The fintech industry has
                    revolutionized traditional financial services, from ATMs to
                    the latest trend of open banking app development.
                  </p>
                  <p>
                    The banking sector may automate many company procedures and
                    improve the client experience by integrating digital
                    transformation technologies. The fintech domain gives a
                    helping hand to the BFSI industry when it comes to
                    operational difficulties like budgeting, customer
                    assistance, and fraud detection.
                  </p>
                  <p>
                    This is one of the reasons why many financial institutions
                    have begun to integrate FinTech into their current systems.
                    Fintech is expected to rise by 25 to 30 percent between 2019
                    and 2025, according to official projections. The financial
                    business is growing internationally, primarily to digital
                    transformation trends.
                  </p>
                  <p>
                    <b>
                      The following are the most important digital
                      transformation trends affecting the fintech industry:
                    </b>
                  </p>
                  <p>
                    Like many others, the financial services business is
                    undergoing fast transformation, notably in digital.
                    Marketers are paving their route with unique, creative, and
                    new concepts. As a result, companies are beginning to see
                    the value of digital for engaging customers on the outside
                    and improving internal procedures.
                  </p>
                  <h5>AI-assisted cybersecurity</h5>
                  <p>
                    Leading financial service businesses credit 19 percent
                    monetary growth to their AI projects, according to a study
                    paper titled "Why AI is the Future of Financial Services."
                    In conjunction with Machine Learning (ML) and NLP (Natural
                    Language Processing) ideas, AI has revolutionized financial
                    procedures.
                  </p>
                  <p>
                    However, it plays a critical role in identifying and
                    forecasting fraud. Credit card firms and lending
                    institutions enlist the assistance of an AI app development
                    firm to obtain innovative solutions for conducting
                    background checks and meeting regulatory requirements.
                  </p>
                  <p>
                    Furthermore, advanced AI efficiently protects losses
                    resulting from rising cybercrime. By giving actionable data
                    to the company's management, this technology also helps to
                    improve the customer experience. In conjunction with other
                    developing technologies, AI has the potential to improve
                    crucial processes in the finance business.
                  </p>

                  <h5>Blockchain-based transformation</h5>
                  <p>
                    Blockchain is a game-changing technology that underpins
                    cryptocurrencies. However, as a powerful technology,
                    blockchain can revolutionize financial businesses' core
                    procedures efficiently. This is why $552 million has been
                    spent on this technology by financial service companies.
                    Blockchain and its related technologies have a lot of
                    potentials to expand and change the financial services
                    industry in the future.
                  </p>
                  <p>
                    Data and smart contracts may be audited using a centralized,
                    secure ledger system based on blockchain technology. It also
                    boosts user or consumer confidence by enhancing transparency
                    and lowering the chance of human mistakes. As a result,
                    blockchain technology is used by numerous financial
                    organizations, including microfinance firms and even stock
                    exchanges.
                  </p>

                  <h5>Chatbots for a Personalized Experience</h5>
                  <p>
                    While providing quick and secure digital payment options, a
                    personalized experience is essential. People prefer to
                    utilize applications that provide a great user experience by
                    providing all the required features and smooth
                    functionality. Chatbots powered by AI is beneficial for
                    providing a customized experience.
                  </p>
                  <ul>
                    <li>
                      These chatbots may operate without human interaction 24
                      hours a day, seven days a week, and quickly provide
                      clients with all relevant information.
                    </li>
                    <li>
                      Advanced chatbots can provide consumers with a human-like
                      conversation experience, fix difficulties, and receive
                      feedback. Fintech organizations may use AI technology to
                      gather data and analyze it in order to serve their
                      consumers better.
                    </li>
                    <li>
                      Chatbots may be used by banks, financial institutions, and
                      even insurance firms to provide better services and
                      assistance to their consumers.
                    </li>
                    <li>
                      Chatbots will become more clever in the coming years as
                      they digest more data in less time.
                    </li>
                  </ul>

                  <h5>Disruptive Technologies as a Source of Innovation</h5>
                  <p>
                    Consider PayPal, Google Pay, and ApplePay as examples. All
                    of them are instances of cutting-edge digital payment
                    methods. These eWallets or mobile wallet programs have
                    quickly gained traction as customers' paradigm shifts from
                    old, inconvenient banking methods to easy digital services.
                    The success of these innovative products has prompted a slew
                    of fintech businesses to develop similar user-friendly
                    online transaction solutions.
                  </p>
                  <p>
                    As a revolutionary concept, we may anticipate open banking
                    to bring upheaval in the fintech sector next year. Other
                    disruptive technologies, including the Internet of Things,
                    can bring breakthrough finance solutions to the market.
                  </p>

                  <h6>Concluding Lines</h6>
                  <p>
                    The integration of digital technology into all aspects of a
                    business is known as digital transformation. It has a
                    significant impact on the way a company runs. The impact of
                    digital transformation in financial services may be found in
                    a variety of industries: It helps firms to upgrade outdated
                    processes, streamline operations, improve security, and
                    boost profitability.
                  </p>
                  <p>
                    In a nutshell, impact of digital transformation financial
                    services industry trends is having a big influence on the
                    fintech industry. Through fintech app development, banks and
                    other financial institutions worldwide have begun to reap
                    the benefits of digital transformation and automation.
                    Traditional financial service companies must adopt new
                    business models in order to alter their operations and stay
                    ahead of the competition.
                  </p>
                  <p>
                    The financial services industry is going through a massive
                    digital shift. The way financial services businesses
                    function and how their audits are managed is being
                    transformed by new technology.
                  </p>
                </div>

              <NewsLetter/>
              </div>
            </div>

            <RightPannel />
          </div>
        </div>
      </div>
    </Dashboard>
  );
}
export default Blogpost