import React, { useState } from "react";
//import { Badge } from '@mui/material';
import success_Stories from '../../pages/crausel/success_Stories'
import { admin } from "../../data/Data";
import { Button, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { AiOutlineUser, AiOutlineLogout } from "react-icons/ai";
import { GoThreeBars } from "react-icons/go";

const Header = ({ title, setSidebarShow }) => {
    const [state, setState] = useState("Ganesh")
    const history = useNavigate()
    
    const getTitle = () => (<span>Welcome,<strong className="user_content" style={{color:"black"}}> {state}</strong></span>)

    return (
        <div className="topHeader">
            <Navbar className="navbarBox" style={{ height: "70px" }}>
                <Navbar.Brand style={{ display: "flex", alignItems: "center" }} ><Button variant="white"

                    className="move-sidebar" onClick={() => {
                        setSidebarShow(p => !p)
                    }}><GoThreeBars color="gray" size={30} /> </Button></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" style={{ justifyContent: "end" }} >
                    <Nav className="navbar-padd a " >
                        <NavDropdown title={getTitle()} id="basic-nav-dropdown" className="font-size11" >
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
