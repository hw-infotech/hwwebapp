import React from 'react'
import { Link } from 'react-router-dom';

const RightPannel = ({local,setLocal}) => {
    return (
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
                <Link
                  onClick={() => {
                    localStorage.setItem("blogId", 0);
                  }}
                  className="link"
                  to="/blog/Impact-of-digital-transformation-in-financial-services"
                >
                  Impact of digital transformation in financial services
                </Link>
                <span className="datepost">April 6, 2022</span>
              </li>
              <li>
                <Link
                  onClick={() => {
                    localStorage.setItem("blogId", 1);
                  }}
                  className="link"
                  to="/blog/Why-New-Businesses-Need-the-Support-of-Web-Development-Companies?"
                >
                  Why New Businesses Need the Support of Web Development
                  Companies?
                </Link>
                <span className="datepost">Mar 21, 2022</span>
              </li>
              <li>
                <Link
                  onClick={() => {
                    localStorage.setItem("blogId", 2);
                  }}
                  className="link"
                  to="/blog/How-automation-reduce-your-management-cost?"
                >
                  How automation reduce your management cost?
                </Link>
                <span className="datepost">Feb 21, 2022</span>
              </li>
            </ul>
          </div>
          <div
            id="fatbit_category_widget-2"
            className="widget listing-right  display_blogpost_none"
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
            <div id="fatbit_category_widget-2" className="widget listing-right">
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
    );
}

export default RightPannel