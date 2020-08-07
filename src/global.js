import { createGlobalStyle } from 'styled-components';
import { theme } from './theme';


const GlobalStyle = createGlobalStyle`
   @import url("https://fonts.googleapis.com/css2?family=Rubik:wght@400;500&display=swap");

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
      color: ${theme.colors.primary};
      background-color: ${theme.backgrounds.light};
   }

   p {
      margin: 0;
      font-size: 1.8rem;
   }

   h1, h3, h4, h5, h6 {
      color: ${theme.colors.primary};
   }

   h2 {
      color: ${theme.colors.secondary};
   }

   a {
      text-decoration: none;
      color: ${theme.colors.secondary};
      transition: ${theme.transitions.ease};

      &:hover {
         color: ${theme.colors.primary};
      }
   }
`;

export default GlobalStyle;
