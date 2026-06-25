import styled from "styled-components";

export default function SectionCTA({ text = "독일·유럽 촬영을 준비하고 계신가요?" }) {
  return (
    <Wrap>
      <p>{text}</p>
      <a href="#contact">촬영/코디 문의하기 <span>↘</span></a>
    </Wrap>
  );
}

const Wrap = styled.div`
  margin-top: 54px;
  padding-top: 22px;
  border-top: 1px solid rgba(255,255,255,.1);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;

  p { color: rgba(255,255,255,.42); font-size: .75rem; }
  a { min-height: 44px; padding: 0 16px; border: 1px solid rgba(255,255,255,.16); border-radius: 7px; display: inline-flex; align-items: center; gap: 26px; color: rgba(255,255,255,.76); background: rgba(255,255,255,.025); font-size: .7rem; font-weight: 600; text-decoration: none; transition: color .2s, border-color .2s, background .2s; }
  a:hover { color: #111; border-color: #caa96c; background: #caa96c; }

  @media (max-width: 560px) {
    align-items: stretch;
    flex-direction: column;
    a { min-height: 50px; justify-content: space-between; }
  }
`;
