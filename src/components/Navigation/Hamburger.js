import React, { useState } from 'react';
import styled from 'styled-components';
import NavList from './NavList';
import { devices } from 'theme';

const StyledBurger = styled.div`
   justify-self: end;

   display: flex;
   justify-content: space-evenly;
   flex-flow: column nowrap;

   z-index: 10;

   @media ${devices.laptop} {
      display: none;
   }

   div {
      width: 40px;
      height: 4px;
      background-color: white;
      transform-origin: 1px;

      transition: ${({ theme }) => theme.transitions.ease};
      border-radius: 5px;

      &:first-of-type {
         transform: ${({ isMenuOpen }) => isMenuOpen ? 'rotate(45deg)' : 'rotate(0)'}
      }

      &:nth-child(2) {
         opacity: ${({ isMenuOpen }) => isMenuOpen ? 0 : 1};
      }

      &:last-of-type {
         transform: ${({ isMenuOpen }) => isMenuOpen ? 'rotate(-45deg)' : 'rotate(0)'}
      }
   }
`;

const Hamburger = () => {
   const [isMenuOpen, setMenuOpen] = useState(false);

   return (
      <>
         <StyledBurger isMenuOpen={isMenuOpen} onClick={() => setMenuOpen(!isMenuOpen)}>
            <div />
            <div />
            <div />
         </StyledBurger>
         <NavList isMenuOpen={isMenuOpen} setMenuOpen={setMenuOpen} />
      </>
   )
}

export default Hamburger;
