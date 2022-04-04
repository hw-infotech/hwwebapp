import Footer from "./Footer"
import Header from "./Header"
import Navbar from "./Navbar"
import Sidebar from "./Sidebar"
import { NavSidebar } from "./sidebardemo"

const Dashboard = ({ children }) => {
    return (
        <div>
            <div>
                <Navbar />
            </div>
            <div>
                <Sidebar />
            </div>
            <div className="contentPanel">
                {children}
            </div>
            <Footer />
        </div>
    )
}

export default Dashboard

// <Header />
// <NavSidebar />