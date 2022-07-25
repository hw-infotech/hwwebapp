import React from 'react';
import './industries.css';
import withNewsletterAddress from "../../Shared/HOC/newsletterAddress";
import IndustriesGraphic from './industriesGraphic';
import IndustriesSolutions from './industriesSolutions';
import { Link } from 'react-router-dom';

function Education() {
  return (
    <>
      <div className="industriesHeroSection">
        <div className="container">
          <h1>Shape The Minds Of Future Leaders With Us</h1>
          <div className="ctaBtn">
            <Link to="/contact-us" className="letsTalk">
              Lets Talk
            </Link>
          </div>
        </div>
      </div>

      <IndustriesGraphic
        bgColor="#d8b033"
        graphicTitle="We Open a New Era of Technology With Our Powerful Development Solutions"
        graphicSubtitle="The world of eLearning software has brought innovation to every aspect of the educational process that allows teachers around the globe to make it engaging, flexible, and efficient. Nestormind has integrated the power of education and technology to provide an effective learning and training experience to students. We are the market leaders to provide the perfect blend of technology and education to our clients with our innovative design and development services. Our custom eLearning solutions enable students to achieve their goals while training remotely."
        graphicImgUrl="/assets/img/industries/EducationPic.png"
      />
      <IndustriesSolutions
        heading="Our Education & Training Software Development Solutions"
        eventFirst="Learning Management System"
        eventFirstSub="We provide practical education software development services that help you create an education ecosystem that seamlessly incorporates all the planning and creation processes of education and training modules."
        eventFirstGrap="/assets/img/industries/Learning-Management-System.jpg"
        eventSecond="Mobile Learning"
        eventSecondSub="By utilizing the sharp brains of our developers, we build education software development solutions that complement your class curriculum and reduce the manual load of teachers and students and make learning fun."
        eventSecondGrap="/assets/img/industries/Mobile-Learning.jpg"
        eventThird="Engaging Approach"
        eventThirdSub="We provide educational software solutions that engage learners with gamification elements and interactive lessons that retain their attention during the learning cycle by making studies and courses more fun."
        eventThirdGrap="/assets/img/industries/Engaging-Approach.jpg"
        eventFourth="Educational Platform"
        eventFourthSub="At Nestormind, we offer fully automated and customized education software development services that easily blend all visions and ideas and provide you with an interactive online learning platform."
        eventFourthGrap="/assets/img/industries/Educational-Platform.jpg"
        eventFifth="School Management Software"
        eventFifthSub="We offer web-based school management applications that allow schools and other educational institutions to manage and grow their educational centre intellectually and efficiently."
        eventFifthGrap="/assets/img/industries/School-Management-Software.png"
        eventSix="Academic Software"
        eventSixSub="We build academic software solutions that enable educators to manage the training and learning process and evaluate performance. It will help students and educational institutions to enhance the learning experience."
        eventSixGrap="/assets/img/industries/Academic-Software.jpg"
        eventSeven="Personalize Learning"
        eventSevenSub="Our expert developers will help you to develop educational solutions tailored to different learning styles and proficiency levels. We will ensure that your educational applications are robust and scalable."
        eventSevenGrap="/assets/img/industries/Personalize-Learning.jpg"
      />

      <div className="projectInMind">
        <div className="container">
          <div className="readyToDiscuss">
            <h2>Have a Educations App Project in Mind?</h2>
            <a
              href="/contact-us"
              class="outline-btn lets-talk-btn"
              title="Let's Talk"
            >
              Let's Talk
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
export default withNewsletterAddress(Education);