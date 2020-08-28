import React from 'react';
import styled from 'styled-components';
import heroBackground from 'assets/images/HeroBackground.png';
import ButtonFull from 'components/Buttons/ButtonFull';
import H4 from 'components/Text/H4';
import scrollTo from 'utils/scrollTo';
import { devices } from 'theme';

import logo from 'assets/images/Logo_shadows.svg';

const StyledH4 = styled(H4)`
   color: ${({ theme }) => theme.colors.special};
   font-weight: normal;
`;

const HeroWrapper = styled.section`
   width: 100%;
   height: 100vh;
   background-image: url(${heroBackground});
   display: flex;
   flex-flow: column nowrap;
   justify-content: center;
   align-items: center;

   @media ${devices.laptop} {
      padding: 70px;
   }

   @media ${devices.laptopM} {
      padding: 170px 100px 100px;
   }
`;

const ContentContainer = styled.div`
   width: 100%;
   display: flex;
   flex-flow: column nowrap;
   justify-content: center;
   align-items: center;

   img { display: none; }

   @media ${devices.laptopM} {
      display: grid;
      grid-template-columns: max-content auto;
      justify-content: space-between;

      img {
         width: 100%;
         display: block;
         max-width: 450px;
         justify-self: center;
      }
   }

   @media ${devices.desktop} {
      width: 100%;
      max-width: 1450px;

      img { max-width: 550px; }
   }
`;

const H1 = styled.h1`
   margin: 0;
   font-size: 3.4rem;
   font-family: ${({ theme }) => theme.fonts.special};
   font-weight: normal;
   align-self: center;

   @media ${devices.mobileL} {
      font-size: 4.6rem;
   }

   @media ${devices.tablet} {
      font-size: 5.2rem;
   }

   @media ${devices.laptop} {
      font-size: 6rem;
   }

   @media ${devices.laptopM} {
      font-size: 6.6rem;
   }

   @media ${devices.desktop} {
      font-size: 8rem;
   }
`;

const TextContainer = styled.div`
   text-align: center;

   @media ${devices.laptopM} {
      text-align: left;
      margin: -50px 50px 0 0;
   }
`;


const PageHero = React.memo(() => {
   return (
      <HeroWrapper id="home">
         <ContentContainer>
            <TextContainer data-aos="fade-right">
               <H1>Cześć, jestem Piotr.</H1>
               <StyledH4>Junior Front-end Developer</StyledH4>
               <ButtonFull onClick={() => scrollTo("portfolio")}>Moje projekty</ButtonFull>
            </TextContainer>
            <img
               src={logo}
               alt="Piotr Chmura logo"
               loading="lazy"
               data-aos="fade-left"
            />
         </ContentContainer>
      </HeroWrapper>
   )
});

export default PageHero;
