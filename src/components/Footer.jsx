import React from "react";

const Footer = () => {
  return (
    <footer className="footer-wrapper footer-layout3">
      <div className="widget-area">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-md-3">
              <div className="widget footer-widget">
                <h3 className="widget_title text-white">Address</h3>
                <div className="th-widget-contact">
                  <div className="info-box">
                    <p className="info-box_text">
                      2 Whitelands Rd, <br />
                      High Wycombe
                      <br /> HP12 3EQ
                    </p>
                  </div>
                  <div className="info-box">
                    <p className="info-box_text">
                      CALL:{" "}
                      <a href="tel:+16326543564" className="info-box_link">
                        {" "}
                        0123456789
                      </a>{" "}
                    </p>
                  </div>
                  <p>
                    {" "}
                    <a href="#" className="th-btn btn-sm style4">
                      Order Now<i className="fas fa-chevrons-right ms-2"></i>
                    </a>{" "}
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="widget footer-widget">
                <div className="text-center">
                  <h3 className="widget_title text-white">Download Our App</h3>
                  <a href="#">
                    <img src="assets/img/gplay.png" />
                  </a>{" "}
                  <a href="#">
                    <img src="assets/img/appstore.png" />
                  </a>
                  <h6 className="text-white mt-3">All Credit card Accepted</h6>
                  <div className="payment-img mb-3">
                    <img
                      src="assets/img/normal/payment_methods.png"
                      alt="Image"
                    />
                  </div>
                  <div className="th-social">
                    <a href="https://www.instagram.com/">
                      <i className="fab fa-instagram"></i>
                    </a>
                    <a href="https://www.facebook.com/">
                      <i className="fab fa-facebook-f"></i>
                    </a>{" "}
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-3">
              <div className="widget widget_nav_menu footer-widget">
                <h3 className="widget_title text-white">Opening Hours</h3>
                <div className="menu-all-pages-container">
                  <ul className="menu listing-hour-day">
                    <li>
                      <span className="listing-hour-day">Monday</span>
                      <span className="listing-hour-time">10:00 - 6:00</span>
                    </li>
                    <li>
                      <span className="listing-hour-day">Tuesday</span>
                      <span className="listing-hour-time">10:00 - 6:00</span>
                    </li>
                    <li>
                      <span className="listing-hour-day">Wednesday</span>
                      <span className="listing-hour-time">10:00 - 6:00</span>
                    </li>
                    <li className="active">
                      <span className="listing-hour-day">Thursday</span>
                      <span className="listing-hour-time">10:00 - 4:00</span>
                    </li>
                    <li>
                      <span className="listing-hour-day">Friday</span>
                      <span className="listing-hour-time">10:00 - 6:00</span>
                    </li>
                    <li>
                      <span className="listing-hour-day">Saturday</span>
                      <span className="listing-hour-time">Closed</span>
                    </li>
                    <li>
                      <span className="listing-hour-day">Sunday</span>
                      <span className="listing-hour-time">10:00 - 6:00</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-wrap">
        <div className="container">
          <div className="row gy-2 align-items-center justify-content-center">
            <div className="col-md-10 text-center">
              <ul className="footerlinks">
                <li>
                  <a href="javascript:void();">Home</a>
                </li>

                <li>
                  <a href="javascript:void();">Terms & Conditions </a>
                </li>
                <li>
                  <a href="javascript:void();">Privacy Policy</a>
                </li>
                <li>
                  <a href="javascript:void();">Cookie Policy</a>
                </li>
                <li>
                  <a href="javascript:void();">Service disclaimer</a>
                </li>
                <li>
                  <a href="javascript:void();">Contact Us</a>
                </li>
              </ul>
            </div>
            <div className="col-md-12 text-center">
              <p className="copyright-text">
                Meat Shop <i className="fal fa-copyright"></i> 2025 All Rights
                Reserved. Powered By <a href="#">Meatwala</a>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
