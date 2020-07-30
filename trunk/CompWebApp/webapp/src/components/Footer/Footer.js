import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <footer id="footer">
      <div className="footer-top">
        <div className="container">
          <div className="row">
  
            <div className="col-lg-3 col-md-6 footer-contact">
              <h3>Corporate Office</h3>
              <p>
                SCF 116-A, Phase-3<br/>
                Industrial Area, Mohali<br/><br/>
                <strong>Phone:</strong> (0172) 4039142<br/> 
                <strong>Mobile:</strong> +91 9877344996<br/>
                <strong>Email:</strong> contact@hindwaves.com<br/>
              </p>
            </div>
  
            <div className="col-lg-3 col-md-6 footer-links">
              <h3>Our Links</h3>
              <ul>
                <li> <a href="#">Home</a></li>
                <li> <a href="#">About us</a></li>
                <li> <a href="#">Services</a></li>
                <li> <a href="#">Terms of service</a></li>
                <li> <a href="#">Privacy policy</a></li>
              </ul>
            </div>
  
            <div className="col-lg-3 col-md-6 footer-links">
              <h3>Services</h3>
              <ul>
                <li> <a href="#">Web Design</a></li>
                <li> <a href="#">Web Development</a></li>
                <li> <a href="#">Product Management</a></li>
                <li> <a href="#">Marketing</a></li>
                <li> <a href="#">Graphic Design</a></li>
              </ul>
            </div>
  
            <div className="col-lg-3 col-md-6 footer-links">
              <h3>Newsletter</h3>
              <p><strong>To get all latest updates and news Subscribe our newsletter now!</strong></p>
              <div className="newsletter mt-3">
                <form action="">
                  <input type="email" class="news-field" autocomplete="off" placeholder="Enter your email here" name="EMAIL"/>
                  <button class="btn btn-subscribe">Subscribe</button>
                </form>
              </div>
            </div>
  
          </div>
        </div>
      </div>
  
      <div className="container footer-bottom clearfix">
        <div className="copyright">
          &copy; 2020 All Rights Reserved with <strong style={{textTransform: 'uppercase', fontSize:'14px'}}><span>Hindwaves Infotech (Pvt) Ltd.</span></strong>
        </div>
        <div className="credits">
          <div className="social-links">
            <a href="#" className="twitter"><i className="bx bxl-twitter"></i></a>
            <a href="#" className="facebook"><i className="bx bxl-facebook"></i></a>
            <a href="#" className="instagram"><i className="bx bxl-instagram"></i></a>
            <a href="#" className="skype"><i className="bx bxl-skype"></i></a>
            <a href="#" className="linkedin"><i className="bx bxl-linkedin"></i></a>
          </div>
        </div>
      </div>
    </footer>
    )
  }
}
export default Footer;