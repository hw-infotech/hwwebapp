import React, { Component } from 'react';
import NavBar from '../Layout/Navbar';
import Footer from '../Layout/Footer';
import './AboutUs.css';
import Footer_new from '../Layout/Footer_new';
import { Link } from "react-router-dom";
import { useEffect } from 'react';
import Dashboard from '../../layout/dashboard';
import withNewsletterAddress from '../../Shared/HOC/newsletterAddress';

const AboutUsContent = (props) => {
    const { newsletter, setNewsLetter } = props;

    useEffect(() => { window.scrollTo({ top: 0, behavior: 'smooth' }); }, [])
    // this changes the scrolling behavior to "smooth"

    return <div>
        <section className="aboutBanner">
            <div className="shapes"></div>
            <div className="container">
                <div className="caption aos-init aos-animate">
                    <h1>
                        A Torch-bearer of <br />New age Software revolution
                    </h1>
                    <a href="/contact-us" className="btn btn-flip" data-text="Let’s know more "><span>Let’s know more </span></a>
                </div>
            </div>
        </section>
        <section className="about-image-banner">
            <div className="image-wrap">
                <img src="assets/img/about-banner.jpg" alt="line white" />
            </div>
            <div className="container">
                <div className="lets">
                    <div className="left">
                        <h2>Let’s walk together<br /> for a digital transformation…… </h2>
                        <p>We aren’t a mere software development service provider but an industry leader in providing a top-notch digital solution to businesses across the globe.</p>
                    </div>
                </div>
            </div>
        </section>

        <section className="team-wrap">
            <div className="team-members">
                <div className="right">
                    <div className="content">
                        <h3>About Us</h3>
                        <p>
                            Initiated in 2019, Nestormind has come a long way based on honesty, hard-working and commitment. Our mantra is “Serve the clients beyond his expectation”. We forge each relationship with utmost dedication and with an intention to deliver exceptional client service. Ushering digital transformation along with product engineering strategies, our team assists the organization to develop a device or software solution that enhances business operations.
                        </p>
                        <p>
                            Being the industry leader, Nestormind provides web design, web development, UI/design, different type of application development, IoT solutions, Blockchain solutions, Digital marketing, and IT consulting services to both domestic and global business organizations.
                            Our dedicated team works hand in hand along with the client and ensures that the product on which they are working, not only draws business success but also empowers that business entity to solve futuristic solutions.  Due to our excellent customer-friendly services, we have already delivered more than 1500 projects so far and created a strong 200 satisfied client base.
                        </p>
                        <p>
                            We value your ideas and also deeply work to find out the solid solutions to your concerns. Our R & D team work round the clock to innovate futuristic solutions that can smoothen the business and the world altogether.
                        </p>
                        <div class="line">
                            <img src="assets/img/yellow-line.svg" alt="" />
                        </div>

                    </div>
                </div>
                <div className="left aos-init aos-animate" data-aos="fade-up">
                    <img src="assets/img/hw-team.png" alt="" />
                </div>
            </div>
        </section>



        <section className="gallery">
            <div className="container">
                <div className="gallery_heading">We live and <b>breathe</b> tech.</div>
                <div className="galleryBox">
                    <div className="row_one">
                        <div className="col-1">
                            <div className="galleryImages medium">
                                <img src="/assets/img/team/team_nestormind.png" />
                            </div>
                        </div>
                        <div className="col-2">
                            <div className="headings">
                                We <strong>challenge</strong> our clients to think differently <br />
                                by asking the right questions, how can we <strong>leverage</strong> <br />
                                tech differently? Where are consumers talking <br />
                                and when, because the <strong>experience matters.</strong>
                            </div>
                            <div className="galleryImages small">
                                <img src="/assets/img/team/untitled-14.jpg" />
                            </div>
                        </div>
                    </div>
                    <div className="row_two">
                        <div className="col-1">
                            <div className="galleryImages small">
                                <img src="/assets/img/team/barbq.jpg" />
                            </div>
                        </div>
                        <div className="col-2">
                            <div className="galleryImages medium">
                                <img src="assets/img/team/diwaliCel.jpg" />
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="galleryImages medium">
                                <img src="assets/img/stiker.png" />
                            </div>
                        </div>
                    </div>
                    <div className="row_three">
                        <div className="col-1">
                            <div className="galleryImages large">
                                <img src="/assets/img/team/untitled-86.jpg" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>


        <section className="site-footer">
            <div class="project-in-mind">
                <div class="container">
                    <p class="light">Let’s co-create your <strong>success story</strong></p> <Link to="/contact-us" class="btn btn-flip" data-text="Let’s know more"><span>Let’s know more</span></Link>
                </div>
            </div>
        </section>
    </div>
}
export default withNewsletterAddress(AboutUsContent);