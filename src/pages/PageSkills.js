import React from 'react';
import styled from 'styled-components';
import SectionTemplate from 'components/SectionTemplate/SectionTemplate';
import IconsGallery from 'components/IconsGallery/IconsGallery';
import { backgrounds } from 'theme';


const StyledContainer = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
`;

const PageSkills = () => {
   return (
      <SectionTemplate
         id="skills"
         heading="Umiejętności"
         backgroundColor={backgrounds.dark}
      >
      <StyledContainer>
         <p>W swoich projektach wykorzystuję:</p>
         <IconsGallery />
      </StyledContainer>

      </SectionTemplate>
   )
}
export default PageSkills;
