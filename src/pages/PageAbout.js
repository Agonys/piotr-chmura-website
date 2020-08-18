import React from 'react';
import styled from 'styled-components';
import SectionTemplate from 'templates/SectionTemplate';
import H3 from 'components/Text/H3';
import FeatureCard from 'components/FeatureCard/FeatureCard';

import personImage from 'assets/images/PiotrChmuraImage.jpg';
import efficiencyIcon from 'assets/images/Efficiency.svg';
import cleanlinessIcon from 'assets/images/Cleanliness.svg';
import responsivnessIcon from 'assets/images/Responsivness.svg';
import { devices } from 'theme';


const P = styled.p`
   padding-bottom: 40px;
`;

const DescriptionContainer = styled.div`
   @media ${devices.tablet} {
      display: grid;
      grid-template-columns: 1fr max-content;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      column-gap: 70px;
      margin-bottom: 40px;
   }

   @media ${devices.desktop} {
      margin-bottom: 70px;
      column-gap: 150px;
   }
`;

const TextContainer = styled.div`
   text-align: center;
   height: 100%;

   @media ${devices.tablet} {
      text-align: left;
   }
`;

const ImageContainer = styled.figure`
   align-items: center;
   display: none;
   height: 100%;

   @media ${devices.tablet} {
      display: block;
      margin: 0;
      img {
         width: 250px;
         border-radius: 50%;
         border: 2px solid ${({ theme }) => theme.colors.special};
      }

      figcaption {
         text-align: center;
         margin-top: 10px;
         font-size: 2rem;
         font-family: ${({ theme }) => theme.fonts.secondary};
         font-weight: 500;

         span {
            display: block;
            font-weight: normal;
            font-family: ${({ theme }) => theme.fonts.primary};
            font-size: 1.6rem;
         }
      }
   }

   @media ${devices.desktop} {
      img {
         width: 300px;
      }
   }
`;

const FeatureCardContainer = styled.div`
   display: flex;
   flex-direction: column;

   @media ${devices.tablet} {
      display: grid;
      width: 100%;
      grid-template-columns: 1fr 1fr;
      justify-items: center;
      justify-content: space-between;
      row-gap: 25px;

      div:last-child {
         grid-column: 1 / 3;
      }
   }

   @media ${devices.laptop} {
      grid-template-columns: repeat(3, max-content);

      div:last-child { grid-column: initial }
   }
`;

const PageAbout = () => {
   return (
      <SectionTemplate
      id="about"
      heading="O mnie"
      >
      <DescriptionContainer>
         <TextContainer data-aos="fade-right">
            <H3>Kim jestem?</H3>
            <P>Cześć! Nazywam się Piotr. Jestem junior frontend developerem, który aktualnie szuka pracy w Trójmieście lub Wrocławiu. Wkładam dużo wysiłku w to, co robię jednocześnie czerpiąc z tego ogromną satysfakcję. Swoją przygodę z web developmentem rozpocząłem trzy lata temu i chce ją kontynuować jeszcze długie lata.<br /><br />

            Swój wolny czas poświęcam na rozwój, ale też i gry komputerowe (najczęściej rytmiczne), słuchanie muzyki rockowej, układanie kostek rubika i uczenie się nowych rzeczy.</P>
         </TextContainer>

         <ImageContainer data-aos="fade-left">
            <img src={personImage} alt="Piotr Chmura" loading="lazy" />
            <figcaption>
            Piotr Chmura
            <span>Junior Front-end Developer</span>
            </figcaption>
         </ImageContainer>
      </DescriptionContainer>

      <H3 data-aos="fade-down">Czym się wyróżniam?</H3>
      <FeatureCardContainer>
         <FeatureCard
            icon={efficiencyIcon}
            heading="Wydajność"
            description="Dbam o prędkość ładowania strony i jej optymalizację pod wieloma względami."
            data_aos="fade-down"
            data_aos_delay="200"
         />
         <FeatureCard
            icon={cleanlinessIcon}
            heading="Przejrzystość"
            description="Odpowiednie rozmieszczenie informacji gra kluczową rolę w moich projektach."
            data_aos="fade-down"
            data_aos_delay="400"
         />
         <FeatureCard
            icon={responsivnessIcon}
            heading="Responsywność"
            description="Szablon działający na wszystkich urządzeniach moblinych to mój priorytet."
            data_aos="fade-down"
            data_aos_delay="600"
         />
      </FeatureCardContainer>
      </SectionTemplate>
   )
}

export default PageAbout;
