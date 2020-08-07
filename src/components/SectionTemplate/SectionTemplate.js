import React from 'react';
import styled from 'styled-components';
import SectionHeader from 'components/Text/SectionHeader';


const StyledSectionTemplate = styled.section`
   position: relative;
   width: 100%;
   background-color: ${({ backgroundColor }) => backgroundColor || 'transparent'};
`;

const SectionContainer = styled.div`
   padding: 100px 0;
   max-width: 1300px;
   width: 100%;
   display: grid;
   margin: auto;
   grid-template-rows: auto 1fr;
   ${({ backgroundImage }) => backgroundImage && `background-image: url(${backgroundImage})`};
`;

const SectionBackgroundImage = styled.div`
   position: absolute;
   top: 0;
   left: 0;
   background-image: url(${({ img }) => img});
   opacity: 0.2;
   width: 100%;
   height: 100%;
`;

const SectionContentWrapper = styled.div`
   padding-top: 50px;
`;

const SectionTemplate = ({ backgroundColor, backgroundImage, heading, id, isHeadingColorReversed, children }) => (
   <StyledSectionTemplate backgroundColor={backgroundColor} id={id}>
      <SectionContainer>
         <SectionHeader isHeadingColorReversed={isHeadingColorReversed}>
            {heading}
         </SectionHeader>
         <SectionContentWrapper>
            {children}
         </SectionContentWrapper>

      </SectionContainer>
      {backgroundImage && <SectionBackgroundImage img={backgroundImage} />}
   </StyledSectionTemplate>
)

export default SectionTemplate;
