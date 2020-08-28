import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import H5 from 'components/Text/H5';
import Button from 'components/Buttons/ButtonHalf';
import { devices } from 'theme';

const StyledButton = styled(Button)`
   position: relative;
   bottom: -40px;
   opacity: 0;
   margin-top: 20px;
   width: 110px;
`;

const StyledH5 = styled(H5)`
   position: relative;
   top: -40px;
   opacity: 0;
   transition: ${({ theme }) => theme.transitions.ease};
   z-index: 2;
   text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
   z-index: 1;
`;

const CardContainer = styled.div`
   position: relative;
   width: 100%;
   max-width: 400px;
   height: 200px;
   margin: 25px auto;

   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;

   text-align: center;
   background-image: url(${({ image }) => image});
   background-size: cover;
   background-position: center top;
   box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
   border-radius: 3px;
   z-index: 0;

   &:first-of-type { margin-top: 0 }
   &:last-of-type {margin-bottom: 0 }

   &:hover {
      h5 {
         opacity: 1;
         top: 0;
      }

      button {
         opacity: 1;
         bottom: 0;
      }

      .overlay { opacity: 1 }
   }

   @media ${devices.tablet} { margin: 0 }
   @media ${devices.laptopM} { height: 240px }
`;

const CardOverlay = styled.div`
   position: absolute;
   top: 0;
   left: 0;
   width: 100%;
   height: 100%;
   opacity: 0;
   transition: ${({ theme }) => theme.transitions.ease};
   background-color: rgba(0,0,0,0.7);
   border-radius: 3px;
   z-index: -1;
`;

const ProjectCard = (props) => {
   const {title, aosAnchor, aosDelay, backgroundImage} = {...props};

   const handleClick = () => {
      const {title, description, icons, sourceCode, preview, backgroundImage, openModal} = {...props};
      openModal({ title, description, icons, sourceCode, preview, backgroundImage });
   }

   return (
      <CardContainer
         image={backgroundImage}
         data-aos="fade-down"
         data-aos-anchor={aosAnchor}
         data-aos-delay={aosDelay}
      >
         <StyledH5>{title}</StyledH5>
         <StyledButton onClick={handleClick}>Szczegóły</StyledButton>
         <CardOverlay className="overlay" />
      </CardContainer>
   )
}

export default ProjectCard;

ProjectCard.defaultProps = {
   title: "Tytuł projektu",
   description: "Krótki opis danego projektu.",
   sourceCode: "",
   preview: "",
   backgroundImage: "",
   aosAnchor: "projectCard__aosAnchor",
   aosDelay: 100,
}

ProjectCard.propTypes = {
   title: PropTypes.string.isRequired,
   description: PropTypes.string.isRequired,
   icons: PropTypes.array,
   sourceCode: PropTypes.string,
   preview: PropTypes.string,
   backgroundImage: PropTypes.string.isRequired,
   openModal: PropTypes.func.isRequired,
   aosAnchor: PropTypes.string.isRequired,
   aosDelay: PropTypes.number.isRequired,
}
