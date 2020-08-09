import React from 'react';
import SectionTemplate from 'templates/SectionTemplate';
import IconsGallery from 'components/IconsGallery/IconsGallery';
import { backgrounds } from 'theme';

const PageSkills = () => {
   return (
      <SectionTemplate
         id="skills"
         heading="Umiejętności"
         backgroundColor={backgrounds.dark}
      >
         <p>W swoich projektach wykorzystuję:</p>
         <IconsGallery />
      </SectionTemplate>
   )
}
export default PageSkills;
