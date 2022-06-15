import React, { useState } from "react";
//import { Badge } from '@mui/material';
import success_Stories from '../../pages/crausel/success_Stories'
import { admin } from "../../data/Data";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Header = ({ title, setSidebarShow }) => {
    const history = useNavigate()
    return (
        <div className="topHeader">
            <Navbar bg="light" style={{height:"70px"}}>
                <Navbar.Brand  ><button type="button" className="btn btn-secondary" onClick={() => {
                    setSidebarShow(p => !p)
                }}>☰</button></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" style={{ justifyContent: "end" }} >

                    <Nav className="navbar-padd a" >
                        <NavDropdown title="Profile" id="basic-nav-dropdown" >
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Log Out</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#link"
                            class="nav-link a navbarDropdown" onClick={() => {
                                localStorage.removeItem("nestor.user")
                                history('/', { replace: true })
                                window.location.reload()
                            }}>Log out</Nav.Link>
                    </Nav>

                </Navbar.Collapse>

            </Navbar>
        </div>

    );
}
export default Header
