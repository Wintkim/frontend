import React, { useState } from "react";
import styled from "styled-components";
import ScrollAnimation from "../animations/ScrollAnimation";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "broadcast",
    description: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // TODO: 실제 서버로 데이터 전송 구현
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        projectType: "broadcast",
        description: "",
      });
    } catch (error) {
      setSubmitStatus("error");
    }

    setIsSubmitting(false);
  };

  return (
    <SectionContainer id="contact">
      <ContentWrapper>
        <ScrollAnimation>
          <ContactInfo>
            <SectionTitle>Contact Us</SectionTitle>
            <Description>
              당신의 프로젝트에 대해 이야기해주세요.
              <br />
              최고의 결과물로 보답하겠습니다.
            </Description>

            <ContactDetails>
              <ContactItem>
                <Icon>📧</Icon>
                <div>
                  <Label>Email</Label>
                  <Value>contact@videographer.com</Value>
                </div>
              </ContactItem>
              <ContactItem>
                <Icon>📱</Icon>
                <div>
                  <Label>Phone</Label>
                  <Value>+82 10-1234-5678</Value>
                </div>
              </ContactItem>
              <ContactItem>
                <Icon>📍</Icon>
                <div>
                  <Label>Location</Label>
                  <Value>Seoul, South Korea</Value>
                </div>
              </ContactItem>
            </ContactDetails>

            <SocialLinks>
              <SocialButton>Instagram</SocialButton>
              <SocialButton>YouTube</SocialButton>
              <SocialButton>Vimeo</SocialButton>
            </SocialLinks>
          </ContactInfo>
        </ScrollAnimation>

        <ScrollAnimation delay={0.2}>
          <ContactForm onSubmit={handleSubmit}>
            <FormTitle>프로젝트 문의하기</FormTitle>

            <FormGroup>
              <Input
                type="text"
                name="name"
                placeholder="이름"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </FormGroup>

            <FormGroup>
              <Input
                type="email"
                name="email"
                placeholder="이메일"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </FormGroup>

            <FormGroup>
              <Select
                name="projectType"
                value={formData.projectType}
                onChange={handleChange}
              >
                <option value="broadcast">방송 촬영</option>
                <option value="coordination">방송 현지 코디</option>
                <option value="corporate">기업 영상</option>
                <option value="shortfilm">단편 영화</option>
              </Select>
            </FormGroup>

            <FormGroup>
              <TextArea
                name="description"
                placeholder="프로젝트 설명"
                value={formData.description}
                onChange={handleChange}
                required
              />
            </FormGroup>

            <SubmitButton type="submit" disabled={isSubmitting}>
              {isSubmitting ? "전송 중..." : "문의하기"}
            </SubmitButton>

            {submitStatus === "success" && (
              <StatusMessage success>
                문의가 성공적으로 전송되었습니다.
              </StatusMessage>
            )}

            {submitStatus === "error" && (
              <StatusMessage>
                전송 중 오류가 발생했습니다. 다시 시도해주세요.
              </StatusMessage>
            )}
          </ContactForm>
        </ScrollAnimation>
      </ContentWrapper>
    </SectionContainer>
  );
};

const SectionContainer = styled.section`
  padding: 100px 20px;
  background: #111;
`;

const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
  }
`;

const ContactInfo = styled.div`
  color: white;
`;

const SectionTitle = styled.h2`
  font-size: 3rem;
  margin-bottom: 30px;
`;

const Description = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 40px;
`;

const ContactDetails = styled.div`
  margin-bottom: 40px;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const Icon = styled.span`
  font-size: 1.5rem;
  margin-right: 15px;
`;

const Label = styled.p`
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 5px;
`;

const Value = styled.p`
  font-size: 1.1rem;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 15px;
`;

const SocialButton = styled.button`
  padding: 10px 20px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  background: transparent;
  color: white;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: white;
    color: black;
  }
`;

const ContactForm = styled.form`
  background: rgba(255, 255, 255, 0.05);
  padding: 40px;
  border-radius: 20px;
`;

const FormTitle = styled.h3`
  font-size: 2rem;
  color: white;
  margin-bottom: 30px;
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const Input = styled.input`
  width: 100%;
  padding: 15px;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  color: white;
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: white;
  }

  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }
`;

const Select = styled.select`
  width: 100%;
  padding: 15px;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  color: white;
  font-size: 1rem;
  cursor: pointer;

  option {
    background: #111;
    color: white;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 15px;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  color: white;
  font-size: 1rem;
  min-height: 150px;
  resize: vertical;

  &:focus {
    outline: none;
    border-color: white;
  }

  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 15px;
  background: white;
  border: none;
  border-radius: 10px;
  color: black;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }

  &:disabled {
    background: rgba(255, 255, 255, 0.5);
    cursor: not-allowed;
    transform: none;
  }
`;

const StatusMessage = styled.div`
  margin-top: 20px;
  padding: 15px;
  border-radius: 10px;
  text-align: center;
  background: ${(props) =>
    props.success ? "rgba(0, 255, 0, 0.1)" : "rgba(255, 0, 0, 0.1)"};
  color: ${(props) => (props.success ? "#00ff00" : "#ff0000")};
`;

export default ContactSection;
