import React from 'react';
import SectionTemplate from 'templates/SectionTemplate';
import IconsGallery from 'components/IconsGallery/IconsGallery';
import { colors } from 'theme';

const PageSkills = () => {
   const AOS_ANCHOR = "paragraph__aosAnchor";

   return (
      <SectionTemplate
         id="skills"
         heading="Umiejętności"
         backgroundColor={colors.black}
      >
         <p data-aos="fade-down" className={AOS_ANCHOR}>W swoich projektach wykorzystuję:</p>
         <IconsGallery aosAnchor={`.${AOS_ANCHOR}`} />
      </SectionTemplate>
   )
}
export default PageSkills;
