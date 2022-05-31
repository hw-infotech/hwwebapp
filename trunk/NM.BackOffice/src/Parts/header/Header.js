import React, { useState } from "react";
import { Badge } from '@mui/material';
import success_Stories from '../../pages/crausel/success_Stories'
import { admin } from "../../data/Data";

const Header = ({ title, setSidebarShow }) => {
    
    return (
        <div className="topHeader">
            <nav class="navbar navbar-expand-lg navbar-light" style={{ height: "70px" }}>
                <button type="button" className="btn btn-secondary" onClick={() => {
                    setSidebarShow(p => !p)
                }}>☰</button>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                {<div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ml-auto">

                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle a" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >
                                Profile
                            </a>
                            <div class=" headerDrop dropdown-menu" aria-labelledby="navbarDropdown" >
                                <a class="dropdown-item" href="#">Action</a>
                                <a class="dropdown-item" href="#">Another action</a>
                                <div class="dropdown-divider"></div>
                                <a class="dropdown-item" href="#">Something else here</a>
                            </div>
                        </li>
                    </ul>
                </div>}
                <div>
                    <Badge badgeContent={5} color="primary">
                        <i class="fs-5 bi-bell-fill"></i>
                    </Badge>
                </div>
                <a class="nav-link a navbarDropdown " href="#">Log out</a>

            </nav>
        </div>

    );
}
export default Header