import React from 'react';
import styled, { keyframes } from 'styled-components';

// Keyframes for bounce animation
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
`;

const HeroText = styled.p`
  font-size: clamp(14px, 2vw, 20px); /* Scales with viewport width */
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
`;

const HeroHeading = styled.h1`
  font-size: clamp(40px, 5vw, 80px); /* Scales dynamically */
  font-family: var(--fontFira);
  font-weight: bold;
  color: white;
  margin: 10px 0;
`;

const HeroDescription = styled.div`
  font-size: clamp(18px, 2vw, 24px);
  color: var(--slate);
  font-weight: 900;
  margin: 10px 0;

  .inline {
    background-color: white;
    color: black;
    font-weight: bold;
    padding: 0.4rem;
    border-radius: 18px;
  }
`;

const HeroParagraph = styled.p`
  font-size: clamp(16px, 1.5vw, 18px);
  color: var(--navy);
  line-height: 1.6;
  max-width: 600px;
  margin: 20px auto;
`;

const ScrollButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  font-weight: bold;
  color: white;
  background-color: var(--navy);
  border: none;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  align-items: center;
  transition: background-color 0.3s;

  &:hover {
    background-color: var(--navy);
  }

  svg {
    margin-left: 8px;
    width: 24px;
    height: 24px;
    animation: ${bounceAnimation} 1.5s infinite;
  }
`;

const Hero = () => {
  // Scroll to Home Section
  const scrollToHome = () => {
    const homeSection = document.getElementById('home');
    if (homeSection) {
      homeSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Scroll to About Section
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <StyledHeroSection id="home"> {/* Home section with id="home" */}
      <HeroText>Hi, My Name is</HeroText>
      <HeroHeading>Lasha Alkhazishvili</HeroHeading>
      <HeroDescription>
        I'm a <span className="inline">Full-Stack</span> Developer based in Stockholm
      </HeroDescription>
      <HeroParagraph>
        I specialize in building responsive, user-friendly websites that are both visually appealing and highly functional.
      </HeroParagraph>
      
      {/* Home Button */}
      <ScrollButton onClick={scrollToHome}>
        Home
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M12 16.5l-6-6h12z" />
        </svg>
      </ScrollButton>
      
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
