import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import { NavLink } from "react-bootstrap";
import { RiGalleryLine } from "react-icons/ri";
import { BsBuilding } from "react-icons/bs";
import { BiNews } from "react-icons/bi";
import { RiHome2Line } from "react-icons/ri";
import { GoQuestion } from "react-icons/go";
const Sidebar = ({ sidebarShow }) => {
  const classname = "activeMenu";
  let classes = "reverse";
  const [show, setshow] = useState(false);
  const navigtion = useNavigate();

  function jqry() {}
  // $(makeTogglable: function(element) {
  //     $element = $(element);

  //     this.toggle = function() {
  //       $element.slideToggle();
  //     };
  //   },)
  return (
    <div
      className="sidebar"
      style={
        sidebarShow
          ? {
              transform: "translate3d(0%, 0px,0px)",
              transition: "all 0.3s ease-in-out",
              maxWidth: "250px",
              minWidth: "250px",
            }
          : {
              transform: "translate3d(-100%, 0px, 0px)",
              transition: "all 0.3s ease-in-out",
              minWidth: "0px",
              maxWidth: "0px",
            }
      }
    >
      <div
        className="sidebar_header"
        onClick={() => {
          navigtion("/");
        }}
      >
        <img src="./assets/images/NM-ICON.png" className="Sidebar-logo" />
        <div>
          {" "}
          <span className="fs_13 header_text">
            <b>Back</b>Office
          </span>
        </div>
      </div>
      <div className="align-items-sm-start px-3 pt-2">
        <ul className="nav nav-pills sidebar-ul align-items-center" id="menu">
          <li className={`nav-item sidebar_hover`}>
            <div
              className={`nav-link sidebar_hover align-middle px-0 text-color-white gap-icon-text ${
                localStorage.getItem("className") == "Dashboard" && classname
              }`}
              onClick={() => {
                navigtion("/dashboard");
                localStorage.setItem("className", "Dashboard");
              }}
            >
              <RiHome2Line size={20} />
              <span className="ms-1 d-none d-sm-inline">Dashboard</span>
            </div>
          </li>

          <li className="sidebar_list">
            <a
              href="#submenu2"
              data-bs-toggle="collapse"
              className="nav-link px-0 sidebar_focus align-middle text-color-white gap-icon-text collapsed"
            >
              <RiGalleryLine size={20} />
              {/*<img src="./assets/images/car.png" style={{background:"white"}} width={25} height={25}/>*/}
              <span className="ms-1 d-none d-sm-inline">Sliders/Carousels</span>
              <span className="dropdownarrowicon">
                <i className="fs-6 bi-caret-down"></i>
              </span>
            </a>
            <ul
              className="collapse nav flex-column "
              id="submenu2"
              data-bs-parent="#menu"
            >
              <li className={`w-100 sidebar_list`}>
                <a
                  className={`nav-link  text-color-white gap-icon-text sidebar_focus ${
                    localStorage.getItem("className") == "success" && classname
                  }`}
                  onClick={() => {
                    localStorage.setItem("className", "success");
                    navigtion("/success-stories");
                  }}
                >
                  <span className="navbar-submenu">Success Stories</span>
                </a>
              </li>
            </ul>
          </li>
          <li className="sidebar_list">
            <a
              href="#submenu8"
              data-bs-toggle="collapse"
              className="nav-link sidebar_focus px-0 align-middle text-color-white gap-icon-text collapsed"
            >
              <BiNews size={20} />{" "}
              <span className="ms-1 d-none d-sm-inline">Newsletter</span>
              <span className="dropdownarrowicon">
                <i className="fs-6 bi-caret-down "></i>
              </span>
            </a>
            <ul
              className="collapse nav flex-column"
              id="submenu8"
              data-bs-parent="#menu"
            >
              <li className="w-100 sidebar_inline">
                <a
                  className={`nav-link  text-color-white gap-icon-text sidebar_focus ${
                    localStorage.getItem("className") == "subscirber" &&
                    classname
                  }`}
                  onClick={() => {
                    localStorage.setItem("className", "subscirber");
                    navigtion("/subscribers-unsubscribers");
                  }}
                >
                  <span className="d-none d-sm-inline navbar-submenu ">
                    Subscribe-Unsubscribe
                  </span>
                </a>
              </li>
            </ul>
          </li>
          <li className="sidebar_list">
            <a
              href="#submenu9"
              data-bs-toggle="collapse"
              className="nav-link sidebar_focus px-0 align-middle text-color-white gap-icon-text collapsed"
            >
              <GoQuestion size={26} />{" "}
              <span className="ms-1 d-none d-sm-inline gap-icon-text">
            Enquiry
              </span>
              <span className="dropdownarrowicon">
                <i className="fs-6 bi-caret-down "></i>
              </span>{" "}
            </a>
            <ul
              className="collapse nav flex-column "
              id="submenu9"
              data-bs-parent="#menu"
            >
              <li className="w-100 ">
                <a
                  className={`nav-link  text-color-white gap-icon-text sidebar_focus ${
                    localStorage.getItem("className") == "allenquiry" &&
                    classname
                  }`}
                  onClick={() => {
                    localStorage.setItem("className", "allenquiry");
                    navigtion("/all-Enquiry");
                  }}
                >
                  <span className="d-none d-sm-inline navbar-submenu ">
                  All Enquiry
                  </span>
                </a>
              </li>
            </ul>
          </li>
          <li className="sidebar_list">
            <a
              href="#submenu10"
              data-bs-toggle="collapse"
              className="nav-link px-0  sidebar_focus align-middle text-color-white gap-icon-text collapsed"
            >
              <BsBuilding size={20} />{" "}
              <span className=" d-none d-sm-inline">Job Management</span>
              <span className="dropdownarrowicon">
                <i className="fs-6 bi-caret-down "></i>
              </span>{" "}
            </a>
            <ul
              className="collapse nav flex-column "
              id="submenu10"
              data-bs-parent="#menu"
            >
           
              <li className="sidebar_list">
                <a
                  className={`nav-link  text-color-white gap-icon-text sidebar_focus ${
                    localStorage.getItem("className") == "joblist" && classname
                  }`}
                  onClick={() => {
                    localStorage.setItem("className", "joblist");
                    navigtion("/all-jobs");
                  }}
                >
                  <span className="d-none d-sm-inline navbar-submenu">Job</span>
                </a>
              </li>
              <li>
                <a
                  className={`nav-link  text-color-white gap-icon-text sidebar_focus ${
                    localStorage.getItem("className") == "jobsub" && classname
                  }`}
                  onClick={() => {
                    localStorage.setItem("className", "jobsub");
                    navigtion("/job-subscriber-unsubscriber");
                  }}
                >
                  <span className="d-none d-sm-inline navbar-submenu">
                    Subscribe-Unsubscribe
                  </span>
                </a>
              </li>
            </ul>
          </li>
        </ul>
        <hr />
      </div>
    </div>
  );
};
export default Sidebar;
