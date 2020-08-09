import React from 'react';
import styled from 'styled-components';
import SectionTemplate from 'templates/SectionTemplate';
import H3 from 'components/Text/H3';
import FeatureCard from 'components/FeatureCard/FeatureCard';

import efficiencyIcon from 'assets/images/Efficiency.svg';
import cleanlinessIcon from 'assets/images/Cleanliness.svg';
import responsivnessIcon from 'assets/images/Responsivness.svg';

const P = styled.p`
   padding-bottom: 40px;
`;

const PageAbout = () => {
   return (
      <SectionTemplate
         id="about"
         heading="O mnie"
      >
         <H3>Kim jestem?</H3>
         <P>Cześć! Nazywam się Piotr. Jestem junior frontend developerem, który aktualnie szuka pracy w Trójmieście lub Wrocławiu. Wkładam dużo wysiłku w to, co robię jednocześnie czerpiąc z tego ogromną satysfakcję. Swoją przygodę z web developmentem rozpocząłem trzy lata temu i chce ją kontynuować jeszcze długie lata.<br /><br />

Swój wolny czas poświęcam na rozwój, ale też i gry komputerowe (najczęściej rytmiczne), słuchanie muzyki rockowej, układanie kostek rubika i uczenie się nowych rzeczy.</P>

         <H3>Czym się wyróżniam?</H3>
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
      </SectionTemplate>
   )
}
export default PageAbout;
