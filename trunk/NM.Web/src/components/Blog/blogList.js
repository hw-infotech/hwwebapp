import React from 'react';
import './blog.css';
import { Link } from "react-router-dom";
import { useEffect } from 'react';
import Dashboard from '../../layout/dashboard';
import RightPannel from './rightPanel';

const BlogList = () => {

  useEffect(() => { window.scrollTo({ top: 0, behavior: 'smooth' }); }, [])
  // this changes the scrolling behavior to "smooth"

  return (
    <Dashboard>
      <div className="blogContant">
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
                    <a href="#">
                      Impact of digital transformation in financial services
                    </a>
                  </h1>
                </div>
                <div className="post_image">
                  <a href="#">
                    <img alt='' src="assets/img/blogBanners/digital-transformation-financial-services.jpg" />
                  </a>
                </div>
                <div className="post_content">
                  <p>
                    In the face of pandemic-driven disruption, the financial
                    services industry, like many others, has had to adapt and
                    speed its digital transformation activities. With consumer
                    demand for increasingly digital, frictionless, and...
                  </p>
                  <Link
                    className="link"
                    onClick={() => {
                      localStorage.setItem("blogId", 0);
                    }}
                    to="/blog/Impact-of-digital-transformation-in-financial-services"
                  >
                    [continue...]
                  </Link>
                </div>
                <div className="comments">
                  <ul>
                    <li>
                      <i class="bi bi-eye"></i> <a href="#">78</a>
                    </li>
                    <li>
                      <i class="bi bi-hand-thumbs-up"></i> <a href="#">0</a>
                    </li>
                  </ul>
                </div>
                <div className="post">
                  <div className="date">
                    <h4>Mar</h4>
                    <h2>21</h2>
                    <h4>2022</h4>
                  </div>

                  <div className="title">
                    <h1>
                      <a href="">
                        Why New Businesses Need the Support of Web Development
                        Companies?
                      </a>
                    </h1>
                  </div>
                  <div className="post_image">
                    <a href="#">
                      <img src="assets/img/blogBanners//websitedeveopmentservices.png" />
                    </a>
                  </div>
                  <div className="post_content">
                    <p>
                      The research found that 46% of new firms do not have a
                      website. On the contrary, 97% of individuals use the
                      internet to locate a local company. So, if your company
                      doesn't have a website, those 97/100 individuals won't be
                      able to find you and won't know your identity. This post
                      will discuss why every new business needs a website and
                      why having an online presence is becoming increasingly
                      important for businesses of all kinds....
                    </p>
                    <Link
                      className="link"
                      to="/blog/Why-New-Businesses-Need-the-Support-of-Web-Development-Companies?"
                      onClick={() => {
                        localStorage.setItem("blogId", 1);
                      }}
                    >
                      [continue...]
                    </Link>
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
                </div>
              </div>

              <div className="post">
                <div className="date">
                  <h4>Feb</h4>
                  <h2>21</h2>
                  <h4>2022</h4>
                </div>

                <div className="title">
                  <h1>
                    <a href=""> How automation reduce your management cost?</a>
                  </h1>
                </div>
                <div className="post_image">
                  <a href="#">
                    <img src="assets/img/blogBanners//automationreducemanagement.png" />
                  </a>
                </div>

                <div className="post_content">
                  <p>
                    Intelligent Automation is becoming an increasingly important
                    aspect of how we work, putting an end to the days of
                    manually processing data and filling out forms....
                  </p>
                  <Link
                    className="link"
                    to="/blog/How-automation-reduce-your-management-cost?"
                    onClick={() => {
                      localStorage.setItem("blogId", 2);
                    }}
                  >
                    [continue...]
                  </Link>
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
              </div>

              <ul className="pagination">
                <li>
                  <a href="#" className="selected">
                    1
                  </a>
                </li>
                <li>
                  <a href="#">2</a>
                </li>
                <li>
                  <a href="#">3</a>
                </li>
                <li>
                  <a href="#">4</a>
                </li>
                <li>
                  <a href="#">5</a>
                </li>
                <li>
                  <small>...</small>
                </li>
              </ul>
            </div>
            <RightPannel />
          </div>
        </div>
      </div>
    </Dashboard>
  );
}
export default BlogList