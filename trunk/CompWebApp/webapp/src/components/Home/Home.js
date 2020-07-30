import React, { Component } from 'react';

class HomeContent extends Component {
  render() {
    return (
<div>
    <section id="hero" className="d-flex align-items-center">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1" data-aos="fade-up" data-aos-delay="200">
            <h1>We provide the Best Solutions for your Business</h1>
            <h2>We help new and established businesses to create their unique identity through our website design and development services. We are dedicated to offering brilliant and appealing software solution experiences that connect brands to their potential customers.</h2>
            <div className="d-lg-flex">
              <a href="#about" className="btn-about-us scrollto">About Us</a>
            </div>
          </div>
          <div className="col-lg-6 order-1 order-lg-2 hero-img" data-aos="zoom-in" data-aos-delay="200">
            <img src={process.env.PUBLIC_URL +"assets/img/hero-img.png"} className="img-fluid animated" alt="" />
          </div>
        </div>
      </div>
    </section>

    <section className="policy-area-02 section-padding--ptb_90 fix section-bg">
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
    </section>

    <section className="service-wrapper gray-bg section-padding fix ">
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
    </section>

    <section id="cta" className="cta section-bg">
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
      </section>
</div>
    )
  }
}

export default HomeContent;