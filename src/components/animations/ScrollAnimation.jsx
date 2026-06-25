import React from "react";
import { useInView } from "framer-motion";
import styled from "styled-components";

// 이 줄을 제거해주세요:
// import ScrollAnimation from "../animations/ScrollAnimation";  <- 이 줄을 삭제!

const ScrollAnimation = ({ children, delay = 0 }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <AnimationWrapper
      ref={ref}
      style={{
        transform: isInView ? "none" : "translateY(50px)",
        opacity: isInView ? 1 : 0,
        transition: `all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) ${delay}s`,
      }}
    >
      {children}
    </AnimationWrapper>
  );
};

const AnimationWrapper = styled.div`
  will-change: transform, opacity;
`;

export default ScrollAnimation;
