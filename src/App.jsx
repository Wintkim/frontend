import Navbar from "./components/Navbar";
import HeroSection from "./components/sections/HeroSection";
import AboutSection from "./components/sections/AboutSection";
import PortfolioSection from "./components/sections/PortfolioSection";
import ServicesSection from "./components/sections/ServicesSection";
import ContactSection from "./components/sections/ContactSection";
import "./App.css";

export default function App() {
  return <div className="App"><Navbar /><HeroSection /><AboutSection /><PortfolioSection /><ServicesSection /><ContactSection /></div>;
}
