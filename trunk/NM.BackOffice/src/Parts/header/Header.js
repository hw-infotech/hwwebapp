import React, { useEffect, useState } from "react";
import {
  Badge,
  Button,
  Container,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { AiOutlineUser, AiOutlineLogout } from "react-icons/ai";
import { MdNotificationsNone } from "react-icons/md";
import { GoThreeBars } from "react-icons/go";
import { useDispatch, useSelector } from "react-redux";

const Header = ({ title, sidebarShow, setSidebarShow }) => {
  const [userName, setUsername] = useState();
  let selector = useSelector((state) => state);
  /**
   * @method useEffect
   * @description this useEffect used for get username that we print in header
   */
  useEffect(() => {
    setUsername(selector?.data?.apidata?.profile_data);
  }, [selector]);

  const history = useNavigate();

  return (
    <div className="main-header-box">
      <Navbar className="navbarBox navbar_style" bg="light" expand="lg">
        <Navbar.Brand className="navbar_inner_style">
          <Button
            variant=""
            className="move-sidebar positioning"
            onClick={() => {
              setSidebarShow((p) => !p);
            }}
          >
            <GoThreeBars color={sidebarShow ? "#707070" : "black"} size={30} />
          </Button>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end ">
          <Nav className="">
            <NavDropdown
              className="navbar_designs"
              title={
                <span className="notificaton-content">
                  <i class="fs-5 bi-bell"></i>
                  <Badge
                    size={20}
                    className="notificaton_badge"
                    pill
                    bg="danger"
                  >
                    3
                  </Badge>
                </span>
              }
              id="basic-navbar-nav"
            >
              <NavDropdown.Item
                className="fs_13"
                onClick={() => {
                  history("/profile");
                }}
              >
                <div className="notification_panel">
                  <div className="notification_inner_part">
                    <img
                      src="./assets/images/ava3.png"
                      className="img-decorate"
                      width={"35px"}
                      height={"40px"}
                    />
                    <div>
                      <p>
                        <b>John doe</b> React your post
                      </p>
                      <div className="text-muted wrap-text">
                        Lorem ipsum dolor sit amet the.
                      </div>
                      <p className="text-muted">
                        <small>10 minutes ago</small>
                      </p>
                    </div>
                  </div>
                  <div>
                    {/*<img
                      src="./assets/images/ava3.png"
                      className="img-decorate"
                      width={"48px"}
                      height={"48px"}
              />*/}
                  </div>
                </div>
              </NavDropdown.Item>

              <NavDropdown.Item className="fs_13" onClick={() => {}}>
                <div className="notification_panel">
                  <div className="notification_inner_part">
                    <img
                      src="./assets/images/team_nestormind.png"
                      className="img-decorate"
                      width={"35px"}
                      height={"40px"}
                    />
                    <div>
                      <p>
                        <b>John doe</b> React your post
                      </p>
                      <div className="text-muted wrap-text">
                        Lorem ipsum dolor sit amet consectetur.
                      </div>
                      <p className="text-muted">
                        <small>5 minutes ago</small>
                      </p>
                    </div>
                  </div>
                  <div>
                    {/*<img
                  src="./assets/images/ava3.png"
                  className="img-decorate"
                  width={"48px"}
                  height={"48px"}
          />*/}
                  </div>
                </div>
              </NavDropdown.Item>
              <NavDropdown.Item className="fs_13" onClick={() => {}}>
                <div className="notification_panel">
                  <div className="notification_inner_part">
                    <img
                      src="./assets/images/ava3.png"
                      className="img-decorate"
                      width={"35px"}
                      height={"40px"}
                    />
                    <div>
                      <p>
                        <b>John doe</b> React your post
                      </p>
                      <div className="text-muted wrap-text">
                        Lorem ipsum dolor sit amet consectetur.
                      </div>
                      <p className="text-muted">
                        <small>50 minutes ago</small>
                      </p>
                    </div>
                  </div>
                  <div>
                    {/*<img
                  src="./assets/images/ava3.png"
                  className="img-decorate"
                  width={"48px"}
                  height={"48px"}
          />*/}
                  </div>
                </div>
              </NavDropdown.Item>

              <div className="dropdownn">
                <NavDropdown.Item
                  className="notification-li-padding"
                  onClick={() => {}}
                >
                  <Button
                    type="button"
                    variant="outline"
                    className="notification-showall btn-sm"
                    onClick={() => {
                      history("/notification");
                    }}
                  >
                    View all
                  </Button>
                </NavDropdown.Item>
              </div>
            </NavDropdown>
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
            
              <NavDropdown.Item
                className="dropdown-item13"
                onClick={() => {
                  history("/notification");
                }}
              >
                <span>
                  <MdNotificationsNone size={16} className="icon-gap" />{" "}
                </span>
                Notification
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
