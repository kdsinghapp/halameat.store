import React from "react";
import Navbar from "../components/Navbar";
import MenuNavbar from "../components/Menu Section/MenuNavbar";
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
                Grilled Favorites | Happy Hour |{" "}
              </p>
              <p style={{ color: "#fff", lineHeight: "10px" }}>
                {/* <strong style={{ color: "black" }}>Best Service:</strong> */}
                Fresh, tender cuts of premium meats grilled to perfection!
              </p>
            </span>
          </div>
        </div>
      </section>
      {/* <MenuNavbar /> */}
    </section>
  );
};

export default OrderOnline;
