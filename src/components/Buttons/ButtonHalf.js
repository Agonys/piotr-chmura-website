import styled from 'styled-components';

const ButtonHalf = styled.button`
   padding: 10px 20px;
   border: 2px solid ${({ theme }) => theme.colors.special};
   border-radius: 3px;
   background-color: transparent;
   color: ${({ theme }) => theme.colors.white};
   transition: ${({ theme }) => theme.transitions.ease};
   font-weight: bold;
   cursor: pointer;

   &:hover {
      color: ${({ theme }) => theme.colors.black};
      background-color: ${({ theme }) => theme.backgrounds.special};
   }
`;

export default ButtonHalf;
