import React from "react";
import styled from "styled-components";
import ScrollAnimation from "../animations/ScrollAnimation";

const ServicesSection = () => {
  const services = [
    {
      id: 1,
      title: "방송 촬영",
      description: "전문 장비와 숙련된 기술로 고품질 방송 촬영을 제공합니다.",
      process: ["사전 기획", "현장 촬영", "후반 작업", "최종 편집"],
      icon: "🎥",
    },
    {
      id: 2,
      title: "방송 현지 코디",
      description:
        "해외 로케이션에서의 완벽한 촬영을 위한 현지 코디네이션을 제공합니다.",
      process: ["현지 답사", "촬영 허가", "현지 스태프 섭외", "일정 관리"],
      icon: "🌏",
    },
    {
      id: 3,
      title: "기업 영상",
      description:
        "기업의 가치와 메시지를 효과적으로 전달하는 영상을 제작합니다.",
      process: ["기업 미팅", "콘셉트 기획", "촬영 및 편집", "피드백 반영"],
      icon: "🏢",
    },
  ];

  return (
    <SectionContainer id="services">
      <ScrollAnimation>
        <SectionTitle>Services</SectionTitle>
      </ScrollAnimation>

      <ServiceGrid>
        {services.map((service, index) => (
          <ScrollAnimation key={service.id} delay={index * 0.2}>
            <ServiceCard>
              <ServiceIcon>{service.icon}</ServiceIcon>
              <ServiceTitle>{service.title}</ServiceTitle>
              <ServiceDescription>{service.description}</ServiceDescription>
              <ProcessTitle>제작 과정</ProcessTitle>
              <ProcessList>
                {service.process.map((step, stepIndex) => (
                  <ProcessItem key={stepIndex} delay={stepIndex * 0.2}>
                    <ProcessNumber>{stepIndex + 1}</ProcessNumber>
                    {step}
                  </ProcessItem>
                ))}
              </ProcessList>
            </ServiceCard>
          </ScrollAnimation>
        ))}
      </ServiceGrid>
    </SectionContainer>
  );
};

const SectionContainer = styled.section`
  padding: 100px 20px;
  background: #111;
`;

const SectionTitle = styled.h2`
  font-size: 3rem;
  text-align: center;
  margin-bottom: 80px;
  color: white;
`;

const ServiceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 40px;
  max-width: 1200px;
  margin: 0 auto;
`;

const ServiceCard = styled.div`
  background: rgba(255, 255, 255, 0.05);
  padding: 40px;
  border-radius: 20px;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    background: rgba(255, 255, 255, 0.1);
  }
`;

const ServiceIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 20px;
  text-align: center;
`;

const ServiceTitle = styled.h3`
  font-size: 1.8rem;
  color: white;
  margin-bottom: 20px;
  text-align: center;
`;

const ServiceDescription = styled.p`
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 30px;
  line-height: 1.6;
  text-align: center;
`;

const ProcessTitle = styled.h4`
  color: white;
  font-size: 1.2rem;
  margin-bottom: 20px;
  text-align: center;
`;

const ProcessList = styled.ul`
  list-style: none;
  padding: 0;
`;

const ProcessItem = styled.li`
  display: flex;
  align-items: center;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 15px;
  padding: 10px;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.05);
  opacity: 0;
  animation: fadeIn 0.5s forwards;
  animation-delay: ${(props) => props.delay}s;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const ProcessNumber = styled.span`
  width: 30px;
  height: 30px;
  background: white;
  color: black;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 15px;
  font-weight: bold;
`;

export default ServicesSection;
