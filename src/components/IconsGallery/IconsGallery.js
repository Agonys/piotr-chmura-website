import React from 'react';
import styled from 'styled-components';
import icons from './icons';
import { devices } from 'theme';

const IconContainer = styled.div`
   display: grid;
   width: 100%;
   grid-template-columns: repeat(3, max-content);
   row-gap: 35px;
   justify-content: space-evenly;
   justify-items: center;
   padding-top: 30px;

   img {
      height: 64px;
   }

   @media ${devices.mobileL} { grid-template-columns: repeat(4, max-content) }
   @media ${devices.tablet} { grid-template-columns: repeat(5, max-content) }

   @media ${devices.laptop} {
      grid-template-columns: repeat(6, max-content);
      row-gap: 20px;
   }

   @media ${devices.laptopM} { grid-template-columns: repeat(8, max-content) }
`;

const ImageContainer = styled.figure`
   width: max-content;
   margin: 0;
   display: flex;
   flex-direction: column;

   img {
      align-self: center;
      margin: 0 auto;
      z-index: 2;
      transition: ${({ theme }) => theme.transitions.ease};
   }
   figcaption {
      position: relative;
      top: 0px;
      z-index: 1;
      text-align: center;
      font-size: 14px;
      font-weight: 500;
      font-family: ${({ theme }) => theme.fonts.secondary};
      padding-top: 10px;
      opacity: 1;
      transition: ${({ theme }) => theme.transitions.ease};
   }

   @media ${devices.laptop} {
      img {
         filter: grayscale(50%);
      }

      figcaption {
         padding-top: 7px;
         opacity: 0;
         top: -20px;
      }

      &:hover {
         img { filter: none }
         figcaption {
            top: 0;
            opacity: 1;
         }
      }
   }
`;

const IconsGallery = () => {

   const generateIcons = Object.entries(icons).map(icon => {
      const iconName = icon[0];
      const iconImage = icon[1];
      return (
         <ImageContainer key={iconName}>
            <img src={iconImage} alt={iconName} loading='lazy' />
            <figcaption>{iconName}</figcaption>
         </ImageContainer>
      )
   });

   return (
      <IconContainer>
         {generateIcons}
      </IconContainer>
   )
}

export default IconsGallery;
