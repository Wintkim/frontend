import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import CustomCursor from "./components/CustomCursor";
import HeroSection from "./components/sections/HeroSection";
import PortfolioSection from "./components/sections/PortfolioSection";
import ServicesSection from "./components/sections/ServicesSection";
import ClientsSection from "./components/sections/ClientsSection";
import ContactSection from "./components/sections/ContactSection";

function App() {
  return (
    <div className="App">
      <CustomCursor />
      <Navbar />
      <HeroSection />
      <PortfolioSection />
      <ServicesSection />
      <ClientsSection />
      <ContactSection />
    </div>
  );
}

export default App;
