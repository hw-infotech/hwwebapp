import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import Dashboard from "../../layout/dashboard";
import { useDispatch } from 'react-redux'
import { subscribeNewsletter } from '../../Redux/Action/Actionfunction'

const withNewsletterAddress = (Component) => {
  const WrrappedComponent = () => {
    const [newsletter, setNewsLetter] = useState();
    const [navbar, setNavbar] = useState("home")
    const dispatch = useDispatch()

    const handleNewsLetterChange = (e) => {
      const { name, value } = e.target;
      setNewsLetter(value);
    };
    const notify = () => toast.success('Thanks for subscription', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    }); //, { theme: "colored" }

    const emailValidation = () => {
      const regex =
        /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
      return !(!newsletter || regex.test(newsletter) === false);
    }
    const notifyWarning = () => toast.error('Enter valid email ', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

    const alreadyExist = () => toast.error('Email already exsist ', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

    const sendNewsLetter = () => {
      console.log(emailValidation(), "emailValidation");
      if (newsletter == "" || !emailValidation()) {
        // notifyWarning()
      } else {
        dispatch(subscribeNewsletter(newsletter, notify, alreadyExist))
        // notify();
      }
      // document.getElementById("newsemail").value = "";
    };

    return (
      <Dashboard NavbarStyle={navbar}>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={true}
          newestOnTop={false}
          // closeOnClick
          rtl
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
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
