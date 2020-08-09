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
      margin: 5px;
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
         <img src={linkedinIcon} alt="LinkedIn icon" />
         <img src={githubIcon} alt="Github icon" />
         <img src={facebookIcon} alt="Facebook icon" />
      </WidgetsContainer>
   )
}

export default Widgets;
