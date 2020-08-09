import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import H5 from 'components/Text/H5';
import Button from 'components/Buttons/ButtonHalf';

const StyledButton = styled(Button)`
   position: relative;
   bottom: -40px;
   opacity: 0;
   margin-top: 20px;
`;

const StyledH5 = styled(H5)`
   position: relative;
   top: -40px;
   opacity: 0;
   transition: ${({ theme }) => theme.transitions.ease};
   z-index: 2;
`;

const CardContainer = styled.div`
   width: 320px;
   height: 200px;
   box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
   margin: 25px 0;
   position: relative;
   text-align: center;
   z-index: 0;
   background-image: url(${({ image }) => image});
   background-size: cover;
   background-position: center;

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

      .overlay {
         opacity: 1;
      }
   }
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
   z-index: -1;
`;

const ProjectCard = (props) => {
   const {title, description, icons, sourceCode, preview, backgroundImage} = {...props};


   const handleClick = () => {
      props.openModal({title, description, icons, sourceCode, preview, backgroundImage});
   }

   return (
      <CardContainer image={props.backgroundImage}>
         <StyledH5>{props.title}</StyledH5>
         <StyledButton onClick={handleClick}>Szczegóły</StyledButton>
         <CardOverlay className="overlay" />
      </CardContainer>
   )
}

ProjectCard.defaultProps = {
   title: "Tytuł projektu",
   description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
   sourceCode: "",
   preview: "",
   technologies: ["tech 1", "tech 2"],
}

ProjectCard.propTypes = {
   title: PropTypes.string.isRequired,
   description: PropTypes.string.isRequired,
   icons: PropTypes.array,
   sourceCode: PropTypes.string,
   preview: PropTypes.string,
   backgroundImage: PropTypes.string,

}

export default ProjectCard;
