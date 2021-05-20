import React, { Component } from 'react';
import Footer from '../Layout/Footer';
import NavBar from '../Layout/Navbar';
import '../Home/Home.css';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Footer_new from '../Layout/Footer_new';
import { Link } from "react-router-dom";

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

    componentDidMount =() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }// this changes the scrolling behavior to "smooth"
   
  render() {


    return (
<div>

        <div className="underConstruction">
            <div className="ConstructionContent">
            <img src="assets/img/hind-logo.png" width="200px"/>
                <h1>Website Under Maintenance</h1>
                <img className="underCont" src="assets/img/website_under-construct.png" alt=""/>
            </div>
        </div>
    
</div>
    )
  }
}

export default HomeContent;