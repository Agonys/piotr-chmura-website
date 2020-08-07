import React from 'react';
import styled from 'styled-components';
import SectionTemplate from 'components/SectionTemplate/SectionTemplate';
import { backgrounds } from 'theme';
import background_cover from 'assets/images/background_cover.png';

const PagePortfolio = () => {
   return (
      <SectionTemplate
         backgroundColor={backgrounds.special}
         backgroundImage={background_cover}
         id="portfolio"
         heading="Portfolio"
         isHeadingColorReversed
      >

      </SectionTemplate>
   )
}
export default PagePortfolio;
