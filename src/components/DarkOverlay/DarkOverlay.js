import React from 'react';
import styled from 'styled-components';
import { devices } from 'theme';

const DarkOverlay = styled.div`
   position: fixed;
   top: 0;
   left: 0;
   width: 100vw;
   height: 100vh;
   background-color: rgba(0, 0, 0, 0.6);
   display: none;
   z-index: 10;

   @media ${devices.tablet} {
      display: ${({ isOpen }) => isOpen ? 'block' : null};
   }
`;

export default DarkOverlay;
