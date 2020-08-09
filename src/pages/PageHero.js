import React from 'react';
import styled from 'styled-components';
import heroBackground from 'assets/images/HeroBackground.png';
import ButtonFull from 'components/Buttons/ButtonFull';
import PropTypes from 'prop-types';

const StyledButton = styled(ButtonFull)`
   font-weight: 500;
   text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.8);
`;

const HeroWrapper = styled.section`
   padding: 30px;
   width: 100%;
   height: 100vh;
   background-image: url(${heroBackground});
   display: flex;
   flex-flow: column nowrap;
   justify-content: center;
   align-items: center;
`;

const H1 = styled.h1`
   margin: 0;
   font-size: 3.7rem;
   font-family: ${({ theme }) => theme.fonts.special};
   font-weight: normal;
   align-self: center;
`;

const H4 = styled.h4`
   margin: 0;
   font-size: 2.2rem;
   font-family: ${({ theme }) => theme.fonts.special};
   color: ${({ theme }) => theme.colors.special};
   font-weight: normal;
   align-self: center;
`;


const PageHero = ({ id }) => {
   return (
      <HeroWrapper id={id}>
         <H1>Cześć, jestem Piotr.</H1>
         <H4>Junior Front-end Developer</H4>
         <StyledButton>Moje projekty</StyledButton>
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
