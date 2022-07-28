import React, { useEffect, useState } from "react";
import { Button, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { AiOutlineUser, AiOutlineLogout } from "react-icons/ai";
import { GoThreeBars } from "react-icons/go";
import { useDispatch, useSelector } from "react-redux";

const Header = ({ title, sidebarShow, setSidebarShow }) => {
  const [userName, setUsername] = useState();
  let selector = useSelector((state) => state);
  useEffect(() => {
    setUsername(selector?.data?.apidata?.profile_data);
  }, [selector]);

  const history = useNavigate();

  return (
    <div className="main-header-box">
      <Navbar className="navbarBox navbar_style">
        <Navbar.Brand className="navbar_inner_style">
          <Button
            variant=""
            className="move-sidebar"
            onClick={() => {
              setSidebarShow((p) => !p);
            }}
          >
            <GoThreeBars color={sidebarShow ? "#707070" : "black"} size={30} />
          </Button>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <NavDropdown
              title={
                <span>
                  Welcome,
                  <strong className="user_content"> {userName?.name}</strong>
                </span>
              }
              id="basic-nav-dropdown"
              className=""
            >
              <NavDropdown.Item
                className="dropdown-item12"
                onClick={() => {
                  history("/profile");
                }}
              >
                <span>
                  <AiOutlineUser size={16} className="icon-gap" />
                </span>
                My Profile
              </NavDropdown.Item>

              <NavDropdown.Divider />
              <NavDropdown.Item
                className="dropdown-item12"
                onClick={() => {
                  localStorage.removeItem("nestor.user");
                  // history("/", { replace: true });
                  window.location.href = "/admin-login";
                }}
              >
                <span>
                  <AiOutlineLogout size={16} className="icon-gap" />{" "}
                </span>
                Log out
              </NavDropdown.Item>
            </NavDropdown>
              <Nav.Link
                href="#link"
                className="nav-link a navbarDropdown"
              ></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};
export default Header;
