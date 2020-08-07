import styled from 'styled-components';

const H4 = styled.h4`
   margin: 0;
   font-family: ${({ theme }) => theme.fonts.secondary};
   font-weight: 500;
   font-size: 2.6rem;
   color: ${({ theme }) => theme.colors.primary};
`;

export default H4;
