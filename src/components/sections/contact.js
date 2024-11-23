import React, { useState } from "react";
import styled from "styled-components";

// Styled Components
const Background = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #transparent;  /* Dark slate background */
  padding: 20px;
`;

const FormContainer = styled.div`
  background: #transparent; /* Darker container background */
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

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const Title = styled.h2`
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 10px;
  text-align: center;
  color: #8892b0; /* Pink color */
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
  background-color: transparent;  /* Black background for input fields */
  color: yellow;  /* Yellow text */
  transition: border-color 0.3s;

  &:focus {
    border-color: #8892b0;  /* Pink border on focus */
  }
`;

const TextArea = styled.textarea`
  padding: 12px;
  font-size: 16px;
  border: 2px solid #ccc;
  border-radius: 8px;
  outline: none;
  resize: none;
  background-color: transparent;  /* Black background for textarea */
  color: #8892b0;  /* White text */
  transition: border-color 0.3s;

  &:focus {
    border-color: #8892b0;  /* Pink border on focus */
  }
`;

const Button = styled.button`
  padding: 12px;
  font-size: 16px;
  font-weight: bold;
  color: #fff;
  background: #1e3c72;  /* Dark blue background */
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background: #8892b0;  /* Lighter blue on hover */
  }
`;

// New transparent button to open Gmail
const GmailButton = styled.a`
  padding: 12px;
  font-size: 16px;
  font-weight: bold;
  color: #fff;
  background: #1e3c72;  /* Dark blue background */
  border: none;
  border-radius: 8px;
  cursor: pointer;
  text-align: center;
  display: inline-block;
  transition: background 0.3s;
  margin-top: 10px;
  width: 100%;  /* Same width as the Send Message button */
  box-sizing: border-box;

  &:hover {
    background: #8892b0;  /* Lighter blue on hover */
    color: #fff;  /* Ensure text stays white on hover */
  }

  &:focus,
  &:active {
    outline: none;  /* Remove focus outline */
    color: #fff;  /* Ensure text stays white on focus and active states */
  }
`;

const OrText = styled.div`
  text-align: center;
  font-size: 18px;
  color: #aaa;
  margin: 20px 0;
  font-weight: bold;

  &:before {
    content: "";
    display: inline-block;
    width: 45%;
    height: 1px;
    background-color: #8892b0;
    margin-right: 10px;
    vertical-align: middle;
  }

  &:after {
    content: "";
    display: inline-block;
    width: 45%;
    height: 1px;
    background-color: #8892b0;
    margin-left: 10px;
    vertical-align: middle;
  }
`;

const ContactInfo = styled.div`
  margin-top: 20px;
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  color: #gray;  /* Contact color */
`;

const ContactInfoItem = styled.div`
  margin: 5px 0;
  font-size: 26px;

  span {
    font-weight: bold;
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
    <Background>
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

        {/* Or Text Between Buttons */}
        <OrText>Or</OrText>

        {/* Transparent Gmail Button */}
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