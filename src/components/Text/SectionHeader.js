import styled from 'styled-components';

const SectionHeader = styled.h2`
   font-size: 3rem;
   color: ${({ isColorReversed, theme }) => isColorReversed ? theme.colors.black : theme.colors.special};
   font-weight: 500;
   text-align: center;
   text-transform: uppercase;
   padding-bottom: 50px;

   &:before, &:after {
      content: '';
      position: relative;
      top: -8px;
      display: inline-block;
      width: 40px;
      height: 5px;
      background-color: ${({ isColorReversed, theme }) => isColorReversed ? theme.colors.black : theme.colors.special};
   }

   &:before { margin-right: 20px; }
   &:after { margin-left: 20px; }
`;

export default SectionHeader;
