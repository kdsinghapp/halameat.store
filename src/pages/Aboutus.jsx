import React from "react";
import Navbar from "../components/Navbar";

const Aboutus = () => {
  return (
    <section>
      <Navbar />
      <section className="mt-5">
        <div className="container">
          <div className="text-center">
            <h2 className="sec-title">About Us</h2>
          </div>
          <div className="slider-area">
            <p>
              At FreshMeatBucket, we believe in delivering not just meals but
              experiences. Our passion for quality ingredients and expertly
              crafted dishes is at the heart of everything we do. Whether you're
              savoring our signature recipes or exploring new flavors, every
              bite is a testament to our dedication to excellence. We source the
              finest cuts of meat and freshest produce to ensure every dish is a
              celebration of taste and quality. From juicy steaks and tender
              roasts to flavorful grilled options, our menu is designed to
              satisfy every meat lover's craving. But we’re more than just great
              food. FreshMeatBucket is about bringing people together – a place
              where families gather, friends celebrate, and memories are made.
              Come join us and experience the warmth, hospitality, and
              unforgettable flavors that make FreshMeatBucket your ultimate
              dining destination.
            </p>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Aboutus;
