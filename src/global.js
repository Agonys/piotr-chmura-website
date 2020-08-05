import { createGlobalStyle } from 'styled-components';
import { theme } from './theme';


const GlobalStyle = createGlobalStyle`
   @import url("https://fonts.googleapis.com/css2?family=Rubik:wght@400;500&display=swap");

   *, *::before, *::after {
      box-sizing: border-box;
   }

   html {
      font-size: 10px;
   }

   body {
      overflow-x: hidden;
      margin: 0;
      padding: 0;
      font-family: ${theme.fonts.primary}, sans-serif;
      color: ${theme.colors.primary};
      background-color: ${theme.backgrounds.bright};
   }

   p {
      margin: 0;
   }
`;

export default GlobalStyle;
