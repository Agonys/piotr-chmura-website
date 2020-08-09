import { createGlobalStyle } from 'styled-components';
import { theme } from './theme';


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
   }

   p {
      margin: 0;
      font-size: 1.6rem;
      text-align: justify;
   }

   h1, h2, h3, h4, h5, h6 {
      margin: 0;
      font-family: ${theme.fonts.secondary};
   }

`;

export default GlobalStyle;
