import React from 'react';
import styled from 'styled-components';
import icons from './icons';


const IconContainer = styled.div`
   display: grid;
   width: 100%;
   grid-template-columns: repeat(8, max-content);
   row-gap: 50px;
   justify-content: space-evenly;
   justify-items: center;
   padding-top: 30px;

   img {
      height: 64px;
   }
`;

const ImageContainer = styled.figure`
   width: max-content;
   margin: 0;
   display: flex;
   flex-direction: column;
   cursor: pointer;

   &:hover {
      img { filter: none }

      figcaption {
         top: 0;
         opacity: 1;
      }
   }

   img {
      align-self: center;
      margin: 0 auto;
      filter: grayscale(70%);
      transition: ${({ theme }) => theme.transitions.ease};
      z-index: 2;
   }

   figcaption {
      position: relative;
      top: -20px;
      z-index: 1;
      text-align: center;
      font-size: 16px;
      font-weight: 500;
      font-family: ${({ theme }) => theme.fonts.secondary};
      padding-top: 7px;
      opacity: 0;
      transition: ${({ theme }) => theme.transitions.ease};
   }
`;

const IconsGallery = () => {

   const generateIcons = Object.entries(icons).map(icon => {
      const iconName = icon[0];
      const iconImage = icon[1];
      return (
         <ImageContainer key={iconName}>
            <img src={iconImage} alt={iconName} />
            <figcaption>{iconName}</figcaption>
         </ImageContainer>
      )
   })

   return (
      <IconContainer>
         {generateIcons}
      </IconContainer>
   );
}

export default IconsGallery;
