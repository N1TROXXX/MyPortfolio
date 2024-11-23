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
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
  padding: 0;
  z-index: 20;
  position: relative; // Keep relative positioning for absolute children

  min-height: 100vh; // Keeps full viewport height for the hero section
  height: 100vh;

  @media (max-height: 700px) and (min-width: 700px), (max-width: 360px) {
    height: auto;
    padding-top: var(--nav-height);
  }
`;

const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; // Center everything for the main content
  width: 100%;
  max-width: 800px;
  text-align: center; // Center text within content
  position: relative; // Ensure relative positioning to adjust other elements

  @media (min-width: 768px) {
    align-items: center;
  }
`;

const HeroText = styled.p`
  font-size: 14px;
  color: var(--blue);
  font-family: 'FiraSans', sans-serif;
  margin: 0;
  font-weight: 700;
  letter-spacing: 1.2px;
  line-height: 1.5;
  position: absolute; // Position absolute for placement at top left
  top: 218px; // Adjust to position it further down from the top
  left: 115px; // Keep it on the left

  @media (min-width: 768px) {
    font-size: 20px;
  }

  @media (min-width: 1024px) {
    font-size: 30px;
  }

  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;

  &:hover {
    color: var(--white);
    transform: scale(1.05);
  }
`;

const HeroHeading = styled.h1`
  font-size: 30px;
  font-family: var(--fontFira);
  font-weight: bold;
  color: white;
  margin: 0;
  padding-top: 60px; /* Adjust padding to start below the "Hi, I'm" text */

  @media (min-width: 768px) {
    font-size: 50px;
  }

  @media (min-width: 1024px) {
    font-size: 100px;
    font-weight: 900;
  }
`;

const HeroDescription = styled.div`
  color: var(--slate);
  font-size: 25px;
  font-weight: 900;
  line-height: 1.2;
  margin: -1rem 0;
  font-family: 'Roboto', Arial, sans-serif;
  display: flex;
  align-items: center;
  gap: 1rem;

  .inline {
    background-color: white;
    color: black;
    font-weight: bold;
    padding: 0.4rem;
    border-radius: 18px;
  }

  @media (min-width: 768px) {
    font-size: 28px;
  }

  @media (min-width: 2024px) {
    font-size: 22px;
  }
`;

const HeroParagraph = styled.p`
  font-size: 18px;
  color: var(--navy);
  line-height: 1.6;
  margin-top: 1rem;
  max-width: 600px;

  @media (min-width: 768px) {
    font-size: 20px;
  }

  @media (min-width: 1024px) {
    font-size: 22px;
  }
`;

// Scroll Button with Bounce Animation
const ScrollButton = styled.button`
  padding: 0.5rem 0.5rem;
  font-size: 15px;
  font-weight: bold;
  color: white;
  background-color: var(--slate);
  border: blue;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  align-items: center;
  transition: background-color 0.3s;
  margin-top: 1rem;

  &:hover {
    background-color: var(--blue);
  }

  svg {
    margin-left: 0.5rem;
    fill: white;
    width: 35px;
    height: 35px;
    animation: ${bounceAnimation} 1.5s infinite;
  }
`;

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const paragraphText = (
    <HeroParagraph>
      I'm a Web Developer & Designer. I specialize in building responsive, user-friendly websites that are both visually appealing and highly functional.
    </HeroParagraph>
  );

  return (
    <StyledHeroSection>
      <HeroText>Hi, My Name is</HeroText> {/* Positioned at the top-left and moved down */}
      <HeroContent>
        <HeroHeading>Lasha Alkhazishvili</HeroHeading> {/* Starts below the "L" of "Lasha" */}
        <HeroDescription>
          I'm <span className="inline">a Full-Stack</span> Developer based in Stockholm
        </HeroDescription>
        <ScrollButton onClick={scrollToAbout}>
          Scroll to About
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M12 16.5l-6-6h12z" />
          </svg>
        </ScrollButton>
        {paragraphText}
      </HeroContent>
    </StyledHeroSection>
  );
};

export default Hero;