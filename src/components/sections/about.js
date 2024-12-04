import React, { useEffect, useRef } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';

const StyledAboutSection = styled.section`
  max-width: 900px;

  .inner {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 50px;

    @media (max-width: 768px) {
      display: block;
    }
  }
`;

const StyledText = styled.div`
  ul.skills-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    grid-gap: 10px;
    padding: 0;
    margin: 30px 0 0 0;
    overflow: hidden;
    list-style: none;

    li {
      position: relative;
      margin-bottom: 14px;
      padding-left: 30px;
      font-family: var(--font-mono);
      font-size: 20x;
      font-weight: 500;
      color: var(--blue);
      transition: all 0.3s ease;

      &:hover {
        color: var(--blue); /* Smooth color transition on hover */
        transform: translateY(-3px); /* Slight lift effect */
        cursor: pointer;
      }

      &:before {
        content: '▹';
        position: absolute;
        left: 0;
        top: 50%; /* Centers the symbol vertically */
        transform: translateY(-50%); /* Aligns with the middle of the text */
        color: var(--white);
        font-size: 28px; /* Match text font size for alignment */
        line-height: 1;
        vertical-align: middle;
        transition: all 0.3s ease;
      }

      /* Adding a subtle hover underline effect */
      &:hover:before {
        transform: translateY(-50%) scaleY(1.2); /* Subtle scaling of the bullet */
      }
    }
  }
`;

const StyledPic = styled.div`
  position: relative;
  max-width: 400px;
  margin: 0 auto;

  @media (max-width: 768px) {
    max-width: 300px;
    margin: 30px auto;
  }

  .wrapper {
    ${({ theme }) => theme.mixins.boxShadow};
    display: block;
    position: relative;
    width: 100%;
    height: auto;
    aspect-ratio: 4 / 5;
    border-radius: 15px;
    background-color: var(--blue);
    overflow: visible;

    &:hover,
    &:focus {
      outline: 0;
      transform: none;

      &:after {
        transform: none;
      }

      .img {
        filter: none;
        mix-blend-mode: normal;
      }
    }

    .img {
      position: relative;
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 15px;
      mix-blend-mode: normal;
      filter: none;
      transition: var(--transition);
    }

    &:before,
    &:after {
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: 15px;
      transition: var(--transition);
    }

    &:before {
      top: 0;
      left: 0;
      background-color: var(--blue);
      mix-blend-mode: screen;
    }

    &:after {
      border: 5px solid var(--white);
      top: 20px;
      left: 25px;
      z-index: -1;
    }
  }
`;

const About = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, [prefersReducedMotion]);

  const skills = ['JavaScript', 'TypeScript', 'Python', 'React', 'Tailwind CSS', 'WordPress', 'Next.js', 'Git'];

  return (
    <StyledAboutSection id="about" ref={revealContainer}>
      <h2 className="numbered-heading">About Me</h2>

      <div className="inner">
        <StyledText>
          <div>
            <p>
  
  Hello, I’m <strong>Lasha</strong>, a Front-End Developer with a passion for building interactive and user-friendly websites and applications.  
  I specialize in using technologies like <strong>JavaScript</strong>, <strong>Python</strong>, and <strong>React</strong> to create engaging web experiences.  
  I also have a strong foundation in back-end development and database management, which allows me to build full-stack solutions and optimize performance across the entire application.
</p>

<p>
  My focus is on designing <strong>responsive</strong>, mobile-friendly interfaces that look great and function smoothly across all devices and screen sizes.  
  What excites me most about web development is the constant learning and problem-solving.  
  The ever-evolving nature of the field keeps me motivated, pushes me to refine my skills, and helps me stay updated with the latest technologies, frameworks, and best practices.
</p>



            <p>Here are a few technologies I’ve been working with recently:</p>
          </div>

          <ul className="skills-list">
            {skills && skills.map((skill, i) => <li key={i}>{skill}</li>)}
          </ul>
        </StyledText>

        <StyledPic>
          <div className="wrapper">
            <StaticImage
              className="img"
              src="../../images/me.jpg"
              width={700}
              quality={100}
              formats={['AUTO', 'WEBP', 'AVIF']}
              alt="Headshot of Lasha"
            />
          </div>
        </StyledPic>
      </div>
    </StyledAboutSection>
  );
};

export default About;
