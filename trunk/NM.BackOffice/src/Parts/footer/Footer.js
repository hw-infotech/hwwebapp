import React from "react";
import moment from "moment"

const Footer = ({ sidebarShow }) => {
    const d = new Date();
    let year = d.getFullYear();
    return (
        <div className="mainfooter " style={sidebarShow ? {
            transform: "translate3d(0%, 0px,0px)", "transition": "all .7s ease-in-out",
        } : {
            transform: "translate3d(0%, 0px, 0px)", "transition": "all .7s ease-in-out", width: "100%"
        }}>

            <div className="footerright textcolor ">©{moment().format("yyyy")}
                <span className="fs_13"> Nestormind Pvt ltd.</span>
            </div>
        </div>
    );
}
export default Footer