import React, { useState } from "react";
import styled from "styled-components";
import brandVideo from "../../assets/videos/brand-5s.mp4";
import corporateVideo from "../../assets/videos/corporate-5s.mp4";
import docuVideo from "../../assets/videos/docu-5s.mp4";
import reportVideo from "../../assets/videos/report-5s.mp4";
import thumb1 from "../../assets/images/thumbnail1.jpg";
import thumb2 from "../../assets/images/thumbnail2.jpg";
import thumb3 from "../../assets/images/thumbnail3.jpg";
import thumb4 from "../../assets/images/thumbnail4.jpg";

const portfolioItems = [
  {
    id: 1,
    title: "브랜드 필름",
    subtitle: "감각적인 브랜드 스토리",
    description:
      "하이엔드 브랜드 MCM과의 문화 프로젝트, 브랜드의 감성과 철학을 섬세하게 영상으로 구현했습니다.",
    video: brandVideo,
    thumbnail: thumb1,
  },
  {
    id: 3,
    title: "다큐멘터리",
    subtitle: "진정성 있는 스토리텔링",
    description:
      "유럽과 한국을 잇는 사람들의 이야기, 현실과 감정을 담아낸 깊이 있는 영상 기록.",
    video: docuVideo,
    thumbnail: thumb3,
  },
  {
    id: 4,
    title: "방송 리포트",
    subtitle: "현장의 생생한 순간",
    description:
      "방송 리포팅 및 현지 코디네이팅의 오랜 경험 기반으로, 빠르고 정확하게 글로벌 현장을 전달합니다.",
    video: reportVideo,
    thumbnail: thumb2,
  },
  {
    id: 2,
    title: "기업 홍보영상",
    subtitle: "기업의 비전과 가치",
    description:
      "기업의 철학, 미래를 전략적으로 담아내며, 스토리텔링 중심의 브랜딩 콘텐츠를 제작합니다.",
    video: corporateVideo,
    thumbnail: thumb4,
  },
];

const PortfolioSection = () => {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <SectionContainer id="portfolio">
      <Title>PORTFOLIO</Title>
      <FlexContainer>
        {portfolioItems.map((item) => (
          <PortfolioItem key={item.id}>
            <VideoContainer
              onMouseEnter={() => setHoveredId(item.id)}
              onMouseLeave={() => setHoveredId(null)}
              isHovered={hoveredId === item.id}
            >
              {hoveredId === item.id ? (
                <Video
                  src={item.video}
                  autoPlay
                  muted
                  playsInline
                  loop
                  disablePictureInPicture
                  controls={false}
                />
              ) : (
                <Thumbnail
                  src={item.thumbnail}
                  alt={item.title}
                  draggable={false}
                />
              )}
            </VideoContainer>
            <TextContent>
              <ItemTitle>{item.title}</ItemTitle>
              <ItemSubtitle>{item.subtitle}</ItemSubtitle>
              <ItemDesc>{item.description}</ItemDesc>
            </TextContent>
          </PortfolioItem>
        ))}
      </FlexContainer>
    </SectionContainer>
  );
};

const SectionContainer = styled.section`
  padding: 100px 0;
  background: #000;
`;

const Title = styled.h2`
  text-align: center;
  color: white;
  font-size: 3.8rem;
  margin-bottom: 80px;
`;

const FlexContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 48px;
  max-width: 1600px;
  margin: 0 auto;
  padding: 0 120px;
`;

const PortfolioItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 18px;
  width: 260px;
`;

const VideoContainer = styled.div`
  position: relative;
  aspect-ratio: 16/9;
  width: 100%;
  max-width: 260px;
  margin: 0 auto;
  overflow: hidden;
  border-radius: 10px;
  cursor: pointer;
  box-shadow: 0 4px 32px rgba(0, 0, 0, 0.18);
  background: #18181c;
  transition: transform 0.7s cubic-bezier(0.22, 0.61, 0.36, 1),
    box-shadow 0.7s cubic-bezier(0.22, 0.61, 0.36, 1);

  ${({ isHovered }) =>
    isHovered &&
    `
    transform: scale(1.6);
    z-index: 20;
    box-shadow: 0 16px 64px 0 rgba(0,0,0,0.45);
  `}

  &:hover {
    transform: scale(1.6);
    z-index: 20;
    box-shadow: 0 16px 64px 0 rgba(0, 0, 0, 0.45);
  }
`;

const Video = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  background: #000;
`;

const Thumbnail = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  background: #000;
`;

const TextContent = styled.div`
  text-align: center;
  padding: 0 6px;
`;

const ItemTitle = styled.h3`
  color: white;
  font-size: 1.3rem;
  margin: 0 0 4px 0;
  font-weight: 700;
`;

const ItemSubtitle = styled.p`
  color: skyblue;
  font-size: 0.95rem;
  margin: 0 0 8px 0;
  line-height: 1.4;
`;

const ItemDesc = styled.p`
  color: #bbb;
  font-size: 0.8rem;
  margin: 0;
  line-height: 1.5;
`;

export default PortfolioSection;
