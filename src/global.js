import { createGlobalStyle } from 'styled-components';
import { theme } from 'theme';

const AOS_DISTANCE = "200px";

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
      background-color: ${theme.colors.grey};

      &::-webkit-scrollbar {
         width: 12px;
         background-color: ${theme.colors.grey};
         border: 1px solid ${theme.colors.black};
      }

      &::-webkit-scrollbar-track {
         box-shadow: inset 2px 0 6px rgba(0, 0, 0, 0.4);
      }

      &::-webkit-scrollbar-thumb {
         background-color: ${theme.colors.special};
         border-radius: 5px;
         box-shadow: inset 2px 0 6px rgba(0, 0, 0, 0.3);
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

   [data-aos='fade-right'] {
     transform: translateX(-${AOS_DISTANCE});
   }

   [data-aos='fade-left'] {
     transform: translateX(${AOS_DISTANCE});
   }

   [data-aos='fade-down'] {
     transform: translateY(${AOS_DISTANCE});
   }
`;

export default GlobalStyle;
