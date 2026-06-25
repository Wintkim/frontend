import styled from "styled-components";

const whatsappUrl = "https://wa.me/4915170119782?text=%EC%95%88%EB%85%95%ED%95%98%EC%84%B8%EC%9A%94%2C%20KYEFILM%20%EC%B4%AC%EC%98%81%2F%EC%BD%94%EB%94%94%20%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.";
const heroImage = `${import.meta.env.BASE_URL}images/hero-production-v2.jpg`;

export default function HeroSection() {
  return (
    <Section id="hero">
      <Background src={heroImage} alt="함부르크 유럽 촬영 현장에서 함께 작업하는 한국인 프로듀서와 현지 프로덕션 팀" width="1680" height="936" loading="eager" fetchPriority="high" />
      <Overlay />
      <Inner>
        <Copy>
          <Tag><span /> HAMBURG · GERMANY / EUROPE</Tag>
          <h1>독일·유럽 촬영,<br /><strong>현지에 움직일 사람이</strong><br />필요할 때</h1>
          <Description>
            함부르크 기반 한국인 프로듀서가 방송·다큐·브랜드·기업 촬영을 위한 현지 코디네이션,
            섭외, 통역, 직접 촬영과 영상 제작까지 함께 지원합니다.
          </Description>
          <TrustBadges aria-label="KYEFILM 신뢰 정보">
            {["KBS", "YTN", "MBC", "MCM", "HAMBURG-BASED", "KO · EN · DE"].map((badge) => <span key={badge}>{badge}</span>)}
          </TrustBadges>

          <Actions>
            <Primary href="#contact">촬영·코디 문의하기 <span>↘</span></Primary>
            <PortfolioLink href="#portfolio">포트폴리오 보기 <span>→</span></PortfolioLink>
          </Actions>
        </Copy>
        <QuickContact aria-label="빠른 문의">
          <small>QUICK CONTACT</small>
          <a className="kakao" href="kakaotalk://send?phone=821042691367">카카오톡 <span>↗</span></a>
          <a className="whatsapp" href={whatsappUrl} target="_blank" rel="noreferrer">WhatsApp <span>↗</span></a>
        </QuickContact>
      </Inner>
    </Section>
  );
}

const Section=styled.section`position:relative;min-height:850px;padding:125px 24px 85px;overflow:hidden;color:#f5f5f2;background:#090909;scroll-margin-top:70px;display:flex;align-items:center;@media(max-width:900px){min-height:780px;padding:118px 18px 72px}`;
const Background=styled.img`position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:center;`;
const Overlay=styled.div`position:absolute;inset:0;background:linear-gradient(90deg,rgba(5,5,5,.94) 0%,rgba(5,5,5,.82) 35%,rgba(5,5,5,.28) 68%,rgba(5,5,5,.08) 100%),linear-gradient(0deg,rgba(5,5,5,.7),transparent 45%,rgba(5,5,5,.2));@media(max-width:720px){background:linear-gradient(90deg,rgba(5,5,5,.92),rgba(5,5,5,.48)),linear-gradient(0deg,rgba(5,5,5,.82),transparent 60%)}`;
const Inner=styled.div`position:relative;z-index:2;width:min(1160px,100%);margin:0 auto;`;
const Copy=styled.div`
  max-width:540px;
  h1{margin:0;color:#f4f3ee;font-size:clamp(2.45rem,4.3vw,4.05rem);font-weight:700;line-height:1.18;letter-spacing:-.055em;word-break:keep-all}h1 strong{color:#caa96c;font-weight:700}
  @media(max-width:600px){h1{font-size:clamp(2.1rem,10vw,3rem);line-height:1.23}}
`;
const Tag=styled.p`display:flex;align-items:center;gap:10px;margin-bottom:22px;color:#caa96c;font-size:.63rem;font-weight:600;letter-spacing:.18em;span{width:25px;height:1px;background:#caa96c}`;
const Description=styled.p`max-width:500px;margin-top:22px;color:rgba(255,255,255,.56);font-size:.94rem;line-height:1.8;word-break:keep-all;`;
const TrustBadges=styled.div`
  display:flex;flex-wrap:wrap;gap:6px;margin-top:18px;
  span{padding:6px 9px;border:1px solid rgba(255,255,255,.11);border-radius:999px;color:rgba(255,255,255,.48);background:rgba(255,255,255,.025);font-size:.55rem;font-weight:600;letter-spacing:.08em}
`;
const Actions=styled.div`display:flex;align-items:center;gap:22px;margin-top:29px;@media(max-width:430px){align-items:flex-start;flex-direction:column;gap:16px}`;
const Primary=styled.a`min-height:50px;padding:0 20px;border-radius:8px;display:inline-flex;align-items:center;gap:30px;color:#111;background:#f1efe8;font-size:.75rem;font-weight:700;text-decoration:none;transition:transform .2s,background .2s;&:hover{transform:translateY(-2px);background:#caa96c}`;
const PortfolioLink=styled.a`padding:9px 0;border-bottom:1px solid rgba(255,255,255,.24);display:inline-flex;align-items:center;gap:14px;color:rgba(255,255,255,.58);font-size:.72rem;text-decoration:none;transition:color .2s,border-color .2s;&:hover{color:#fff;border-color:#fff}`;
const QuickContact=styled.div`
  position:absolute;right:0;bottom:-150px;width:154px;padding:8px;border:1px solid rgba(255,255,255,.18);border-radius:13px;display:grid;gap:5px;background:rgba(10,10,10,.25);backdrop-filter:blur(28px);box-shadow:inset 0 1px 1px rgba(255,255,255,.14);
  small{padding:5px 6px;color:rgba(255,255,255,.42);font-size:.49rem;letter-spacing:.14em}
  a{min-height:38px;padding:0 10px;border-radius:8px;display:flex;align-items:center;justify-content:space-between;color:#fff;background:rgba(255,255,255,.06);font-size:.61rem;font-weight:600;text-decoration:none;transition:background .2s,color .2s}.kakao:hover{color:#191600;background:#fee500}.whatsapp:hover{background:#25d366}
  @media(max-width:900px){position:static;width:100%;max-width:330px;margin-top:38px;grid-template-columns:1fr 1fr;small{grid-column:1/-1}a{min-height:46px}}
`;
