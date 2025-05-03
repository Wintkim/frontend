import React from "react";
import Navbar from "./components/sections/Navbar";
import HeroSection from "./components/sections/HeroSection";
import PortfolioSection from "./components/sections/PortfolioSection";
import ServicesSection from "./components/sections/ServicesSection";
import ContactSection from "./components/sections/ContactSection";
import CustomCursor from "./components/CustomCursor";
import "./App.css";

function App() {
  return (
    <div className="App">
      <CustomCursor />
      <Navbar />
      <HeroSection />
      <PortfolioSection />
      <ServicesSection />
      <ContactSection />
    </div>
  );
}

export default App;
