import styled from "styled-components";
import SectionCTA from "../SectionCTA";

const assetPath = (path) => `${import.meta.env.BASE_URL}${path}`;

const items=[
  {type:"BRAND FILM",title:"브랜드 필름",subtitle:"감각적인 브랜드 스토리",description:"하이엔드 브랜드 MCM과의 문화 프로젝트. 브랜드의 감성과 철학을 독일 현지의 화면 안에 담았습니다.",thumbnail:assetPath("images/thumbnail1.jpg")},
  {type:"DOCUMENTARY",title:"다큐멘터리",subtitle:"진정성 있는 스토리텔링",description:"유럽과 한국을 잇는 사람들의 이야기. 현실의 표정과 감정을 놓치지 않는 영상 기록입니다.",thumbnail:assetPath("images/thumbnail3.jpg")},
  {type:"BROADCAST",title:"방송 리포트",subtitle:"현장의 생생한 순간",description:"현지 섭외와 코디네이션부터 리포팅과 촬영까지, 빠르고 정확하게 유럽의 현장을 전달합니다.",thumbnail:assetPath("images/thumbnail2.jpg")},
  {type:"CORPORATE",title:"기업 홍보영상",subtitle:"기업의 비전과 가치",description:"인터뷰와 현장 촬영을 바탕으로 기업의 철학과 메시지를 설득력 있는 영상으로 제작합니다.",thumbnail:assetPath("images/thumbnail4.jpg")},
];

export default function PortfolioSection(){return <Section id="portfolio"><Inner><Header><div><Eyebrow>SELECTED WORK</Eyebrow><h2>포트폴리오</h2></div><p>저작권과 공개 범위에 따라 대표 스틸 이미지만 소개합니다.<br/>프로젝트 상세 자료는 문의 시 별도로 전달드립니다.</p></Header><Grid>{items.map((item,index)=><Work key={item.title}><Media><img src={item.thumbnail} alt={`${item.title} 대표 스틸`} width="1920" height="1080" loading="lazy"/><Top><span>{String(index+1).padStart(2,"0")}</span><b>{item.type}</b></Top></Media><Copy><div><h3>{item.title}</h3><strong>{item.subtitle}</strong></div><p>{item.description}</p></Copy></Work>)}</Grid><SectionCTA text="공개되지 않은 작업 자료가 더 필요하신가요?" /></Inner></Section>}

const Section=styled.section`padding:clamp(82px,10vw,126px) 0;color:#f4f3ee;background:#0b0b0b;scroll-margin-top:70px;`;
const Inner=styled.div`width:min(1080px,calc(100% - 48px));margin:0 auto;@media(max-width:600px){width:calc(100% - 36px)}`;
const Header=styled.div`display:flex;align-items:flex-end;justify-content:space-between;gap:40px;margin-bottom:50px;h2{margin:8px 0 0;font-size:clamp(2.15rem,4vw,3.35rem);font-weight:700;line-height:1.15;letter-spacing:-.045em}>p{color:rgba(255,255,255,.4);font-size:.78rem;line-height:1.75;text-align:right;word-break:keep-all}@media(max-width:680px){display:block;>p{margin-top:18px;text-align:left}}`;
const Eyebrow=styled.span`color:#caa96c;font-size:.64rem;font-weight:600;letter-spacing:.2em;`;
const Grid=styled.div`display:grid;grid-template-columns:1fr 1fr;gap:50px 22px;@media(max-width:660px){grid-template-columns:1fr;gap:44px}`;
const Work=styled.article``;
const Media=styled.div`position:relative;aspect-ratio:16/9;overflow:hidden;border-radius:10px;background:#151515;img{width:100%;height:100%;object-fit:cover;transition:transform .45s,filter .45s}&::after{content:"";position:absolute;inset:0;background:linear-gradient(180deg,rgba(0,0,0,.3),transparent 45%,rgba(0,0,0,.2));pointer-events:none}${Work}:hover & img{transform:scale(1.018);filter:brightness(1.04)}`;
const Top=styled.div`position:absolute;z-index:2;top:16px;left:17px;right:17px;display:flex;justify-content:space-between;color:rgba(255,255,255,.78);font-size:.56rem;letter-spacing:.14em;b{font-weight:600}`;
const Copy=styled.div`display:grid;grid-template-columns:.7fr 1.3fr;gap:18px;margin-top:15px;padding-top:17px;border-top:1px solid rgba(255,255,255,.1);h3{margin:0 0 5px;font-size:1.15rem;font-weight:600;letter-spacing:-.02em}strong{color:#caa96c;font-size:.65rem;font-weight:500}p{color:rgba(255,255,255,.4);font-size:.76rem;line-height:1.7;word-break:keep-all}@media(max-width:900px){grid-template-columns:1fr;gap:10px}`;
