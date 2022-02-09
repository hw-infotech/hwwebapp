import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import Dashboard from "../../layout/dashboard";

const withNewsletterAddress = (Component) => {
  const WrrappedComponent = () => {
    const [newsletter, setNewsLetter] = useState();
    const [navbar,setNavbar]=useState("home")
    const handleNewsLetterChange = (e) => {
      const { name, value } = e.target;
      setNewsLetter(value);
    };
    const notify = () => toast.success("Thanks for subscription"); //, { theme: "colored" }

    const sendNewsLetter = () => {
      notify();
      document.getElementById("newsemail").value = "";
    };
    return (
      <Dashboard NavbarStyle={navbar}>
        <Component newsletter={newsletter} setNewsLetter={setNewsLetter} navbar={navbar} setNavbar={setNavbar} />
        <section className="newsletter">
          <div className="container">
            <div className="newsletterContent">
              <div className="newsletterHeading">Newsletter</div>
              <div className="newsLetterSubTitle">
                To get all latest updates and news Subscribe our newsletter now!
              </div>
              <div className="newsLetterForm">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Email"
                  id="newsemail"
                  onChange={handleNewsLetterChange}
                />
                <button className="newsletterBtn" onClick={sendNewsLetter}>
                  <i className="bx bxl-telegram"></i>
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="address">
          <img
            className="dotImage"
            src="assets/img/testimonial-left-bg-index.svg"
          />
          <div className="container">
            <div className="addressConetnt">
              <div className="india">INDIA</div>
              <img
                className="chd-icon"
                src="assets/img/chandigarh-icon1.png"
                alt="line white"
              />
              <div className="companyAddress">
                <div className="coporateOfficeHeading">Corporate Office</div>
                <div className="coporateOffice__address">
                  E-237AA, Continental Tower
                  <br />
                  Industrial Area 8B, Sector 74, <br />
                  SAS Nagar, Mohali, Punjab
                </div>
                <div className="coporateOffice__address">
                  <strong>Phone:</strong> (0172) 5020206
                </div>
                {/* <div className="coporateOffice__address">
                        <strong> Mobile:</strong> +91 9877344996
                        </div>
                        <div className="coporateOffice__address">
                        <strong> Email:</strong> 
                        </div> */}
              </div>
            </div>
          </div>
        </section>
      </Dashboard>
    );
  };
  return WrrappedComponent;
};

export default withNewsletterAddress;
