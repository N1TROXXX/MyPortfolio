import React from 'react';
import styled, { keyframes } from 'styled-components';

// Keyframes for bounce animation (for the arrow)
const bounceAnimation = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-5px);
  }
  60% {
    transform: translateY(-3px);
  }
`;

const StyledHeroSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  text-align: center;
  padding: 0 20px;

  @media (max-width: 768px) {
    padding: 0 10px; // Reduce padding on smaller screens
  }
`;

const HeroText = styled.p`
  font-size: clamp(14px, 2vw, 20px);
  color: var(--blue);
  font-family: 'FiraSans', sans-serif;
  margin: 0;
  font-weight: 700;
  letter-spacing: 1.2px;
  line-height: 1.5;

  &:hover {
    color: var(--white);
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    font-size: clamp(14px, 4vw, 18px); // Adjust font size for smaller screens
  }
`;

const HeroHeading = styled.h1`
  font-size: clamp(40px, 5vw, 80px);
  font-family: var(--fontFira);
  font-weight: bold;
  color: white;
  margin: 10px 0;

  @media (max-width: 768px) {
    font-size: clamp(30px, 8vw, 50px); // Reduce font size on mobile
  }
`;

const HeroDescription = styled.div`
  font-size: clamp(25px, 2vw, 24px);
  color: var(--slate);
  font-weight: 900;
  margin: 10px 0;

  .inline {
    background-color: white;
    color: #3d6e91;
    font-weight: 700;
    padding: 0.4rem 0.8rem;
    border-radius: 25px;
    border: 2px solid #3d6e91;
    display: inline-block;
    position: relative;
    animation: pulse 1.5s infinite alternate; /* Added pulse animation */
    box-shadow: 0 0 15px rgba(61, 110, 145, 0.2); /* Subtle shadow effect */
    
    &:before {
      content: '';
      position: absolute;
      top: -4px;
      left: -4px;
      right: -4px;
      bottom: -4px;
      border-radius: 25px;
      background: linear-gradient(45deg, rgba(61, 110, 145, 0.5), rgba(255, 255, 255, 0.1));
      z-index: -1;
    }
    
    @keyframes pulse {
      0% {
        transform: scale(1);
        box-shadow: 0 0 15px rgba(61, 110, 145, 0.4);
      }
      100% {
        transform: scale(1.05);
        box-shadow: 0 0 25px rgba(61, 110, 145, 0.7);
      }
    }
  }

  @media (max-width: 768px) {
    font-size: clamp(20px, 4vw, 22px); // Adjust font size for mobile
  }
`;

const HeroParagraph = styled.p`
  font-size: clamp(16px, 1.5vw, 18px);
  color: var(--navy);
  line-height: 1.6;
  max-width: 600px;
  margin: 20px auto;

  @media (max-width: 768px) {
    font-size: clamp(14px, 3vw, 16px); // Slightly smaller on mobile
    margin: 15px auto; // Adjust margin for smaller screens
  }
`;

// Scroll Button with Navy and Blue Gradient
const ScrollButton = styled.button`
  padding: 12px 24px;
  font-size: 16px;
  font-weight: bold;
  color: #FFFFFF; /* Pure white text color */
  background: linear-gradient(45deg, var(--navy), var(--blue)); /* Gradient from navy to blue */
  border: 2px solid rgba(255, 255, 255, 0.5); /* Light border for contrast */
  border-radius: 50px; /* Rounded corners */
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease; /* Smooth transition for all effects */
  backdrop-filter: blur(8px); /* Frosted glass effect */

  @media (max-width: 768px) {
    font-size: 14px; /* Smaller font size for mobile */
    padding: 10px 20px; /* Adjust padding for mobile */
  }

  &:hover {
    background: linear-gradient(45deg, var(--navy), var(--blue)); /* Keep the gradient on hover */
    border-color: rgba(255, 255, 255, 0.7); /* Darker border on hover */
    color: #FFFFFF; /* Brighter pure white text on hover */
    transform: translateY(-2px); /* Subtle lifting effect */
  }

  svg {
    margin-left: 8px;
    width: 24px;
    height: 24px;
    animation: ${bounceAnimation} 1.5s infinite; /* Bounce effect on the arrow */

    @media (max-width: 768px) {
      width: 18px; /* Smaller arrow on mobile */
      height: 18px; /* Smaller arrow on mobile */
    }
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
        I'm a <span className="inline">Front-End</span> Developer based in Stockholm
      </HeroDescription>
      <HeroParagraph>
        I specialize in building responsive, user-friendly websites that are both visually appealing and highly functional.
      </HeroParagraph>
      
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
