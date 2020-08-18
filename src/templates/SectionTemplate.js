import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import H2 from 'components/Text/H2';
import { devices } from 'theme';


const SectionContainer = styled.section`
   padding: 70px 20px;
   background-color: ${({ backgroundColor }) => backgroundColor};
   display: flex;
   flex-direction: column;
   align-items: center;
   position: relative;
   z-index: 1;

   @media ${devices.tablet} {
      padding: 70px 30px;
   }
`;

const SectionBackground = styled.div`
   display: block;
   background-image: url(${({ backgroundImage }) => backgroundImage});
   opacity: 0.4;
   position: absolute;
   top: 0;
   left: 0;
   width: 100%;
   height: 100%;
   z-index: -1;
`;

const InformationRow = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   width: 100%;

   @media ${devices.laptop} {
      max-width: 1200px;
   }
`;

const SectionTemplate = ({ id, children, backgroundColor, backgroundImage, isColorReversed, heading }) => {
   return (
      <SectionContainer
         id={id}
         backgroundColor={backgroundColor}
         backgroundImage={backgroundImage}
      >
         <InformationRow>
            <H2
               isColorReversed={isColorReversed}
               data-aos="fade-down"
            >{heading}</H2>
            {children}
            {backgroundImage && <SectionBackground backgroundImage={backgroundImage} />}
         </InformationRow>
      </SectionContainer>
   )
}

SectionTemplate.defaultProps = {
   backgroundColor: 'transparent',
   heading: 'Nagłówek',
   isColorReversed: false,
}

SectionTemplate.propTypes = {
   id: PropTypes.string.isRequired,
   heading: PropTypes.string.isRequired,
   backgroundColor: PropTypes.string,
   backgroundImage: PropTypes.string,
   isColorReversed: PropTypes.bool,
}

export default SectionTemplate;
