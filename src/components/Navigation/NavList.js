import React from 'react';
import styled from 'styled-components';
import { devices } from 'theme';
import scrollTo from 'utils/scrollTo';

const StyledUl = styled.ul`
   position: absolute;
   width: 100%;
   height: 100vh;
   list-style: none;
   margin: 0;
   padding: 0;
   padding-top: 100px;
   text-align: center;
   background-color: rgba(0, 0, 0, 0.7);

   transform: ${({ isMenuOpen }) => isMenuOpen ? 'translateX(0)' : 'translateX(100%)'};
   transition: ${({ theme }) => theme.transitions.ease};

   z-index: 9;

   li {
      font-size: 2.8rem;
      font-weight: 600;
      padding: 25px 0;
      text-transform: uppercase;
      position: relative;
      transition: ${({ theme }) => theme.transitions.ease};
      color: ${({ theme }) => theme.colors.white};

      &:hover {
         color: ${({ theme }) => theme.colors.special};
         outline: none;
      }

      &:focus { outline: none }
   }

   @media ${devices.laptop} {
      position: relative;
      transform: none;
      padding: 0;
      height: auto;
      background-color: transparent;

      li {
         font-size: 1.8rem;
         display: inline-block;
         padding: 10px 15px;
         margin: 0 10px;
         cursor: pointer;

         &:before, &:after {
            position: absolute;
            bottom: 0;
            content: '';
            width: 0;
            height: 2px;
            background-color: ${({ theme }) => theme.colors.special};
            transition: ${({ theme }) => theme.transitions.ease};
         }
         &:before { left: 50% }
         &:after { right: 50% }
         &:last-of-type { margin-right: 50px }

         &:hover {
            &:before, &:after { width: 50% }
         }
      }
   }
`;

const NavList = ({ setMenuOpen, isMenuOpen }) => {

   const handleClick = (anchor) => {
      scrollTo(anchor);
      setMenuOpen(false);
   }

   return (
      <StyledUl isMenuOpen={isMenuOpen}>
         <li
            onClick={() => handleClick("home")}
            tabIndex={0}>Home</li>
         <li
            onClick={() => handleClick("about")}
            tabIndex={0}>O mnie</li>
         <li
            onClick={() => handleClick("skills")}
            tabIndex={0}>Umiejętności</li>
         <li
            onClick={() => handleClick("portfolio")}
            tabIndex={0}>Portfolio</li>
         <li
            onClick={() => handleClick("contact")}
            tabIndex={0}>Kontakt</li>
      </StyledUl>
   )
}

export default NavList;
