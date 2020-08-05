import React from 'react';
import styled from 'styled-components';

const SectionHeader = styled.h2`
   margin: 0;
   font-size: 4.8rem;
   font-family: ${({ theme }) => theme.fonts.secondary};
   color: ${({ color }) => color ? color : ({ theme }) => theme.colors.secondary};
   position: relative;
   font-weight: 500;
   text-align: center;


   &:before, &:after {
      content: '';
      position: relative;
      top: -10px;
      display: inline-block;
      width: 50px;
      height: 6px;
      background-color: ${({ theme }) => theme.colors.secondary}
   }

   &:before { margin-right: 20px; }
   &:after { margin-left: 20px; }
`;

export default SectionHeader;
