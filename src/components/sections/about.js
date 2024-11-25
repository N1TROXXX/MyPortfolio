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
    grid-gap: 2 10px;
    padding: 0;
    margin: 30px 0 0 0;
    overflow: hidden;
    list-style: none;

    li {
      position: relative;
      margin-bottom: 14px;
      padding-left: 30px;
      font-family: var(--font-mono);
      font-size: var(--18px);
    
      &:before {
        content: '▹';
        position: absolute;
        left: 0;
        top: 50%; /* Centers the symbol vertically */
        transform: translateY(-50%); /* Aligns with the middle of the text */
        color: var(--yellow);
        font-size: var(--18px); /* Match text font size for alignment */
        line-height: 1; /* Prevent excessive spacing */
        vertical-align: middle; /* Align to the middle of the line */
      }
    }
  }
`;

const StyledPic = styled.div`
  position: relative;
  max-width: 400px; /* Increase max width for desktop screens */
  margin: 0 auto;

  @media (max-width: 768px) {
    max-width: 300px; /* Adjust width for smaller screens */
    margin: 30px auto; /* Center the image */
  }

  .wrapper {
    ${({ theme }) => theme.mixins.boxShadow};
    display: block;
    position: relative;
    width: 100%; /* Maintain full width */
    height: auto; /* Ensure height adjusts automatically */
    aspect-ratio: 4 / 5; /* Wider and taller image */
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
      width: 100%; /* Ensures the image fits the wrapper's width */
      height: 100%; /* Ensures the image scales to fill the wrapper */
      object-fit: cover; /* Prevents stretching */
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
      top: 20px; /* Adjusted for alignment */
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
  }, [prefersReducedMotion]); // Include prefersReducedMotion in the dependency array

  const skills = ['JavaScript', 'TypeScript', 'React', 'Python', 'Next.js', 'WordPress', 'Tailwind CSS', 'Git' ];

  return (
    <StyledAboutSection id="about" ref={revealContainer}>
      <h2 className="numbered-heading">About Me</h2>

      <div className="inner">
        <StyledText>
          <div>
            <p>
              Hello, I’m <strong>Lasha</strong> – Full Stack Developer.  
              As a Full Stack Developer, I have a comprehensive skill set that spans both front-end and back-end development.  
              I work with technologies like <strong>JavaScript</strong> and <strong>Python</strong>, and have experience using tools such as the <strong>React</strong> framework.  
              My expertise also includes database management and designing responsive interfaces that work seamlessly across all screen sizes.
            </p>

            <p>
              What I love most about web development is how it continually challenges me to expand my knowledge and refine my skills.  
              The ever-evolving nature of the field keeps me motivated and engaged, always pushing me to stay up-to-date with the latest tools and techniques.
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