import React, { useState } from "react";
import styled from "styled-components";
import ReactPlayer from "react-player";
import ScrollAnimation from "../animations/ScrollAnimation";

const PortfolioSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [hoveredItem, setHoveredItem] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(null);

  // 임시 포트폴리오 데이터
  const portfolioItems = [
    {
      id: 1,
      title: "브랜드 홍보영상",
      category: "corporate",
      thumbnail: "https://example.com/thumbnail1.jpg",
      videoUrl: "https://example.com/video1.mp4",
      description: "기업의 브랜드 가치를 담아낸 홍보영상",
    },
    {
      id: 2,
      title: "방송 다큐멘터리",
      category: "broadcast",
      thumbnail: "https://example.com/thumbnail2.jpg",
      videoUrl: "https://example.com/video2.mp4",
      description: "자연 다큐멘터리 작업",
    },
    // 나중에 더 많은 포트폴리오 항목 추가 예정
  ];

  const categories = [
    { id: "all", name: "전체" },
    { id: "broadcast", name: "방송 촬영" },
    { id: "coordination", name: "방송 현지 코디" },
    { id: "corporate", name: "기업 영상" },
    { id: "shortfilm", name: "단편 영화" },
  ];

  const filteredItems =
    selectedCategory === "all"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === selectedCategory);

  return (
    <SectionContainer id="portfolio">
      <ScrollAnimation>
        <SectionTitle>Portfolio</SectionTitle>
      </ScrollAnimation>

      <CategoryFilter>
        {categories.map((category) => (
          <ScrollAnimation key={category.id} delay={0.1}>
            <CategoryButton
              isSelected={selectedCategory === category.id}
              onClick={() => setSelectedCategory(category.id)}
            >
              {category.name}
            </CategoryButton>
          </ScrollAnimation>
        ))}
      </CategoryFilter>

      <PortfolioGrid>
        {filteredItems.map((item, index) => (
          <ScrollAnimation key={item.id} delay={index * 0.1}>
            <PortfolioItem
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
              onClick={() => setSelectedVideo(item)}
            >
              {hoveredItem === item.id ? (
                <ReactPlayer
                  url={item.videoUrl}
                  playing
                  muted
                  width="100%"
                  height="100%"
                />
              ) : (
                <ItemThumbnail src={item.thumbnail} alt={item.title} />
              )}
              <ItemOverlay>
                <ItemTitle>{item.title}</ItemTitle>
                <ItemDescription>{item.description}</ItemDescription>
              </ItemOverlay>
            </PortfolioItem>
          </ScrollAnimation>
        ))}
      </PortfolioGrid>

      <ScrollAnimation delay={0.2}>
        <LoadMoreButton>더 보기</LoadMoreButton>
      </ScrollAnimation>

      {selectedVideo && (
        <VideoPopup>
          <PopupContent>
            <CloseButton onClick={() => setSelectedVideo(null)}>×</CloseButton>
            <ReactPlayer
              url={selectedVideo.videoUrl}
              playing
              controls
              width="100%"
              height="100%"
            />
          </PopupContent>
        </VideoPopup>
      )}
    </SectionContainer>
  );
};

const SectionContainer = styled.section`
  padding: 100px 20px;
  background: #000;
`;

const SectionTitle = styled.h2`
  font-size: 3rem;
  text-align: center;
  margin-bottom: 50px;
  color: white;
`;

const CategoryFilter = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 50px;
  flex-wrap: wrap;
`;

const CategoryButton = styled.button`
  padding: 10px 20px;
  border: 2px solid
    ${(props) => (props.isSelected ? "white" : "rgba(255,255,255,0.3)")};
  background: transparent;
  color: ${(props) => (props.isSelected ? "white" : "rgba(255,255,255,0.7)")};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    border-color: white;
    color: white;
  }
`;

const PortfolioGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 30px;
  margin-bottom: 50px;
`;

const PortfolioItem = styled.div`
  position: relative;
  aspect-ratio: 16/9;
  overflow: hidden;
  cursor: pointer;

  &:hover {
    transform: scale(1.02);
    transition: transform 0.3s ease;
  }
`;

const ItemThumbnail = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ItemOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 20px;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.8));
  color: white;
`;

const ItemTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 10px;
`;

const ItemDescription = styled.p`
  font-size: 1rem;
  opacity: 0.8;
`;

const LoadMoreButton = styled.button`
  display: block;
  margin: 0 auto;
  padding: 15px 30px;
  border: 2px solid white;
  background: transparent;
  color: white;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: white;
    color: black;
  }
`;

const VideoPopup = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const PopupContent = styled.div`
  position: relative;
  width: 90%;
  max-width: 1200px;
  aspect-ratio: 16/9;
`;

const CloseButton = styled.button`
  position: absolute;
  top: -40px;
  right: 0;
  background: none;
  border: none;
  color: white;
  font-size: 2rem;
  cursor: pointer;
  z-index: 1001;
`;

export default PortfolioSection;
