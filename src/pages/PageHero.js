import React from 'react';
import styled from 'styled-components';
import heroBackground from 'assets/images/HeroBackground.png';
import H3 from 'components/Text/ArticleHeader';
import Button from 'components/Button/Button';
import { colors } from 'theme';
import logo from 'assets/images/Logo_shadows.svg';


const HeroWrapper = styled.section`
   background-image: url(${heroBackground});
   width: 100vw;
   height: 100vh;
   padding-top: 70px;
   display: grid;
   grid-template-columns: 1fr auto;
   padding: 170px;
`;

const HeroLogo = styled.img`
   width: 600px;
   justify-self: center;
`;

const H1 = styled.h1`
   padding-top: 125px;
   z-index: 2;
   margin: 0;
   font-weight: 400;
   font-size: 7.6rem;
   font-family: ${({ theme }) => theme.fonts.secondary};
`;

const StyledButton = styled(Button)`
   background-color: ${({ theme }) => theme.colors.secondary};
   border: 0;
   text-shadow: 1px 1px 2px rgba(0, 0, 0, .8);
   letter-spacing: 0.7px;
   margin-top: 40px;
   padding: 12px 24px;
   cursor: pointer;
   font-weight: 500;
   color: ${({ theme }) => theme.colors.primary};
`;


const PageHero = () => {
   return (
      <HeroWrapper id="home">
         <article>
            <H1>Cześć, jestem Piotr.</H1>
            <H3 accent thinner>Junior Front-end Developer</H3>
            <StyledButton>Moje projekty</StyledButton>
         </article>
         <HeroLogo
            src={logo}
            alt="Piotr Chmura Website"
         />
      </HeroWrapper>
   )
}
export default PageHero;
