import React from 'react';
import styled, { keyframes } from 'styled-components';

// Keyframes for animations
const bounceAnimation = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
`;

const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(30px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const scaleUp = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.8);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
`;

const StyledHeroSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 0 20px;
  background: transparent;  /* No background */
  color: white;
  position: relative;
  text-align: center;
  font-family: 'Fira Sans', sans-serif;
  z-index: 1;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 0 10px;
  }
`;

const HeroText = styled.p`
  font-size: clamp(18px, 2vw, 22px);
  color: rgba(255, 255, 255, 0.9); /* Slightly faded white */
  font-weight: 600;
  margin: 0;
  letter-spacing: 2px;
  opacity: 0;
  animation: ${fadeIn} 1s forwards;
  animation-delay: 0.5s;
  text-transform: uppercase;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3), 0 0 25px rgba(255, 255, 255, 0.5); /* Glowing effect */

  @media (max-width: 768px) {
    font-size: clamp(16px, 3vw, 20px);
  }
`;

const HeroHeading = styled.h1`
  font-size: clamp(60px, 6vw, 90px);
  font-family: 'Poppins', sans-serif;
  font-weight: 800;
  color: white;
  margin: 20px 0;
  letter-spacing: -2px;
  text-transform: uppercase;
  opacity: 0;
  animation: ${scaleUp} 1s forwards;
  animation-delay: 1s;
  text-shadow: 3px 3px 6px rgba(0, 0, 0, 0.7), 0 0 25px rgba(255, 255, 255, 0.5); /* Soft glowing effect */

  @media (max-width: 768px) {
    font-size: clamp(45px, 8vw, 75px);
  }
`;

const HeroDescription = styled.div`
  font-size: clamp(20px, 2.5vw, 24px);
  color: rgba(255, 255, 255, 0.85);
  font-weight: 500;
  margin: 15px 0;
  opacity: 0;
  animation: ${fadeIn} 1s forwards;
  animation-delay: 1.5s;

  .highlight {
    position: relative;
    display: inline-block;
    color: #3498db;  /* Blue color for the highlight */
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 1px;
    padding: 0.4rem 0.8rem;
    border-radius: 30px;
    border: 2px solid #3498db;  /* Blue border */
    margin: 0.5rem;
    font-size: 1.2rem;
    transition: all 0.3s ease;
    box-shadow: 0px 0px 15px rgba(52, 152, 219, 0.6);  /* Blue glow effect */

    &:hover {
      background: #3498db;
      color: white;
      box-shadow: 0px 0px 20px rgba(52, 152, 219, 1);  /* Hover glow effect */
    }

    &::before {
      content: "";
      position: absolute;
      top: -6px;
      left: -6px;
      right: -6px;
      bottom: -6px;
      border-radius: 50%;
      border: 2px solid #3498db;
      z-index: -1;
      transition: all 0.3s ease;
    }

    &:hover::before {
      border: 2px solid white;
    }
  }
`;


// Add fade-in and scale-up animations to the button
const ScrollButton = styled.button`
  padding: 12px 30px;
  font-size: 16px;
  font-weight: bold;
  color: white;
  background: transparent;
  border: 2px solid #3498db;
  border-radius: 50px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.3s ease;
  margin-top: 30px;
  position: relative;
  z-index: 2;
  text-transform: uppercase;
  text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.3);

  opacity: 0;
  animation: ${fadeIn} 1s forwards, ${scaleUp} 1s forwards;
  animation-delay: 2.0s; /* Delay it slightly after the rest */

  &:hover {
    background: white;
    color: #3498db; /* Blue color on hover */
    transform: translateY(-3px);
    box-shadow: 0 0 10px rgba(255, 255, 255, 0.7);
  }

  svg {
    margin-left: 10px;
    width: 24px;
    height: 24px;
    animation: ${bounceAnimation} 1.5s infinite;
  }

  @media (max-width: 768px) {
    padding: 10px 20px;
  }
`;

const Hero = () => {
  // Scroll to About Section
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <StyledHeroSection id="home">
      <HeroText>Hi, My Name is</HeroText>
      <HeroHeading>Lasha Alkhazishvili</HeroHeading>
      <HeroDescription>
        I'm a <span className="highlight">Front-End</span> Developer based in Stockholm
      </HeroDescription>

      {/* About Me Button */}
      <ScrollButton onClick={scrollToAbout}>
        About Me
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M12 16.5l-6-6h12z" />
        </svg>
      </ScrollButton>
    </StyledHeroSection>
  );
};

export default Hero;
