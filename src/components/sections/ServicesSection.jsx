import styled from "styled-components";

const services = [
  {
    number: "01",
    title: "방송 촬영 코디",
    route: "한국 방송팀 → 독일·유럽",
    description: "독일 방송 코디, 유럽 방송 코디, 현지 촬영 일정 관리, 스태프 연결, 장비 운영까지 방송 제작 흐름에 맞춰 지원합니다.",
    tags: ["로케이션 헌팅", "현지 섭외·통역", "촬영 허가", "일정 조율", "현장 진행"],
    featured: true,
  },
  {
    number: "02",
    title: "기업·브랜드 영상 제작",
    route: "기업·브랜드 → 독일·유럽",
    description: "독일 기업 홍보영상, 유럽 브랜드 영상, 사내 영상, 캠페인 촬영까지 현지 제작과 현장 운영을 함께 진행합니다.",
    tags: ["기업 홍보영상", "브랜드 촬영", "현지 제작", "인터뷰 섭외", "로케이션 구성"],
  },
  {
    number: "03",
    title: "로케이션 헌팅 / 인터뷰 섭외",
    route: "독일·유럽 현장 직접 운영",
    description: "독일 현지 촬영, 유럽 현지 촬영, 로케이션 헌팅, 인터뷰 섭외, 촬영 통역, 차량·일정·동선 조율을 한 번에 준비합니다.",
    tags: ["로케이션 헌팅", "인터뷰 섭외", "촬영 통역", "차량·동선", "유럽 촬영 지원"],
  },
  {
    number: "04",
    title: "촬영 통역 및 현장 진행",
    route: "한국 팀 → 독일·유럽 현장",
    description: "강의, 인터뷰, 리포트, 기업 행사, 단체 방문 등 현장에서 필요한 통역과 진행을 맡아 언어·일정·물류 리스크를 줄입니다.",
    tags: ["촬영 통역", "현장 진행", "일정 조율", "차량 이동", "현지 운영"],
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
