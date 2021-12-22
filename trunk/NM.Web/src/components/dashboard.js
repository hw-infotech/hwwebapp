import React from "react"
import Footer_new from "./Layout/Footer_new"
import NavBar from "./Layout/Navbar"

const Dashboard = ({ children }) => {
    return (
        <div>
            <NavBar />
            {children}
            <Footer_new />
        </div>
    )
}

export default Dashboard
