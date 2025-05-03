import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const CustomCursor = () => {
  const [isPointer, setIsPointer] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  const dotRef = useRef(null);
  const ringRef = useRef(null);

  // 점(dot)의 실제 위치
  const dot = useRef({ x: 0, y: 0 });
  // 링(ring)의 현재 위치
  const ring = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const moveCursor = (e) => {
      dot.current.x = e.clientX;
      dot.current.y = e.clientY;
      // 점(dot)은 즉시 이동
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${dot.current.x - 4}px, ${
          dot.current.y - 4
        }px)`;
      }
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

    let animationId;
    const animate = () => {
      // 링은 "점(dot)"을 따라감!
      const speed = 0.22;
      ring.current.x += (dot.current.x - ring.current.x) * speed;
      ring.current.y += (dot.current.y - ring.current.y) * speed;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${
          ring.current.x - 20
        }px, ${ring.current.y - 20}px) scale(${isPointer ? 1.5 : 1}) scale(${
          isClicking ? 0.8 : 1
        })`;
        ringRef.current.style.opacity = isHidden ? 0 : 0.5;
      }
      animationId = requestAnimationFrame(animate);
    };
    animate();
    return () => {
      document.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseover", handlePointerType);
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationId);
    };
  }, [isPointer, isClicking, isHidden]);

  return (
    <>
      <CursorDot ref={dotRef} isHidden={isHidden} isClicking={isClicking} />
      <CursorRing ref={ringRef} />
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
  opacity: ${(props) => (props.isHidden ? 0 : 1)};
`;

const CursorRing = styled.div`
  width: 40px;
  height: 40px;
  border: 2px solid white;
  border-radius: 50%;
  position: fixed;
  pointer-events: none;
  z-index: 9999;
`;

export default CustomCursor;
