import React from "react";
import { Link } from "react-router-dom"
import { useNavigate } from "react-router";
const Sidebar = ({ sidebarShow }) => {
    //const passdata = createContext();
    // const transform = createContext()
    const navigtion = useNavigate()
    return (
        <div className="sidebar"
            style={sidebarShow ? {
                transform: "translate3d(0%, 0px,0px)", "transition": "all 0.3s ease-in-out",
                "maxWidth": "250px", "minWidth": "250px"
            } : {
                transform: "translate3d(-100%, 0px, 0px)", "transition": "all 0.3s ease-in-out", "minWidth": "0px", "maxWidth": "0px"
            }}>
            <div className="">
                <div className="sidebar_header" onClick={() => {
                    navigtion("/")
                }}>
                    <div> <img src="./assets/images/NM-ICON.png" className="Sidebar-logo" /></div>
                    <div> <span className="font_size header_text"><b>Back</b>Office</span></div>
                </div>
            </div>
            <div className="align-items-sm-start px-3 pt-2">
                <ul className="nav nav-pills  align-items-center" id="menu">
                    <li className="nav-item sidebar_hover ">
                        <div className="nav-link sidebar_hover align-middle px-0 text-color gapicontext" onClick={() => {
                            navigtion("/home")
                        }}>
                            <i className="fs-4 bi-house"> </i>
                            <span className="ms-1 d-none d-sm-inline ">Dashboard</span>
                        </div>
                    </li>
                    {/* <li className="sidebar_list">
                        <div
                            className="nav-link px-0 align-middle text-color gapicontext sidebar_focus"
                            data-bs-toggle="collapse"
                            data-bs-target="#submenu1"
                            aria-expanded="false"
                            aria-controls="collapseExample"
                        >
                            {/*<a
                                id="btn"
                                href="#submenu1"
                                data-bs-toggle="collapse"
                                className="nav-link px-0 align-middle text-color gapicontext sidebar_focus"
                            >
                    </a>
                            <i className="fs-4 bi-speedometer2"></i>
                            <span className="ms-1 d-none d-sm-inline">Blog</span>
                            <span className="dropdownarrowicon">
                                <i className="fs-6 bi-caret-down "></i>
                            </span>
                        </div>
                        <ul className="collapse  nav flex-column " id="submenu1" data-bs-parent="#menu">
                            <li className="w-100 ">
                                <div className="nav-link  text-color gapicontext" onClick={() => {
                                    navigtion("/addNewPost")
                                }} >
                                    <span className="d-none d-sm-inline paddingliitems">New Post</span>
                                </div>
                            </li>
                            <li className="" >
                                <div className="nav-link  text-color gapicontext">
                                    <span className="d-none d-sm-inline paddingliitems" onClick={() => {
                                        navigtion("/")
                                    }} > Draft Post</span>
                                </div>
                            </li>
                            <li className="">
                                <div className="nav-link  text-color gapicontext" onClick={() => {
                                    navigtion("/listofblogs")
                                }}>
                                    <span className="d-none d-sm-inline paddingliitems">List of Blog</span>
                                </div>
                            </li>
                        </ul>
                    </li> */}
                    <li className="sidebar_list">
                        <a href="#submenu2" data-bs-toggle="collapse" 
                        className="nav-link px-0 sidebar_focus align-middle text-color gapicontext">
                            <i className="fs-4 bi-bootstrap "></i>
                            <span className="ms-1 d-none d-sm-inline">Sliders/Carousels</span>
                            <span className="dropdownarrowicon ">
                                <i className="fs-6 bi-caret-down "></i>
                            </span>
                        </a>
                        <ul className="collapse nav flex-column " id="submenu2" data-bs-parent="#menu">
                            <li className="w-100 sidebar_list">
                                <div className="nav-link  text-color gapicontext" onClick={() => {
                                    navigtion('/success-stories')
                                }}>
                                    <span className="paddingliitems">Success Stories</span>
                                </div>
                            </li>

                        </ul>
                    </li>
                    <li className="sidebar_list">
                        <a href="#submenu8" data-bs-toggle="collapse" className="nav-link sidebar_focus px-0 align-middle text-color gapicontext">
                            <i class="fs-4  bi-newspaper"></i> <span className="ms-1 d-none d-sm-inline">Newsletter</span> <span className="dropdownarrowicon"><i className="fs-6 bi-caret-down "></i></span></a>
                        <ul className="collapse nav flex-column " id="submenu8" data-bs-parent="#menu">
                            <li className="w-100 sidebar_inline">
                                <div className="nav-link  text-color gapicontext" onClick={() => {
                                    navigtion('/newsletter-subscribers')
                                }}>
                                    <span className="d-none d-sm-inline paddingliitems ">Subscribe/Unsubscribe</span>
                                </div>
                            </li>
                        </ul>
                    </li>
                    <li className="sidebar_list">
                        <a href="#submenu9" data-bs-toggle="collapse" className="nav-link sidebar_focus px-0 align-middle text-color gapicontext ">
                            <i className="fs-4 bi-question-circle"></i> <span className="ms-1 d-none d-sm-inline gapicontext">Enquery</span><span className="dropdownarrowicon"><i className="fs-6 bi-caret-down "></i></span> </a>
                        <ul className="collapse nav flex-column " id="submenu9" data-bs-parent="#menu">
                            <li className="w-100 ">
                                <div className="nav-link  text-color gapicontext" onClick={() => {
                                    navigtion('/AllEnquiry')
                                }}>
                                    <span className="d-none d-sm-inline paddingliitems ">All Enquries</span>
                                </div>
                            </li>
                        </ul>
                    </li>
                    <li className="sidebar_list">
                        <a href="#submenu10" data-bs-toggle="collapse" className="nav-link px-0  sidebar_focus align-middle text-color gapicontext">
                            <i className="fs-4 bi-building"></i> <span className=" d-none d-sm-inline">Job Management</span><span className="dropdownarrowicon"><i className="fs-6 bi-caret-down "></i></span> </a>
                        <ul className="collapse nav flex-column " id="submenu10" data-bs-parent="#menu">
                           { /*<li className="sidebar_list">
                                <div className="nav-link  text-color  gapicontext" onClick={() => {
                                    navigtion('/PostNewJob')
                                }}>
                                    <span className="d-none d-sm-inline paddingliitems ">Post New Job</span>
                                </div>
                            </li>*/}
                            {/* <li className="sidebar_list">
                                <div class="nav-link  text-colo text-color  gapicontext" onClick={() => {
                                    navigtion('/appliedjobs')
                                }}>
                                    <span class="d-none d-sm-inline paddingliitems">List</span>
                                </div>
                            </li> */}
                            <li className="sidebar_list">
                                <div className="nav-link  text-colo text-color  gapicontext" onClick={() => {
                                    navigtion('/all-jobs')
                                }}>
                                    <span className="d-none d-sm-inline paddingliitems">Job List</span>
                                </div>
                            </li>
                            <li>
                                <div className="nav-link  text-colo text-color  gapicontext" onClick={() => {
                                    navigtion('/job-subscriber/unsubscriber')
                                }}>
                                    <span className="d-none d-sm-inline paddingliitems">Subscribe/Unsubscribe</span>
                                </div>
                            </li>
                        </ul>
                    </li>
                </ul>
                <hr />
            </div>
        </div>
    );
}
export default Sidebar