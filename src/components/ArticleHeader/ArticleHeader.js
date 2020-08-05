import styled from 'styled-components';

const H3 = styled.h3`
   font-size: 3.6rem;
   font-family: ${({ theme }) => theme.fonts.secondary};
   font-weight: ${({ thinner }) => thinner ? "400" : "500"};
   color: ${({ accent, theme }) => accent ? theme.colors.secondary : theme.colors.primary};
   margin: 0;
`;

export default H3;
