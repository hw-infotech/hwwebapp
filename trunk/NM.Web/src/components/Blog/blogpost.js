import React, { Component } from 'react';
import NavBar from '../Layout/Navbar';
import Footer from '../Layout/Footer';
import './blog.css';
import Footer_new from '../Layout/Footer_new';
import { Link } from "react-router-dom";
class Blogpost extends Component {
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
               <div className="post">
                  <div className="date">
                     <h4>Jul</h4>
                     <h2>21</h2>
                     <h4>2020</h4>
                  </div>
                  <div className="title">
                     <h1><a href="">Difference Between: Digitalization, Digitization and Digital Transformation</a></h1>
                    </div>
                    <div className="comments">
                     <ul>
                        <li> <i>  </i> <a href="">78</a> </li>
                        <li> <i>  </i> <a href="">0</a> </li>
                     </ul>
                  </div>
                  <div className="clearfix"></div>

                  <div className="post_image"><a href="#">
                     <img  src="assets/img/about-banner.jpg"/></a>
                  </div>
                  <div className="post_content">
                    <h2>Improving your Shopify SEO</h2>

                     <p> Digitalization, Digitization and Digital Transformation are the trending terms nowadays. But are these words similar or do they 
                         have any difference. What is the importance of these terms and how they are used?...
                     </p>

                     <p> Digitalization, Digitization and Digital Transformation are the trending terms nowadays. But are these words similar or do they 
                         have any difference. What is the importance of these terms and how they are used?...
                     </p>
                     <p> Digitalization, Digitization and Digital Transformation are the trending terms nowadays. But are these words similar or do they 
                         have any difference. What is the importance of these terms and how they are used?...
                     </p>
                     <p> Digitalization, Digitization and Digital Transformation are the trending terms nowadays. But are these words similar or do they 
                         have any difference. What is the importance of these terms and how they are used?...
                     </p>
                     <p> Digitalization, Digitization and Digital Transformation are the trending terms nowadays. But are these words similar or do they 
                         have any difference. What is the importance of these terms and how they are used?...
                     </p>

                     <h4>Understanding Shopify SEO.</h4>

                     <p>SEO (search engine optimization) is that the series of tactics you employ to urge search engines to spot your site as a helpful 
                         solution to their users’ problems.</p>

                         <p>These techniques are often anything from creating a positive user experience to developing meaningful content.</p>

                         <p>Shopify SEO may be a little different than other website SEO, though.
After all, you’re not just optimizing content. You’re optimizing product listings.</p>

<p>This can present some unique problems which will negatively affect your search rankings.</p>



                        <h3>Optimize Your Store’s Structure</h3>
                        <p>You walk into a brick-and-mortar store and therefore the very first thing you see is products strewn everywhere the ground .</p>

                        <p>   There are not any signs to direct you to any single department, and you can’t find an employee to invite help. ?</p>

                        <p>     Your first instinct is to bail, right?</p>

                        <p>   It’s the same for Shopify customers.</p>

                        <p>   When someone visits your online shop, they need to be ready to find items easily.
                            There should be order and sense to the structure of your store.
                            Create a positive user experience on your site by organizing its contents into a couple of simplified categories.</p>

                            <p>    Don’t take customers too faraway from the house page. Nobody wants to urge lost during a labyrinth of links as they struggle to seek out one product.
                            Consider a Home Page  Category  Product Page structure.</p>

                            <p>    These features give your site credibility, connect customers to your store, and help build trust with your prospects.</p>
                    
                  </div>



                  <div className="subscriptionPlan">
                      <div className="container">
                          <div className="subBox">
                              <div className="labelIcon"> 
                              <img src="https://www.brisklogic.co/wp-content/uploads/2020/05/brisklogic-newsletter.png" className="lazyloaded" data-ll-status="loaded"/>
                                  </div>
                                  <div className="headings">
                                      <h4>Subscribe to Newsletter</h4>
                                      <p>Subscribe to be the first to hear about updates, tips and recommendations!</p>
                                      </div>
                                      <div className="newsletterPlan">
                                          <div className="tnp tnp-subscription-minimal ">
                                              <form action="" method="post">
                                                  
                                                  <input className="tnp-email" type="email" required="" name="ne" value="" placeholder="Email"/>
                                                  <input className="tnp-submit" type="submit" value="Subscribe"></input>
                                                      
                                                          </form>
                                                          </div>
                                                          </div>
                                                          </div>
                                                          </div>
                                                          </div>
                  
               </div>

               

            </div>
            <div id="secondary" className="widget-area rightPanel" role="complementary" aria-label="Blog Sidebar">
               <div className="inner">
                  <form role="search" method="get" className="search-form searchForm" action="">
                     <div className="wrap">
                        <label for="search-form-60b9d7068e4c0">
                        <span className="screen-reader-text">Search for:</span>
                        </label>
                        <input type="search" id="search-form-60b9d7068e4c0" className="search-field" placeholder="Search …" value="" name="s"/>
                        <input name="" value="" type="submit"/>
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
   <Footer_new/>
</div>
)
}
}
export default Blogpost;