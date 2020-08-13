import styled from 'styled-components';
import { devices } from 'theme';

const H2 = styled.h2`
   font-size: 2.8rem;
   color: ${({ isColorReversed, theme }) => isColorReversed ? theme.colors.black : theme.colors.special};
   font-weight: 500;
   text-align: center;
   text-transform: uppercase;
   padding-bottom: 50px;


   &:before, &:after {
      content: '';
      position: relative;
      top: -8px;
      display: inline-block;
      width: 25px;
      height: 5px;
      background-color: ${({ isColorReversed, theme }) => isColorReversed ? theme.colors.black : theme.colors.special};
   }

   &:before { margin-right: 10px; }
   &:after { margin-left: 10px; }

   @media ${devices.mobileL} {
      font-size: 3.2rem;
   }

   @media ${devices.tablet} {
      font-size: 4rem;
      &:before, &:after { top: -10px }
   }

   @media ${devices.laptop} {
      font-size: 4.6rem;

      &:before, &:after {
         width: 50px;
         height: 6px;
         top: -14px;
      }
      &:before { margin-right: 20px; }
      &:after { margin-left: 20px; }
   }

   @media ${devices.desktop} {
      font-size: 5.2rem;
      &:before, &:after { top: -16px }
   }
`;

export default H2;
