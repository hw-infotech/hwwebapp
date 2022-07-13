import React, { useEffect, useState } from "react";
//import { Badge } from '@mui/material';
import success_Stories from '../../pages/crausel/success_Stories'
import { admin } from "../../data/Data";
import { Button, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { AiOutlineUser, AiOutlineLogout } from "react-icons/ai";
import { GoThreeBars } from "react-icons/go";
import { useDispatch, useSelector } from "react-redux";

const Header = ({ title, sidebarShow, setSidebarShow }) => {
    const[data1,getdata]=useState()
    const [state, setState] = useState("Ganesh")
    let selector = useSelector(state => state)
    useEffect(() => {
        getdata(selector?.data?.apidata?.profile_data)
        console.log("this is the profile page", data1)
    }, [selector])
    const history = useNavigate()
    const getTitle = () => (<span>Welcome,<strong className="user_content" style={{ color: "black" }}> {data1?.name}</strong></span>)
    return (
        <div className="main-header-box">
            <Navbar className="navbarBox" style={{ height: "70px" }}>
                <Navbar.Brand style={{ display: "flex", alignItems: "center" }} ><Button variant=""
                    className="move-sidebar" onClick={() => {
                        setSidebarShow(p => !p)
                    }}><GoThreeBars color={sidebarShow ? "#707070" : "black"} size={30} /> </Button></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" style={{ justifyContent: "end" }} >
                    <Nav>
                        <NavDropdown title={getTitle()} id="basic-nav-dropdown" className="fs-19" >
                            <NavDropdown.Item className="dropdown-item12" onClick={() => {
                                history('/profile')
                            }}><span><AiOutlineUser size={16} style={{ marginRight: 5 }} /> </span> My Profile</NavDropdown.Item>

                            <NavDropdown.Divider />
                            <NavDropdown.Item className="dropdown-item12" onClick={() => {
                                localStorage.removeItem("nestor.user")
                                history('/', { replace: true })
                                window.location.reload()
                            }}><span><AiOutlineLogout size={16} style={{ marginRight: 5 }} /> </span>Log out</NavDropdown.Item>
                        </NavDropdown>
                        {<Nav.Link href="#link"
                            class="nav-link a navbarDropdown" ></Nav.Link>}
                    </Nav>

                </Navbar.Collapse>

            </Navbar>
        </div>

    );
}
export default Header
