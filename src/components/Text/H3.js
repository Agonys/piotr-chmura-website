import styled from 'styled-components';
import { devices } from 'theme';

const H3 = styled.h3`
   font-weight: 500;
   font-size: 2.2rem;
   padding: 30px 0;
   color: ${({ theme }) => theme.colors.white};

   @media ${devices.mobileL} {
      font-size: 2.6rem;
   }

   @media ${devices.tablet} {
      font-size: 2.8rem;
   }

   @media ${devices.laptop} {
      font-size: 3.4rem;
   }

   @media ${devices.desktop} {
      font-size: 3.6rem;
   }
`;

export default H3;
