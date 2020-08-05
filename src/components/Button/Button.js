import styled from 'styled-components';

const Button = styled.button`
   padding: 8px 20px;
   font-family: ${({ theme }) => theme.fonts.secondary};
   font-size: 1.6rem;
   text-transform: uppercase;

   color: ${({ accent, theme }) => accent ? theme.colors.primary : theme.colors.secondary};
   border: 2px solid ${({ accent, theme }) => accent ? theme.colors.secondary : theme.colors.primary};
   border-radius: 3px;
   background-color: transparent;
   box-shadow: 0 4px 4px rgba(0, 0, 0, .25);
`;

export default Button;
