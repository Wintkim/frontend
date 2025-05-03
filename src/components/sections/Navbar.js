import React from "react";
import styled from "styled-components";

const Navbar = () => {
  return (
    <Nav>
      <NavContainer>
        <Logo>KEANE</Logo>
        <NavLinks>
          <NavLink href="#portfolio">PORTFOLIO</NavLink>
          <NavLink href="#about">ABOUT</NavLink>
          <NavLink href="#contact">CONTACT</NavLink>
        </NavLinks>
      </NavContainer>
    </Nav>
  );
};

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
  padding: 25px 0;
`;

const NavContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: white;
  cursor: pointer;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 40px;
`;

const NavLink = styled.a`
  color: white;
  text-decoration: none;
  font-size: 16px;
  font-weight: 500;
  transition: color 0.3s ease;

  &:hover {
    color: #cccccc;
  }
`;

export default Navbar;
