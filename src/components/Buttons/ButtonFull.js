import styled from 'styled-components';

const ButtonFull = styled.button`
   margin-top: 35px;
   padding: 10px 20px;
   font-family: ${({ theme }) => theme.fonts.secondary};
   font-size: 1.6rem;
   font-weight: 500;
   text-transform: uppercase;
   width: max-content;
   color: ${({ theme }) => theme.colors.black};

   ${({ isInverted, theme }) => isInverted
   ? `background-color: ${theme.colors.white}`
   : `background-color: ${theme.colors.special}`};

   border: 0;
   border-radius: 3px;
   box-shadow: 0 4px 4px rgba(0, 0, 0, .25);
   cursor: pointer;
`;


export default ButtonFull;
