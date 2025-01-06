import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Sidebar from "../components/Menu Section/Sidebar";
import axios from "axios";
import { Link } from "react-router-dom";

const OrderOnline = () => {
  const [data, setData] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const getData = async () => {
    try {
      const res = await axios.get(
        `https://partnermeatwala.com/api/Vendor/GetVandoreDetails?id=1`
      );
      setData(res.data);
    } catch (error) {
      console.error("Error fetching restaurant info:", error.message || error);
    }
  };

  const stripHtmlTags = (str) => {
    const div = document.createElement("div");
    div.innerHTML = str;
    return div.textContent || div.innerText || "";
  };

  useEffect(() => {
    getData();
  }, []);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedItems = data?.restaurantmenulist[0].items.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const totalPages = Math.ceil(
    (data?.restaurantmenulist[0]?.items.length || 0) / itemsPerPage
  );

  return (
    <>
      <div className="breadcumb-wrapper" data-bg-src="">
        <div className="container">
          <div className="breadcumb-content">
            <h2 className="breadcumb-title text-white">Menu</h2>
            <ul className="breadcumb-menu">
              <li>
                <Link to="/" className="text-white">
                  Home
                </Link>
              </li>
              <li>Menu</li>
            </ul>
          </div>
        </div>
      </div>
      <section className="mt-5 space-extra-bottom">
        <div className="container">
          <div className="row">
            <Sidebar data={data?.restaurantmenulist} />
            <div className="col-lg-9">
              <div className="th-sort-bar">
                <div className="row justify-content-between align-items-center">
                  <div className="col-md">
                    <p className="woocommerce-result-count">Menu</p>
                  </div>
                  <div className="col-md-auto">
                    <form className="woocommerce-ordering" method="get">
                      <select
                        name="orderby"
                        className="orderby"
                        aria-label="Shop order"
                      >
                        <option value="menu_order" selected="selected">
                          Default Sorting
                        </option>
                        <option value="date">Sort by latest</option>
                        <option value="price">
                          Sort by price: low to high
                        </option>
                        <option value="price-desc">
                          Sort by price: high to low
                        </option>
                      </select>
                    </form>
                  </div>
                </div>
              </div>
              <div className="row gy-40 menuu">
                {paginatedItems?.map((item, index) => (
                  <div className="col-xl-4 col-lg-4 col-6" key={index}>
                    <div className="th-product product-grid">
                      <div className="product-img">
                        <img src={item.image} alt="Product Image" />
                        <span className="product-tag">Hot</span>
                      </div>
                      <div className="product-content">
                        <h3 className="product-title">
                          <a href="#">{stripHtmlTags(item.description)}</a>
                        </h3>
                        <span className="price">${item.cost}</span>
                        <div className="woocommerce-product-rating">
                          <span className="count">(120)</span>
                          <div
                            className="star-rating"
                            role="img"
                            aria-label="Rated 5.00 out of 5"
                          >
                            <span>
                              Rated <strong className="rating">5.00</strong> out
                              of 5 based on <span className="rating">1</span>{" "}
                              customer rating
                            </span>
                          </div>
                        </div>
                        <a
                          href="#"
                          className="th-btn btn-sm style4"
                          style={{ color: "#fff" }}
                        >
                          Buy Now
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="th-pagination text-center pt-50">
                <ul>
                  {Array.from({ length: totalPages }, (_, i) => (
                    <li key={i}>
                      <a
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          handlePageChange(i + 1);
                        }}
                        className={currentPage === i + 1 ? "active" : ""}
                      >
                        {i + 1}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
      <div className="scroll-top">
        <svg
          className="progress-circle svg-content"
          width="100%"
          height="100%"
          viewBox="-1 -1 102 102"
        >
          <path
            d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
            style={{
              transition: "stroke-dashoffset 10ms linear 0s",
              strokeDasharray: "307.919, 307.919",
              strokeDashoffset: "307.919",
            }}
          />
        </svg>
      </div>
    </>
  );
};

export default OrderOnline;
