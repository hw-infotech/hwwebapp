import React, { useState } from "react";
//import { Badge } from '@mui/material';
import success_Stories from '../../pages/crausel/success_Stories'
import { admin } from "../../data/Data";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

const Header = ({ title, setSidebarShow }) => {
    return (
        <div className="topHeader">
            <Navbar bg="light">
                    <Navbar.Brand style={{paddingLeft:"20px"}} ><button type="button" className="btn btn-secondary" onClick={() => {
                        setSidebarShow(p => !p)
                    }}>☰</button></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" style={{justifyContent:"end"}} >
                  
                        <Nav  className="navbar-padd a" >
                            <NavDropdown title="Profile" id="basic-nav-dropdown" >
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="#link">Log Out</Nav.Link>
                        </Nav>
                     
                    </Navbar.Collapse>
             
            </Navbar>
        </div>

    );
}
export default Header
