import React from 'react';
import styled from 'styled-components';
import Button from 'components/Buttons/ButtonFull';
import { devices } from 'theme';

const StyledButton = styled(Button)`
   max-width: 160px;
   padding: 10px 10px;
   margin: 0px;
   width: 150px;
   font-size: 1.5rem;
`;

const StyledHr = styled.hr`
   width: 100%;
   border: 1px solid ${({ theme }) => theme.backgrounds.dark};
`;

const StyledImage = styled.div`
   background-image: url(${({ src }) => src});
   background-position: center top;
   background-size: cover;
   width: 100%;
   height: 250px;
`;

const StyledLine = styled.div`
   width: 100%;
   height: 4px;
   background-color: ${({ theme }) => theme.backgrounds.special};
`;

const ModalContainer = styled.div`
   height: ${({ isOpen }) => isOpen ? "100vh" : "0"};
   width: 100%;
   position: fixed;
   overflow: hidden;
   top: 0;
   z-index: ${({ isOpen }) => isOpen ? 12 : 12};
   transform: ${({ isOpen }) => isOpen ? 'scale(1)' : 'scale(0.8)'};
   opacity: ${({ isOpen }) => isOpen ? 1 : 0};

   background-color: ${({ theme }) => theme.backgrounds.light};
   transition: ${({ theme }) => theme.transitions.ease};

   @media ${devices.tablet} {
      height: ${({ isOpen }) => isOpen ? "auto" : "0"};
   }

   @media ${devices.laptop} {
      max-width: 700px;
      left: 0;
      right: 0;
      margin: 0 auto;

      top: 40px;
   }
`;

const DescriptionContainer = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   padding: 20px;

   p {
      margin-top: 15px;
      font-size: 1.6rem;
   }
`;

const TitleContainer = styled.div`
   text-align: center;

   span {
      font-size: 2rem;
      font-weight: 600;

      @media ${devices.mobileL} { font-size: 2.4rem }
      @media ${devices.tablet} { font-size: 2.8rem }
   }


   @media ${devices.laptopM} {
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;

      div { margin-right: 0 }
   }
`;

const IconContainer = styled.div`
   display: flex;
   width: max-content;
   margin: 10px auto;

   img {
      width: 48px;
      height: 48px;
      margin: 0 8px;
   }
`;

const ButtonContainer = styled.div`
   display: flex;
   width: 100%;
   justify-content: center;
   margin: 30px 0;

   a {
      margin: 0 10px;
   }
`;

const CloseModal = styled.div`
   border: 1px solid ${({ theme }) => theme.colors.white};
   border-radius: 50%;
   width: 56px;
   height: 56px;
   cursor: pointer;
   display: flex;
   justify-content: center;
   flex-flow: column nowrap;
   transition: ${({ theme }) => theme.transitions.ease};

   div {
      width: 40px;
      height: 4px;
      background-color: white;
      transform-origin: 17px;
      align-self: center;
      transition: ${({ theme }) => theme.transitions.ease};

      border-radius: 5px;

      &:first-of-type {
         transform: rotate(45deg);
      }

      &:last-of-type {
         transform: rotate(-45deg);
      }
   }

   &:hover {
      background-color: white;

      div {
         background-color: black;
      }
   }
`;

const DarkOverlay = styled.div`
   position: fixed;
   top: 0;
   left: 0;
   width: 100vw;
   height: 100vh;
   background-color: rgba(0, 0, 0, 0.6);
   display: none;
   z-index: 10;

   @media ${devices.tablet} {
      display: ${({ isOpen }) => isOpen ? 'block' : null};
   }
`;

const Modal = ({ isModalOpen, modalData, closeModal }) => {
   const { title, description, icons, sourceCode, preview, backgroundImage } = {...modalData};

   let iconsList;
   if(icons)
      iconsList = icons.map((icon, index) => {
         return <img key={index} src={icon} alt="icon" />
      })

   return (
      <>
      <ModalContainer isOpen={isModalOpen}>
         <StyledImage src={backgroundImage} />
         <StyledLine />

         <DescriptionContainer>
            <TitleContainer>
               <span>{title}</span>
               <IconContainer>{iconsList}</IconContainer>
            </TitleContainer>

            <StyledHr />

            <p>{description}</p>
            <ButtonContainer>
               {sourceCode && <a href={sourceCode} target="_blank" rel="noopener noreferrer"><StyledButton isInverted>Kod źródłowy</StyledButton></a>}
               {preview && <a href={preview} target="_blank" rel="noopener noreferrer"><StyledButton>podgląd</StyledButton></a>}
            </ButtonContainer>

            <CloseModal onClick={closeModal}>
               <div />
               <div />
            </CloseModal>
         </DescriptionContainer>

      </ModalContainer>
      <DarkOverlay isOpen={isModalOpen} />
      </>
   )
}

export default Modal;
