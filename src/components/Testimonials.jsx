import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// import 'swiper/swiper-bundle.min.css';

const Testimonials = () => {
  return (
    <>
      <section>
        <div className="container">
          <div className="title-area text-center">
            <h2 className="sec-title">
              Our <br /> Reviews
            </h2>
          </div>
        </div>
      </section>

      <section className="overflow-hidden bg-smoke2 space" id="testi-sec">
        <div className="container">
          <div className="slider-area">
            <Swiper
              spaceBetween={10}
              slidesPerView={1}
              breakpoints={{
                576: { slidesPerView: 2 },
                768: { slidesPerView: 2 },
                992: { slidesPerView: 3 },
                1200: { slidesPerView: 3 },
              }}
              navigation={{
                prevEl: ".slider-prev",
                nextEl: ".slider-next",
              }}
              className="productSlider1"
            >
              {/* Testimonial Slides */}
              <SwiperSlide>
                <div className="th-product product-grid text-left">
                  <div className="d-flex">
                    <div className="me-2">
                      <img
                        src="assets/img/testimonial/testi_3_1.jpg"
                        alt="Product Image"
                        className="teimg"
                      />
                    </div>
                    <div className="product-content">
                      <h6 className="mb-0">
                        <a href="#">John Doe</a>
                      </h6>
                      <p>2 months ago</p>
                    </div>
                  </div>
                  <div className="text-left">
                    {/* Star Rating */}
                    <p className="mb-0">
                      <i className="fa fa-star-o" style={{ color: "orange" }}></i>
                      <i className="fa fa-star-o" style={{ color: "orange" }}></i>
                      <i className="fa fa-star-o" style={{ color: "orange" }}></i>
                      <i className="fa fa-star-o" style={{ color: "orange" }}></i>
                      <i className="fa fa-star-o" style={{ color: "orange" }}></i>
                    </p>
                    <p>
                      Some studies suggest that meat foods may have higher
                      levels of certain nutrients and antioxidants compared to
                      conventionally grown foods. However, this can vary depending
                      on factors like soil quality and growing conditions.
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              {/* Additional SwiperSlide elements can go here */}
              <SwiperSlide>
                <div className="th-product product-grid text-left">
                  <div className="d-flex">
                    <div className="me-2">
                      <img
                        src="assets/img/testimonial/testi_3_2.jpg"
                        alt="Product Image"
                        className="teimg"
                      />
                    </div>
                    <div className="product-content">
                      <h6 className="mb-0">
                        <a href="#">Roniab Bosry</a>
                      </h6>
                      <p>2 months ago</p>
                    </div>
                  </div>
                  <div className="text-left">
                    {/* Star Rating */}
                    <p className="mb-0">
                      <i className="fa fa-star-o" style={{ color: "orange" }}></i>
                      <i className="fa fa-star-o" style={{ color: "orange" }}></i>
                      <i className="fa fa-star-o" style={{ color: "orange" }}></i>
                      <i className="fa fa-star-o" style={{ color: "orange" }}></i>
                      <i className="fa fa-star-o" style={{ color: "orange" }}></i>
                    </p>
                    <p>
                      Some studies suggest that meat foods may have higher
                      levels of certain nutrients and antioxidants compared to
                      conventionally grown foods. However, this can vary depending
                      on factors like soil quality and growing conditions.
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="th-product product-grid text-left">
                  <div className="d-flex">
                    <div className="me-2">
                      <img
                        src="assets/img/testimonial/testi_3_2.jpg"
                        alt="Product Image"
                        className="teimg"
                      />
                    </div>
                    <div className="product-content">
                      <h6 className="mb-0">
                        <a href="#">Roniab Bosry</a>
                      </h6>
                      <p>2 months ago</p>
                    </div>
                  </div>
                  <div className="text-left">
                    {/* Star Rating */}
                    <p className="mb-0">
                      <i className="fa fa-star-o" style={{ color: "orange" }}></i>
                      <i className="fa fa-star-o" style={{ color: "orange" }}></i>
                      <i className="fa fa-star-o" style={{ color: "orange" }}></i>
                      <i className="fa fa-star-o" style={{ color: "orange" }}></i>
                      <i className="fa fa-star-o" style={{ color: "orange" }}></i>
                    </p>
                    <p>
                      Some studies suggest that meat foods may have higher
                      levels of certain nutrients and antioxidants compared to
                      conventionally grown foods. However, this can vary depending
                      on factors like soil quality and growing conditions.
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="th-product product-grid text-left">
                  <div className="d-flex">
                    <div className="me-2">
                      <img
                        src="assets/img/testimonial/testi_3_2.jpg"
                        alt="Product Image"
                        className="teimg"
                      />
                    </div>
                    <div className="product-content">
                      <h6 className="mb-0">
                        <a href="#">Roniab Bosry</a>
                      </h6>
                      <p>2 months ago</p>
                    </div>
                  </div>
                  <div className="text-left">
                    {/* Star Rating */}
                    <p className="mb-0">
                      <i className="fa fa-star-o" style={{ color: "orange" }}></i>
                      <i className="fa fa-star-o" style={{ color: "orange" }}></i>
                      <i className="fa fa-star-o" style={{ color: "orange" }}></i>
                      <i className="fa fa-star-o" style={{ color: "orange" }}></i>
                      <i className="fa fa-star-o" style={{ color: "orange" }}></i>
                    </p>
                    <p>
                      Some studies suggest that meat foods may have higher
                      levels of certain nutrients and antioxidants compared to
                      conventionally grown foods. However, this can vary depending
                      on factors like soil quality and growing conditions.
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="th-product product-grid text-left">
                  <div className="d-flex">
                    <div className="me-2">
                      <img
                        src="assets/img/testimonial/testi_3_2.jpg"
                        alt="Product Image"
                        className="teimg"
                      />
                    </div>
                    <div className="product-content">
                      <h6 className="mb-0">
                        <a href="#">Roniab Bosry</a>
                      </h6>
                      <p>2 months ago</p>
                    </div>
                  </div>
                  <div className="text-left">
                    {/* Star Rating */}
                    <p className="mb-0">
                      <i className="fa fa-star-o" style={{ color: "orange" }}></i>
                      <i className="fa fa-star-o" style={{ color: "orange" }}></i>
                      <i className="fa fa-star-o" style={{ color: "orange" }}></i>
                      <i className="fa fa-star-o" style={{ color: "orange" }}></i>
                      <i className="fa fa-star-o" style={{ color: "orange" }}></i>
                    </p>
                    <p>
                      Some studies suggest that meat foods may have higher
                      levels of certain nutrients and antioxidants compared to
                      conventionally grown foods. However, this can vary depending
                      on factors like soil quality and growing conditions.
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="th-product product-grid text-left">
                  <div className="d-flex">
                    <div className="me-2">
                      <img
                        src="assets/img/testimonial/testi_3_2.jpg"
                        alt="Product Image"
                        className="teimg"
                      />
                    </div>
                    <div className="product-content">
                      <h6 className="mb-0">
                        <a href="#">Roniab Bosry</a>
                      </h6>
                      <p>2 months ago</p>
                    </div>
                  </div>
                  <div className="text-left">
                    {/* Star Rating */}
                    <p className="mb-0">
                      <i className="fa fa-star-o" style={{ color: "orange" }}></i>
                      <i className="fa fa-star-o" style={{ color: "orange" }}></i>
                      <i className="fa fa-star-o" style={{ color: "orange" }}></i>
                      <i className="fa fa-star-o" style={{ color: "orange" }}></i>
                      <i className="fa fa-star-o" style={{ color: "orange" }}></i>
                    </p>
                    <p>
                      Some studies suggest that meat foods may have higher
                      levels of certain nutrients and antioxidants compared to
                      conventionally grown foods. However, this can vary depending
                      on factors like soil quality and growing conditions.
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              {/* Repeat for more testimonials */}
            </Swiper>

            {/* Navigation buttons */}
            <button className="slider-arrow slider-prev">
              <i className="far fa-arrow-left"></i>
            </button>
            <button className="slider-arrow slider-next">
              <i className="far fa-arrow-right"></i>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
