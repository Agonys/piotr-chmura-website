import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './global';
import { theme } from './theme';

import Navigation from 'components/Navigation/Navigation';
import Footer from 'components/Footer/Footer';
import {
   PageHero,
   PageAbout,
   PageSkills,
   PagePortfolio,
   PageContact
} from "./pages";


function App() {
  return (
      <ThemeProvider theme={theme}>
         <GlobalStyle />
         <>
            <Navigation />
            <PageHero />
            <PageAbout />
            <PageSkills />
            <PagePortfolio />
            <PageContact />
            <Footer />
         </>
      </ThemeProvider>
  );
}

export default App;
