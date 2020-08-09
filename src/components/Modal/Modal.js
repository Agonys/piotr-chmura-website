import React from 'react';
import styled from 'styled-components';
import H5 from 'components/Text/H5';
import Button from 'components/Buttons/ButtonFull';

const StyledButton = styled(Button)`
   width: 160px;
   padding: 10px 0;
   margin: 0;
`;

const StyledH5 = styled(H5)`
   padding: 10px 0;
   text-align: center;
`;

const StyledHr = styled.hr`
   width: 100%;
   border: 1px solid ${({ theme }) => theme.backgrounds.dark};
`;

const StyledImage = styled.div`
   background-image: url(${({ src }) => src});
   background-position: center;
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
   height: 100vh;
   width: 100%;
   position: fixed;
   overflow: hidden;
   top: 0;
   left: 0;
   z-index: ${({ isOpen }) => isOpen ? 11 : -1};
   transform: ${({ isOpen }) => isOpen ? 'scale(1)' : 'scale(0.8)'};
   opacity: ${({ isOpen }) => isOpen ? 1 : 0};

   background-color: ${({ theme }) => theme.backgrounds.light};
   transition: ${({ theme }) => theme.transitions.ease};
`;

const DescriptionContainer = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   padding: 20px;

   p {
      margin-top: 15px;
   }
`;

const IconContainer = styled.div`
   display: flex;
   width: max-content;
   margin: 10px 0;

   img {
      width: 48px;
      height: 48px;
      margin: 0 8px;
   }
`;

const ButtonContainer = styled.div`
   display: flex;
   width: 100%;
   justify-content: space-around;
   margin: 30px 0;

   a {
      color: inherit;
      cursor: inherit;
      text-decoration: none;
   }
`;

const CloseModal = styled.div`
   border: 1px solid ${({ theme }) => theme.colors.white};
   border-radius: 50%;
   width: 56px;
   height: 56px;

   display: flex;
   justify-content: center;
   flex-flow: column nowrap;

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
`;

const Modal = ({ isModalOpen, modalData, closeModal }) => {
   const { title, description, icons, sourceCode, preview, backgroundImage } = {...modalData};

   let iconsList;
   if(icons)
      iconsList = icons.map((icon, index) => {
         return <img key={index} src={icon} alt="icon" />
      })

   return (
      <ModalContainer isOpen={isModalOpen}>
         <StyledImage src={backgroundImage} />
         <StyledLine />
         <DescriptionContainer>
            <StyledH5>{title}</StyledH5>
            <IconContainer>{iconsList}</IconContainer>

            <StyledHr />

            <p>{description}</p>
            <ButtonContainer>
               {sourceCode && <StyledButton isInverted><a href={sourceCode} target="_blank" rel="noopener noreferrer">Kod źródłowy</a></StyledButton>}
               {preview && <StyledButton><a href={preview} target="_blank" rel="noopener noreferrer">podgląd</a></StyledButton>}
            </ButtonContainer>

            <CloseModal onClick={closeModal}>
               <div />
               <div />
            </CloseModal>
         </DescriptionContainer>
      </ModalContainer>
   )
}

export default Modal;
