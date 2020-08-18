import React from 'react';
import styled from 'styled-components';
import H5 from 'components/Text/H5';
import PropTypes from 'prop-types';
import { devices, backgrounds } from 'theme';

const CardContainer = styled.div`
   width: 100%;
   max-width: 340px;
   height: 230px;
   position: relative;
   margin-bottom: 30px;

   @media ${devices.tablet} {
      margin-bottom: 0;
      max-width: 320px;
   }
`;

const CardBackground = styled.div`
   position: absolute;
   width: 100%;
   height: calc(100% - 60px);
   top: 50%;
   transform: translateY(-50%);
   z-index: -1;
   background: ${({ theme }) => theme.backgrounds.special};
`;

const CardBox = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   text-align: center;
   justify-content: center;

   width: calc(100% - 20px);
   height: 100%;
   margin: 0 auto;
   padding: 0 20px;
   background: ${backgrounds.dark};
   box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.6);

   p {
      margin-top: 20px;
      text-align: center;
   }
`;

const CardIcon = styled.img`
   width: 50px;
   height: 50px;
   margin-bottom: 10px;
`;

const FeatureCard = ({ icon, heading, description, data_aos, data_aos_delay }) => (
   <CardContainer
      data-aos={data_aos}
      data-aos-delay={data_aos_delay}
   >
      <CardBox>
         <CardIcon src={icon} alt="icon"/>
         <H5>{heading}</H5>
         <p>{description}</p>
      </CardBox>
      <CardBackground />
   </CardContainer>
)

FeatureCard.defaultProps = {
   icon: "",
   heading: "cecha",
   description: "krótki opis cechy",
}

FeatureCard.propTypes = {
   icon: PropTypes.string.isRequired,
   heading: PropTypes.string.isRequired,
   description: PropTypes.string.isRequired,
}

export default FeatureCard;
