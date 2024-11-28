import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled from 'styled-components';
import { navLinks } from '@config';
import { loaderDelay } from '@utils';
import { useScrollDirection, usePrefersReducedMotion } from '@hooks';
import { Menu } from '@components';
import logo from '../images/log.png'; // Import logo image (adjust path as needed)

const StyledHeader = styled.header`
  ${({ theme }) => theme.mixins.flexBetween};
  position: fixed;
  top: 0;
  left: 0;
  z-index: 11;
  padding: 0px 50px;
  width: 100%;
  height: var(--nav-height);
  background-color: var(--transparent);
  backdrop-filter: blur(3px);
  transition: var(--transition);
`;

const StyledNav = styled.nav`
  ${({ theme }) => theme.mixins.flexBetween};
  position: relative;
  width: 100%;
  color: var(--blue); 
  font-family: var(--font-mono);
  z-index: 12;

  .logo {
    ${({ theme }) => theme.mixins.flexCenter};
    a {
      color: var(--navy);
      position: relative;
      z-index: 1;
    }

    /* Desktop only styles */
    @media (min-width: 769px) {
      display: flex;
      position: relative;
      z-index: 20; /* Ensures it's above other content */
    }

    /* Mobile: Hide logo */
    @media (max-width: 768px) {
      display: none;
    }
  }
`;

const StyledLinks = styled.div`
  display: flex;
  align-items: top;

  @media (max-width: 768px) {
    display: none; /* Hide navigation links on mobile for simplicity */
  }

  ol {
    ${({ theme }) => theme.mixins.flexBetween};
    padding: 0;
    margin: 0;
    list-style: none;

    li {
      margin: 0 5px;
      position: relative;
      font-size: var(--20px);
      a {
        padding: 10px;
        &.active {
          color: var(--pink); // Active link color
        }
      }
    }
  }
`;

const LogoImage = styled.img`
  width: 200px; /* Adjust size as needed */
  height: 200px; /* Adjust size as needed */
`;

const Nav = ({ isHome }) => {
  const [isMounted, setIsMounted] = useState(!isHome);
  const [activeSection, setActiveSection] = useState('');
  const scrollDirection = useScrollDirection('down');
  const [scrolledToTop, setScrolledToTop] = useState(true);
  const prefersReducedMotion = usePrefersReducedMotion();

  const handleScroll = () => {
    setScrolledToTop(window.pageYOffset < 50);
  };

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    const timeout = setTimeout(() => {
      setIsMounted(true);
    }, 100);

    window.addEventListener('scroll', handleScroll);

    return () => {
      clearTimeout(timeout);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prefersReducedMotion]);

  // Section tracking with IntersectionObserver
  useEffect(() => {
    const sections = document.querySelectorAll('section');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, { threshold: 0.5 });

    sections.forEach((section) => observer.observe(section));

    return () => {
      observer.disconnect();
    };
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // This enables smooth scrolling
    });
  };

  const Logo = (
    <div className="logo" tabIndex="-1">
      {isHome ? (
        <a href="/" aria-label="home" onClick={(e) => { e.preventDefault(); scrollToTop(); }}>
          <LogoImage src={logo} alt="Home Logo" />
        </a>
      ) : (
        <Link to="/" aria-label="home" onClick={(e) => { e.preventDefault(); scrollToTop(); }}>
          <LogoImage src={logo} alt="Home Logo" />
        </Link>
      )}
    </div>
  );

  return (
    <StyledHeader scrollDirection={scrollDirection} scrolledToTop={scrolledToTop}>
      <StyledNav>
        {prefersReducedMotion ? (
          <>
            {Logo}
            <StyledLinks>
              <ol>
                {navLinks &&
                  navLinks.map(({ url, name }, i) => (
                    <li key={i}>
                      <Link to={url} className={activeSection === url.substring(1) ? 'active' : ''}>
                        {name}
                      </Link>
                    </li>
                  ))}
              </ol>
            </StyledLinks>
            <Menu />
          </>
        ) : (
          <>
            <TransitionGroup component={null}>
              {isMounted && (
                <CSSTransition classNames="fade" timeout={loaderDelay}>
                  <>{Logo}</>
                </CSSTransition>
              )}
            </TransitionGroup>

            <StyledLinks>
              <ol>
                <TransitionGroup component={null}>
                  {isMounted &&
                    navLinks &&
                    navLinks.map(({ url, name }, i) => (
                      <CSSTransition key={i} classNames="fadedown" timeout={loaderDelay}>
                        <li key={i} style={{ transitionDelay: `${isHome ? i * 100 : 0}ms` }}>
                          <Link to={url} className={activeSection === url.substring(1) ? 'active' : ''}>
                            {name}
                          </Link>
                        </li>
                      </CSSTransition>
                    ))}
                </TransitionGroup>
              </ol>
            </StyledLinks>

            <TransitionGroup component={null}>
              {isMounted && (
                <CSSTransition classNames="fade" timeout={loaderDelay}>
                  <Menu />
                </CSSTransition>
              )}
            </TransitionGroup>
          </>
        )}
      </StyledNav>
    </StyledHeader>
  );
};

Nav.propTypes = {
  isHome: PropTypes.bool,
};

export default Nav;
