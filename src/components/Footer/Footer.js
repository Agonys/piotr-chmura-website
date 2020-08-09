import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
      width: 100%;
      padding: 10px 0;
      font-size: 1rem;
      font-weight: 500;
      letter-spacing: 0.5px;
      text-transform: uppercase;
      text-align: center;
      background-color: ${({ theme }) => theme.backgrounds.dark};

      span {
         color: ${({ theme }) => theme.colors.special};
      }
`;

const Footer = () => {
   const year = new Date().getFullYear();

   return (
      <StyledFooter><span>Piotr Chmura</span> © {year} wszelkie prawa zastrzeżone</StyledFooter>
   )
}

export default Footer;
