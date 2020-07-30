import React, { Component } from 'react';

class NavBar extends Component {
  render() {
    return (
      <header id="header" className="fixed-top header-scrolled">
      <div className="container d-flex align-items-center">
  
        {/* <h1 className="logo mr-auto"><a href="javscript;">Hindwaves <span style={{fontSize:'15px'}}>Infotech</span></a></h1> */}
        {/* Uncomment below if you prefer to use an image logo */}
        <a href="index.html" className="logo mr-auto"><img src="assets/img/logo.png" alt="" className="img-fluid"/></a>
  
        <nav className="nav-menu d-none d-lg-block">
          <ul>
            <li><a href="">Home</a></li>
            <li className="drop-down"><a href="">Services</a>
              <ul>
                <li><a href="javscript;">Drop Down 1</a></li>
                <li className="drop-down"><a href="javscript;">Deep Drop Down</a>
                  <ul>
                    <li><a href="javscript;">Deep Drop Down 1</a></li>
                    <li><a href="javscript;">Deep Drop Down 2</a></li>
                    <li><a href="javscript;">Deep Drop Down 3</a></li>
                    <li><a href="javscript;">Deep Drop Down 4</a></li>
                    <li><a href="javscript;">Deep Drop Down 5</a></li>
                  </ul>
                </li>
                <li><a href="javscript;">Drop Down 2</a></li>
                <li><a href="javscript;">Drop Down 3</a></li>
                <li><a href="javscript;">Drop Down 4</a></li>
              </ul>
            </li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#contact">Contact Us</a></li>
  
          </ul>
        </nav>
  
        <a href="#about" className="get-started-btn scrollto">Get Quote</a>
  
      </div>
    </header>
    )
  }
}
export default NavBar;