import React, { Component, useEffect, useState } from 'react';
import { Link, useHistory } from "react-router-dom";
import CommonFunctionality from '../../Shared/CommonFunctionality';

const NavBar = () => {
  const history = useHistory()
  const [state, setState] = useState({ isTop: false })

  const onClickGoTo = (link) => {
    history.push(link)
  }

  useEffect(() => {
    window.onscroll = () => _handleScroll();
  }, [])

  const _handleScroll = () => {
    if (document.documentElement.scrollTop > 10) {
      setState({ isTop: true });
    } else {
      setState({ isTop: false });
    }
  }

  return (
    <header id="header" className={state.isTop ? 'fixed-top header-scrolled scroll' : 'fixed-top header-scrolled'} onScroll={_handleScroll}>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="/"><img src="assets/img/logo.png" width="250px" /></a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse " id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <Link to="/">Home </Link>
              </li>
              <li className="nav-item dropdown">
                <a href="/services" onClick={() => { onClickGoTo('/services') }} id="navbarDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >Services</a>

                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <Link className="dropdown-item" to="/app-development">App Development</Link>
                  <Link className="dropdown-item" to="/web-development">Web Development</Link>
                  <Link className="dropdown-item" to="/ui-ux-design">UI  UX Design</Link>
                  <Link className="dropdown-item" to="/seo">Seo</Link>
                  <Link className="dropdown-item" to="/graphic-design">Graphics Design</Link>

                </div>
              </li>
              <li className="nav-item">
                <Link to="/about-us">About Us</Link>
              </li>
              <li className="nav-item">
                <Link to="/NotFound">Blog</Link>
              </li>
              <li className="nav-item">
                <Link to="/contact-us">Contact Us</Link>
              </li>
            </ul>
          </div>
        </nav>

        {/* <nav className="nav-menu d-none d-lg-block">
          <ul>
            <li><Link to="/">Home</Link></li>
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
            <li><Link to="/about-us">About Us</Link></li>
            <li><Link to="/contact-us">Contact Us</Link></li>
  
          </ul>
        </nav>
  
        <a href="#about" className="get-started-btn scrollto">Get Quote</a> */}

      </div>
    </header>
  )
}

export default NavBar