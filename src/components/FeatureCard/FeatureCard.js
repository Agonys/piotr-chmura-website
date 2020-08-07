import React from 'react';
import styled from 'styled-components';
import { backgrounds } from 'theme';
import H4 from 'components/Text/H4';


const CardContainer = styled.div`
   width: 330px;
   height: 260px;
   position: relative;
`;

const CardBackground = styled.div`
   position: absolute;
   width: 100%;
   height: calc(100% - 60px);
   top: 50%;
   transform: translateY(-50%);
   z-index: -1;
   background: ${backgrounds.special};
`;

const CardBox = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   text-align: center;

   width: calc(100% - 20px);
   height: 100%;
   margin: 0 auto;
   padding: 0 20px;
   background: ${backgrounds.dark};
   box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.6);

   p {
      margin-top: 20px;
   }
`;

const CardIcon = styled.img`
   width: 50px;
   height: 50px;
   margin-bottom: 10px;
`;

const FeatureCard = ({ icon, heading, description }) => {
   return (
      <CardContainer>
         <CardBox>
            <CardIcon src={icon} />
            <H4>{heading}</H4>
            <p>{description}</p>
         </CardBox>
         <CardBackground />
      </CardContainer>
   )
}

export default FeatureCard;
