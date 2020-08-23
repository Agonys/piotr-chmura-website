import React from 'react';
import styled from 'styled-components';
import { devices } from 'theme';

const StyledFooter = styled.footer`
   width: 100%;
   padding: 10px 0;
   font-size: 1rem;
   font-weight: 600;
   letter-spacing: 0.5px;
   text-transform: uppercase;
   text-align: center;
   background-color: ${({ theme }) => theme.colors.black};

   span {
      color: ${({ theme }) => theme.colors.special};
   }

   @media ${devices.mobileL} { font-size: 1.1rem }
`;

const Footer = () => {
   const year = new Date().getFullYear();

   return (
      <StyledFooter><span>Piotr Chmura</span> © {year} wszelkie prawa zastrzeżone</StyledFooter>
   )
}

export default Footer;
