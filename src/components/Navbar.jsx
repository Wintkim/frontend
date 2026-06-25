import { useEffect, useState } from "react";
import styled from "styled-components";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => { const onScroll = () => setScrolled(window.scrollY > 50); window.addEventListener("scroll", onScroll, { passive: true }); return () => window.removeEventListener("scroll", onScroll); }, []);
  return <Nav $scrolled={scrolled}><Inner><Logo href="#hero">KYEFILM</Logo><Links><a href="#about">ABOUT</a><a href="#portfolio">PORTFOLIO</a><a href="#services">SERVICES</a><a href="#contact">CONTACT</a></Links></Inner></Nav>;
}

const Nav = styled.nav`
  position: fixed; inset: 0 0 auto; z-index: 100; padding: 25px 0;
  background: ${({ $scrolled }) => $scrolled ? "rgba(14,14,14,.72)" : "transparent"}; transition: background .3s ease;
`;
const Inner = styled.div`max-width: 1200px; margin: 0 auto; padding: 0 40px; display: flex; justify-content: space-between; align-items: center; @media(max-width:480px){padding:0 16px;}`;
const Logo = styled.a`font-size:24px; font-weight:bold; color:#fff; text-decoration:none; @media(max-width:768px){font-size:20px} @media(max-width:480px){font-size:18px}`;
const Links = styled.div`
  display:flex; gap:40px; a{color:#fff;text-decoration:none;font-size:16px;font-weight:500;white-space:nowrap;transition:color .3s} a:hover{color:#ccc}
  @media(max-width:768px){gap:16px;a{font-size:13px}} @media(max-width:480px){gap:10px;a{font-size:11px}}
`;
