import React from 'react';
import styled from 'styled-components';
import heroBackground from 'assets/images/HeroBackground.png';
import ButtonFull from 'components/Buttons/ButtonFull';
import H4 from 'components/Text/H4';
import PropTypes from 'prop-types';
import scrollTo from 'utils/scrollTo';
import { devices } from 'theme';

import logo from 'assets/images/Logo_shadows.svg';

const StyledButton = styled(ButtonFull)`
   font-weight: 500;
   text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.8);
`;
const StyledH4 = styled(H4)`;
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

   img {
      display: none;
   }

   @media ${devices.laptopM} {
      display: grid;
      grid-template-columns: max-content auto;
      justify-content: space-between;
      padding: 70px;

      img {
         display: block;
         width: 450px;
         justify-self: center;
      }
   }

   @media ${devices.desktop} {
      padding: 170px 100px 100px;
      img {
         width: 500px;
      }
   }

`;

const H1 = styled.h1`
   margin: 0;
   font-size: 3.6rem;
   font-family: ${({ theme }) => theme.fonts.special};
   font-weight: normal;
   align-self: center;

   @media ${devices.mobileL} {
      font-size: 4.2rem;
   }

   @media ${devices.tablet} {
      font-size: 5rem;
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
   }
`;



const PageHero = ({ id }) => {
   return (
      <HeroWrapper id={id}>
         <TextContainer>
            <H1>Cześć, jestem Piotr.</H1>
            <StyledH4>Junior Front-end Developer</StyledH4>
            <StyledButton onClick={() => scrollTo("portfolio")}>Moje projekty</StyledButton>
         </TextContainer>
         <img src={logo} alt="Piotr Chmura logo" />
      </HeroWrapper>
   )
}

PageHero.defaultProps = {
   id: 'home'
}

PageHero.propTypes = {
   id: PropTypes.string.isRequired
}


export default PageHero;
