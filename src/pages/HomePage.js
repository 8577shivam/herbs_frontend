import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import BestSellerSection from "../components/BestSellerSection";

const HomePage = () => {
  return (
    <div className="container">
      <Navbar />
      <HeroSection />
      <BestSellerSection />
    </div>
  );
};

export default HomePage;
