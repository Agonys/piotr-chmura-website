import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
   width: 100%;
   padding: 10px 0;
   font-family: ${({ theme }) => theme.fonts.secondary};
   font-weight: 500;
   text-align: center;
   letter-spacing: 0.5px;
   text-transform: uppercase;
   background-color: ${({ theme }) => theme.backgrounds.dark};

   span {
      color: ${({ theme }) => theme.colors.secondary};
   }
`;

const Footer = () => (
   <StyledFooter>
      <span>PIOTR CHMURA</span> © 2020 WSZELKIE PRAWA ZASTRZEŻONE
   </StyledFooter>
)

export default Footer;
