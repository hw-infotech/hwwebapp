import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () =>
  <div>
    <div className="underConstruction">
    <div className="ConstructionContent">
        <Link to="/">
    <img src="assets/img/nestormind.png" width="250px"/>
    </Link>
        <h1>Under Maintenance</h1>
        <img className="underCont" src="assets/img/website_under-construct.png" alt=""/>
    </div>
    </div>
  </div>

export default NotFound