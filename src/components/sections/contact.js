import React, { useState } from "react";
import styled from "styled-components";

// Styled Components
const Background = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: transparent;
  padding: 20px;
`;

const FormContainer = styled.div`
  background: transparent;
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  width: 100%;
  max-width: 600px;
  animation: fadeIn 0.8s ease-in-out;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.02);
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.3);
  }

  @media (max-width: 768px) {
    padding: 20px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  }
`;

const Title = styled.h2`
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 10px;
  text-align: center;
  color: #8892b0;

  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const Input = styled.input`
  padding: 12px;
  font-size: 16px;
  border: 2px solid #ccc;
  border-radius: 8px;
  outline: none;
  background-color: transparent;
  color: gray;
  transition: border-color 0.3s;

  &:focus {
    border-color: #8892b0;
  }

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const TextArea = styled.textarea`
  padding: 12px;
  font-size: 16px;
  border: 2px solid #ccc;
  border-radius: 8px;
  outline: none;
  resize: none;
  background-color: transparent;
  color: #8892b0;
  transition: border-color 0.3s;

  &:focus {
    border-color: #8892b0;
  }

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

// Shared Button Style
const ButtonBase = styled.button`
  padding: 12px;
  font-size: 19px;
  font-weight: bold;
  color: #fff;
  background: #1e3c72;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  text-align: center;
  width: 100%;
  box-sizing: border-box;
  transition: background 0.3s, transform 0.3s;

  &:hover {
    background: #8892b0;
    transform: scale(1.02);
  }

  &:focus,
  &:active {
    outline: none;
  }

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 10px;
  }
`;

// Styled Components for Specific Buttons
const Button = styled(ButtonBase)``;

const GmailButton = styled(ButtonBase).attrs({
  as: "a",
})`
  text-decoration: none;
`;

const OrText = styled.div`
  text-align: center;
  font-size: 18px;
  color: #aaa;
  margin: 20px 0;
  font-weight: bold;
  display: flex;
  align-items: center;

  &:before,
  &:after {
    content: "";
    flex: 1;
    height: 1px;
    background-color: #8892b0;
  }

  &:before {
    margin-right: 10px;
  }

  &:after {
    margin-left: 10px;
  }

  @media (max-width: 768px) {
    font-size: 16px;
    margin: 15px 0;

    &:before,
    &:after {
      height: 0.5px;
    }
  }
`;

const ContactInfo = styled.div`
  margin-top: 20px;
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  color: gray;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

const ContactInfoItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 5px 0;
  font-size: 26px;
  gap: 10px;

  span {
    font-weight: bold;
  }

  @media (max-width: 768px) {
    font-size: 22px;
  }
`;

// Main Component
const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <Background id="contact"> {/* Add this id here */}
      <FormContainer>
        <Title>Contact Me</Title>
        <Form onSubmit={handleSubmit}>
          <Input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <Input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <TextArea
            name="message"
            placeholder="Your Message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          />
          <Button type="submit">Send Message</Button>
        </Form>

        <OrText>Or</OrText>

        <GmailButton
          href={`mailto:info@alkhazishvili.com?subject=Message from ${formData.name}&body=${formData.message}`}
        >
          Contact Directly
        </GmailButton>

        <ContactInfo>
          <ContactInfoItem>
            📍 <span>STOCKHOLM, SWEDEN</span>
          </ContactInfoItem>
          <ContactInfoItem>
            📧 <span>INFO@ALKHAZISHVILI.COM</span>
          </ContactInfoItem>
          <ContactInfoItem>
            📞 <span>+46 793 565 407</span>
          </ContactInfoItem>
        </ContactInfo>
      </FormContainer>
    </Background>
  );
};

export default ContactForm;
