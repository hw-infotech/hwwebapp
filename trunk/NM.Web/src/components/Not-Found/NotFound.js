import React from 'react'
import { useEffect } from 'react';
import { Link } from 'react-router-dom'
import withNewsletterAddress from '../../Shared/HOC/newsletterAddress';

const NotFound = () => {

  useEffect(() => { window.scrollTo({ top: 0, behavior: 'smooth' }); }, [])
  // this changes the scrolling behavior to "smooth"

  return <div>
    <div className="underConstruction">
      <div className="ConstructionContent">
        <Link to="/">
          <img src="assets/img/nestormind.png" width="250px"  alt='ConstructionContent'/>
          <h1>Under Maintenance</h1>
          <img className="underCont" src="assets/img/website_under-construct.png" alt="" />
        </Link>
      </div>
    </div>
  </div>
}

export default withNewsletterAddress(NotFound);