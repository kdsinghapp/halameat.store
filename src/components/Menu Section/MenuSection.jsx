import React, { useState } from "react";
import Sidebar from "./Sidebar";

const MenuSection = () => {
  const [foodData, setFoodData] = useState([
    { id: 1, name: "Pizza", type: "Italian" },
    { id: 2, name: "Sushi", type: "Japanese" },
    { id: 3, name: "Burger", type: "American" },
    { id: 4, name: "Pasta", type: "Italian" },
    { id: 5, name: "Taco", type: "Mexican" },
    { id: 6, name: "Ramen", type: "Japanese" },
  ]);

  return (
    <section className="d-flex mt-5">
      <Sidebar />
      <div className="container">
        <h5>Food Serving:-</h5>
        <div className="container d-flex flex-wrap">
          {foodData.map((food, index) => (
            <div class="product-card" key={index}>
              <div class="badge">Hot</div>
              <div class="product-tumb">
                <img
                  src="https://www.shutterstock.com/image-photo/tandoori-chicken-indian-non-vegetarian-260nw-2231161337.jpg"
                  alt=""
                />
              </div>
              <div class="product-details">
                <h4 className="sec-title mt-1 mb-0">
                  <a href="">Chicken</a>
                </h4>
                <div class="product-bottom-details">
                  <div class="product-price">
                    <small>$96.00</small>$230.99
                  </div>
                  <div class="product-links">
                    <a href="" className="sec-title mb-0">Buy Now</a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
