import React from "react"
import Footer_new from "../components/Layout/Footer_new"
import NavBar from "../components/Layout/Navbar"

const Dashboard = ({ children ,NavbarStyle }) => {
    return (
      <div>
        <NavBar NavbarStyle={NavbarStyle} />
        {children}
        <Footer_new />
      </div>
    );
}

export default Dashboard
