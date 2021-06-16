import React, { Component } from 'react';
import NavBar from '../Layout/Navbar';
import Footer from '../Layout/Footer';
import './blog.css';
import Footer_new from '../Layout/Footer_new';
import { Link } from "react-router-dom";
class BlogList extends Component {
componentDidMount = () => {
window.scrollTo({ top: 0, behavior: 'smooth' });
}// this changes the scrolling behavior to "smooth"
render() { 
return (
<div>
   <NavBar />
   <div className="blogContant">
      <div className="container">
         <div className="whiteWrap">
            <div className="leftPanel">
               <div class="post">
                  <div class="date">
                     <h4>Jul</h4>
                     <h2>21</h2>
                     <h4>2020</h4>
                  </div>
                  <div class="title">
                     <h1><a href="">Difference Between: Digitalization, Digitization and Digital Transformation</a></h1>
                  </div>
                  <div class="post_image"><a href="#">
                     <img  src="assets/img/about-banner.jpg"/></a>
                  </div>
                  <div class="post_content">
                     <p> Digitalization, Digitization and Digital Transformation are the trending terms nowadays. But are these words similar or do they 
                         have any difference. What is the importance of these terms and how they are used?...
                     </p>
                     <a class="link" href="#">[continue...]</a>
                  </div>
                  <div class="comments">
                     <ul>
                        <li> <i>  </i> <a href="">78</a> </li>
                        <li> <i>  </i> <a href="">0</a> </li>
                     </ul>
                  </div>
               </div>

               <div class="post">
                  <div class="date">
                     <h4>Jul</h4>
                     <h2>21</h2>
                     <h4>2020</h4>
                  </div>
                  <div class="title">
                     <h1><a href="">How To Use Shopify SEO To Desire?</a></h1>
                  </div>
                  <div class="post_image"><a href="#">
                     <img  src="assets/img/post-1.png"/></a>
                  </div>
                  <div class="post_content">
                     <p>Improving your Shopify SEO The retail industry has seen an enormous shift in recent years as more people address the web for 
                         his or her shopping needs. Between convenience (who doesn’t like shopping in their pajamas?) and necessity (a global pandemic...
                     </p>
                     <a class="link" href="#">[continue...]</a>
                  </div>
                  <div class="comments">
                     <ul>
                        <li> <i>  </i> <a href="">78</a> </li>
                        <li> <i>  </i> <a href="">0</a> </li>
                     </ul>
                  </div>
               </div>

               <ul class="pagination">
                  <li><a href="#" class="selected">1</a></li>
                  <li><a href="#">2</a></li>
                  <li><a href="#">3</a></li>
                  <li><a href="#">4</a></li>
                  <li><a href="#">5</a></li>
                  <li><small>...</small></li>
               </ul>
            </div>
            <div id="secondary" class="widget-area rightPanel" role="complementary" aria-label="Blog Sidebar">
               <div class="inner">
                  <form role="search" method="get" class="search-form searchForm" action="">
                     <div class="wrap">
                        <label for="search-form-60b9d7068e4c0">
                        <span class="screen-reader-text">Search for:</span>
                        </label>
                        <input type="search" id="search-form-60b9d7068e4c0" class="search-field" placeholder="Search …" value="" name="s"/>
                        <input name="" value="" type="submit"/>
                     </div>
                  </form>
                  <div class="listing-right">
                     <h3>Popular</h3>
                     <ul>
                        <li>
                           <a href="">Assessing Global Unemployment and Hiring Trends Amid COVID-19</a>
                           <span class="datepost">July 21, 2020</span>
                        </li>
                        <li>
                           <a href="">Secret to Making People Open Emails Faster and Frequently DEBUNKED!</a>
                           <span class="datepost">August 23, 2013</span>
                        </li>
                        <li>
                           <a href="">Social Media Presence – Why your business deserves it?</a>
                           <span class="datepost">August 26, 2013</span>
                        </li>
                        <li>
                           <a href="">When Sun Kissed Beaches and Spirit of Nestormind Came Together</a>
                           <span class="datepost">November 18, 2014</span>
                        </li>
                        <li>
                           <a href="">Nestormind Bags the Most Promising Web Design and Development Company Award</a>
                           <span class="datepost">April 29, 2015</span>
                        </li>
                     </ul>
                  </div>
                  <div id="fatbit_category_widget-2" class="widget listing-right">
                     <div class="top">
                        <h3 class="widget-title">CATEGORIES
                        </h3>
                     </div>
                     <div class="middle">
                        <ul class="categories">
                           <li><a href="">Nestormind  <span>(1)</span></a></li>
                           <li><a href="#">Nestormind web design company <span>(1)</span></a></li>
                           <li><a href="">Nestrolife <span>(8)</span></a></li>
                           <li><a href="#"> <span>(14)</span></a></li>
                           <li><a href="#">Nestormind Hiring <span>(1)</span></a></li>
                           <li><a href="#">Nestormind Team <span>(10)</span></a></li>
                           <li><a href="#">Nestormind web design company <span>(5)</span></a></li>
                           <li><a href="#">Nestormind Women’s Day <span>(1)</span></a></li>
                           <li><a href="#">Nestormind100 <span>(1)</span></a></li>
                           <li class="noBorderBottom"><a href="#">Celebration <span>(3)</span></a></li>
                        </ul>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
   <Footer_new/>
</div>
)
}
}
export default BlogList;