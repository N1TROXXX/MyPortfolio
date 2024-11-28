import React, { useState, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { navLinks } from '@config';
import { KEY_CODES } from '@utils';
import { useOnClickOutside } from '@hooks';

const StyledMenu = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`;

const StyledHamburgerButton = styled.button`
  display: none;

  @media (max-width: 768px) {
    ${({ theme }) => theme.mixins.flexCenter};
    position: relative;
    z-index: 10;
    margin-right: -15px;
    padding: 15px;
    border: 0;
    background-color: transparent;
    color: inherit;
    text-transform: none;
    transition-timing-function: linear;
    transition-duration: 0.15s;
    transition-property: opacity, filter;
  }

  .ham-box {
    display: inline-block;
    position: relative;
    width: var(--hamburger-width);
    height: 24px;
  }

  .ham-box-inner {
    position: absolute;
    top: 50%;
    right: 0;
    width: var(--hamburger-width);
    height: 2px;
    border-radius: var(--border-radius);
    background-color: var(--blue);
    transition-duration: 0.22s;
    transition-property: transform;
    transition-delay: ${props => (props.menuOpen ? `0.12s` : `0s`)};
    transform: rotate(${props => (props.menuOpen ? `225deg` : `0deg`)});
    transition-timing-function: cubic-bezier(
      ${props => (props.menuOpen ? `0.215, 0.61, 0.355, 1` : `0.55, 0.055, 0.675, 0.19`)}
    );
    &:before,
    &:after {
      content: '';
      display: block;
      position: absolute;
      left: auto;
      right: 0;
      width: var(--hamburger-width);
      height: 2px;
      border-radius: 4px;
      background-color: var(--blue);
      transition-timing-function: ease;
      transition-duration: 0.15s;
      transition-property: transform;
    }
    &:before {
      width: ${props => (props.menuOpen ? '0%' : '100%')};
      transform: ${props => (props.menuOpen ? `translateY(10px)` : 'none')};
    }
    &:after {
      width: ${props => (props.menuOpen ? '0%' : '100%')};
      transform: ${props => (props.menuOpen ? `translateY(-10px)` : 'none')};
    }
  }
`;

const StyledSidebar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 300px;
  height: 100%;
  background-color: var(--background);
  box-shadow: 5px 0px 20px rgba(0, 0, 0, 0.4);
  transform: translateX(${props => (props.menuOpen ? '0' : '100%')});
  visibility: ${props => (props.menuOpen ? 'visible' : 'hidden')};
  z-index: 100;
  transition: transform 0.3s ease, visibility 0.3s ease;

  ul {
    padding: 20px;
    list-style: none;
    li {
      margin: 20px 0;
      a {
        font-size: 1.5rem;
        text-decoration: none;
        color: var(--blue);
        padding: 10px;
        &:hover {
          background-color: var(--highlight-color);
        }
      }
    }
  }
`;

const Menu = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const wrapperRef = useRef(null);

  useOnClickOutside(wrapperRef, () => setMenuOpen(false));

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <>
      <Helmet>
        <body className={menuOpen ? 'menu-open' : ''} />
      </Helmet>
      <StyledMenu ref={wrapperRef}>
        <StyledHamburgerButton
          aria-label="Toggle navigation"
          onClick={toggleMenu}
          menuOpen={menuOpen}
        >
          <div className="ham-box">
            <div className="ham-box-inner"></div>
          </div>
        </StyledHamburgerButton>

        <StyledSidebar menuOpen={menuOpen}>
          <ul>
            {navLinks.map((link, index) => (
              <li key={index}>
                <Link to={link.url}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </StyledSidebar>
      </StyledMenu>
    </>
  );
};

export default Menu;
