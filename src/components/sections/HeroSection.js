import React, { useState, useEffect } from "react";
import styled from "styled-components";
import video1 from "../../assets/videos/hero1.mp4";
import video2 from "../../assets/videos/hero2.mp4";
import video3 from "../../assets/videos/hero3.mp4";

const HeroSection = () => {
  const [currentVideo, setCurrentVideo] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const videos = [video1, video2, video3];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentVideo((prev) => (prev === videos.length - 1 ? 0 : prev + 1));
        setIsTransitioning(false);
      }, 300); // 1초에서 0.3초로 줄임
    }, 6000);

    return () => clearInterval(interval);
  }, [videos.length]);

  const scrollToPortfolio = () => {
    const portfolioSection = document.getElementById("portfolio");
    if (portfolioSection) {
      portfolioSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <SectionContainer>
      <VideoBackground>
        {videos.map((video, index) => (
          <Video
            key={index}
            src={video}
            autoPlay
            muted
            loop
            playsInline
            style={{
              opacity:
                index === 0
                  ? 1
                  : currentVideo === index
                  ? isTransitioning
                    ? 0
                    : 1
                  : 0,
              transition: "opacity 0.3s ease-in-out", // 1초에서 0.3초로 줄임
            }}
          />
        ))}
      </VideoBackground>
      <ContentWrapper>
        <Content>
          <Title>From Local Fields to Global Films</Title>
          <SubTitle>
            현장에서부터 완성된 영상까지, 당신의 이야기를 전 세계로.
          </SubTitle>
        </Content>
        <ScrollDown onClick={scrollToPortfolio}>
          <ScrollText>Scroll Down</ScrollText>
          <ScrollIcon>↓</ScrollIcon>
        </ScrollDown>
      </ContentWrapper>
    </SectionContainer>
  );
};

// ... 나머지 styled components는 동일 ...

const SectionContainer = styled.section`
  position: relative;
  height: 85vh; // 90vh에서 85vh로 더 줄임
  width: 100%;
  overflow: hidden;
`;

const VideoBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`;

const Video = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ContentWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: space-between; // 변경: space-between으로 하여 컨텐츠와 스크롤 버튼 사이 간격 조정
  align-items: center;
  padding: 100px 0 60px 0; // 상단과 하단 패딩 추가
`;

const Content = styled.div`
  text-align: center;
  color: white;
  max-width: 1000px;
  padding: 0 20px;
  margin-top: auto; // 컨텐츠를 위쪽으로 밀어올림
`;

const Title = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 20px;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const SubTitle = styled.p`
  font-size: 1.5rem;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const ScrollDown = styled.div`
  position: relative; // absolute에서 relative로 변경
  text-align: center;
  color: white;
  animation: bounce 2s infinite;
  cursor: pointer;
  transition: transform 0.3s ease;
  margin-top: auto; // 하단에 붙임
  padding-bottom: 20px; // 하단 여백 추가

  &:hover {
    transform: scale(1.1);
  }

  @keyframes bounce {
    0%,
    20%,
    50%,
    80%,
    100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-30px);
    }
    60% {
      transform: translateY(-15px);
    }
  }
`;

const ScrollText = styled.p`
  font-size: 0.9rem;
  margin-bottom: 10px;
`;

const ScrollIcon = styled.span`
  font-size: 1.5rem;
`;

export default HeroSection;
