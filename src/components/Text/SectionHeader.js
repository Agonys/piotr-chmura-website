import styled from 'styled-components';

const SectionHeader = styled.h2`
   margin: 0;
   font-size: 4rem;
   font-family: ${({ theme }) => theme.fonts.secondary};
   color: ${({ isHeadingColorReversed, theme }) => isHeadingColorReversed ? theme.colors.dark : null};
   font-weight: 500;
   text-align: center;
   text-transform: uppercase;


   &:before, &:after {
      content: '';
      position: relative;
      top: -10px;
      display: inline-block;
      width: 50px;
      height: 6px;
      background-color: ${({ isHeadingColorReversed, theme }) => isHeadingColorReversed ? theme.colors.dark : theme.colors.secondary};
   }

   &:before { margin-right: 20px; }
   &:after { margin-left: 20px; }
`;

export default SectionHeader;
