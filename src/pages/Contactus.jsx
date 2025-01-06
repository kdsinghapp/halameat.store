import React from "react";
import Navbar from "../components/Navbar";

const Contactus = ({ restaurants }) => {
  console.log("restaurants", restaurants);

  // Construct Google Maps URL using latitude and longitude
  const googleMapSrc = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d471220.5631094339!2d${restaurants?.lng}!3d${restaurants?.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0:0x0!2z!5e0!3m2!1sen!2sin!4v${Date.now()}`;

  return (
    <section>
      <section>
        <div className="contact_inner">
          <div className="row">
            <div className="col-md-10">
              <div className="contact_form_inner">
                <div className="contact_field">
                  <h3 className="sec-title">Contact Us</h3>
                  <p>
                    We’d love to hear from you! Whether you have a question,
                    feedback, or need assistance, our team is here to help.
                    Reach out to us via any of the methods below, and we’ll get
                    back to you as soon as possible.
                  </p>
                  <input
                    type="text"
                    className="form-control form-group"
                    placeholder="Name"
                  />
                  <input
                    type="text"
                    className="form-control form-group"
                    placeholder="Email"
                  />
                  <textarea
                    className="form-control form-group"
                    placeholder="Message"
                  ></textarea>
                  <button className="contact_form_submit">Send</button>
                </div>
              </div>
            </div>
            <div className="col-md-2">
              <div className="right_conatct_social_icon d-flex align-items-end" style={{backgroundColor:"#ce1415"}}>
                <div className="socil_item_inner d-flex">
                  <li>
                    <a href={restaurants?.socialMeadias}>
                      <i className="fab fa-facebook-square"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                    <i class="fa fa-twitter-x"></i>
                    </a>
                  </li>
                </div>
              </div>
            </div>
          </div>
          <div className="contact_info_sec">
            <h4 className="sec-title">Contact Info</h4>
            <div className="d-flex info_single align-items-center">
              <i className="fas fa-headset"></i>
              <span>+91 {restaurants?.contact}</span>
            </div>
            <div className="d-flex info_single align-items-center">
              <i className="fas fa-envelope-open-text"></i>
              <span>{restaurants?.email}</span>
            </div>
            <div className="d-flex info_single align-items-center">
              <i className="fas fa-map-marked-alt"></i>
              <span>{restaurants?.address}</span>
            </div>
          </div>
        </div>

        {/* Google Map */}
        <section className="map_sec">
          <div className="container">
            <div className="row">
              <div className="col-md-10 offset-md-1">
                <div className="map_inner">
                  <h4>Find Us on Google Map</h4>
                  <p>
                    Explore the location of {restaurants?.name} on the map
                    below.
                  </p>
                  <div className="map_bind">
                    <iframe
                      src={googleMapSrc}
                      width="100%"
                      height="450"
                      frameBorder="0"
                      style={{ border: "0" }}
                      allowFullScreen=""
                      aria-hidden="false"
                      tabIndex="0"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </section>
  );
};

export default Contactus;
