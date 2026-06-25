import React from "react";
import styled from "styled-components";
import ScrollAnimation from "../animations/ScrollAnimation";

const ClientsSection = () => {
  const clients = [
    {
      id: 1,
      name: "Samsung",
      logo: "🏢", // 실제 로고 이미지로 교체 예정
    },
    {
      id: 2,
      name: "LG",
      logo: "🏢",
    },
    {
      id: 3,
      name: "Hyundai",
      logo: "🏢",
    },
    {
      id: 4,
      name: "KBS",
      logo: "📺",
    },
    {
      id: 5,
      name: "MBC",
      logo: "📺",
    },
    {
      id: 6,
      name: "SBS",
      logo: "📺",
    },
  ];

  return (
    <SectionContainer id="clients">
      <ScrollAnimation>
        <SectionTitle>Clients</SectionTitle>
        <SubTitle>신뢰할 수 있는 파트너들과 함께합니다</SubTitle>
      </ScrollAnimation>

      <ClientsGrid>
        {clients.map((client, index) => (
          <ScrollAnimation key={client.id} delay={index * 0.1}>
            <ClientCard>
              <ClientLogo>{client.logo}</ClientLogo>
              <ClientName>{client.name}</ClientName>
            </ClientCard>
          </ScrollAnimation>
        ))}
      </ClientsGrid>
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
  margin-bottom: 20px;
  color: white;
`;

const SubTitle = styled.p`
  font-size: 1.2rem;
  text-align: center;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 60px;
`;

const ClientsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 40px;
  max-width: 1200px;
  margin: 0 auto;
`;

const ClientCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 15px;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    background: rgba(255, 255, 255, 0.1);
  }
`;

const ClientLogo = styled.div`
  font-size: 3rem;
  margin-bottom: 15px;
  filter: grayscale(100%);
  transition: filter 0.3s ease;

  ${ClientCard}:hover & {
    filter: grayscale(0%);
  }
`;

const ClientName = styled.h3`
  font-size: 1.2rem;
  color: white;
  text-align: center;
`;

export default ClientsSection;
