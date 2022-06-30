import React from "react";
import withNewsletterAddress from "../../Shared/HOC/newsletterAddress";
import { InlineWidget } from "react-calendly";
import '../Meeting/meeting.css'

const Meeting = () => {
    // {window.open("https://calendly.com/nestormindpvtltd")}
    //     <PopupButton
    //     className="w-o-btn"
    //     url="https://calendly.com/nestormindpvtltd"
    //     /*
    //      * react-calendly uses React's Portal feature (https://reactjs.org/docs/portals.html) to render the popup modal. As a result, you'll need to
    //      * specify the rootElement property to ensure that the modal is inserted into the correct domNode.
    //      */
    //     rootElement={document.getElementById("root")}
    //     text="Schedule time with me!"
    //   />
    //<iframe src="https://calendly.com/nestormindpvtltd" className="appointment"></iframe>

    // <object data="https://calendly.com/nestormindpvtltd"
    //     className="appointment"
    //     type="text/html">
    // </object>
    return (
        <div style={{ marginTop: 50 }} className=" ">
        <object data="https://calendly.com/nestormindpvtltd"
        className="appointment"
        type="text/html">
    </object>
        </div>
    )
}
export default withNewsletterAddress(Meeting)