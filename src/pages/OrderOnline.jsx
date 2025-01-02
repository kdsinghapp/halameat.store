import React from "react";
import Navbar from "../components/Navbar";
import MenuNavbar from "../components/Menu Section/MenuNavbar";
import MenuSection from "../components/Menu Section/MenuSection";
// import img1 from "../../public/assets/img/foodbanner.jpg";

const OrderOnline = () => {
  return (
    <section>
      <Navbar />
      <section className="p-3 jumbotron">
        <div
          className="container"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
          }}
        >
          <div className="text-start w-100">
            <h2 className="sec-title" style={{ color: "#fff" }}>
              Fresh Meat Bucket
            </h2>
            <span style={{}}>
              <p style={{ color: "#fff", lineHeight: "10px" }}>
                {/* <strong style={{ color: "black" }}>Entertainment:</strong>{" "} */}
                17 High Street, High Wycombe, HP11 2BE
              </p>
              <p style={{ color: "#fff", lineHeight: "10px" }}>
                {/* <strong style={{ color: "black" }}>Entertainment:</strong>{" "} */}
                Grilled Favorites | Happy Hour |{" "}
              </p>
              <h6 class="food-items sec-title">
                <span>Italian</span>
                <i
                  class="fa fa-circle ml-2 me-2"
                  aria-hidden="true"
                  style={{ marginLeft: "5px" }}
                ></i>
                <span style={{ marginLeft: "5px" }}>Dips</span>
                <i
                  class="fa fa-circle ml-2 me-2"
                  style={{ marginLeft: "5px" }}
                  aria-hidden="true"
                ></i>
                <span style={{ marginLeft: "5px" }}>Deserts</span>
              </h6>
              <p style={{ color: "#fff", lineHeight: "10px" }}>
                {/* <strong style={{ color: "black" }}>Best Service:</strong> */}
                Fresh, tender cuts of premium meats grilled to perfection!
              </p>
            </span>
          </div>
        </div>
      </section>
      {/* <MenuNavbar /> */}
      <MenuSection />
    </section>
  );
};

export default OrderOnline;
