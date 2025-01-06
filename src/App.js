import Aboutus from "./pages/Aboutus";
import Contactus from "./pages/Contactus";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import OrderOnline from "./pages/OrderOnline";
import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./components/Navbar";

function App() {
  const [restaurants, setRestaurants] = useState(null);

  const getRestaurant = async () => {
    try {
      const response = await axios.get(
        "https://partnermeatwala.com/api/Vendor/GetVendorInfo?restname=Shubh Restaurant&id=1"
      );

      const { success, vendorinfo } = response.data;

      if (success !== "1") {
        throw new Error("Failed to fetch data");
      }

      console.log("Restaurant info:", vendorinfo);
      setRestaurants(vendorinfo);
    } catch (error) {
      console.error("Error fetching restaurant info:", error.message || error);
    }
  };

  useEffect(() => {
    getRestaurant();
  }, []);

  console.log("Restaurants:", restaurants);

  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home restaurants={restaurants} />} />
        <Route path="/menu" element={<OrderOnline />} />
        <Route path="/about-us" element={<Aboutus />} />
        <Route
          path="/contact-us"
          element={<Contactus restaurants={restaurants} />}
        />
        <Route path="*" element={<h1>Page Not Found</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
