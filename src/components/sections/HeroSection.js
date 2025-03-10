import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ScrollAnimation from "../animations/ScrollAnimation";
import video1 from "../../assets/videos/1.mp4";
import video2 from "../../assets/videos/2.mp4";
import video3 from "../../assets/videos/3.mp4";
import video4 from "../../assets/videos/4.mp4";
import video5 from "../../assets/videos/5.mp4";
import video6 from "../../assets/videos/6.mp4";

const HeroSection = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [fadeState, setFadeState] = useState("in");

  const videos = [
    {
      url: video1,
      title: "감동을 전하는 영상 제작",
      description: "전문성과 창의성의 완벽한 조화",
    },
    {
      url: video2,
      title: "감동을 전하는 영상 제작",
      description: "전문성과 창의성의 완벽한 조화",
    },
    {
      url: video3,
      title: "프로페셔널한 방송 영상 제작",
      description: "전문성과 오래된 경험의 완벽한 조화",
    },
    {
      url: video4,
      title: "프로페셔널한 방송 영상 제작",
      description: "전문성과 오래된 경험의 완벽한 조화",
    },
    {
      url: video5,
      title: "감동을 전하는 영상 제작",
      description: "최고의 퀄리티로 전하는 당신의 이야기",
    },
    {
      url: video6,
      title: "감동을 전하는 영상 제작",
      description: "최고의 퀄리티로 전하는 당신의 이야기",
    },
  ];

  useEffect(() => {
    setIsLoading(false);
    const interval = setInterval(() => {
      setFadeState("out");
      setTimeout(() => {
        setCurrentVideoIndex((prev) => {
          const nextIndex = (prev + 1) % videos.length;
          if (nextIndex % 2 === 0) {
            setCurrentTextIndex(Math.floor(nextIndex / 2));
          }
          return nextIndex;
        });
        setFadeState("in");
      }, 300);
    }, 4500);

    return () => clearInterval(interval);
  }, [videos.length]);

  if (isLoading) {
    return <LoadingContainer>Loading...</LoadingContainer>;
  }

  return (
    <SectionContainer id="hero">
      {videos.map((video, index) => (
        <VideoBackground
          key={index}
          style={{
            opacity: currentVideoIndex === index ? 1 : 0,
            transition: "opacity 0.3s ease-in-out",
          }}
        >
          <video autoPlay loop muted playsInline>
            <source src={video.url} type="video/mp4" />
          </video>
        </VideoBackground>
      ))}
      <Overlay />
      <ContentWrapper>
        <ScrollAnimation>
          <HeroContent>
            <Title>{videos[currentTextIndex * 2].title}</Title>
            <Description>
              {videos[currentTextIndex * 2].description}
            </Description>
            <ButtonContainer>
              <PrimaryButton
                onClick={() =>
                  document
                    .getElementById("portfolio")
                    .scrollIntoView({ behavior: "smooth" })
                }
              >
                포트폴리오 보기
              </PrimaryButton>
              <SecondaryButton
                onClick={() =>
                  document
                    .getElementById("contact")
                    .scrollIntoView({ behavior: "smooth" })
                }
              >
                문의하기
              </SecondaryButton>
            </ButtonContainer>
          </HeroContent>
        </ScrollAnimation>
        <ScrollIndicator>
          <ScrollText>Scroll Down</ScrollText>
          <ScrollIcon />
        </ScrollIndicator>
      </ContentWrapper>
    </SectionContainer>
  );
};

const LoadingContainer = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 1.5rem;
`;

const SectionContainer = styled.section`
  position: relative;
  height: 100vh;
  width: 100%;
  overflow: hidden;
  background-color: #000;
`;

const VideoBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  overflow: hidden;

  video {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 2;
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 3;
  height: 100%;
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
  font-size: 3.5rem;
  margin-bottom: 1.5rem;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Description = styled.p`
  font-size: 1.5rem;
  margin-bottom: 2rem;
  opacity: 0.9;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Button = styled.button`
  padding: 1rem 2rem;
  font-size: 1.1rem;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 600;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const PrimaryButton = styled(Button)`
  background-color: white;
  color: black;
  border: none;

  &:hover {
    background-color: #f0f0f0;
    transform: translateY(-2px);
  }
`;

const SecondaryButton = styled(Button)`
  background-color: transparent;
  color: white;
  border: 2px solid white;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
    transform: translateY(-2px);
  }
`;

const ScrollIndicator = styled.div`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  opacity: 0.7;
`;

const ScrollText = styled.span`
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
`;

const ScrollIcon = styled.div`
  width: 30px;
  height: 50px;
  border: 2px solid white;
  border-radius: 15px;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 8px;
    left: 50%;
    width: 6px;
    height: 6px;
    background-color: white;
    border-radius: 50%;
    transform: translateX(-50%);
    animation: scroll 2s infinite;
  }

  @keyframes scroll {
    0% {
      transform: translate(-50%, 0);
      opacity: 1;
    }
    100% {
      transform: translate(-50%, 20px);
      opacity: 0;
    }
  }
`;

export default HeroSection;
