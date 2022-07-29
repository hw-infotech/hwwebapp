import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import { NavLink } from "react-bootstrap";
import { RiGalleryLine } from "react-icons/ri";
import { BsBuilding } from "react-icons/bs";
import { BiNews } from "react-icons/bi";
import { RiHome2Line } from "react-icons/ri";
import { GoQuestion } from "react-icons/go";

const Sidebar = ({ sidebarShow }) => {
  const [parentId, setParentId] = useState(
    JSON.parse(localStorage.getItem("activeId"))?.split("_")[0]
  );

  const classname = "activeMenu";
  let classes = "reverse";
  const [show, setshow] = useState(false);
  const navigtion = useNavigate();

  useEffect(() => {
    setParentId(JSON.parse(localStorage.getItem("activeId")).split("_")[0]);
  }, [JSON.parse(localStorage.getItem("activeId"))]);

  const setLocalStorage = (id) => {
    localStorage.setItem("activeId", JSON.stringify(id));
    setParentId(JSON.parse(localStorage.getItem("activeId")).split("_")[0]);
  };

  const handleAnchorClick = (e) => {
    e.preventDefault();
    setLocalStorage(e.currentTarget.getAttribute("id"));
  };

  return (
    <div
      className="sidebar"
      style={
        sidebarShow
          ? {
              transform: "translate3d(0%, 0px,0px)",
              transition: "all 0.4s ease-in-out",
              marginLeft: "0px",
            }
          : {
              transform: "translate3d(-100%, 0px, 0px)",
              transition: "all 0.4s ease-in-out",
              marginLeft: "-250px",
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
          <span className="fs_13 header_text">
            <b>Back</b>Office
          </span>
        </div>
      </div>
      <div className="align-items-sm-start px-3 pt-2">
        <ul className="nav nav-pills sidebar-ul align-items-center" id="menu">
          <li className={`nav-item sidebar_hover`}>
            <a
              className={`nav-link sidebar_hover align-middle px-0 text-color-white gap-icon-text  ${
                localStorage.getItem("className") == "Dashboard" && classname
              }`}
              id="dashboard"
              data-bs-toggle="collapsed"
              onClick={(e) => {
                localStorage.setItem("className", "Dashboard");
                setLocalStorage(" ");
                return navigtion("/dashboard");
              }}
            >
              <RiHome2Line size={20} />
              <span className="ms-1 d-none d-sm-inline sidebar_li_text  ">
                Dashboard
              </span>
            </a>
          </li>
          <li className="sidebar_list">
            <a
              href="#submenu2"
              data-bs-toggle="collapse"
              className={
                parentId == "submenu2"
                  ? "nav-link px-0 sidebar_focus align-middle text-color-white gap-icon-text"
                  : "nav-link px-0 sidebar_focus align-middle text-color-white gap-icon-text collapsed"
              }
              onClick={(e) => {
                localStorage.setItem("className", "success");
                // setLocalStorage("submenu2_1");
                // return navigtion("/success-stories");
              }}
            >
              <RiGalleryLine size={20} />
              {/*<img src="./assets/images/car.png" style={{background:"white"}} width={25} height={25}/>*/}
              <span className="ms-1 d-none d-sm-inline sidebar_li_text ">
                Sliders/Carousels
              </span>
              <span className="dropdownarrowicon">
                <i className="fs-6 bi-caret-down"></i>
              </span>
            </a>
            <ul
              className={
                parentId == "submenu2"
                  ? "collapse nav flex-column show"
                  : "collapse nav flex-column "
              }
              id="submenu2"
              data-bs-parent="#menu"
            >
              <li className={`w-100 sidebar_list`}>
                <a
                  id="submenu2_1"
                  className={`nav-link text-color-white gap-icon-text sidebar_focus ${
                    localStorage.getItem("className") == "success" && classname
                  }`}
                  onClick={(e) => {
                    handleAnchorClick(e);
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
              onClick={(e) => {
                localStorage.setItem("className", "subscirber");
                // setLocalStorage("submenu8_1");
                // return navigtion("/subscribe-unsubscribe");
              }}
              href="#submenu8"
              data-bs-toggle="collapse"
              className={
                parentId == "submenu8"
                  ? "nav-link px-0 sidebar_focus align-middle text-color-white gap-icon-text"
                  : "nav-link px-0 sidebar_focus align-middle text-color-white gap-icon-text collapsed"
              }
            >
              <BiNews size={20} />
              <span className="ms-1 d-none d-sm-inline">Newsletter</span>
              <span className="dropdownarrowicon">
                <i className="fs-6 bi-caret-down "></i>
              </span>
            </a>
            <ul
              className={
                parentId == "submenu8"
                  ? "collapse nav flex-column show"
                  : "collapse nav flex-column "
              }
              id="submenu8"
              data-bs-parent="#menu"
            >
              <li className="w-100 sidebar_inline">
                <a
                  id="submenu8_1"
                  className={`nav-link  text-color-white gap-icon-text sidebar_focus ${
                    localStorage.getItem("className") == "subscirber" &&
                    classname
                  }`}
                  onClick={(e) => {
                    localStorage.setItem("className", "subscirber");
                    handleAnchorClick(e);
                    navigtion("/subscribe-unsubscribe");
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
              className={
                parentId == "submenu9"
                  ? "nav-link px-0 sidebar_focus align-middle text-color-white gap-icon-text"
                  : "nav-link px-0 sidebar_focus align-middle text-color-white gap-icon-text collapsed"
              }
              onClick={(e) => {
                localStorage.setItem("className", "allenquiry");
                // setLocalStorage("submenu9_1");
                // return navigtion("/all-Enquiry");
              }}
            >
              <GoQuestion size={20} />
              <span className="ms-1 d-none d-sm-inline ">Enquiry</span>
              <span className="dropdownarrowicon">
                <i className="fs-6 bi-caret-down "></i>
              </span>
            </a>
            <ul
              className={
                parentId == "submenu9"
                  ? "collapse nav flex-column show"
                  : "collapse nav flex-column "
              }
              id="submenu9"
              data-bs-parent="#menu"
            >
              <li className="w-100 ">
                <a
                  id="submenu9_1"
                  className={`nav-link  text-color-white gap-icon-text sidebar_focus ${
                    localStorage.getItem("className") == "allenquiry" &&
                    classname
                  }`}
                  onClick={(e) => {
                    handleAnchorClick(e);
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
              className={
                parentId == "submenu10"
                  ? "nav-link px-0 sidebar_focus align-middle text-color-white gap-icon-text"
                  : "nav-link px-0 sidebar_focus align-middle text-color-white gap-icon-text collapsed"
              }
              onClick={(e) => {
                localStorage.setItem("className", "joblist");
                // setLocalStorage("submenu10_1");
                // return navigtion("/all-jobs");
              }}
            >
              <BsBuilding size={20} />
              <span className=" d-none d-sm-inline">Job Management</span>
              <span className="dropdownarrowicon">
                <i className="fs-6 bi-caret-down "></i>
              </span>
            </a>
            <ul
              className={
                parentId == "submenu10"
                  ? "collapse nav flex-column show"
                  : "collapse nav flex-column "
              }
              id="submenu10"
              data-bs-parent="#menu"
            >
              <li className="sidebar_list">
                <a
                  id="submenu10_1"
                  className={`nav-link  text-color-white gap-icon-text sidebar_focus ${
                    localStorage.getItem("className") == "joblist" && classname
                  }`}
                  onClick={(e) => {
                    handleAnchorClick(e);
                    localStorage.setItem("className", "joblist");
                    navigtion("/all-jobs");
                  }}
                >
                  <span className="d-none d-sm-inline navbar-submenu">Job</span>
                </a>
              </li>
              <li>
                <a
                  id="submenu10_2"
                  className={`nav-link  text-color-white gap-icon-text sidebar_focus ${
                    localStorage.getItem("className") == "jobsub" && classname
                  }`}
                  onClick={(e) => {
                    handleAnchorClick(e);
                    localStorage.setItem("className", "jobsub");
                    navigtion("/job-subscribe-unsubscribe");
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
