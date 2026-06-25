import styled from "styled-components";
import SectionCTA from "../SectionCTA";

const credits = [
  ["KBS", "세계는 지금 · 시사기획 창", "독일 현지 상황 촬영 및 코디네이션"],
  ["YTN", "글로벌 코리안", "독일 현지 리포팅 및 제작 지원"],
  ["MBC", "합창단 다큐멘터리", "유럽 투어 현지 촬영 코디네이션"],
  ["MCM", "럭셔리 브랜드 캠페인", "독일 현지 촬영 지원 및 코디네이션"],
  ["기업", "인터뷰 · 기업 홍보 영상", "독일 현지 촬영 대행"],
];

const stats = [
  ["10+", "년 방송 경력"],
  ["2018—", "함부르크 현지 거주"],
  ["3", "사용 언어 · 한·독·영"],
  ["5+", "주요 방송사·브랜드 협업"],
];

export default function AboutSection() {
  return (
    <Section id="about">
      <Inner>
        <Intro>
          <TitleBlock>
            <Eyebrow>ABOUT KYEFILM</Eyebrow>
            <h2><em>현장을 아는 사람은</em><br />준비하는 방식부터 다릅니다.</h2>
          </TitleBlock>
          <Body>
            <p>방송 PD 출신으로 제작 전반을 직접 경험했습니다. 촬영 현장에서 무엇이 필요한지 먼저 알고, 예상치 못한 변수에 빠르게 대응합니다.</p>
            <p>2018년부터 함부르크에 거주하며 독일의 촬영 허가 절차, 현지 섭외와 문화적 맥락까지 한국 팀이 모르는 부분을 채워왔습니다.</p>
            <p>한국어·독일어·영어로 소통하며 한국과 독일 사이에서 정확한 브릿지 역할을 합니다.</p>
          </Body>
        </Intro>

        <Stats aria-label="KYEFILM 주요 경력 수치">
          {stats.map(([number, label]) => (
            <Stat key={label}><strong>{number}</strong><span>{label}</span></Stat>
          ))}
        </Stats>

        <Experience>
          <ExperienceHead>
            <span>SELECTED EXPERIENCE</span>
            <p>주요 협업 경력</p>
          </ExperienceHead>
          <CreditList>
            {credits.map(([company, title, detail], index) => (
              <Credit key={`${company}-${title}`}>
                <Number>{String(index + 1).padStart(2, "0")}</Number>
                <Company>{company}</Company>
                <Project><strong>{title}</strong><span>{detail}</span></Project>
                <Arrow>↗</Arrow>
              </Credit>
            ))}
          </CreditList>
        </Experience>
        <SectionCTA text="현장 경험이 필요한 프로젝트가 있으신가요?" />
      </Inner>
    </Section>
  );
}

const Section = styled.section`
  padding: clamp(76px, 9vw, 118px) 0;
  color: #d2d2d2;
  background: #0e0e0e;
  scroll-margin-top: 72px;
`;

const Inner = styled.div`
  width: min(1060px, calc(100% - 48px));
  margin: 0 auto;
  @media (max-width: 600px) { width: calc(100% - 36px); }
`;

const Intro = styled.div`
  display: grid;
  grid-template-columns: 1.15fr .85fr;
  gap: clamp(44px, 8vw, 100px);
  align-items: start;

  @media (max-width: 760px) { grid-template-columns: 1fr; gap: 30px; }
`;

const TitleBlock = styled.div`
  h2 {
    margin: 15px 0 0;
    color: #efede7;
    font-family: "Noto Sans KR", sans-serif;
    font-size: clamp(2.05rem, 3.8vw, 3.25rem);
    font-weight: 700;
    line-height: 1.22;
    letter-spacing: -.045em;
    word-break: keep-all;
  }

  h2 em { color: #caa96c; font-weight: 700; font-style: normal; }
`;

const Eyebrow = styled.p`
  color: #c4a05e;
  font-size: .66rem;
  font-weight: 500;
  letter-spacing: .22em;
`;

const Body = styled.div`
  padding-top: 36px;
  border-top: 1px solid rgba(255,255,255,.1);

  p { margin: 0 0 18px; color: rgba(255,255,255,.56); font-size: .96rem; line-height: 1.9; word-break: keep-all; }
`;

const Stats = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin-top: clamp(56px, 7vw, 78px);
  border-top: 1px solid rgba(255,255,255,.12);
  border-bottom: 1px solid rgba(255,255,255,.12);

  @media (max-width: 700px) { grid-template-columns: repeat(2, 1fr); }
`;

const Stat = styled.div`
  padding: 25px 20px;
  border-right: 1px solid rgba(255,255,255,.1);

  strong { display: block; margin-bottom: 7px; color: #caa96c; font-family: "Noto Sans KR", sans-serif; font-size: clamp(1.7rem, 3vw, 2.35rem); font-weight: 600; line-height: 1; }
  span { color: rgba(255,255,255,.46); font-size: .72rem; }
  &:last-child { border-right: 0; }

  @media (max-width: 700px) {
    padding: 24px 16px;
    &:nth-child(2) { border-right: 0; }
    &:nth-child(-n+2) { border-bottom: 1px solid rgba(255,255,255,.1); }
  }
`;

const Experience = styled.div`
  display: grid;
  grid-template-columns: .34fr .66fr;
  gap: 56px;
  margin-top: clamp(64px, 8vw, 92px);

  @media (max-width: 760px) { grid-template-columns: 1fr; gap: 28px; }
`;

const ExperienceHead = styled.div`
  span { color: #c4a05e; font-size: .63rem; letter-spacing: .2em; }
  p { margin-top: 10px; color: #efede7; font-family: "Noto Sans KR", sans-serif; font-size: 1.45rem; font-weight: 600; }
`;

const CreditList = styled.div`
  border-top: 1px solid rgba(255,255,255,.15);
`;

const Credit = styled.div`
  min-height: 90px;
  padding: 18px 8px;
  border-bottom: 1px solid rgba(255,255,255,.1);
  display: grid;
  grid-template-columns: 42px 72px 1fr 24px;
  gap: 12px;
  align-items: center;
  transition: padding .25s, background .25s;

  &:hover { padding-left: 17px; background: rgba(196,160,94,.035); }
  @media (max-width: 500px) { grid-template-columns: 32px 52px 1fr; ${"& > span:last-child"} { display: none; } }
`;

const Number = styled.span`color: rgba(255,255,255,.25); font-size: .61rem;`;
const Company = styled.strong`color: #c4a05e; font-size: .78rem; letter-spacing: .07em;`;
const Project = styled.div`
  strong { display: block; color: rgba(255,255,255,.86); font-size: .89rem; font-weight: 500; }
  span { display: block; margin-top: 4px; color: rgba(255,255,255,.38); font-size: .72rem; }
`;
const Arrow = styled.span`color: rgba(255,255,255,.3);`;
