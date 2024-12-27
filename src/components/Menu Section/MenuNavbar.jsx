import React from "react";
import MenuSidebar from "./MenuSidebar";
import OpenTiming from "./OpenTiming";
// import "../../src/stylehighway.css";
// import { img1 } from "../../../public/assets/img/product/deal_card_1.jpg";

const MenuNavbar = () => {
  return (
    <>
      {/* <!-- banner section end --> */}
      <section class="pt-0">
        <div class="container">
          <div class="row justify-content-center">
            <div class="restaurant-box">
              <div class="restaurant-details">
                <div class="d-flex justify-content-between flex-wrap gap-3">
                  <div>
                    <h2 class="restaurant-name">
                      Fiesta Mexico - High Wycombe
                    </h2>
                    <p class="restaurant-place mt-2">
                      17 High Street, High Wycombe, HP11 2BE
                    </p>
                    <h6 class="food-items">
                      <span>Italian</span>
                      <i class="fa fa-circle ml-2 me-2" aria-hidden="true"></i>
                      <span>Dips</span>
                      <i class="fa fa-circle ml-2 me-2" aria-hidden="true"></i>
                      <span>Deserts</span>
                    </h6>
                    <ul class="details-list">
                      <li>
                        <i class="ri-map-pin-fill theme-color"></i> 2.5 km
                      </li>
                      <li>
                        <i class="ri-time-line"></i> 25-30 min
                      </li>
                    </ul>
                  </div>
                  <div class="restaurant-description">
                    <div class="distance d-flex">
                      <h4 class="rating-star">
                        <span>
                          <i class="ri-star-s-fill text-warning"></i>
                        </span>{" "}
                        5.0 (1k+ Reviews)
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- tab section starts --> */}
      <section class="tab-details-section section-b-space">
        <div class="container">
          <div class="blog-boxs">
            <div class="row justify-content-center g-4">
              <MenuSidebar />
              <div
                class="col-lg-5 p-0"
                style={{
                  boxShadow:
                    "rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px",
                }}
              >
                <ul class="nav nav-tabs tab-style1" id="myTab" role="tablist">
                  <li class="nav-item" role="presentation">
                    <button
                      class="nav-link active"
                      id="order-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#online"
                      type="button"
                      role="tab"
                    >
                      MENU
                    </button>
                  </li>
                  <li class="nav-item" role="presentation">
                    <button
                      class="nav-link"
                      id="overview-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#overview"
                      type="button"
                      role="tab"
                    >
                      INFORMATION
                    </button>
                  </li>
                </ul>
                <div
                  class="tab-content product-details-content"
                  id="myTabContent"
                >
                  <div
                    class="tab-pane fade show active"
                    id="online"
                    role="tabpanel"
                    tabindex="0"
                  >
                    <div class="row g-lg-3 g-2">
                      <div class="col-lg-12">
                        <div class="product-box-section section-b-space">
                          <div
                            data-bs-spy="scroll"
                            data-bs-target="#navbar"
                            data-bs-smooth-scroll="true"
                            class="scrollspy-example-2"
                            tabindex="0"
                          >
                            <div class="product-details-box-list">
                              <div
                                class="product-details-box-title pt-0"
                                id="1"
                              >
                                Desserts
                              </div>
                              <div id="item-1">
                                <div class="product-details-box">
                                  <div class="product-img">
                                    <img
                                      class="img-fluid img"
                                      src="assets/images/menu/13.jpg"
                                      alt="rp1"
                                    />
                                  </div>
                                  <div class="product-content">
                                    <div class="description d-flex align-items-center justify-content-between">
                                      <div>
                                        <div class="d-flex align-items-center gap-2">
                                          <img
                                            class="img-fluid"
                                            src="assets/images/svg/veg.svg"
                                            alt="non-veg"
                                          />
                                          <h6 class="product-name">
                                            Ultimate Loaded Nacho Fiesta
                                          </h6>
                                        </div>
                                        <div class="rating-section">
                                          <ul class="rating-star">
                                            <li>
                                              <i class="ri-star-fill star"></i>
                                            </li>
                                            <li>
                                              <i class="ri-star-fill star"></i>
                                            </li>
                                            <li>
                                              <i class="ri-star-fill star"></i>
                                            </li>
                                            <li>
                                              <i class="ri-star-fill star"></i>
                                            </li>
                                            <li>
                                              <i class="ri-star-fill star"></i>
                                            </li>
                                          </ul>
                                          <h6 class="rating-amount">
                                            1k+ Ratings
                                          </h6>
                                        </div>
                                        <p>
                                          Nacho typically consists of layers of
                                          crispy tortilla chips topped with a
                                          variety of delicious ingredients.
                                        </p>
                                      </div>
                                      <div class="product-box-price">
                                        <h2 class="fw-semibold">$40</h2>
                                        <a
                                          href="#customized"
                                          class="btn theme-outline add-btn mt-0"
                                          data-bs-toggle="modal"
                                        >
                                          +Add
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class="product-details-box-title" id="2">
                                Special Combos
                              </div>
                              <div id="item-2">
                                <div class="product-details-box">
                                  <div class="product-img">
                                    <img
                                      class="img-fluid img"
                                      src="assets/images/menu/1.jpg"
                                      alt="rp1"
                                    />
                                  </div>
                                  <div class="product-content">
                                    <div class="description d-flex align-items-center justify-content-between">
                                      <div>
                                        <div class="d-flex align-items-center gap-2">
                                          <img
                                            class="img-fluid"
                                            src="assets/images/svg/veg.svg"
                                            alt="non-veg"
                                          />
                                          <h6 class="product-name">
                                            Burger & French fried combo
                                          </h6>
                                          <h6 class="customized">Customized</h6>
                                        </div>
                                        <div class="rating-section">
                                          <ul class="rating-star">
                                            <li>
                                              <i class="ri-star-fill star"></i>
                                            </li>
                                            <li>
                                              <i class="ri-star-fill star"></i>
                                            </li>
                                            <li>
                                              <i class="ri-star-fill star"></i>
                                            </li>
                                            <li>
                                              <i class="ri-star-fill star"></i>
                                            </li>
                                            <li>
                                              <i class="ri-star-fill star"></i>
                                            </li>
                                          </ul>
                                          <h6 class="rating-amount">
                                            1k+ Ratings
                                          </h6>
                                        </div>
                                        <p>
                                          Your burger dish looks perfect
                                          combination of flavors and textures.
                                        </p>
                                      </div>
                                      <div class="product-box-price">
                                        <h2 class="fw-semibold">
                                          $30{" "}
                                          <span>
                                            / <del>$60</del>
                                          </span>
                                        </h2>
                                        <a
                                          href="#customized"
                                          class="btn theme-outline add-btn mt-0"
                                          data-bs-toggle="modal"
                                        >
                                          +Add
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class="product-details-box-title" id="3">
                                Sandwich
                              </div>
                              <div id="item-3">
                                <div class="product-details-box">
                                  <div class="product-img">
                                    <img
                                      class="img-fluid img"
                                      src="assets/images/menu/2.jpg"
                                      alt="rp1"
                                    />
                                  </div>
                                  <div class="product-content">
                                    <div class="description d-flex align-items-center justify-content-between gap-1">
                                      <div>
                                        <div class="d-flex align-items-center gap-2">
                                          <img
                                            class="img-fluid"
                                            src="assets/images/svg/nonveg.svg"
                                            alt="non-veg"
                                          />
                                          <h6 class="product-name">
                                            Smoked Salmon Bagel
                                          </h6>
                                          <h6 class="customized">Customized</h6>
                                        </div>
                                        <div class="rating-section">
                                          <ul class="rating-star">
                                            <li>
                                              <i class="ri-star-fill star"></i>
                                            </li>
                                            <li>
                                              <i class="ri-star-fill star"></i>
                                            </li>
                                            <li>
                                              <i class="ri-star-fill star"></i>
                                            </li>
                                            <li>
                                              <i class="ri-star-fill star"></i>
                                            </li>
                                            <li>
                                              <i class="ri-star-fill star"></i>
                                            </li>
                                          </ul>
                                          <h6 class="rating-amount">
                                            1k+ Ratings
                                          </h6>
                                        </div>
                                        <p>
                                          This sandwich is a delightful
                                          combination of fresh crisp lettuce,
                                          juicy tomato,nestled two slices of
                                          toasted whole wheat bread.
                                        </p>
                                      </div>
                                      <div class="product-box-price">
                                        <h2 class="fw-semibold">$20</h2>
                                        <a
                                          href="#customized"
                                          class="btn theme-outline add-btn mt-0"
                                          data-bs-toggle="modal"
                                        >
                                          +Add
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div id="item-3-1">
                                <div class="product-details-box">
                                  <div class="product-img">
                                    <img
                                      class="img-fluid img"
                                      src="assets/images/menu/3.jpg"
                                      alt="rp1"
                                    />
                                  </div>
                                  <div class="product-content">
                                    <div class="description d-flex align-items-center justify-content-between gap-1">
                                      <div>
                                        <div class="d-flex align-items-center gap-2">
                                          <img
                                            class="img-fluid"
                                            src="assets/images/svg/nonveg.svg"
                                            alt="non-veg"
                                          />
                                          <h6 class="product-name">
                                            Avocado toasts with radish and seeds
                                          </h6>
                                        </div>
                                        <div class="rating-section">
                                          <ul class="rating-star">
                                            <li>
                                              <i class="ri-star-fill star"></i>
                                            </li>
                                            <li>
                                              <i class="ri-star-fill star"></i>
                                            </li>
                                            <li>
                                              <i class="ri-star-fill star"></i>
                                            </li>
                                            <li>
                                              <i class="ri-star-fill star"></i>
                                            </li>
                                            <li>
                                              <i class="ri-star-fill star"></i>
                                            </li>
                                          </ul>
                                          <h6 class="rating-amount">
                                            1k+ Ratings
                                          </h6>
                                        </div>
                                        <p>
                                          This sandwich is a delightful
                                          combination of fresh creamy avocado
                                          slices of toasted bread.
                                        </p>
                                      </div>
                                      <div class="product-box-price">
                                        <h2 class="fw-semibold">$26</h2>
                                        <a
                                          href="#"
                                          class="btn theme-outline add-btn mt-0"
                                        >
                                          +Add
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div id="item-3-2">
                                <div class="product-details-box">
                                  <div class="product-img">
                                    <img
                                      class="img-fluid img"
                                      src="assets/images/menu/4.jpg"
                                      alt="rp1"
                                    />
                                  </div>
                                  <div class="product-content">
                                    <div class="description d-flex align-items-center justify-content-between gap-1">
                                      <div>
                                        <div class="d-flex align-items-center gap-2">
                                          <img
                                            class="img-fluid"
                                            src="assets/images/svg/veg.svg"
                                            alt="non-veg"
                                          />
                                          <h6 class="product-name">
                                            Cranberry Club Sandwich
                                          </h6>
                                        </div>
                                        <div class="rating-section">
                                          <ul class="rating-star">
                                            <li>
                                              <i class="ri-star-fill star"></i>
                                            </li>
                                            <li>
                                              <i class="ri-star-fill star"></i>
                                            </li>
                                            <li>
                                              <i class="ri-star-fill star"></i>
                                            </li>
                                            <li>
                                              <i class="ri-star-fill star"></i>
                                            </li>
                                            <li>
                                              <i class="ri-star-fill star"></i>
                                            </li>
                                          </ul>
                                          <h6 class="rating-amount">
                                            1k+ Ratings
                                          </h6>
                                        </div>
                                        <p>
                                          The club sandwich is a Classic
                                          favorite, known for its layers of
                                          deliciousness all sandwiched between
                                          three slices of toasted bread.
                                        </p>
                                      </div>
                                      <div class="product-box-price">
                                        <h2 class="fw-semibold">$50</h2>
                                        <a
                                          href="#"
                                          class="btn theme-outline add-btn mt-0"
                                        >
                                          +Add
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class="product-details-box-title" id="4">
                                Tacos
                              </div>
                              <div id="item-4">
                                <div class="product-details-box">
                                  <div class="product-img">
                                    <img
                                      class="img-fluid img"
                                      src="assets/images/menu/5.jpg"
                                      alt="rp1"
                                    />
                                  </div>
                                  <div class="product-content">
                                    <div class="description d-flex align-items-center justify-content-between gap-1">
                                      <div>
                                        <div class="d-flex align-items-center gap-2">
                                          <img
                                            class="img-fluid"
                                            src="assets/images/svg/veg.svg"
                                            alt="non-veg"
                                          />
                                          <h6 class="product-name">
                                            Delicious taco shells with ground
                                            beef and fresh vegetables.
                                          </h6>
                                        </div>
                                        <div class="rating-section">
                                          <ul class="rating-star">
                                            <li>
                                              <i class="ri-star-fill star"></i>
                                            </li>
                                            <li>
                                              <i class="ri-star-fill star"></i>
                                            </li>
                                            <li>
                                              <i class="ri-star-fill star"></i>
                                            </li>
                                            <li>
                                              <i class="ri-star-fill star"></i>
                                            </li>
                                            <li>
                                              <i class="ri-star-fill star"></i>
                                            </li>
                                          </ul>
                                          <h6 class="rating-amount">
                                            1k+ Ratings
                                          </h6>
                                        </div>
                                        <p>
                                          Tacos are a delicious and versatile
                                          dish consist of a warm, soft corn or
                                          flour tortilla filled with a variety
                                          of savory ingredients
                                        </p>
                                      </div>
                                      <div class="product-box-price">
                                        <h2 class="fw-semibold">$30</h2>
                                        <a
                                          href="#customized"
                                          class="btn theme-outline add-btn mt-0"
                                          data-bs-toggle="modal"
                                        >
                                          +Add
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div id="4">
                                <div class="product-details-box">
                                  <div class="product-img">
                                    <img
                                      class="img-fluid img"
                                      src="assets/images/menu/6.jpg"
                                      alt="rp1"
                                    />
                                  </div>
                                  <div class="product-content">
                                    <div class="description d-flex align-items-center justify-content-between gap-1">
                                      <div>
                                        <div class="d-flex align-items-center gap-2">
                                          <img
                                            class="img-fluid"
                                            src="assets/images/svg/nonveg.svg"
                                            alt="non-veg"
                                          />
                                          <h6 class="product-name">
                                            Spicy Shrimp Street Tacos
                                          </h6>
                                        </div>
                                        <div class="rating-section">
                                          <ul class="rating-star">
                                            <li>
                                              <i class="ri-star-fill star"></i>
                                            </li>
                                            <li>
                                              <i class="ri-star-fill star"></i>
                                            </li>
                                            <li>
                                              <i class="ri-star-fill star"></i>
                                            </li>
                                            <li>
                                              <i class="ri-star-fill star"></i>
                                            </li>
                                            <li>
                                              <i class="ri-star-fill star"></i>
                                            </li>
                                          </ul>
                                          <h6 class="rating-amount">
                                            1k+ Ratings
                                          </h6>
                                        </div>
                                        <p>
                                          Tacos are a delicious and versatile
                                          dish consist of a warm, soft corn or
                                          flour tortilla filled with a variety
                                          of savory ingredients
                                        </p>
                                      </div>
                                      <div class="product-box-price">
                                        <h2 class="fw-semibold">$34</h2>
                                        <a
                                          href="#"
                                          class="btn theme-outline add-btn mt-0"
                                        >
                                          +Add
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div id="5">
                                <div class="product-details-box">
                                  <div class="product-img">
                                    <img
                                      class="img-fluid img"
                                      src="assets/images/menu/7.jpg"
                                      alt="rp1"
                                    />
                                  </div>
                                  <div class="product-content">
                                    <div class="description d-flex align-items-center justify-content-between gap-1">
                                      <div>
                                        <div class="d-flex align-items-center gap-2">
                                          <img
                                            class="img-fluid"
                                            src="assets/images/svg/veg.svg"
                                            alt="non-veg"
                                          />
                                          <h6 class="product-name">
                                            BBQ Pulled Pork Fiesta Tacos
                                          </h6>
                                        </div>
                                        <div class="rating-section">
                                          <ul class="rating-star">
                                            <li>
                                              <i class="ri-star-fill star"></i>
                                            </li>
                                            <li>
                                              <i class="ri-star-fill star"></i>
                                            </li>
                                            <li>
                                              <i class="ri-star-fill star"></i>
                                            </li>
                                            <li>
                                              <i class="ri-star-fill star"></i>
                                            </li>
                                            <li>
                                              <i class="ri-star-fill star"></i>
                                            </li>
                                          </ul>
                                          <h6 class="rating-amount">
                                            1k+ Ratings
                                          </h6>
                                        </div>
                                        <p>
                                          Tacos are a delicious and versatile
                                          dish consist of a Rosated tortilla
                                          filled with a variety of savory
                                          ingredients
                                        </p>
                                      </div>
                                      <div class="product-box-price">
                                        <h2 class="fw-semibold">$38</h2>
                                        <a
                                          href="#"
                                          class="btn theme-outline add-btn mt-0"
                                        >
                                          +Add
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class="product-details-box-title" id="5">
                                Pasta
                              </div>
                              <div>
                                <div class="product-details-box">
                                  <div class="product-img">
                                    <img
                                      class="img-fluid img"
                                      src="assets/images/menu/8.jpg"
                                      alt="rp1"
                                    />
                                  </div>
                                  <div class="product-content">
                                    <div class="description d-flex align-items-center justify-content-between gap-1">
                                      <div>
                                        <div class="d-flex align-items-center gap-2">
                                          <img
                                            class="img-fluid"
                                            src="assets/images/svg/veg.svg"
                                            alt="non-veg"
                                          />
                                          <h6 class="product-name">
                                            Pasta salad with balsamic vinegar
                                          </h6>
                                        </div>
                                        <div class="rating-section">
                                          <ul class="rating-star">
                                            <li>
                                              <i class="ri-star-fill star"></i>
                                            </li>
                                            <li>
                                              <i class="ri-star-fill star"></i>
                                            </li>
                                            <li>
                                              <i class="ri-star-fill star"></i>
                                            </li>
                                            <li>
                                              <i class="ri-star-fill star"></i>
                                            </li>
                                            <li>
                                              <i class="ri-star-fill star"></i>
                                            </li>
                                          </ul>
                                          <h6 class="rating-amount">
                                            1k+ Ratings
                                          </h6>
                                        </div>
                                        <p>
                                          Green vegetable pasta a pasta dish
                                          that incorporates various green
                                          vegetables and sauce or as part of the
                                          toppings.
                                        </p>
                                      </div>
                                      <div class="product-box-price">
                                        <h2 class="fw-semibold">$40</h2>
                                        <a
                                          href="#"
                                          class="btn theme-outline add-btn mt-0"
                                        >
                                          +Add
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div>
                                <div class="product-details-box">
                                  <div class="product-img">
                                    <img
                                      class="img-fluid img"
                                      src="assets/images/menu/9.jpg"
                                      alt="rp1"
                                    />
                                  </div>
                                  <div class="product-content">
                                    <div class="description d-flex align-items-center justify-content-between gap-1">
                                      <div>
                                        <div class="d-flex align-items-center gap-2">
                                          <img
                                            class="img-fluid"
                                            src="assets/images/svg/veg.svg"
                                            alt="non-veg"
                                          />
                                          <h6 class="product-name">
                                            Striped handmade ravioli,
                                          </h6>
                                        </div>
                                        <div class="rating-section">
                                          <ul class="rating-star">
                                            <li>
                                              <i class="ri-star-fill star"></i>
                                            </li>
                                            <li>
                                              <i class="ri-star-fill star"></i>
                                            </li>
                                            <li>
                                              <i class="ri-star-fill star"></i>
                                            </li>
                                            <li>
                                              <i class="ri-star-fill star"></i>
                                            </li>
                                            <li>
                                              <i class="ri-star-fill star"></i>
                                            </li>
                                          </ul>
                                          <h6 class="rating-amount">
                                            1k+ Ratings
                                          </h6>
                                        </div>
                                        <p>
                                          Ravioli is a traditional Italian pasta
                                          dish loved for its delicate,
                                          pillow-like pockets filled with
                                          flavorful ingredients.
                                        </p>
                                      </div>
                                      <div class="product-box-price">
                                        <h2 class="fw-semibold">$42</h2>
                                        <a
                                          href="#"
                                          class="btn theme-outline add-btn mt-0"
                                        >
                                          +Add
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div>
                                <div class="product-details-box">
                                  <div class="product-img">
                                    <img
                                      class="img-fluid img"
                                      src="assets/images/menu/11.jpg"
                                      alt="rp1"
                                    />
                                  </div>
                                  <div class="product-content">
                                    <div class="description d-flex align-items-center justify-content-between gap-1">
                                      <div>
                                        <div class="d-flex align-items-center gap-2">
                                          <img
                                            class="img-fluid"
                                            src="assets/images/svg/veg.svg"
                                            alt="non-veg"
                                          />
                                          <h6 class="product-name">
                                            Pasta carbonara on a plate
                                          </h6>
                                        </div>
                                        <div class="rating-section">
                                          <ul class="rating-star">
                                            <li>
                                              <i class="ri-star-fill star"></i>
                                            </li>
                                            <li>
                                              <i class="ri-star-fill star"></i>
                                            </li>
                                            <li>
                                              <i class="ri-star-fill star"></i>
                                            </li>
                                            <li>
                                              <i class="ri-star-fill star"></i>
                                            </li>
                                            <li>
                                              <i class="ri-star-fill star"></i>
                                            </li>
                                          </ul>
                                          <h6 class="rating-amount">
                                            1k+ Ratings
                                          </h6>
                                        </div>
                                        <p>
                                          Carbonara pasta is a Classic Italian
                                          dish known for its rich and creamy
                                          sauce made with eggs, cheese, pancetta
                                          or bacon, and black pepper.
                                        </p>
                                      </div>
                                      <div class="product-box-price">
                                        <h2 class="fw-semibold">$35</h2>
                                        <a
                                          href="#"
                                          class="btn theme-outline add-btn mt-0"
                                        >
                                          +Add
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div>
                                <div class="product-details-box">
                                  <div class="product-img">
                                    <img
                                      class="img-fluid img"
                                      src="assets/images/menu/12.jpg"
                                      alt="rp1"
                                    />
                                  </div>
                                  <div class="product-content">
                                    <div class="description d-flex align-items-center justify-content-between gap-1">
                                      <div>
                                        <div class="d-flex align-items-center gap-2">
                                          <img
                                            class="img-fluid"
                                            src="assets/images/svg/veg.svg"
                                            alt="non-veg"
                                          />
                                          <h6 class="product-name">
                                            Penne pasta with tomato sauce
                                          </h6>
                                        </div>
                                        <div class="rating-section">
                                          <ul class="rating-star">
                                            <li>
                                              <i class="ri-star-fill star"></i>
                                            </li>
                                            <li>
                                              <i class="ri-star-fill star"></i>
                                            </li>
                                            <li>
                                              <i class="ri-star-fill star"></i>
                                            </li>
                                            <li>
                                              <i class="ri-star-fill star"></i>
                                            </li>
                                            <li>
                                              <i class="ri-star-fill star"></i>
                                            </li>
                                          </ul>
                                          <h6 class="rating-amount">
                                            1k+ Ratings
                                          </h6>
                                        </div>
                                        <p>
                                          Penne pasta is a versatile and popular
                                          type of pasta that is shaped like
                                          tubes with diagonally-cut ends.
                                        </p>
                                      </div>
                                      <div class="product-box-price">
                                        <h2 class="fw-semibold">$45</h2>
                                        <a
                                          href="#"
                                          class="btn theme-outline add-btn mt-0"
                                        >
                                          +Add
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class="product-details-box-title" id="6">
                                Noddles
                              </div>
                              <div>
                                <div class="product-details-box">
                                  <div class="product-img">
                                    <img
                                      class="img-fluid img"
                                      src="assets/images/menu/10.jpg"
                                      alt="rp1"
                                    />
                                  </div>
                                  <div class="product-content">
                                    <div class="description d-flex align-items-center justify-content-between gap-1">
                                      <div>
                                        <div class="d-flex align-items-center gap-2">
                                          <img
                                            class="img-fluid"
                                            src="assets/images/svg/nonveg.svg"
                                            alt="non-veg"
                                          />
                                          <h6 class="product-name">
                                            Noodles with egg and chicken
                                          </h6>
                                        </div>
                                        <div class="rating-section">
                                          <ul class="rating-star">
                                            <li>
                                              <i class="ri-star-fill star"></i>
                                            </li>
                                            <li>
                                              <i class="ri-star-fill star"></i>
                                            </li>
                                            <li>
                                              <i class="ri-star-fill star"></i>
                                            </li>
                                            <li>
                                              <i class="ri-star-fill star"></i>
                                            </li>
                                            <li>
                                              <i class="ri-star-fill star"></i>
                                            </li>
                                          </ul>
                                          <h6 class="rating-amount">
                                            1k+ Ratings
                                          </h6>
                                        </div>
                                        <p>
                                          This dish is a delicious combination
                                          of tender chicken, fluffy eggs, and
                                          flavorful noodles, all coated in a
                                          savory sauce.
                                        </p>
                                      </div>
                                      <div class="product-box-price">
                                        <h2 class="fw-semibold">$50</h2>
                                        <a
                                          href="#"
                                          class="btn theme-outline add-btn mt-0"
                                        >
                                          +Add
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div id="item-6-1">
                                <div class="product-details-box">
                                  <div class="product-img">
                                    <img
                                      class="img-fluid img"
                                      src="assets/images/menu/13.jpg"
                                      alt="rp1"
                                    />
                                  </div>
                                  <div class="product-content">
                                    <div class="description d-flex align-items-center justify-content-between gap-1">
                                      <div>
                                        <div class="d-flex align-items-center gap-2">
                                          <img
                                            class="img-fluid"
                                            src="assets/images/svg/veg.svg"
                                            alt="non-veg"
                                          />
                                          <h6 class="product-name">
                                            Creamy garlic mushroom spinach tube
                                            pasta
                                          </h6>
                                        </div>
                                        <div class="rating-section">
                                          <ul class="rating-star">
                                            <li>
                                              <i class="ri-star-fill star"></i>
                                            </li>
                                            <li>
                                              <i class="ri-star-fill star"></i>
                                            </li>
                                            <li>
                                              <i class="ri-star-fill star"></i>
                                            </li>
                                            <li>
                                              <i class="ri-star-fill star"></i>
                                            </li>
                                            <li>
                                              <i class="ri-star-fill star"></i>
                                            </li>
                                          </ul>
                                          <h6 class="rating-amount">
                                            1k+ Ratings
                                          </h6>
                                        </div>
                                        <p>
                                          Decadent and flavorful dish that
                                          combines tender pasta tubes with a
                                          rich and creamy sauce, sautéed
                                          mushrooms, garlic, and fresh spinach.
                                        </p>
                                      </div>
                                      <div class="product-box-price">
                                        <h2 class="fw-semibold">$32</h2>
                                        <a
                                          href="#"
                                          class="btn theme-outline add-btn mt-0"
                                        >
                                          +Add
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class="product-details-box-title" id="7">
                                Wrap
                              </div>
                              <div id="item-7">
                                <div class="product-details-box">
                                  <div class="product-img">
                                    <img
                                      class="img-fluid img"
                                      src="assets/images/menu/14.jpg"
                                      alt="rp1"
                                    />
                                  </div>
                                  <div class="product-content">
                                    <div class="description d-flex align-items-center justify-content-between gap-1">
                                      <div>
                                        <div class="d-flex align-items-center gap-2">
                                          <img
                                            class="img-fluid"
                                            src="assets/images/svg/nonveg.svg"
                                            alt="non-veg"
                                          />
                                          <h6 class="product-name">
                                            Kebab sandwich wrap
                                          </h6>
                                        </div>
                                        <div class="rating-section">
                                          <ul class="rating-star">
                                            <li>
                                              <i class="ri-star-fill star"></i>
                                            </li>
                                            <li>
                                              <i class="ri-star-fill star"></i>
                                            </li>
                                            <li>
                                              <i class="ri-star-fill star"></i>
                                            </li>
                                            <li>
                                              <i class="ri-star-fill star"></i>
                                            </li>
                                            <li>
                                              <i class="ri-star-fill star"></i>
                                            </li>
                                          </ul>
                                          <h6 class="rating-amount">
                                            1k+ Ratings
                                          </h6>
                                        </div>
                                        <p>
                                          Delicious and satisfying dish that
                                          combines flavorful kebab meat, fresh
                                          vegetables, and creamy sauces all
                                          wrapped in a warm tortilla or
                                          flatbread
                                        </p>
                                      </div>
                                      <div class="product-box-price">
                                        <h2 class="fw-semibold">$46</h2>
                                        <a
                                          href="#"
                                          class="btn theme-outline add-btn mt-0"
                                        >
                                          +Add
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div id="item-7-1">
                                <div class="product-details-box">
                                  <div class="product-img">
                                    <img
                                      class="img-fluid img"
                                      src="assets/images/menu/15.jpg"
                                      alt="rp1"
                                    />
                                  </div>
                                  <div class="product-content">
                                    <div class="description d-flex align-items-center justify-content-between gap-1">
                                      <div>
                                        <div class="d-flex align-items-center gap-2">
                                          <img
                                            class="img-fluid"
                                            src="assets/images/svg/nonveg.svg"
                                            alt="non-veg"
                                          />
                                          <h6 class="product-name">
                                            Vietnamese spring rolls
                                          </h6>
                                        </div>
                                        <div class="rating-section">
                                          <ul class="rating-star">
                                            <li>
                                              <i class="ri-star-fill star"></i>
                                            </li>
                                            <li>
                                              <i class="ri-star-fill star"></i>
                                            </li>
                                            <li>
                                              <i class="ri-star-fill star"></i>
                                            </li>
                                            <li>
                                              <i class="ri-star-fill star"></i>
                                            </li>
                                            <li>
                                              <i class="ri-star-fill star"></i>
                                            </li>
                                          </ul>
                                          <h6 class="rating-amount">
                                            1k+ Ratings
                                          </h6>
                                        </div>
                                        <p>
                                          Fresh spring rolls or summer rolls,
                                          are a popular and refreshing dish made
                                          with rice paper wrappers filled with a
                                          variety of fresh ingredients.
                                        </p>
                                      </div>
                                      <div class="product-box-price">
                                        <h2 class="fw-semibold">$43</h2>
                                        <a
                                          href="#"
                                          class="btn theme-outline add-btn mt-0"
                                        >
                                          +Add
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <div class="product-details-box-title" id="8">
                                Drinks
                              </div>
                              <div id="item-9">
                                <div class="product-details-box">
                                  <div class="product-img">
                                    <img
                                      class="img-fluid img"
                                      src="assets/images/menu/20.jpg"
                                      alt="rp1"
                                    />
                                  </div>
                                  <div class="product-content">
                                    <div class="description d-flex align-items-center justify-content-between gap-1">
                                      <div>
                                        <div class="d-flex align-items-center gap-2">
                                          <img
                                            class="img-fluid"
                                            src="assets/images/svg/veg.svg"
                                            alt="non-veg"
                                          />
                                          <h6 class="product-name">
                                            Glass of coffee and milk
                                          </h6>
                                        </div>
                                        <div class="rating-section">
                                          <ul class="rating-star">
                                            <li>
                                              <i class="ri-star-fill star"></i>
                                            </li>
                                            <li>
                                              <i class="ri-star-fill star"></i>
                                            </li>
                                            <li>
                                              <i class="ri-star-fill star"></i>
                                            </li>
                                            <li>
                                              <i class="ri-star-fill star"></i>
                                            </li>
                                            <li>
                                              <i class="ri-star-fill star"></i>
                                            </li>
                                          </ul>
                                          <h6 class="rating-amount">
                                            1k+ Ratings
                                          </h6>
                                        </div>
                                        <p>
                                          Classic and comforting beverage that
                                          combines the rich flavor of coffee
                                          with the creamy goodness of milk.
                                        </p>
                                      </div>
                                      <div class="product-box-price">
                                        <h2 class="fw-semibold">$12</h2>
                                        <a
                                          href="#"
                                          class="btn theme-outline add-btn mt-0"
                                        >
                                          +Add
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div id="item-9-1">
                                <div class="product-details-box">
                                  <div class="product-img">
                                    <img
                                      class="img-fluid img"
                                      src="assets/images/menu/21.jpg"
                                      alt="rp1"
                                    />
                                  </div>
                                  <div class="product-content">
                                    <div class="description d-flex align-items-center justify-content-between gap-1">
                                      <div>
                                        <div class="d-flex align-items-center gap-2">
                                          <img
                                            class="img-fluid"
                                            src="assets/images/svg/veg.svg"
                                            alt="non-veg"
                                          />
                                          <h6 class="product-name">
                                            Healthy detox drinks
                                          </h6>
                                        </div>
                                        <div class="rating-section">
                                          <ul class="rating-star">
                                            <li>
                                              <i class="ri-star-fill star"></i>
                                            </li>
                                            <li>
                                              <i class="ri-star-fill star"></i>
                                            </li>
                                            <li>
                                              <i class="ri-star-fill star"></i>
                                            </li>
                                            <li>
                                              <i class="ri-star-fill star"></i>
                                            </li>
                                            <li>
                                              <i class="ri-star-fill star"></i>
                                            </li>
                                          </ul>
                                          <h6 class="rating-amount">
                                            1k+ Ratings
                                          </h6>
                                        </div>
                                        <p>
                                          This infused with various fruits,
                                          vegetables, and herbs to add flavor
                                          and provide additional health
                                          benefits.
                                        </p>
                                      </div>
                                      <div class="product-box-price">
                                        <h2 class="fw-semibold">$10</h2>
                                        <a
                                          href="#"
                                          class="btn theme-outline add-btn mt-0"
                                        >
                                          +Add
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div id="item-9-2">
                                <div class="product-details-box border-0 pb -0">
                                  <div class="product-img">
                                    <img
                                      class="img-fluid img"
                                      src="assets/images/menu/22.jpg"
                                      alt="rp1"
                                    />
                                  </div>
                                  <div class="product-content">
                                    <div class="description d-flex align-items-center justify-content-between gap-1">
                                      <div>
                                        <div class="d-flex align-items-center gap-2">
                                          <img
                                            class="img-fluid"
                                            src="assets/images/svg/veg.svg"
                                            alt="non-veg"
                                          />
                                          <h6 class="product-name">
                                            Lemon juice cocktail with a slice of
                                            lemon
                                          </h6>
                                        </div>
                                        <div class="rating-section">
                                          <ul class="rating-star">
                                            <li>
                                              <i class="ri-star-fill star"></i>
                                            </li>
                                            <li>
                                              <i class="ri-star-fill star"></i>
                                            </li>
                                            <li>
                                              <i class="ri-star-fill star"></i>
                                            </li>
                                            <li>
                                              <i class="ri-star-fill star"></i>
                                            </li>
                                            <li>
                                              <i class="ri-star-fill star"></i>
                                            </li>
                                          </ul>
                                          <h6 class="rating-amount">
                                            1k+ Ratings
                                          </h6>
                                        </div>
                                        <p>
                                          A lemon juice cocktail is a refreshing
                                          and tangy beverage made with freshly
                                          squeezed lemon juice.
                                        </p>
                                      </div>
                                      <div class="product-box-price">
                                        <h2 class="fw-semibold">$10</h2>
                                        <a
                                          href="#"
                                          class="btn theme-outline add-btn mt-0"
                                        >
                                          +Add
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div id="item-9-3">
                                <div class="product-details-box border-0 pb-0">
                                  <div class="product-img">
                                    <img
                                      class="img-fluid img"
                                      src="assets/images/menu/23.jpg"
                                      alt="rp1"
                                    />
                                  </div>
                                  <div class="product-content">
                                    <div class="description d-flex align-items-center justify-content-between gap-1">
                                      <div>
                                        <div class="d-flex align-items-center gap-2">
                                          <img
                                            class="img-fluid"
                                            src="assets/images/svg/veg.svg"
                                            alt="non-veg"
                                          />
                                          <h6 class="product-name">
                                            Orange and lime fresh drinks
                                          </h6>
                                        </div>
                                        <div class="rating-section">
                                          <ul class="rating-star">
                                            <li>
                                              <i class="ri-star-fill star"></i>
                                            </li>
                                            <li>
                                              <i class="ri-star-fill star"></i>
                                            </li>
                                            <li>
                                              <i class="ri-star-fill star"></i>
                                            </li>
                                            <li>
                                              <i class="ri-star-fill star"></i>
                                            </li>
                                            <li>
                                              <i class="ri-star-fill star"></i>
                                            </li>
                                          </ul>
                                          <h6 class="rating-amount">
                                            1k+ Ratings
                                          </h6>
                                        </div>
                                        <p>
                                          A orange juice cocktail is a
                                          refreshing and tangy beverage made
                                          with freshly squeezed lemon juice.
                                        </p>
                                      </div>
                                      <div class="product-box-price">
                                        <h2 class="fw-semibold">$12</h2>
                                        <a
                                          href="#"
                                          class="btn theme-outline add-btn mt-0"
                                        >
                                          +Add
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <div class="product-details-box-title" id="9">
                                Main Course
                              </div>
                              <div id="item-8">
                                <div class="product-details-box">
                                  <div class="product-img">
                                    <img
                                      class="img-fluid img"
                                      src="assets/images/menu/16.jpg"
                                      alt="rp1"
                                    />
                                  </div>
                                  <div class="product-content">
                                    <div class="description d-flex align-items-center justify-content-between gap-1">
                                      <div>
                                        <div class="d-flex align-items-center gap-2">
                                          <img
                                            class="img-fluid"
                                            src="assets/images/svg/veg.svg"
                                            alt="non-veg"
                                          />
                                          <h6 class="product-name">
                                            Croissant with fresh strawberry and
                                            whipped cream.
                                          </h6>
                                        </div>
                                        <div class="rating-section">
                                          <ul class="rating-star">
                                            <li>
                                              <i class="ri-star-fill star"></i>
                                            </li>
                                            <li>
                                              <i class="ri-star-fill star"></i>
                                            </li>
                                            <li>
                                              <i class="ri-star-fill star"></i>
                                            </li>
                                            <li>
                                              <i class="ri-star-fill star"></i>
                                            </li>
                                            <li>
                                              <i class="ri-star-fill star"></i>
                                            </li>
                                          </ul>
                                          <h6 class="rating-amount">
                                            1k+ Ratings
                                          </h6>
                                        </div>
                                        <p>
                                          Delightful and indulgent treat that
                                          combines the buttery richness of a
                                          croissant with the sweetness of fresh
                                          strawberries and the lightness of
                                          whipped cream.
                                        </p>
                                      </div>
                                      <div class="product-box-price">
                                        <h2 class="fw-semibold">$20</h2>
                                        <a
                                          href="#"
                                          class="btn theme-outline add-btn mt-0"
                                        >
                                          +Add
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div id="item-8-1">
                                <div class="product-details-box">
                                  <div class="product-img">
                                    <img
                                      class="img-fluid img"
                                      src="assets/images/menu/17.jpg"
                                      alt="rp1"
                                    />
                                  </div>
                                  <div class="product-content">
                                    <div class="description d-flex align-items-center justify-content-between gap-1">
                                      <div>
                                        <div class="d-flex align-items-center gap-2">
                                          <img
                                            class="img-fluid"
                                            src="assets/images/svg/nonveg.svg"
                                            alt="non-veg"
                                          />
                                          <h6 class="product-name">
                                            Cookies and coffee
                                          </h6>
                                        </div>
                                        <div class="rating-section">
                                          <ul class="rating-star">
                                            <li>
                                              <i class="ri-star-fill star"></i>
                                            </li>
                                            <li>
                                              <i class="ri-star-fill star"></i>
                                            </li>
                                            <li>
                                              <i class="ri-star-fill star"></i>
                                            </li>
                                            <li>
                                              <i class="ri-star-fill star"></i>
                                            </li>
                                            <li>
                                              <i class="ri-star-fill star"></i>
                                            </li>
                                          </ul>
                                          <h6 class="rating-amount">
                                            1k+ Ratings
                                          </h6>
                                        </div>
                                        <p>
                                          Cookies are sweet baked treats that
                                          come in various shapes, sizes, and
                                          flavors.
                                        </p>
                                      </div>
                                      <div class="product-box-price">
                                        <h2 class="fw-semibold">$18</h2>
                                        <a
                                          href="#"
                                          class="btn theme-outline add-btn mt-0"
                                        >
                                          +Add
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div id="item-8-2">
                                <div class="product-details-box">
                                  <div class="product-img">
                                    <img
                                      class="img-fluid img"
                                      src="assets/images/menu/18.jpg"
                                      alt="rp1"
                                    />
                                  </div>
                                  <div class="product-content">
                                    <div class="description d-flex align-items-center justify-content-between gap-1">
                                      <div>
                                        <div class="d-flex align-items-center gap-2">
                                          <img
                                            class="img-fluid"
                                            src="assets/images/svg/veg.svg"
                                            alt="non-veg"
                                          />
                                          <h6 class="product-name">
                                            delicious dessert with tea, nuts,
                                            teapot, fruit jam
                                          </h6>
                                        </div>
                                        <div class="rating-section">
                                          <ul class="rating-star">
                                            <li>
                                              <i class="ri-star-fill star"></i>
                                            </li>
                                            <li>
                                              <i class="ri-star-fill star"></i>
                                            </li>
                                            <li>
                                              <i class="ri-star-fill star"></i>
                                            </li>
                                            <li>
                                              <i class="ri-star-fill star"></i>
                                            </li>
                                            <li>
                                              <i class="ri-star-fill star"></i>
                                            </li>
                                          </ul>
                                          <h6 class="rating-amount">
                                            1k+ Ratings
                                          </h6>
                                        </div>
                                        <p>
                                          decadent triple chocolate mousse cake,
                                          a true indulgence for any chocolate
                                          lover.
                                        </p>
                                      </div>
                                      <div class="product-box-price">
                                        <h2 class="fw-semibold">$16</h2>
                                        <a
                                          href="#"
                                          class="btn theme-outline add-btn mt-0"
                                        >
                                          +Add
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div id="item-8-3">
                                <div class="product-details-box">
                                  <div class="product-img">
                                    <img
                                      class="img-fluid img"
                                      src="assets/images/menu/19.jpg"
                                      alt="rp1"
                                    />
                                  </div>
                                  <div class="product-content">
                                    <div class="description d-flex align-items-center justify-content-between gap-1">
                                      <div>
                                        <div class="d-flex align-items-center gap-2">
                                          <img
                                            class="img-fluid"
                                            src="assets/images/svg/veg.svg"
                                            alt="non-veg"
                                          />
                                          <h6 class="product-name">
                                            Strawberries with sour cream
                                          </h6>
                                        </div>
                                        <div class="rating-section">
                                          <ul class="rating-star">
                                            <li>
                                              <i class="ri-star-fill star"></i>
                                            </li>
                                            <li>
                                              <i class="ri-star-fill star"></i>
                                            </li>
                                            <li>
                                              <i class="ri-star-fill star"></i>
                                            </li>
                                            <li>
                                              <i class="ri-star-fill star"></i>
                                            </li>
                                            <li>
                                              <i class="ri-star-fill star"></i>
                                            </li>
                                          </ul>
                                          <h6 class="rating-amount">
                                            1k+ Ratings
                                          </h6>
                                        </div>
                                        <p>
                                          This Mexican Shredded Beef has
                                          incredible depth of flavour!
                                        </p>
                                      </div>
                                      <div class="product-box-price">
                                        <h2 class="fw-semibold">$8</h2>
                                        <a
                                          href="#"
                                          class="btn theme-outline add-btn mt-0"
                                        >
                                          +Add
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    class="tab-pane fade"
                    id="overview"
                    role="tabpanel"
                    tabindex="0"
                  >
                    <div class="overview-section">
                      <div class="row g-3">
                        <div class="col-md-12 col-12">
                          <div class="overview-content mb-3">
                            <h5 class="mb-2">
                              <img
                                src="assets/images/about.png"
                                style={{ width: "20px" }}
                              />{" "}
                              About Description
                            </h5>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit, sed do eiusmod tempor incillum dolore eu
                              fugiat nulla pariatur. Excepteur sint occaecat
                              cupidatat non proident, sunt in culpa qui officia
                              deserunt mollit anim id est laborum.
                            </p>
                          </div>

                          <div class="overview-content mb-3">
                            <h5 class="mb-2">
                              <i class="fa fa-credit-card"></i> Payment Methhod
                            </h5>
                            <p>
                              <i class="fa fa-check theme-color"></i> Cash{" "}
                            </p>
                            <p>
                              <i class="fa fa-check theme-color"></i> Payment
                              Online{" "}
                            </p>
                          </div>

                          <div class="overview-content mb-3">
                            <h5 class="mb-2">
                              <img
                                src="assets/images/info.png"
                                style={{ width: "20px" }}
                              />{" "}
                              Allergen Info
                            </h5>
                            <ul class="alergy">
                              <li>Cold</li>
                              <li>Viral Flue</li>
                              <li>Headahe</li>
                            </ul>
                          </div>
                        </div>
                        <div class="col-lg-12">
                          <h5>
                            <i class="fa fa-star-o"></i> Food Hygiene Rating
                          </h5>
                          <div class="d-flex p-2 border">
                            <div class="me-3 hyzine">
                              <img
                                src="https://seeklogo.com/images/F/food-hygiene-rating-logo-C7CB72DFF2-seeklogo.com.png"
                                style={{ width: "150px" }}
                              />
                            </div>

                            <div>
                              <h6>Last Inspection 27 March 2024</h6>
                              <p>
                                Rating b the Food Standard Agency and our local
                                authority. This rating may have changed
                              </p>

                              <a
                                href="https://ratings.food.gov.uk/"
                                target="_blank"
                              >
                                More Info
                              </a>
                            </div>
                          </div>
                        </div>
                        <div class="col-md-12 col-12">
                          <h5>
                            <i class="fa fa-map"></i> Where to Find Us
                          </h5>
                          <div class="overview-content mt-0 pl-3">
                            <iframe
                              src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d2965.0824050173574!2d-93.63905729999999!3d41.998507000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sWebFilings%2C+University+Boulevard%2C+Ames%2C+IA!5e0!3m2!1sen!2sus!4v1390839289319"
                              width="100%"
                              height="400"
                              frameborder="0"
                              style={{ border: "0" }}
                            ></iframe>
                          </div>
                        </div>
                        <div class="col-md-12 col-12">
                          <h5>
                            <span class="me-2">Contact Us:</span>{" "}
                            <a href="tel:+919999999999" data-rel="external">
                              {" "}
                              <i class="fa fa-phone"></i> +919999999999
                            </a>
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <OpenTiming />
            </div>
          </div>
        </div>
      </section>

      {/* <!-- mobile fix menu start --> */}
      <div class="mobile-menu d-md-none d-block mobile-cart">
        <ul>
          <li class="active">
            <a href="index.html" class="menu-box">
              <i class="ri-home-4-line"></i>
              <span>Home</span>
            </a>
          </li>
          <li class="mobile-category">
            <a href="dining.html" class="menu-box">
              <i class="fa fa-cutlery mb-2 pt-1"></i>
              <span>Dining</span>
            </a>
          </li>
          <li>
            <a href="my-history.html" class="menu-box">
              <i class="ri-apps-line"></i>
              <span>History</span>
            </a>
          </li>
          <li>
            <a href="setting.html" class="menu-box">
              <i class="fa fa-user mb-2 pt-1"></i>
              <span>Setting</span>
            </a>
          </li>
        </ul>
      </div>
      {/* <!-- mobile fix menu end --> */}
      {/* <!-- cart fix panel --> */}
      <div class="fixed-btn d-lg-none d-block">
        <div class="custom-container">
          <div class="cart-fixed-bottom">
            <h6 class="fw-medium">3 items</h6>
            <a href="checkout.html" class="cart-fixed-right">
              <h6 class="fw-medium text-white">
                View cart <i class="ri-arrow-right-line"></i>
              </h6>
            </a>
          </div>
        </div>
      </div>
      {/* <!-- cart fix panel --> */}

      {/* <!-- customized modal starts --> */}
      <div class="modal customized-modal" id="customized" tabindex="-1">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="container">
              <div class="filter-header">
                <h5 class="title">Custom Food</h5>
                <a
                  href="#"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></a>
              </div>
              <div class="filter-body">
                <div class="filter-title">
                  <h5 class="fw-medium dark-text">Choose Size</h5>
                </div>
                <ul class="filter-list">
                  <li>
                    <h6 class="product-size">Size S</h6>
                    <div class="form-check product-price">
                      <label class="form-check-label" for="reverseCheck1">
                        $18
                      </label>
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="reverseCheck1"
                      />
                    </div>
                  </li>
                  <li>
                    <h6 class="product-size">Size M</h6>
                    <div class="form-check product-price">
                      <label class="form-check-label" for="reverseCheck1">
                        $20
                      </label>
                      <input
                        class="form-check-input"
                        type="checkbox"
                        id="reverseCheck2"
                        checked
                      />
                    </div>
                  </li>
                  <li>
                    <h6 class="product-size">Size L</h6>
                    <div class="form-check product-price">
                      <label class="form-check-label" for="reverseCheck1">
                        $22
                      </label>
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="reverseCheck3"
                      />
                    </div>
                  </li>
                </ul>
                <div class="filter-title">
                  <h5 class="fw-medium dark-text">Choose Size</h5>
                </div>
                <ul class="filter-list border-0">
                  <li>
                    <h6 class="product-size">Chili sauce</h6>
                    <div class="form-check product-price">
                      <label class="form-check-label" for="reverseCheck1">
                        $18
                      </label>
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="reverseCheck4"
                      />
                    </div>
                  </li>
                  <li>
                    <h6 class="product-size">Mustard</h6>
                    <div class="form-check product-price">
                      <label class="form-check-label" for="reverseCheck1">
                        $20
                      </label>
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="reverseCheck5"
                        checked
                      />
                    </div>
                  </li>
                  <li>
                    <h6 class="product-size">Special dipping sauce</h6>
                    <div class="form-check product-price">
                      <label class="form-check-label" for="reverseCheck1">
                        $22
                      </label>
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="reverseCheck6"
                      />
                    </div>
                  </li>
                </ul>
              </div>
              <div class="filter-footer">
                <a
                  href="#"
                  class="btn theme-btn add-btn w-100 mt-0"
                  data-bs-dismiss="modal"
                >
                  Apply
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- customized modal end --> */}
      {/* <!-- location offcanvas start --> */}
      <div
        class="modal fade location-modal"
        id="location"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <div class="modal-title">
                <h5 class="fw-semibold">Select a Location</h5>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
            </div>
            <div class="modal-body">
              <div class="search-section">
                <form class="form_search" role="form">
                  <input
                    type="search"
                    placeholder="Search Location"
                    class="nav-search nav-search-field"
                  />
                </form>
              </div>
              <a href="#!" class="current-location">
                <div class="current-address">
                  <i class="ri-focus-3-line focus"></i>
                  <div>
                    <h5>Use current-location</h5>
                    <h6>Wellington St., Ottawa, Ontario, Canada</h6>
                  </div>
                </div>
                <i class="ri-arrow-right-s-line arrow"></i>
              </a>
              <h5 class="mt-sm-3 mt-2 fw-medium recent-title dark-text">
                Recent Location
              </h5>
              <a href="#!" class="recent-location">
                <div class="recant-address">
                  <i class="ri-map-pin-line theme-color"></i>
                  <div>
                    <h5>Bayshore</h5>
                    <h6>kingston St., Ottawa, Ontario, Canada</h6>
                  </div>
                </div>
              </a>
            </div>
            <div class="modal-footer">
              <a href="#" class="btn gray-btn" data-bs-dismiss="modal">
                Close
              </a>
              <a href="#" class="btn theme-btn mt-0" data-bs-dismiss="modal">
                Save
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MenuNavbar;
