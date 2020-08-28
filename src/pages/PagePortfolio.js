import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import SectionTemplate from 'templates/SectionTemplate';
import ProjectCard from 'components/ProjectCard/ProjectCard';
import iconsList from 'components/IconsGallery/icons';
import { colors, devices } from 'theme';

import backgroundCover from 'assets/images/Background_cover.webp';
import portfolioData from 'assets/data/portfolioTiles.js';

const ProjectContainer = styled.div`
   display: flex;
   flex-direction: column;
   width: 100%;

   @media ${devices.tablet} {
      display: grid;
      grid-template-columns: 1fr 1fr;
      justify-items: center;
      row-gap: 15px;
      column-gap: 15px;
   }

   @media ${devices.laptopM} {
      grid-template-columns: 1fr 1fr 1fr;
   }
`;

const PagePortfolio = React.memo(({ openModal }) => {
   const AOS_ANCHOR = "projectCard__aosAnchor";
   const projectCardsList = portfolioData.map((project, index) => {
      const { title, description, preview, sourceCode, icons, backgroundImage } = {...project};

      const projectIcons = icons.map(icon => iconsList[icon]);
      return <ProjectCard
         title={title}
         description={description}
         preview={preview}
         sourceCode={sourceCode}
         icons={projectIcons}
         backgroundImage={backgroundImage}
         openModal={openModal}
         aosAnchor={`.${AOS_ANCHOR}`}
         aosDelay={(index + 1) * 100}
         key={title}
      />
   });

   return (
      <SectionTemplate
         id="portfolio"
         backgroundColor={colors.special}
         backgroundImage={backgroundCover}
         heading="Portfolio"
         isColorReversed
      >
         <ProjectContainer className={AOS_ANCHOR}>
            {projectCardsList}
         </ProjectContainer>
      </SectionTemplate>
   )
});

PagePortfolio.propTypes = {
   openModal: PropTypes.func.isRequired,
}

export default PagePortfolio;
