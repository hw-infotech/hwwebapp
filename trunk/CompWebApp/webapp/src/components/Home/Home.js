import React, { Component } from 'react';
import Footer from '../Layout/Footer';
import NavBar from '../Layout/Navbar';
import '../Home/Home.css';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Footer_new from '../Layout/Footer_new';

class HomeContent extends Component {
    state= {
        responsive:{
            0: {
                items: 1,
            },
            575: {
                items: 1,
            },
            767: {
                items: 1,
            },
            1000: {
                items: 1,
            },
            1440: {
                items: 1,
            },
        },
    }
  render() {





    return (
<div>
    <NavBar />
    <div class="clb-social">
        <ul class="clb-social-holder font-titles icons"> 
            <li class="clb-social-holder-follow">Follow Us</li>
            <li class="clb-social-holder-dash">–</li>
            <li><a target="_blank" href="#" class="facebook"><i className="bx bxl-facebook"></i> </a></li>
            <li><a target="_blank" href=" #" class="linkedin"><i className="bx bxl-linkedin"> </i></a></li>
            <li><a target="_blank" href="#" class="twitter"><i className="bx bxl-twitter"></i> </a></li>
            <li><a target="_blank" href="#" class="instagram"><i className="bx bxl-instagram"></i> </a></li>
            <li><a target="_blank" href="#" class="skype"><i className="bx bxl-skype"></i></a></li>
        </ul>
    </div>
    <section id="hero" className="d-flex align-items-center">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1" data-aos="fade-up" data-aos-delay="200">
            <h1>We provide the Best Solutions for your Business</h1>
            <h2>We help new and established businesses to create their unique identity through our website design and development services. We are dedicated to offering brilliant and appealing software solution experiences that connect brands to their potential customers.</h2>
            <div className="d-lg-flex">
              <a href="#about" className="w-o-btn scrollto">About Us</a>
            </div>
          </div>
          <div className="col-lg-7 order-1 order-lg-2 hero-img" data-aos="zoom-in" data-aos-delay="200">
            <img src={process.env.PUBLIC_URL +"assets/img/hind-banner.png"} className="img-fluid " alt="" />
          </div>
        </div>
      </div>
    </section>


    <section className="servicesArea">
        <div className="container">
            <div className="row">
                <div className="col-12 col-sm-12 col-md-5 col-lg-5">
                    <div className="serviceBox">
                        <p className="subTitle">Services</p>
                        <div className="divider"></div>
                        <h2 className="title"> We consult, develop and deliver premier software solutions.    </h2>
                    </div>
                </div>
                <div className="col-12 col-sm-12 col-md-1 col-lg-1"></div>
                <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                    <div className="row">
                         <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                            <div className="serviceBox">
                                <p className="subTitle"> Development </p>
                                <div className="divider"></div>
                                <h4 className="title"> Website & Mobile App Development    </h4>
                                <p>We empower you to scale business via competent and client-focused web and mobile applications.</p>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                            <div className="serviceBox">
                                <p className="subTitle"> DESIGN </p>
                                <div className="divider"></div>
                                <h4 className="title"> UX/UI Design and Development    </h4>
                                <p>Usability over Complexity. Simple & Organized elements put together for interactive user experiences.</p>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                            <div className="serviceBox">
                                <p className="subTitle"> JAVASCRIPT DEVELOPMENT </p>
                                <div className="divider"></div>
                                <h4 className="title">React, Vue, Svelte, Angular, and More  </h4>
                                <p>Expertise in latest technologies like React, Vue.js, Laravel, Node.js, SASS, iOS, Android, Hydbrid Apps. .</p>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                            <div className="serviceBox">
                                <p className="subTitle"> PRODUCT </p>
                                <div className="divider"></div>
                                <h4 className="title"> 24x7 Support & Maintenance  </h4>
                                <p>Contact us anytime over Skype, Email, or Phone. Our support & maintenance team is available 24×7..</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className="stories">
         <OwlCarousel
            className="owl-theme"
            loop
            items={1}
            margin={10}
            nav
         >
            
            <div className="item">
                <div className="successStories yellow">
                    <div className="row">
                    
                        <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                            <div className="storiesContent">
                                <div className="title">THE HEALTHY MUMMY</div>
                                <div className="bigTitle">We re-engineered,
                                    re-architected World’s
                                    #1 Mum’s app scale to
                                    2.0 Million users
                                </div>
                                <div className="actionBtn">
                                    <a href="#" className="caseStudies">caseStudies</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                            <div className="storiesImg">
                            <img src="assets/img/iphone_x.png"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="item">
            <div className="successStories purple">
                    <div className="row">
                    
                        <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                            <div className="storiesContent">
                                <div className="title">Neoxcel</div>
                                <div className="bigTitle">We present our unique, flexible and powerful suite of software to run your entire business on cloud.
                                </div>
                                <div className="actionBtn">
                                    <a href="#" className="caseStudies">caseStudies</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                            <div className="storiesImg">
                            <img src="assets/img/neoxcel.png"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="item">
            <div className="successStories lightblue">
                    <div className="row">
                    
                        <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                            <div className="storiesContent">
                                <div className="title">Telemedician</div>
                                <div className="bigTitle">Virtual Care. Chat with your health team.
                                </div>
                                <div className="actionBtn">
                                    <a href="#" className="caseStudies">caseStudies</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                            <div className="storiesImg">
                            <img src="assets/img/telemedicianstories.png"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="item">
                <div className="successStories darkblue">
                    <div className="row">
                    
                        <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                            <div className="storiesContent">
                                <div className="title">Join Vet</div>
                                <div className="bigTitle">We makes it easy for businesses and marketing teams to manage your social account in a single place.
                                </div>
                                <div className="actionBtn">
                                    <a href="#" className="caseStudies">caseStudies</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                            <div className="storiesImg">
                            <img src="assets/img/joinvet.png"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="item">
                <div className="successStories royelblue">
                    <div className="row">
                    
                        <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                            <div className="storiesContent">
                                <div className="title">Join Vet</div>
                                <div className="bigTitle">We makes it easy for businesses and marketing teams to manage your social account in a single place.
                                </div>
                                <div className="actionBtn">
                                    <a href="#" className="caseStudies">caseStudies</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                            <div className="storiesImg">
                            <img src="assets/img/join-vet-mobile.png"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="item">
                <div className="successStories skyblue">
                    <div className="row">
                    
                        <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                            <div className="storiesContent">
                                <div className="title">Mhamz</div>
                                <div className="bigTitle">Task Project Design has been updated in project ECommerce by Admin
                                </div>
                                <div className="actionBtn">
                                    <a href="#" className="caseStudies">caseStudies</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                            <div className="storiesImg">
                            <img src="assets/img/mhamz.png"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="item">
                <div className="successStories darkyellow">
                    <div className="row">
                    
                        <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                            <div className="storiesContent">
                                <div className="title">Skycomm</div>
                                <div className="bigTitle">Task Project Design has been updated in project ECommerce by Admin
                                </div>
                                <div className="actionBtn">
                                    <a href="#" className="caseStudies">caseStudies</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                            <div className="storiesImg">
                            <img src="assets/img/skycomm.png"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </OwlCarousel>
    </section>
  
    {/* <section className="portfolioSection p-0">
        <div className="row">
            <div className="col-12 col-md-6 col-lg-8 col-xl-8 p-0">
                <div className="portfolio-item-wrap">
                    <div className="portfolio-item">
                        <div className="portfolio-item-image">
                            <img src="assets/img/telemedician.png"/>
                        </div>
                        <a href="#" target="_blank" data-cursor-class="cursor-link" class="portfolio-item-details text-left">
                        <h3 class="portfolio-item-headline title ">Telemedicien</h3>
                                <div class="category-holder">
                                    <span class="category ">Branding</span>
                                    <span class="category ">Mobile App</span>
                                </div>
                                <div class="show-project">
                                    <div class="show-project-link">
                                        Show project                   
                                    </div>    
                                </div>
                            </a>
                    </div>
                </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4 col-xl-4 p-0">
                <div className="portfolio-item-wrap">
                    <div className="portfolio-item">
                        <div className="portfolio-item-image">
                            <img src="assets/img/party.png"/>
                        </div>
                        <a href="#" target="_blank" data-cursor-class="cursor-link" class="portfolio-item-details text-left">
                        <h3 class="portfolio-item-headline title ">Event Party</h3>
                                <div class="category-holder">
                                    <span class="category ">Branding</span>
                                    <span class="category ">Mobile App</span>
                                </div>
                                <div class="show-project">
                                    <div class="show-project-link">
                                        Show project                   
                                    </div>    
                                </div>
                            </a>
                    </div>
                </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4 col-xl-4 p-0">
                <div className="portfolio-item-wrap">
                    <div className="portfolio-item">
                        <div className="portfolio-item-image">
                            <img src="assets/img/vr.png"/>
                        </div>
                        <a href="#" target="_blank" data-cursor-class="cursor-link" class="portfolio-item-details text-left">
                        <h3 class="portfolio-item-headline title ">VR Technology</h3>
                                <div class="category-holder">
                                    <span class="category ">Branding</span>
                                    <span class="category ">Mobile App</span>
                                </div>
                                <div class="show-project">
                                    <div class="show-project-link">
                                        Show project                   
                                    </div>    
                                </div>
                            </a>
                    </div>
                </div>
            </div>
            <div className="col-12 col-md-6 col-lg-8 col-xl-8 p-0">
                <div className="portfolio-item-wrap">
                    <div className="portfolio-item">
                        <div className="portfolio-item-image">
                            <img src="assets/img/join-vet.png"/>
                        </div>
                        <a href="#" target="_blank" data-cursor-class="cursor-link" class="portfolio-item-details text-left">
                        <h3 class="portfolio-item-headline title ">Join Vet</h3>
                                <div class="category-holder">
                                    <span class="category ">Branding</span>
                                    <span class="category ">Mobile App</span>
                                </div>
                                <div class="show-project">
                                    <div class="show-project-link">
                                        Show project                   
                                    </div>    
                                </div>
                            </a>
                    </div>
                </div>
            </div>
        </div>
    </section> */}

        <section className="capebilities">
            <div className="container">
            <div className="capebilities_heading">

                        <p className="subtitle">   Capabilities	        </p>
                        <h2 className="title">
                        1000s of projects delivered successfully.<br/>
                        Over 100 Satisfied Clients.    </h2>
                        </div>
            </div>
        </section>
       
        <section className="accordian-section">
            <div className="container">
                <div className="row" style={{'flexDirection':'row-reverse'}}>
                    <div className="col-12 col-md-6 col-lg-6">
                        <div className="accordianPanel">
                        <div className="accordianLeft">
                            <div className="hidden-space"></div>
                            <div className="imagesBox" style={{backgroundImage: "url(" + "https://images.pexels.com/photos/4463588/pexels-photo-4463588.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" + ")",}}></div>
                            <div className="hidden-space"></div>
                        </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-1 col-lg-1"></div>
                    <div className="col-12 col-md-5 col-lg-5">
                        <div className="collapseBox">
                            <div className="playBtn">
                                <button className="round-btn"><i class='bx bx-right-arrow'></i> </button>
                            </div>
                            <div class="collapseHeading">
                                <h3 class="title">  Play Video We work in the fields of UI/UX design and art direction.    </h3>
                            </div>

                            <div id="accordion" className="accordion">
                                <div class="card">
                                    <div class="card-header" id="headingOne">
                                    <h5 class="mb-0">
                                        <button class="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        Website & Mobile App Design
                                        </button>
                                    </h5>
                                    </div>

                                    <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                                    <div class="card-body">
                                    We offer a full range of website and mobile app development services from scratch. From Responsive Websites to Fast & Easy-to-Use Mobile Applications, we design and develop quality and cost-effective applications.
                                    </div>
                                    </div>
                                </div>
                                <div class="card">
                                    <div class="card-header" id="headingTwo">
                                    <h5 class="mb-0">
                                        <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        Motion Graphics & Animation
                                        </button>
                                    </h5>
                                    </div>
                                    <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                                    <div class="card-body">
                                    Whether you are a small scale industry or a large enterprise looking to attract the audience visually, GPCODERS is a standalone destination for all. A close eye to the smallest detail is provided for immersive video experiences.
                                    </div>
                                    </div>
                                </div>
                                <div class="card">
                                    <div class="card-header" id="headingThree">
                                    <h5 class="mb-0">
                                        <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                        User Experience
                                        </button>
                                    </h5>
                                    </div>
                                    <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                                    <div class="card-body">
                                    Build a solid reputation in the digital world with Customized User-Experiences, tailored to your target audience’s needs. Our proven professionals offer you pixel-perfect, user-friendly, and reliable designs to stand out from the competition.
                                    </div>
                                    </div>
                                </div>
                                </div>


                        </div>
                    </div>
                </div>
            </div>

        </section>
        
        <section className="capebilities">
            <div className="container">
                <div className="brandArea">
                    <ul>
                        <li>
                            <div className="brandIcon">
                            <img src="assets/img/brandLogo/vue-js-logo.svg" />
                            </div>
                        </li>
                        <li>
                            <div className="brandIcon">
                            <img src="assets/img/brandLogo/angular-icon.svg" />
                            </div>
                        </li>
                        <li>
                            <div className="brandIcon">
                            <img src="assets/img/brandLogo/flutter-logo.svg" />
                            </div>
                        </li>
                        <li>
                            <div className="brandIcon">
                            <img src="assets/img/brandLogo/nodejs-icon.svg" />
                            </div>
                        </li>
                        <li>
                            <div className="brandIcon">
                            <img src="assets/img/brandLogo/php-1.svg" />
                            </div>
                        </li>
                        <li>
                            <div className="brandIcon">
                            <img src="assets/img/brandLogo/react.svg" />
                            </div>
                        </li>
                        <li>
                            <div className="brandIcon">
                            <img src="assets/img/brandLogo/bootstrap-4.svg" />
                            </div>
                        </li>
                        <li>
                            <div className="brandIcon">
                            <img src="assets/img/brandLogo/sass-1.svg" />
                            </div>
                        </li>
                        <li>
                            <div className="brandIcon">
                            <img src="assets/img/brandLogo/swift-15.svg" />
                            </div>
                        </li>
                        <li>
                            <div className="brandIcon">
                            <img src="assets/img/brandLogo/mysql.svg" />
                            </div>
                        </li>
                        <li>
                            <div className="brandIcon">
                            <img src="assets/img/brandLogo/firebase.svg" />
                            </div>
                        </li>
                        <li>
                            <div className="brandIcon">
                            <img src="assets/img/brandLogo/xamarin.svg" />
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </section>



        <section className="dark-love-home">
            <div className="container">
                <ul className="list-addon list-addon-home">
                    <li >
                    
                        <img className="lazy_a" src="assets/img/developer.png" alt="App Developers"/>
                        <h4> 
                        25+
                        </h4>
                        <p>App Developers </p>
                    </li>
                    <li  >
                    <img className="lazy_a" src="assets/img/talking.png" alt="Initial Consultant" />
                        <h4> 0.5K+
                        </h4>
                        <p>Initial Consultant
                        </p>
                    </li>
                    <li  >
                    <img className="lazy_a" src="assets/img/client.png" alt="Global icon" />
                        <h4> 30+
                        </h4>
                        <p>Global Clients
                        </p>
                    </li>
                    <li>
                    <img className="lazy_a" src="assets/img/layer-523@2x.png" alt="upwork icon"/>
                        <h4>5/5
                        </h4>
                        <p>Upwork
                        </p>
                    </li>
                </ul>
            </div>
            <div className="container">
                <div className="row row-flexible-center ">
                    <div className="col-md-8 cta-texter-home">
                        <h4>Setup A Free Consultation To Know How To Take Your Ideas From Concept To Reality 
                        </h4>
                    </div>
                    <div className="col-md-4 cta-btn-home">
                        <a className="btn-register-header animation-on-hover clickcustomform">Schedule A Call
                        </a>
                    </div>
                    <h4>
                    </h4>
                </div>
            </div>
            </section>


        
            <section>
                <div className="container">
                    <div className="testimonialBox">
                    <img className="dotImage" src="assets/img/testimonial-left-bg-index.svg" />
                        <div className="headings">Startups and Enterprises since 2018.</div>
                        <div className="testi_Slider">
                        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                            <ol className="carousel-indicators">
                                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"><img src="assets/img/user-9.jpg" /></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="1"><img src="assets/img/user-10.jpg" /></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="2"><img src="assets/img/user-2.jpg" /></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="3"><img src="assets/img/user-10.jpg" /></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="4"><img src="assets/img/user-2.jpg" /></li>
                            </ol>
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <div className="userContent">
                                        <div className="row">
                                            <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
                                                <div className="clientImg">
                                                    <img src="assets/img/user-9.jpg" />
                                                </div>
                                            </div>
                                            <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8">
                                                <div className="clentDetails">
                                                    <div className="clientName">
                                                        Rob Sharma
                                                    </div>
                                                    <div className="clientPlace">
                                                        CO FOUNDER OF ATTRI PRODUCT
                                                    </div>
                                                    <div className="clientFeedback">
                                                    <img src="assets/img/quote-gray-index.svg" /><br/>
                                                        I just loved three things about Hindwaves – culture, quality, and desire. Their confidence in quality and their understanding for the client's passion are great.
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                <div className="userContent">
                                        <div className="row">
                                            <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
                                                <div className="clientImg">
                                                    <img src="assets/img/user-10.jpg" />
                                                </div>
                                            </div>
                                            <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8">
                                                <div className="clentDetails">
                                                    <div className="clientName">
                                                    Rob Sharma
                                                    </div>
                                                    <div className="clientPlace">
                                                        CO FOUNDER OF ATTRI PRODUCT
                                                    </div>
                                                    <div className="clientFeedback">
                                                    <img src="assets/img/quote-gray-index.svg" /><br/>
                                                        I just loved three things about Hindwaves – culture, quality, and desire. Their confidence in quality and their understanding for the client's passion are great.
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                <div className="userContent">
                                        <div className="row">
                                            <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
                                                <div className="clientImg">
                                                    <img src="assets/img/user-2.jpg" />
                                                </div>
                                            </div>
                                            <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8">
                                                <div className="clentDetails">
                                                    <div className="clientName">
                                                    Rob Sharma
                                                    </div>
                                                    <div className="clientPlace">
                                                        CO FOUNDER OF ATTRI PRODUCT
                                                    </div>
                                                    <div className="clientFeedback">
                                                    <img src="assets/img/quote-gray-index.svg" /><br/>
                                                        I just loved three things about Hindwaves – culture, quality, and desire. Their confidence in quality and their understanding for the client's passion are great.
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div><div className="carousel-item">
                                <div className="userContent">
                                        <div className="row">
                                            <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
                                                <div className="clientImg">
                                                    <img src="assets/img/user-10.jpg" />
                                                </div>
                                            </div>
                                            <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8">
                                                <div className="clentDetails">
                                                    <div className="clientName">
                                                    Rob Sharma
                                                    </div>
                                                    <div className="clientPlace">
                                                        CO FOUNDER OF ATTRI PRODUCT
                                                    </div>
                                                    <div className="clientFeedback">
                                                    <img src="assets/img/quote-gray-index.svg" /><br/>
                                                        I just loved three things about Hindwaves – culture, quality, and desire. Their confidence in quality and their understanding for the client's passion are great.
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                <div className="userContent">
                                        <div className="row">
                                            <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
                                                <div className="clientImg">
                                                    <img src="assets/img/user-2.jpg" />
                                                </div>
                                            </div>
                                            <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8">
                                                <div className="clentDetails">
                                                    <div className="clientName">
                                                    Rob Sharma
                                                    </div>
                                                    <div className="clientPlace">
                                                        CO FOUNDER OF ATTRI PRODUCT
                                                    </div>
                                                    <div className="clientFeedback">
                                                    <img src="assets/img/quote-gray-index.svg" /><br/>
                                                        I just loved three things about Hindwaves – culture, quality, and desire. Their confidence in quality and their understanding for the client's passion are great.
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            <section className="dddl">
                <div className="container">
                     <div className="dddl-inner">
                         <div className="left-inner">
                            <OwlCarousel
                                    className="owl-theme"
                                    loop
                                    items={1}
                                    margin={10}
                                    nav
                                    responsive={this.state.responsive}
                                >
                                    
                                    <div className="item">
                                    <span className="number top-circle">01</span>
                                    <h4>Core values</h4>
                                    <h3>Collaborate as one team​ </h3>
                                    <p>We love Agile but we also know that Agile is only a means to an end and not the otherway around. We are first and foremost customer-centric, and understand the importance of lightweight governance that empowers quick decision making. </p>
                                    </div>
                                    <div className="item">
                                    <span className="number top-circle">02</span>
                                    <h4>Core values</h4>
                                    <h3>A Partner, not a Vendor</h3>
                                    <p>We love Agile but we also know that Agile is only a means to an end and not the otherway around. We are first and foremost customer-centric, and understand the importance of lightweight governance that empowers quick decision making. </p>
                                    </div>
                                  
                                    <div className="item">
                                    <span className="number top-circle">03</span>
                                    <h4>Core values</h4>
                                    <h3>A picture is worth 1000 words</h3>
                                    <p>We love Agile but we also know that Agile is only a means to an end and not the otherway around. We are first and foremost customer-centric, and understand the importance of lightweight governance that empowers quick decision making. </p>
                                    </div>
                                    <div className="item">
                                    <span className="number top-circle">04</span>
                                    <h4>Core values</h4>
                                    <h3>Smart feedback loops  </h3>
                                    <p>We love Agile but we also know that Agile is only a means to an end and not the otherway around. We are first and foremost customer-centric, and understand the importance of lightweight governance that empowers quick decision making. </p>
                                    </div>
                                    <div className="item">
                                    <span className="number top-circle">05</span>
                                    <h4>Core values</h4>
                                    <h3>We are agile with agile </h3>
                                    <p>We love Agile but we also know that Agile is only a means to an end and not the otherway around. We are first and foremost customer-centric, and understand the importance of lightweight governance that empowers quick decision making. </p>
                                    </div>
                            </OwlCarousel>
                         </div>
                         <div className="right-inner">
                         <ul>
                            <li>
                                <div className="image">
                                <img src="assets/img/discover.svg" alt="Discover"/>
                                </div>
                                <div className="text">
                                <h4>Discover</h4>
                                <p>and strategize</p>
                                <img src="assets/img/line-white.svg" alt="line white"/>
                                </div>
                            </li>
                            <li>
                            <div className="image">
                            <img src="assets/img/design.svg" alt="Design"/>
                            </div>
                            <div className="text">
                            <h4>Design</h4>
                            <p>that stands out</p>
                            <img src="assets/img/line-white.svg" alt="line white"/>
                            </div>
                            </li>
                            <li>
                            <div className="image">
                            <img src="assets/img/develop.svg" alt="Develop"/>
                            </div>
                            <div className="text">
                            <h4>Develop</h4>
                            <p>with experts</p>
                            <img src="assets/img/line-white.svg" alt="line white"/>
                            </div>
                            </li>
                            <li>
                            <div className="image">
                            <img src="assets/img/launch.svg" alt="Launch"/>
                            </div>
                            <div className="text">
                            <h4>Launch</h4>
                            <p>and optimize</p>
                            <img src="assets/img/line-white.svg" alt="line white"/>
                            </div>
                            </li>
                            </ul>
                        </div>
                    </div>   



                
                </div>
            </section>

    <section className="newsletter">
        <div className="container">
            <div className="newsletterContent">
                <div className="newsletterHeading">Newsletter</div>
                <div className="newsLetterSubTitle">To get all latest updates and news Subscribe our newsletter now!</div>
                <div className="newsLetterForm">
                    <input type="text" className="form-control" placeholder="Enter Email"/>
                    <button className="newsletterBtn"><i class='bx bxl-telegram'></i></button>
                </div>
            </div>
        </div>

    </section>
        
    <section className="address">
    <img className="dotImage" src="assets/img/testimonial-left-bg-index.svg" />
        <div className="container">
            <div className="addressConetnt">
                    <div className="india">INDIA</div>
                    <img className="chd-icon" src="assets/img/chandigarh-icon1.png" alt="line white"/>
                <div className="companyAddress">
                        <div className="coporateOfficeHeading">Corporate Office</div>
                        <div className="coporateOffice__address">
                            SCF 116-A, Phase-3 <br/>
                            Industrial Area, Mohali
                        </div>
                        <div className="coporateOffice__address">
                        <strong>Phone:</strong> (0172) 4039142
                        </div>
                        {/* <div className="coporateOffice__address">
                        <strong> Mobile:</strong> +91 9877344996
                        </div>
                        <div className="coporateOffice__address">
                        <strong> Email:</strong> 
                        </div> */}

                </div>
            </div>
        </div>
    </section>

    <Footer_new/>

    {/* <section className="policy-area-02 section-padding--ptb_90 fix section-bg">
        <div className="container" data-aos="fade-up">
            <div className="section-title">
              <h2>What we do</h2>
              <p>We help organizations with creative ideas, great plan, and provide efficient solutions & un-interrupted service. We develop strategies by understanding the client requiement, to deliver world-class product.</p>
            </div>

            <div className="row align-items-center">
                <div className="col-lg-5 order-2 order-lg-1" >
                    <div className="policy-thumb text-centeraos-init moving-vertical" data-aos="zoom-in" data-aos-delay="200">
                        <img src="assets/img/why-us.png" alt="Our Services" style={{maxWidth: '120%'}} />
                    </div>
                </div>
                <div className="col-lg-6 offset-lg-1 order-1 order-lg-2">
                    <div className="policy-wrapper-02 wow fadeInRight" data-aos="zoom-in" data-aos-delay="150">
                        <div className="row mtn-10 no-gutters">
                            <div className="col-md-6">
                                <div className="service-policy-item mt-10">
                                    <div className="service-policy-icon service-img">
                                        <img src="assets/img/web-app.png" alt="icon"/>
                                    </div>
                                    <h3 className="service-policy-title">Web Application</h3>
                                    <p className="service-policy-desc">We create websites that deliver high quality of user-experience to impress your audiences, as being a digital agency technical excellence is in our blood.</p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="service-policy-item mt-10">
                                    <div className="service-policy-icon service-img">
                                        <img src="assets/img/hybrid-app.png" alt="icon"/>
                                    </div>
                                    <h3 className="service-policy-title">Mobile Application</h3>
                                    <p className="service-policy-desc">To help you connect with global customers and to provide you best solutions & strategies, we offer state-of-the-art app development services.</p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="service-policy-item mt-10">
                                    <div className="service-policy-icon service-img">
                                        <img src="assets/img/ui-ux.png" alt="icon"/>
                                    </div>
                                    <h3 className="service-policy-title">UI/UX Design</h3>
                                    <p className="service-policy-desc">To help you achieve these goals effortlessly, we offer front-end & UI development services, with exceptional usability, dependability & UX design.</p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="service-policy-item mt-10">
                                    <div className="service-policy-icon service-img">
                                        <img src="assets/img/web-design.png" alt="icon"/>
                                    </div>
                                    <h3 className="service-policy-title">Web Designing</h3>
                                    <p className="service-policy-desc">Attractive, interactive & visually appealing web design is crucial for the success of a business. Our team of designers will bring your website ideas to life.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12 text-center">
                    <a className="align-middle btn-explore-service" href="#">Explore Services</a>
                </div>
            </div>
        </div>
    </section> */}

    {/* <section className="service-wrapper gray-bg section-padding fix ">
      <div className="container wow fadeInUp">
          <div className="row">
              <div className="col-12">
                  <div className="section-title text-center">
                      <h2 className="h1 title">Why Choose Us</h2>
                      <p>We have highly skilled engineers with excellent technical knowledge and experience in using the latest software standards. We have built a large pool of knowledge that we apply to deliver solutions that meet client's needs, expectations and budget. By putting our clients at the heart of everything we do, we are proud that we are still supporting our very first business client.</p>
                  </div>
              </div>
          </div>
          <div className="row align-items-center mtn-65">
              <div className="col-lg-3 service-list-left">
                  <div className="service-item mt-65">
                      <div className="service-icon">
                          <img src="/assets/img/digital.png" alt="service icon"/>
                          <h3 className="service-title"><a href="#">Digital Solutions</a></h3>
                          <p>Create leads and new sales through the digital channels that are best for your products.</p>
                      </div>
                  </div>
                  <div className="service-item mt-65">
                      <div className="service-icon">
                          <img src="/assets/img/team.png" alt="service icon"/>
                          <h3 className="service-title"><a href="#">Worldwide Clients</a></h3>
                          <p>We have 30+ worldwide Happy clients.</p>
                      </div>
                  </div>
                  <div className="service-item mt-65">
                      <div className="service-icon">
                          <img src="/assets/img/branding.png" alt="service icon"/>
                          <h3 className="service-title"><a href="#">Responsive</a></h3>
                          <p>The phrase “time is money” is as true today as it has always been. We know how valuable your time is and that when you have an idea or question you need to hear from us.</p>
                      </div>
                  </div>
              </div>
              <div className="col-lg-6 order-3 order-lg-2">
                  <div className="servivce-middle-thumb mt-65 moving-vertical" data-aos="zoom-in" data-aos-delay="200">
                      <img src="assets/img/service.png" alt="service thumb"/>
                  </div>
              </div>
              <div className="col-lg-3 order-2 order-lg-3 service-list-right">
                  <div className="service-item mt-65">
                      <div className="service-icon">
                          <img src="/assets/img/creative.png" alt="service icon"/>
                          <h3 className="service-title"><a href="#">Beneficial Strategies</a></h3>
                          <p>Our experts comes up with best strategies to achieve desired goals.</p>
                      </div>
                  </div>
                  <div className="service-item mt-65">
                      <div className="service-icon">
                          <img src="/assets/img/campaign.png" alt="service icon"/>
                          <h3 className="service-title"><a href="#">Timezone</a></h3>
                          <p>Our team member's always works in the client's timezone.</p>
                      </div>
                  </div>
                  <div className="service-item mt-65">
                      <div className="service-icon">
                          <img src="/assets/img/risk.png" alt="service icon"/>
                          <h3 className="service-title"><a href="#">Quality Assurance</a></h3>
                          <p>With QA, we make sure to enforce quality standards to improve the processes that are used in producing best end-product. </p>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    </section> */}

    {/* <section id="cta" className="cta section-bg">
        <div className="container" data-aos="zoom-in">
  
          <div className="row">
            <div className="col-lg-9 text-center text-lg-left">
            <h3>Want to create the <strong style={{color:'#48e672'}}>NEXT</strong> best thing? </h3>
            <p>We are determined to build EXACTLY what the client wants, by providing exceptional services & solutions. Talk with our Team of Experts & transform your Ideas into Reality. Let us Give you our Honest opinion.</p>
            </div>
            <div className="col-lg-3 cta-btn-container text-center">
              <a className="cta-btn align-middle" href="#">Talk with Experts</a>
            </div>
          </div>
  
        </div>
      </section> */}
     {/* <Footer />  */}
</div>
    )
  }
}

export default HomeContent;