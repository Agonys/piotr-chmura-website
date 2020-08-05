import React from 'react';
import styled from 'styled-components';
import SectionTemplate from 'components/SectionTemplate/SectionTemplate';
import { backgrounds } from 'theme';

const PageSkills = () => {
   return (
      <SectionTemplate
         id="skills"
         heading="Umiejętności"
         backgroundColor={backgrounds.dark}
      >
      </SectionTemplate>
   )
}
export default PageSkills;
