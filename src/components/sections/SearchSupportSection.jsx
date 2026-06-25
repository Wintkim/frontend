import styled from "styled-components";
import SectionCTA from "../SectionCTA";

const supportAreas = [
  {
    title: "한국 방송팀 독일 촬영 코디",
    body: "KBS, YTN, MBC 등 방송 제작 흐름을 이해하는 현지 코디가 독일 로케이션 리서치, 섭외, 통역, 촬영 허가, 현장 진행을 지원합니다.",
  },
  {
    title: "독일 현지 촬영 대행",
    body: "한국 팀이 독일에 직접 오기 어려울 때 함부르크를 기반으로 인터뷰, 현장 스케치, 기업 영상, 뉴스 리포트용 촬영을 직접 진행해 전달합니다.",
  },
  {
    title: "유럽 출장 촬영 및 현지 진행",
    body: "독일 전역과 유럽 주요 도시에서 방송 촬영, 브랜드 캠페인, 기업 홍보영상, 유튜브 콘텐츠 제작에 필요한 현지 진행을 함께합니다.",
  },
  {
    title: "독일 단체 방문 인솔",
    body: "기업 연수, 기관 방문, 합창단·문화 행사, 브랜드 투어처럼 독일 현장에서 인솔, 통역, 일정 조율, 촬영 기록이 함께 필요한 프로젝트를 지원합니다.",
  },
];

const questions = [
  ["독일 촬영 코디만 따로 의뢰할 수 있나요?", "가능합니다. 촬영팀이 이미 있는 경우에도 로케이션 헌팅, 현지 섭외, 통역, 허가 확인, 일정 조율과 현장 진행만 맡길 수 있습니다."],
  ["한국 방송국이나 제작사가 급하게 독일 촬영을 요청해도 되나요?", "가능한 일정이라면 빠르게 대응합니다. 촬영 도시, 날짜, 필요한 인터뷰나 장소, 납품 형식을 알려주시면 현실적인 진행 방법부터 정리합니다."],
  ["함부르크 외 다른 독일 도시나 유럽 국가도 가능한가요?", "함부르크를 기반으로 베를린, 프랑크푸르트, 뮌헨 등 독일 전역과 유럽 주요 도시 프로젝트를 검토합니다."],
  ["단체 방문이나 기업 연수 인솔도 촬영과 함께 가능한가요?", "가능합니다. 독일 현지 통역, 이동과 일정 진행, 기관 방문 동행, 행사 기록 촬영을 프로젝트 성격에 맞춰 함께 구성할 수 있습니다."],
];

const keywords = [
  "독일 촬영 코디",
  "독일 현지 코디",
  "독일 방송 촬영",
  "유럽 촬영 코디",
  "함부르크 촬영 지원",
  "Germany fixer",
  "Hamburg production support",
  "독일 촬영 대행",
  "독일 단체 인솔",
  "현지 섭외 통역 허가",
];

export default function SearchSupportSection() {
  return (
    <Section id="support">
      <Inner>
        <Header>
          <Eyebrow>GERMANY PRODUCTION SUPPORT</Eyebrow>
          <h2>한국 팀이 독일에서 촬영하거나<br /><em>현지 진행자가 필요할 때</em></h2>
          <p>KYEFILM은 독일 현지 코디, 방송 촬영, 유럽 촬영 코디, 현지 촬영 대행과 단체 방문 인솔을 한 번에 연결하는 함부르크 기반 프로덕션 파트너입니다.</p>
        </Header>

        <AreaGrid>
          {supportAreas.map((area) => (
            <Area key={area.title}>
              <h3>{area.title}</h3>
              <p>{area.body}</p>
            </Area>
          ))}
        </AreaGrid>

        <KeywordStrip aria-label="KYEFILM 주요 검색 서비스">
          {keywords.map((keyword) => <span key={keyword}>{keyword}</span>)}
        </KeywordStrip>

        <Faq>
          <FaqHead>
            <Eyebrow>FAQ</Eyebrow>
            <h3>독일 촬영·현지 코디 문의 전 자주 묻는 질문</h3>
          </FaqHead>
          <QuestionGrid>
            {questions.map(([question, answer]) => (
              <Question key={question}>
                <h4>{question}</h4>
                <p>{answer}</p>
              </Question>
            ))}
          </QuestionGrid>
        </Faq>

        <SectionCTA text="독일 촬영 코디, 현지 촬영 대행, 단체 인솔이 필요하신가요?" />
      </Inner>
    </Section>
  );
}

const Section=styled.section`padding:clamp(76px,9vw,116px) 0;color:#f2f0ea;background:#080808;scroll-margin-top:72px;`;
const Inner=styled.div`width:min(1060px,calc(100% - 48px));margin:0 auto;@media(max-width:600px){width:calc(100% - 36px)}`;
const Header=styled.div`
  max-width:760px;margin-bottom:46px;
  h2{margin:12px 0 18px;font-size:clamp(2rem,3.6vw,3.05rem);font-weight:700;line-height:1.22;letter-spacing:-.045em;word-break:keep-all}h2 em{color:#caa96c;font-style:normal}
  p{max-width:650px;color:rgba(255,255,255,.48);font-size:.88rem;line-height:1.85;word-break:keep-all}
`;
const Eyebrow=styled.span`color:#c4a05e;font-size:.64rem;font-weight:600;letter-spacing:.2em;`;
const AreaGrid=styled.div`display:grid;grid-template-columns:repeat(2,1fr);gap:1px;background:rgba(255,255,255,.1);border:1px solid rgba(255,255,255,.1);border-radius:10px;overflow:hidden;@media(max-width:720px){grid-template-columns:1fr}`;
const Area=styled.article`
  min-height:210px;padding:28px;background:#0e0e0e;
  h3{margin:0 0 15px;color:#f0eee8;font-size:1.08rem;font-weight:650;line-height:1.45;letter-spacing:-.025em;word-break:keep-all}
  p{color:rgba(255,255,255,.45);font-size:.8rem;line-height:1.8;word-break:keep-all}
`;
const KeywordStrip=styled.div`display:flex;flex-wrap:wrap;gap:7px;margin:22px 0 48px;span{padding:7px 10px;border:1px solid rgba(196,160,94,.2);border-radius:999px;color:rgba(255,255,255,.48);background:rgba(196,160,94,.045);font-size:.64rem}`;
const Faq=styled.div`margin-bottom:32px;`;
const FaqHead=styled.div`margin-bottom:24px;h3{margin:9px 0 0;font-size:1.55rem;font-weight:650;line-height:1.35;letter-spacing:-.03em;word-break:keep-all}`;
const QuestionGrid=styled.div`display:grid;grid-template-columns:repeat(2,1fr);gap:18px;@media(max-width:720px){grid-template-columns:1fr}`;
const Question=styled.article`
  padding:22px 0;border-top:1px solid rgba(255,255,255,.12);
  h4{margin:0 0 10px;color:#efede7;font-size:.96rem;font-weight:650;line-height:1.5;word-break:keep-all}
  p{color:rgba(255,255,255,.44);font-size:.78rem;line-height:1.75;word-break:keep-all}
`;
