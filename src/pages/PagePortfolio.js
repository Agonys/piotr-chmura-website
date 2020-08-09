import React from 'react';
import styled from 'styled-components';
import SectionTemplate from 'templates/SectionTemplate';
import ProjectCard from 'components/ProjectCard/ProjectCard';
import backgroundCover from 'assets/images/Background_cover.png';
import { backgrounds } from 'theme';
import icons from 'components/IconsGallery/icons';

import bloodstoneCalculator from 'assets/images/projects/bloodstone_calculator.jpg';
import bloodstoneWiki from 'assets/images/projects/bloodstone_wiki.jpg';
import bloodstoneDiscord from 'assets/images/projects/discord.jpg';
import willaAnna from 'assets/images/projects/willa_anna.jpg';
import deftoapartments from 'assets/images/projects/deftoapartments.jpg';
import piotrChmura from 'assets/images/projects/piotr_chmura.jpg';

const ProjectContainer = styled.div`
   display: flex;
   flex-direction: column;
`;

const PagePortfolio = ({ openModal }) => {
   return (
      <SectionTemplate
         id="portfolio"
         backgroundColor={backgrounds.special}
         backgroundImage={backgroundCover}
         heading="Portfolio"
         isColorReversed
      >
         <ProjectContainer>
            <ProjectCard
               backgroundImage={bloodstoneDiscord}
               title="Bloodstone Looter"
               description='aplikacja stworzona dla społeczności Bloodstone Polska pozwalający na analizowanie danych z gry "Bloodstone: The Ancient Curse" dostarczonych przez graczy. Całość napisana w Node.js, Discord.js, MySQL oraz hostowana na Google Cloud Platform.'
               sourceCode="https://github.com/Agonys/dc_bloodstone_bot"
               icons={[ icons["NodeJS"], icons["MySQL"] ]}
               openModal={openModal}
            />

            <ProjectCard
               backgroundImage={willaAnna}
               title="Leśniczówka Willa Anna"
               description='Oficjalna strona "Leśniczówka Willa Anna" z lokalizacją w Szklarskiej porębie. Strona zaprojektowana w celu przedstawienia oferty apartamentów wraz z możliwością ich rezerwacji. Strona oparta o Zend Framework przygotowana na stażu w firmie LEMONPIXEL.'
               sourceCode=""
               preview="https://www.willaanna.pl/"
               icons={[]}
               openModal={openModal}
            />

            <ProjectCard
               backgroundImage={deftoapartments}
               title="Deftoapartments"
               description="Oficjalna strona apartamentów Defto z lokalizacją w Katowicach i Tychach. Strona oparta o Zend Framework ma na celu przedstawić ofertę apartamentów, ich szczegółowe informację, opis firmy oraz możliwość zarezerwowania terminu w wybranym apartamencie. Została ona przygotowana na stażu w firmie LEMONPIXEL."
               sourceCode=""
               preview="https://www.deftoapartments.com/"
               icons={[ icons["PHP"], icons["JavaScript"] ]}
               openModal={openModal}
            />

            <ProjectCard
               backgroundImage={bloodstoneWiki}
               title="Bloodstone Polska Wiki"
               description='Wikipedia do gry "Bloodstone: The Ancient Curse" w języku polskim. Stworzona przez zespół edytorów w celu ułatwienia rozgrywki graczom z Polski, jednak korzystają z niej ludzie z całej społeczności gry. Obecnie projekt przestał być wspierany i rozwijany.'
               sourceCode=""
               preview="https://bloodstone.com.pl/"
               icons={[ icons["PHP"], icons["JavaScript"] ]}
               openModal={openModal}
            />

            <ProjectCard
               backgroundImage={bloodstoneCalculator}
               title="Bloodstone Skill calculator"
               description='Aplikacja pozwalająca na budowanie własnych zestawów umiejętności w grze "Bloodstone: The Ancient Curse". Zbudowana na prostym gridzie, dostosowana do różnych rozdzielczości (wersja mobilna nie została jeszcze ukończona).'
               sourceCode="https://github.com/Agonys/spell_calc"
               preview="https://bloodstone.com.pl/calculator/"
               icons={[ icons["jQuery"], icons["Sass"], icons["Figma"] ]}
               openModal={openModal}
            />

            <ProjectCard
               backgroundImage={piotrChmura}
               title="Piotr Chmura portfolio"
               description='Strona wykonana za pomocą React.js i Figma w celach edukacyjnych i rozwojowych oraz jako wizytówka w internecie. Zostało na niej zastosowane podejście "Mobile first" przez co strona jest resposywna i dostosowana do urządzeń mobilnych.'
               sourceCode="https://github.com/Agonys/piotr-chmura-website"
               preview="https://piotr-chmura.pl/"
               icons={[ icons["React.js"], icons["Figma"] ]}
               openModal={openModal}
            />





         </ProjectContainer>
      </SectionTemplate>
   )
   // <div style={{width: '100px',height:'100px',backgroundColor:'blue',zIndex:3}} onClick={() => handleClick()}>content</div>
}
export default PagePortfolio;
