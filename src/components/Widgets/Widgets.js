import React from 'react';
import styled from 'styled-components';

import facebookIcon from 'assets/images/links/Facebook.svg';
import linkedinIcon from 'assets/images/links/LinkedIn.svg';
import githubIcon from 'assets/images/links/Github.svg';

const WidgetsContainer = styled.div`
   display: flex;
   margin-top: 20px;
   justify-content: flex-end;

   img {
      padding: 9px;
      margin: 0 10px;
      width: 48px;
      height: 48px;
      border: 2px solid ${({ theme }) => theme.colors.special};

      &:last-of-type {
         margin-right: 0;
      }
   }

`;

const Widgets = ({ color }) => {
   return (
      <WidgetsContainer>
         <a href="https://www.linkedin.com/in/piotr-chmura-2b150a1ab/" target="_blank" rel="noopener noreferrer"><img src={linkedinIcon} alt="LinkedIn icon" /></a>
         <a href="https://github.com/Agonys" target="_blank" rel="noopener noreferrer"><img src={githubIcon} alt="Github icon" /></a>
         <a href="https://www.facebook.com/Piotr.Agonys.Chmura/" target="_blank" rel="noopener noreferrer"><img src={facebookIcon} alt="Facebook icon" /></a>
      </WidgetsContainer>
   )
}

export default Widgets;
