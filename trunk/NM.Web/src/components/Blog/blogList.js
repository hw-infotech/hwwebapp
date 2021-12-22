import React, { Component } from 'react';
import NavBar from '../Layout/Navbar';
import Footer from '../Layout/Footer';
import './blog.css';
import Footer_new from '../Layout/Footer_new';
import { Link } from "react-router-dom";
import Dashboard from '../dashboard';
import { useEffect } from 'react';

const BlogList = () => {

   useEffect(() => { window.scrollTo({ top: 0, behavior: 'smooth' }); }, [])
   // this changes the scrolling behavior to "smooth"

   return <Dashboard>
      <div className="blogContant">
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
                        <h1><a href="">Difference Between: Digitalization, Digitization and Digital Transformation</a></h1>
                     </div>
                     <div className="post_image"><a href="#">
                        <img src="assets/img/about-banner.jpg" /></a>
                     </div>
                     <div className="post_content">
                        <p> Digitalization, Digitization and Digital Transformation are the trending terms nowadays. But are these words similar or do they
                           have any difference. What is the importance of these terms and how they are used?...
                        </p>
                        <Link className="link" to="/blog-post">[continue...]</Link>
                     </div>
                     <div className="comments">
                        <ul>
                           <li> <i>  </i> <a href="">78</a> </li>
                           <li> <i>  </i> <a href="">0</a> </li>
                        </ul>
                     </div>
                  </div>

                  <div className="post">
                     <div className="date">
                        <h4>Jul</h4>
                        <h2>21</h2>
                        <h4>2020</h4>
                     </div>
                     <div className="title">
                        <h1><a href="">How To Use Shopify SEO To Desire?</a></h1>
                     </div>
                     <div className="post_image"><a href="#">
                        <img src="assets/img/post-1.png" /></a>
                     </div>
                     <div className="post_content">
                        <p>Improving your Shopify SEO The retail industry has seen an enormous shift in recent years as more people address the web for
                           his or her shopping needs. Between convenience (who doesn’t like shopping in their pajamas?) and necessity (a global pandemic...
                        </p>
                        <Link className="link" to="/blog-post">[continue...]</Link>
                     </div>
                     <div className="comments">
                        <ul>
                           <li> <i>  </i> <a href="">78</a> </li>
                           <li> <i>  </i> <a href="">0</a> </li>
                        </ul>
                     </div>
                  </div>

                  <ul className="pagination">
                     <li><a href="#" className="selected">1</a></li>
                     <li><a href="#">2</a></li>
                     <li><a href="#">3</a></li>
                     <li><a href="#">4</a></li>
                     <li><a href="#">5</a></li>
                     <li><small>...</small></li>
                  </ul>
               </div>
               <div id="secondary" className="widget-area rightPanel" role="complementary" aria-label="Blog Sidebar">
                  <div className="inner">
                     <form role="search" method="get" className="search-form searchForm" action="">
                        <div className="wrap">
                           <label htmlFor="search-form-60b9d7068e4c0">
                              <span className="screen-reader-text">Search for:</span>
                           </label>
                           <input type="search" id="search-form-60b9d7068e4c0" className="search-field" placeholder="Search …" />
                        </div>
                     </form>
                     <div className="listing-right">
                        <h3>Popular</h3>
                        <ul>
                           <li>
                              <a href="">Assessing Global Unemployment and Hiring Trends Amid COVID-19</a>
                              <span className="datepost">July 21, 2020</span>
                           </li>
                           <li>
                              <a href="">Secret to Making People Open Emails Faster and Frequently DEBUNKED!</a>
                              <span className="datepost">August 23, 2013</span>
                           </li>
                           <li>
                              <a href="">Social Media Presence – Why your business deserves it?</a>
                              <span className="datepost">August 26, 2013</span>
                           </li>
                           <li>
                              <a href="">When Sun Kissed Beaches and Spirit of Nestormind Came Together</a>
                              <span className="datepost">November 18, 2014</span>
                           </li>
                           <li>
                              <a href="">Nestormind Bags the Most Promising Web Design and Development Company Award</a>
                              <span className="datepost">April 29, 2015</span>
                           </li>
                        </ul>
                     </div>
                     <div id="fatbit_category_widget-2" className="widget listing-right">
                        <div className="top">
                           <h3 className="widget-title">CATEGORIES
                           </h3>
                        </div>
                        <div className="middle">
                           <ul className="categories">
                              <li><a href="">Nestormind  <span>(1)</span></a></li>
                              <li><a href="#">Nestormind web design company <span>(1)</span></a></li>
                              <li><a href="">Nestrolife <span>(8)</span></a></li>
                              <li><a href="#"> <span>(14)</span></a></li>
                              <li><a href="#">Nestormind Hiring <span>(1)</span></a></li>
                              <li><a href="#">Nestormind Team <span>(10)</span></a></li>
                              <li><a href="#">Nestormind web design company <span>(5)</span></a></li>
                              <li><a href="#">Nestormind Women’s Day <span>(1)</span></a></li>
                              <li><a href="#">Nestormind100 <span>(1)</span></a></li>
                              <li className="noBorderBottom"><a href="#">Celebration <span>(3)</span></a></li>
                           </ul>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </Dashboard>
}
export default BlogList
// class BlogList extends Component {
//    componentDidMount = () => {
//       window.scrollTo({ top: 0, behavior: 'smooth' });
//    }// this changes the scrolling behavior to "smooth"
//    render() {
//       return (
//          <div>
//             <NavBar />

//             <Footer_new />
//          </div>
//       )
//    }
// }
// export default BlogList;