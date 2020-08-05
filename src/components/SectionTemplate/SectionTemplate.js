import React from 'react';
import styled from 'styled-components';
import SectionHeader from 'components/SectionHeader/SectionHeader';

const StyledSectionTemplate = styled.section`
   width: 100%;
`;

const SectionWrapper = styled.div`
   padding: 100px 0;
   max-width: 1300px;
   width: 100%;
   display: grid;
   margin: auto;
   grid-template-rows: auto 1fr;
`;

const SectionContentWrapper = styled.div`
   padding-top: 50px;
`;

const SectionTemplate = ({ heading, id, children }) => (
   <StyledSectionTemplate id={id}>
      <SectionWrapper>
         <SectionHeader>{heading}</SectionHeader>
         <SectionContentWrapper>
            {children}
         </SectionContentWrapper>
      </SectionWrapper>
   </StyledSectionTemplate>
)

export default SectionTemplate;
