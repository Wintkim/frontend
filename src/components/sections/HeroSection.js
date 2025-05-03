import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import video1 from "../../assets/videos/hero1.mp4";
import video2 from "../../assets/videos/hero2.mp4";
import video3 from "../../assets/videos/hero3.mp4";

const videos = [video1, video2, video3];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);
  const videoRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % videos.length);
    }, 6000);
    return () => clearTimeout(timer);
  }, [current]);
  const handleScrollDown = () => {
    const portfolio = document.getElementById("portfolio");
    if (portfolio) {
      portfolio.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <HeroContainer>
      <VideoBackground>
        <video
          key={current}
          ref={videoRef}
          src={videos[current]}
          autoPlay
          muted
          playsInline
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </VideoBackground>
      <ContentOverlay>
        <HeroContent>
          <Title>Visual Stories That Move</Title>
          <Description>
            당신의 이야기를 감동적인 영상으로 전달합니다
          </Description>
          <ButtonContainer>
            <Button primary>포트폴리오 보기</Button>
            <Button>문의하기</Button>
          </ButtonContainer>
        </HeroContent>
        <ScrollIndicator onClick={handleScrollDown}>
          <ScrollText>Scroll Down</ScrollText>
          <ScrollIcon>↓</ScrollIcon>
        </ScrollIndicator>
      </ContentOverlay>
    </HeroContainer>
  );
};
const HeroContainer = styled.section`
  position: relative;
  height: 100vh;
  width: 100%;
  overflow: hidden;
`;

const VideoBackground = styled.div`
  position: absolute;
  top: 80;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`;

const ContentOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const HeroContent = styled.div`
  text-align: center;
  color: white;
  max-width: 800px;
  padding: 0 20px;
`;
const Title = styled.h1`
  font-size: 4rem;
  margin-bottom: 20px;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Description = styled.p`
  font-size: 1.5rem;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;
const ButtonContainer = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Button = styled.button`
  padding: 15px 30px;
  font-size: 1.1rem;
  border: 2px solid white;
  background: ${(props) => (props.primary ? "white" : "transparent")};
  color: ${(props) => (props.primary ? "black" : "white")};
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }
`;

const ScrollIndicator = styled.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  color: white;
  animation: bounce 2s infinite;
  cursor: pointer;
`;
const ScrollText = styled.p`
  font-size: 0.9rem;
  margin-bottom: 10px;
`;

const ScrollIcon = styled.span`
  font-size: 1.5rem;
`;

export default HeroSection;
