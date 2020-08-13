import { createGlobalStyle } from 'styled-components';
import { theme } from 'theme';


const GlobalStyle = createGlobalStyle`
   *, *::before, *::after {
      box-sizing: border-box;
   }

   html {
      font-size: 10px;
      scroll-behavior: smooth;
   }

   body {
      overflow-x: hidden;
      margin: 0;
      padding: 0;
      font-family: ${theme.fonts.primary}, sans-serif;
      color: ${theme.colors.white};
      background-color: ${theme.backgrounds.light};

      &::-webkit-scrollbar {
         width: 10px;
         background-color: ${theme.backgrounds.light};
         border: 1px solid ${theme.colors.black};
      }

      &::-webkit-scrollbar-track {
        box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
      }

      &::-webkit-scrollbar-thumb {
         background-color: ${theme.colors.special};
         border-radius: 5px;
         box-shadow: inset 1px 0 6px rgba(0, 0, 0, 0.3);
      }
   }

   p {
      margin: 0;
      font-size: 1.7rem;
      text-align: justify;

   }

   h1, h2, h3, h4, h5, h6 {
      margin: 0;
      font-family: ${theme.fonts.secondary};
   }

   textarea {
      font-family: ${theme.fonts.primary};
   }

   a {
      color: inherit;
      cursor: pointer;
      text-decoration: none;
   }
`;

export default GlobalStyle;
