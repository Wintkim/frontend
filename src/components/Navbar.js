import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <NavContainer isScrolled={isScrolled}>
      <NavContent>
        <Logo onClick={() => scrollToSection("hero")}>VIDEOGRAPHER</Logo>

        <MenuButton onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <MenuIcon isOpen={isMenuOpen}>
            <span></span>
            <span></span>
            <span></span>
          </MenuIcon>
        </MenuButton>

        <NavLinks isOpen={isMenuOpen}>
          <NavItem onClick={() => scrollToSection("portfolio")}>
            Portfolio
          </NavItem>
          <NavItem onClick={() => scrollToSection("services")}>
            Services
          </NavItem>
          <NavItem onClick={() => scrollToSection("clients")}>Clients</NavItem>
          <NavItem onClick={() => scrollToSection("contact")}>Contact</NavItem>
        </NavLinks>
      </NavContent>
    </NavContainer>
  );
};

const NavContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: ${(props) =>
    props.isScrolled ? "rgba(0, 0, 0, 0.9)" : "transparent"};
  transition: all 0.3s ease;
  backdrop-filter: ${(props) => (props.isScrolled ? "blur(10px)" : "none")};
`;

const NavContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const MenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 10px;
  z-index: 1001;

  @media (max-width: 768px) {
    display: block;
  }
`;

const MenuIcon = styled.div`
  width: 30px;
  height: 20px;
  position: relative;

  span {
    display: block;
    width: 100%;
    height: 2px;
    background: white;
    position: absolute;
    transition: all 0.3s ease;

    &:first-child {
      top: ${(props) => (props.isOpen ? "50%" : "0")};
      transform: ${(props) => (props.isOpen ? "rotate(45deg)" : "none")};
    }

    &:nth-child(2) {
      top: 50%;
      transform: translateY(-50%);
      opacity: ${(props) => (props.isOpen ? "0" : "1")};
    }

    &:last-child {
      bottom: ${(props) => (props.isOpen ? "50%" : "0")};
      transform: ${(props) => (props.isOpen ? "rotate(-45deg)" : "none")};
    }
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 30px;

  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: 70%;
    max-width: 300px;
    background: rgba(0, 0, 0, 0.95);
    flex-direction: column;
    padding: 100px 40px;
    transform: ${(props) =>
      props.isOpen ? "translateX(0)" : "translateX(100%)"};
    transition: transform 0.3s ease;
  }
`;

const NavItem = styled.div`
  color: white;
  cursor: pointer;
  font-size: 1.1rem;
  transition: all 0.3s ease;

  &:hover {
    color: #ccc;
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    font-size: 1.3rem;
    margin-bottom: 20px;
  }
`;

export default Navbar;
