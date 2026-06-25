import { useState } from "react";
import styled from "styled-components";

const whatsappUrl = "https://wa.me/4915170119782?text=%EC%95%88%EB%85%95%ED%95%98%EC%84%B8%EC%9A%94%2C%20KYEFILM%20%EC%B4%AC%EC%98%81%2F%EC%BD%94%EB%94%94%20%EB%AC%B8%EC%9D%98%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4.";

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", type: "한국 팀 → 독일·유럽 촬영·코디", message: "" });
  const change = (event) => setForm({ ...form, [event.target.name]: event.target.value });
  const submit = (event) => {
    event.preventDefault();
    const subject = encodeURIComponent(`[KYEFILM 문의] ${form.type} / ${form.name}`);
    const body = encodeURIComponent(`이름: ${form.name}\n이메일: ${form.email}\n문의 유형: ${form.type}\n\n${form.message}`);
    window.location.href = `mailto:contact@kyefilm.com?subject=${subject}&body=${body}`;
  };

  return (
    <Section id="contact">
      <Inner>
        <Header>
          <Eyebrow>CONTACT</Eyebrow>
          <h2>촬영·코디 계획이<br /><em>아직 선명하지 않아도 괜찮습니다.</em></h2>
          <p>일정, 국가와 촬영 목적을 알려주시면 필요한 준비와 현실적인 진행 방법부터 함께 정리하겠습니다.</p>
          <Urgent>급한 촬영 문의는 카카오톡 또는 WhatsApp이 가장 빠릅니다.</Urgent>
        </Header>

        <Grid>
          <ContactInfo>
            <QuickActions>
              <a className="kakao" href="kakaotalk://send?phone=821042691367">카카오톡 문의 <span>↗</span></a>
              <a className="email" href="mailto:contact@kyefilm.com">이메일 문의 <span>↗</span></a>
              <a className="whatsapp" href={whatsappUrl} target="_blank" rel="noreferrer">WhatsApp 문의 <span>↗</span></a>
            </QuickActions>
            <Details>
              <Detail><small>EMAIL</small><a href="mailto:contact@kyefilm.com">contact@kyefilm.com</a></Detail>
              <Detail><small>PHONE · WHATSAPP</small><a href="tel:+4915170119782">+49 151 7011 9782</a></Detail>
              <Detail><small>BASE · SERVICE AREA</small><p>Hamburg, Germany<br /><span>독일 전역 · 유럽 · 한국 출장 가능</span></p></Detail>
              <Detail><small>LANGUAGE</small><p>한국어 · Deutsch · English</p></Detail>
            </Details>
            <Note><b>빠른 견적을 위해</b> 촬영 일정, 장소, 인원과 필요한 지원 범위를 간단히 알려주세요.</Note>
          </ContactInfo>

          <Form onSubmit={submit}>
            <Field><label htmlFor="name">이름 / 회사명</label><input id="name" name="name" value={form.name} onChange={change} required /></Field>
            <Field><label htmlFor="email">이메일</label><input id="email" name="email" type="email" value={form.email} onChange={change} required /></Field>
            <Field>
              <label htmlFor="type">문의 유형</label>
              <select id="type" name="type" value={form.type} onChange={change}>
                <option>한국 팀 → 독일·유럽 촬영·코디</option>
                <option>독일 팀 → 한국 촬영·코디</option>
                <option>기업·브랜드 캠페인 촬영</option>
                <option>단체·기관 현지 인솔</option>
                <option>유튜브·콘텐츠 촬영</option>
                <option>기타</option>
              </select>
            </Field>
            <Field><label htmlFor="message">문의 내용</label><textarea id="message" name="message" rows="5" value={form.message} onChange={change} placeholder="예상 일정, 촬영 국가·도시와 필요한 지원을 적어주세요." required /></Field>
            <Submit type="submit">이메일 문의 작성하기 <span>↗</span></Submit>
            <FormNote>버튼을 누르면 작성한 내용이 이메일 앱에 자동으로 입력됩니다.</FormNote>
          </Form>
        </Grid>

        <Footer><b>KYEFILM</b><span>© 2026 · Hamburg, Germany</span></Footer>
      </Inner>
    </Section>
  );
}

const Section=styled.section`padding:clamp(76px,9vw,118px) 0 32px;color:#fff;background:#0d0d0d;scroll-margin-top:72px;`;
const Inner=styled.div`width:min(1060px,calc(100% - 48px));margin:0 auto;@media(max-width:600px){width:calc(100% - 36px)}`;
const Header=styled.div`
  max-width:710px;margin-bottom:54px;
  h2{margin:12px 0 18px;color:#efede7;font-family:"Noto Sans KR",sans-serif;font-size:clamp(2rem,3.6vw,3.05rem);font-weight:700;line-height:1.24;letter-spacing:-.045em;word-break:keep-all}h2 em{color:#caa96c;font-weight:700;font-style:normal}p{max-width:590px;color:rgba(255,255,255,.45);font-size:.88rem;line-height:1.8;word-break:keep-all}
`;
const Eyebrow=styled.span`color:#c4a05e;font-size:.65rem;letter-spacing:.22em;`;
const Urgent=styled.strong`display:block;margin-top:17px;color:#caa96c;font-size:.79rem;font-weight:600;`;
const Grid=styled.div`display:grid;grid-template-columns:.9fr 1.1fr;gap:clamp(48px,8vw,90px);@media(max-width:780px){grid-template-columns:1fr}`;
const ContactInfo=styled.div``;
const QuickActions=styled.div`
  display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin-bottom:22px;
  a{min-height:52px;padding:0 11px;border-radius:7px;display:flex;align-items:center;justify-content:space-between;font-size:.66rem;font-weight:700;text-decoration:none;transition:transform .2s,filter .2s}a:hover{transform:translateY(-1px);filter:brightness(1.06)}.kakao{color:#191600;background:#fee500}.email{color:rgba(255,255,255,.8);background:#202020}.whatsapp{color:#fff;background:#25d366}
  @media(max-width:540px){grid-template-columns:1fr;a{padding:0 15px}}
`;
const Details=styled.div`border-top:1px solid rgba(255,255,255,.1);`;
const Detail=styled.div`
  padding:17px 2px;border-bottom:1px solid rgba(255,255,255,.1);display:grid;grid-template-columns:140px 1fr;gap:18px;small{color:rgba(255,255,255,.3);font-size:.58rem;letter-spacing:.14em}a,p{color:rgba(255,255,255,.72);font-size:.79rem;line-height:1.6;text-decoration:none}p span{color:rgba(255,255,255,.36)}
  @media(max-width:430px){grid-template-columns:1fr;gap:5px}
`;
const Note=styled.p`margin-top:20px;padding:15px 17px;border:1px solid rgba(196,160,94,.16);border-radius:7px;color:rgba(255,255,255,.4);background:rgba(196,160,94,.035);font-size:.73rem;line-height:1.7;b{color:#c4a05e;font-weight:500}`;
const Form=styled.form`display:flex;flex-direction:column;gap:17px;`;
const Field=styled.div`
  label{display:block;margin-bottom:7px;color:rgba(255,255,255,.43);font-size:.65rem;letter-spacing:.08em}input,select,textarea{width:100%;padding:12px 14px;border:1px solid rgba(255,255,255,.1);border-radius:7px;outline:none;color:rgba(255,255,255,.8);background:#141414;font-size:.8rem;font-family:inherit}input:focus,select:focus,textarea:focus{border-color:#c4a05e}select option{background:#141414}textarea{resize:vertical}
`;
const Submit=styled.button`min-height:50px;padding:0 18px;border:0;border-radius:7px;display:flex;align-items:center;justify-content:space-between;color:#0c0c0c;background:#c4a05e;font-size:.74rem;font-weight:700;cursor:pointer;&:hover{background:#debb7e}`;
const FormNote=styled.p`margin-top:-9px;color:rgba(255,255,255,.27);font-size:.63rem;`;
const Footer=styled.div`margin-top:80px;padding-top:24px;border-top:1px solid rgba(255,255,255,.08);display:flex;justify-content:space-between;color:rgba(255,255,255,.28);font-size:.66rem;letter-spacing:.08em;b{color:rgba(255,255,255,.56)}`;
