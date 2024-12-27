import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <header className="th-header header-layout3">
        <div className="header-top">
          <div className="container">
            <div className="row justify-content-center justify-content-lg-between align-items-center gy-2">
              <div className="col-auto d-none d-lg-block">
                <div className="header-links">
                  <ul>
                    <li>
                      <div className="social-links">
                        <a href="https://www.facebook.com/">
                          <i className="fab fa-facebook-f"></i>
                        </a>{" "}
                        <a href="https://www.instagram.com/">
                          <i className="fab fa-instagram"></i>
                        </a>{" "}
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="menu-top">
          <div className="container">
            <div className="row align-items-center justify-content-between">
              <div className="col-auto">
                <div className="header-logo">
                  <a href="/">
                    <h2>LOGO</h2>
                  </a>
                </div>
              </div>
              {/* <!--<div className="col-auto d-none d-lg-block">--> */}
              {/* <!--   <form className="header-search"><input type="text" placeholder="Search For"> <button type="submit"><i className="far fa-search"></i></button></form>--> */}
              {/* <!--</div>--> */}
              <div className="col-auto">
                <div className="header-icons">
                  <a
                    href="/"
                    className="icon-btn logbtn d-sm-block"
                    style={{ color: "#fff", background: "#ce1415" }}
                  >
                    <i className="far fa-user"></i>{" "}
                    <span className="display-none">Account</span>
                  </a>{" "}
                  <button
                    type="button"
                    className="icon-btn logbtn sideMenuToggler"
                    style={{ color: "#fff", background: "#ce1415" }}
                  >
                    <span className="badge">2</span>{" "}
                    <i className="far fa-cart-shopping"></i>{" "}
                    <span className="display-none">£4398.00</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="sticky-wrapper">
          <div className="menu-area">
            <div className="container">
              <div className="row align-items-center justify-content-between">
                <div className="col-lg-12 text-center">
                  <nav className="main-menu menu-style1 d-none d-lg-inline-block">
                    <ul>
                      <li>
                        <Link to="/">Home</Link>
                      </li>
                      <li>
                        <Link to="/menu">Order Online</Link>
                      </li>
                      <li>
                        <Link to="/about-us">About Us</Link>
                      </li>
                      <li>
                        <Link to="/contact-us">Contact Us</Link>
                      </li>
                    </ul>
                  </nav>
                  <button
                    type="button"
                    className="th-menu-toggle d-block d-lg-none"
                  >
                    <i className="far fa-bars"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
