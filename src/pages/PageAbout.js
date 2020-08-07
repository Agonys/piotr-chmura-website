import React from 'react';
import styled from 'styled-components';
import { backgrounds } from 'theme';
import piotrChmuraImage from 'assets/images/PiotrChmuraImage.jpg';
import cleanlinessIcon from 'assets/images/Cleanliness.svg';
import efficiencyIcon from 'assets/images/Efficiency.svg';
import responsivnessIcon from 'assets/images/Responsivness.svg';

import SectionTemplate from 'components/SectionTemplate/SectionTemplate';
import H3 from 'components/Text/ArticleHeader';
import FeatureCard from 'components/FeatureCard/FeatureCard';

const StyledImage = styled.img`
   width: 350px;
   border-radius: 50%;
   border: 3px solid ${({ theme }) => theme.colors.secondary};
`;

const StyledContainer = styled.div`
   display: grid;
   width: 100%;
   justify-content: space-between;
   grid-template-columns: auto 1fr;
   grid-template-areas:
      "text image"
      "features features";
   row-gap: 100px;
`;

const StyledTextContainer = styled.div`
   max-width: 780px;
   width: 100%;
   grid-area: text;
   margin-top: 40px;

   p {
      text-align: justify;
      font-size: 2rem;
      margin-top: 30px;
   }
`;

const StyledImageContainer = styled.figure`
   text-align: center;
   margin: 0 0 0 auto;
   grid-area: image;

   figcaption {
      font-family: ${({ theme }) => theme.fonts.secondary};
      font-weight: 500;
      font-size: 2rem;
      margin-top: 15px;
      color: ${({ theme }) => theme.colors.primary};

      span {
         display: block;
         font-family: ${({ theme }) => theme.fonts.primary};
         font-weight: normal;
         font-size: 1.6rem;
      }
   }
`;

const StyledFeaturesContainer = styled.div`
   grid-area: features;
   text-align: center;
`;

const FeatureCardsContainer = styled.div`
   display: grid;
   width: 100%;
   padding-top: 50px;
   grid-template-columns: repeat(3, auto);
   grid-template-rows: auto;
   justify-content: space-between;
`;


const PageAbout = () => {
   return (
      <SectionTemplate
         id="about"
         heading="O mnie"
      >
         <StyledContainer>
            <StyledTextContainer>
               <H3>Kim jestem?</H3>
               <p><b>Cześć!</b> Nazywam się Piotr. Jestem junior frontend developerem, który aktualnie szuka pracy w Trójmieście lub Wrocławiu. Wkładam dużo wysiłku w to, co robię jednocześnie czerpiąc z tego ogromną satysfakcję. Swoją przygodę z web developmentem rozpocząłem trzy lata temu i chce ją kontynuować jeszcze długie lata.<br /><br />

               Swój wolny czas poświęcam na rozwój, ale też i gry komputerowe (najczęściej rytmiczne), słuchanie muzyki rockowej, układanie kostek rubika i uczenie się nowych rzeczy.</p>
            </StyledTextContainer>

            <StyledImageContainer>
               <StyledImage src={piotrChmuraImage} alt="Piotr Chmura" width={370} />
               <figcaption>
                  Piotr Chmura
                  <span>Junior Front-end Developer</span>
               </figcaption>
            </StyledImageContainer>

            <StyledFeaturesContainer>
               <H3>Czym się wyróżniam?</H3>

               <FeatureCardsContainer>
                  <FeatureCard
                     icon={efficiencyIcon}
                     heading="Wydajność"
                     description="Dbam o prędkość ładowania strony i jej optymalizację pod wieloma względami."
                  />
                  <FeatureCard
                     icon={cleanlinessIcon}
                     heading="Przejrzystość"
                     description="Odpowiednie rozmieszczenie informacji gra kluczową rolę w moich projektach."
                  />
                  <FeatureCard
                     icon={responsivnessIcon}
                     heading="Responsywność"
                     description="Szablon działający na wszystkich urządzeniach moblinych to mój priorytet."
                  />
               </FeatureCardsContainer>

            </StyledFeaturesContainer>
         </StyledContainer>
      </SectionTemplate>
   )
}
export default PageAbout;
