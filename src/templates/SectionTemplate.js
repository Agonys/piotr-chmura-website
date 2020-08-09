import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import SectionHeader from 'components/Text/SectionHeader';

const SectionContainer = styled.section`
   padding: 70px 20px;
   width: 100%;
   background-color: ${({ backgroundColor }) => backgroundColor};
   display: flex;
   flex-direction: column;
   align-items: center;
   position: relative;
   z-index: 1;
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

const SectionTemplate = ({ id, children, backgroundColor, backgroundImage, isColorReversed, heading }) => {
   return (
      <SectionContainer
         id={id}
         backgroundColor={backgroundColor}
         backgroundImage={backgroundImage}
      >
         <SectionHeader isColorReversed={isColorReversed}>{heading}</SectionHeader>
         {children}
         {backgroundImage && <SectionBackground backgroundImage={backgroundImage} />}
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
