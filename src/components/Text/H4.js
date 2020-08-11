import styled from 'styled-components';
import { devices } from 'theme';

const H4 = styled.h4`
   font-size: 2.2rem;
   align-self: center;

   @media ${devices.mobileL} {
      font-size: 2.4rem;
   }

   @media ${devices.tablet} {
      font-size: 2.6rem;
   }

   @media ${devices.laptopM} {
      font-size: 3rem;
   }

   @media ${devices.desktop} {
      font-size: 3.6rem;
   }
`;

export default H4;
