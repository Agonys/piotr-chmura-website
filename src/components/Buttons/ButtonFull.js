import styled from 'styled-components';

const ButtonFull = styled.button`
   margin-top: 35px;
   padding: 10px 20px;
   font-family: ${({ theme }) => theme.fonts.secondary};
   font-size: 1.6rem;
   text-transform: uppercase;
   width: max-content;

   ${({ isInverted, theme }) => isInverted
   ? `background-color: ${theme.colors.white};
   color: ${theme.colors.black};`
   : `background-color: ${theme.colors.special};
   color: ${theme.colors.white};`};

   border: 0;
   border-radius: 3px;
   box-shadow: 0 4px 4px rgba(0, 0, 0, .25);
`;


export default ButtonFull;
