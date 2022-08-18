import React from 'react'
import { useEffect } from 'react';
import { Link } from 'react-router-dom'

const NotFound = () => {
    useEffect(() => { window.scrollTo({ top: 0, behavior: 'smooth' }); }, [])
    // this changes the scrolling behavior to "smooth"

    return <div>
        <div className="underConstruction">
            <div className="ConstructionContent">
                <Link to="/">
                    <img src="/assets/images/nestormind.png" width="250px" alt='ConstructionContent' />
                    <h1>Page Not Found</h1>
                    <img className="underCont" src="/assets/images/website_under-construct.png" alt="" />
                </Link>
            </div>
        </div>
    </div>
}

export default NotFound