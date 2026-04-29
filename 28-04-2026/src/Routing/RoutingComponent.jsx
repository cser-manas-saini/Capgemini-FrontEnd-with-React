import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import About from "../pages/About";
import Service from "../pages/Service";
import NavBar from "../component/NavBar";

const RoutingComponent = () => {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="about" element={<About />} />
          <Route path="service" element={<Service />} />
        </Routes>
      </BrowserRouter>

      <footer>
        <p>&copy; 2023 My App. All rights reserved.</p>
      </footer>
    </>
  );
};

export default RoutingComponent;