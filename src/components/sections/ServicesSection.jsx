import styled from "styled-components";

const services = [
  {
    number: "01",
    title: "독일·유럽 촬영 + 코디",
    route: "한국 팀 → 독일·유럽",
    description: "한국 방송사·유튜버·기업이 독일에 올 때, 코디와 직접 촬영을 한 번에 지원합니다. 팀이 오지 않아도 현지에서 직접 촬영해 전달할 수 있습니다.",
    tags: ["로케이션 헌팅", "현지 섭외·통역", "촬영 허가", "직접 촬영", "뉴스 리포팅"],
    featured: true,
  },
  {
    number: "02",
    title: "독일·유럽 현지 코디",
    route: "한국 팀 → 독일·유럽",
    description: "촬영팀은 이미 있고, 현지 코디만 필요한 경우를 위한 서비스입니다. 로케이션, 섭외, 통역, 촬영 허가, 일정 조율까지 현장에서 필요한 지원을 제공합니다.",
    tags: ["로케이션 리서치", "현지 섭외", "통역", "촬영 허가", "일정 조율", "현장 진행"],
  },
  {
    number: "03",
    title: "현지 촬영 대행",
    route: "독일·유럽 현장 직접 촬영",
    description: "독일·유럽 현장을 빠르게 촬영해 전달해야 할 때, 현지에서 직접 촬영하고 필요한 형식으로 전달합니다.",
    tags: ["인터뷰 촬영", "리포트 촬영", "현장 스케치", "브랜드 촬영", "기업 촬영", "영상 전달"],
  },
  {
    number: "04",
    title: "기업·단체 현지 인솔",
    route: "한국 단체 → 독일·유럽",
    description: "기업 연수, 단체 방문, 브랜드 캠페인 등 독일·유럽 현장에서 필요한 인솔과 통역, 촬영 지원을 함께합니다.",
    tags: ["단체 인솔", "기업 연수", "브랜드 캠페인", "현지 통역", "촬영 지원"],
  },
];

export default function ServicesSection() {
  return (
    <Section id="services">
      <Inner>
        <Header>
          <div><Eyebrow>SERVICES</Eyebrow><h2>촬영만, 코디만, 둘 다 필요할 때도<br /><em>맞춤형으로 지원합니다.</em></h2></div>
          <p>프로젝트의 목적과 현장 구성에 따라<br />필요한 역할만 정확하게 선택할 수 있습니다.</p>
        </Header>

        <Grid>
          {services.map((service) => (
            <Card key={service.number} $featured={service.featured}>
              <CardTop><Number>{service.number}</Number>{service.featured && <Popular>MOST POPULAR</Popular>}</CardTop>
              <h3>{service.title}</h3>
              <Route>{service.route}</Route>
              <Description>{service.description}</Description>
              <Tags>{service.tags.map((tag) => <span key={tag}>{tag}</span>)}</Tags>
            </Card>
          ))}
        </Grid>

        <Bottom>
          <p><strong>어떤 서비스가 필요한지 아직 정확하지 않아도 괜찮습니다.</strong><br />일정, 국가와 촬영 목적을 알려주시면 필요한 범위부터 함께 정리합니다.</p>
          <a href="#contact">촬영/코디 문의하기 <span>↘</span></a>
        </Bottom>
      </Inner>
    </Section>
  );
}

const Section = styled.section`
  padding: clamp(76px, 9vw, 118px) 0;
  color: #fff;
  background: #101010;
  scroll-margin-top: 72px;
`;
const Inner = styled.div`width:min(1060px,calc(100% - 48px));margin:0 auto;@media(max-width:600px){width:calc(100% - 36px)}`;
const Header = styled.div`
  display:flex;align-items:flex-end;justify-content:space-between;gap:48px;margin-bottom:60px;
  h2{margin:12px 0 0;color:#efede7;font-family:"Noto Sans KR",sans-serif;font-size:clamp(2rem,3.6vw,3.05rem);font-weight:700;line-height:1.22;letter-spacing:-.045em}h2 em{color:#caa96c;font-weight:700;font-style:normal}
  >p{color:rgba(255,255,255,.44);font-size:.86rem;line-height:1.8;text-align:right;word-break:keep-all}
  @media(max-width:760px){display:block;>p{margin-top:24px;text-align:left}}
`;
const Eyebrow=styled.span`color:#c4a05e;font-size:.65rem;letter-spacing:.22em;`;
const Grid=styled.div`display:grid;grid-template-columns:repeat(2,1fr);border:1px solid rgba(255,255,255,.1);border-radius:10px;overflow:hidden;@media(max-width:720px){grid-template-columns:1fr}`;
const Card=styled.article`
  min-height:390px;padding:30px 28px;border-right:1px solid rgba(255,255,255,.1);border-bottom:1px solid rgba(255,255,255,.1);display:flex;flex-direction:column;background:${({$featured})=>$featured?"#151515":"#101010"};transition:background .25s;
  &:hover{background:#171717}h3{margin:32px 0 10px;color:#efede7;font-family:"Noto Sans KR",sans-serif;font-size:clamp(1.3rem,1.8vw,1.55rem);font-weight:600;line-height:1.4;letter-spacing:-.025em;word-break:keep-all}&:nth-child(even){border-right:0}&:nth-last-child(-n+2){border-bottom:0}
  @media(max-width:720px){min-height:0;border-right:0!important;border-bottom:1px solid rgba(255,255,255,.1)!important;&:last-child{border-bottom:0!important}}
`;
const CardTop=styled.div`display:flex;align-items:center;justify-content:space-between;`;
const Number=styled.span`color:rgba(255,255,255,.28);font-size:.67rem;letter-spacing:.12em;`;
const Popular=styled.span`padding:4px 8px;border-radius:4px;color:#c4a05e;background:rgba(196,160,94,.1);font-size:.54rem;letter-spacing:.1em;`;
const Route=styled.p`color:#c4a05e;font-size:.66rem;font-weight:500;letter-spacing:.09em;`;
const Description=styled.p`margin:22px 0 28px;color:rgba(255,255,255,.47);font-size:.83rem;line-height:1.8;word-break:keep-all;`;
const Tags=styled.div`display:flex;flex-wrap:wrap;gap:7px;margin-top:auto;span{padding:5px 9px;border:1px solid rgba(255,255,255,.11);border-radius:999px;color:rgba(255,255,255,.38);font-size:.6rem}`;
const Bottom=styled.div`
  margin-top:22px;padding:24px 26px;border:1px solid rgba(255,255,255,.1);border-radius:10px;display:flex;align-items:center;justify-content:space-between;gap:30px;
  p{color:rgba(255,255,255,.42);font-size:.8rem;line-height:1.7}strong{color:rgba(255,255,255,.76);font-weight:500}a{flex:0 0 auto;min-height:46px;padding:0 18px;border-radius:7px;display:flex;align-items:center;gap:30px;color:#101010;background:#c4a05e;font-size:.72rem;font-weight:700;text-decoration:none}a:hover{background:#debb7e}
  @media(max-width:620px){align-items:flex-start;flex-direction:column;a{width:100%;justify-content:space-between}}
`;
