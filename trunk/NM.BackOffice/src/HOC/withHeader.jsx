import { useEffect, useState } from "react"
import Sidebar from "../components/Sidebar"
import Footer from "../Parts/footer/Footer"
import Header from "../Parts/header/Header"

const withHeader = (Component) => {
  {  /*const WithHeaderComp = () => {
        const [sidebarShow, setSidebarShow] = useState(true)
        const [title, setTitle] = useState("Dashboard")
        return <div className="">
            <div className="flexing">
                <div className='dashboard'>
                    <Sidebar sidebarShow={sidebarShow} />
                    <div className='mainDashboard' >
                        <div>
                            <Header title={title} setSidebarShow={setSidebarShow} />
                            <div className="content-Wrapper" >
                                <Component setTitle={setTitle} sidebarShow={sidebarShow} />
                            </div>
                        </div>
                        <Footer />
                    </div>
                </div>
            </div>
  </div>*/}
    }

    //return WithHeaderComp


export default withHeader