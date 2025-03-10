import React, { useEffect, useState } from "react";
import styled from "styled-components";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handlePointerType = (e) => {
      const target = e.target;
      setIsPointer(
        window.getComputedStyle(target).cursor === "pointer" ||
          target.tagName.toLowerCase() === "button" ||
          target.tagName.toLowerCase() === "a"
      );
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);
    const handleMouseEnter = () => setIsHidden(false);
    const handleMouseLeave = () => setIsHidden(true);

    document.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseover", handlePointerType);
    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      document.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseover", handlePointerType);
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <>
      <CursorDot
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
        isPointer={isPointer}
        isHidden={isHidden}
        isClicking={isClicking}
      />
      <CursorRing
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
        isPointer={isPointer}
        isHidden={isHidden}
        isClicking={isClicking}
      />
    </>
  );
};

const CursorDot = styled.div`
  width: 8px;
  height: 8px;
  background-color: white;
  border-radius: 50%;
  position: fixed;
  pointer-events: none;
  z-index: 9999;
  transform: translate(-50%, -50%);
  transition: opacity 0.15s ease-in-out, transform 0.15s ease-in-out;
  opacity: ${(props) => (props.isHidden ? 0 : 1)};
  transform: translate(-50%, -50%)
    scale(${(props) => (props.isClicking ? 0.5 : 1)});
`;

const CursorRing = styled.div`
  width: 40px;
  height: 40px;
  border: 2px solid white;
  border-radius: 50%;
  position: fixed;
  pointer-events: none;
  z-index: 9999;
  transform: translate(-50%, -50%);
  transition: all 0.15s ease-in-out;
  opacity: ${(props) => (props.isHidden ? 0 : 0.5)};
  transform: translate(-50%, -50%)
    scale(${(props) => (props.isPointer ? 1.5 : 1)})
    scale(${(props) => (props.isClicking ? 0.8 : 1)});
`;

export default CustomCursor;
