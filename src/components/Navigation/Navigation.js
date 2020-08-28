import React from 'react';
import styled from 'styled-components';
import Hamburger from './Hamburger';
import scrollTo from 'utils/scrollTo';

import logo from 'assets/images/Logo_flat.svg';

const StyledLogo = styled.img`
   z-index: 10;
   width: 48px;
   cursor: pointer;
`;

const StyledHeader = styled.header`
   position: fixed;
   top: 0;
   width: 100%;

   display: grid;
   grid-template-columns: repeat(2, max-content);
   justify-content: space-between;

   background-color: rgba(0, 0, 0, .7);
   padding: 10px 15px;
   z-index: 10;
`;

const Navigation = React.memo(() => {
   return (
      <StyledHeader id="navigation">
         <StyledLogo
            src={logo}
            alt="Logo"
            onClick={() => scrollTo("home")}
            loading="lazy"
         />
         <Hamburger />
      </StyledHeader>
   )
});

export default Navigation;
