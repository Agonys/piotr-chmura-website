import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './global';
import { Helmet } from 'react-helmet';
import Navigation from 'components/Navigation/Navigation';
import Footer from 'components/Footer/Footer';
import Modal from 'components/Modal/Modal';
import { theme } from 'theme';
import icon from 'assets/images/favicon.ico';

import {
   PageHero,
   PageAbout,
   PageSkills,
   PagePortfolio,
   PageContact,
} from 'pages';


export default class App extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         isModalOpen: false,
         modalData: {},
      }
      this.openModal = this.openModal.bind(this);
      this.closeModal = this.closeModal.bind(this);
   }

   openModal(props) {
      this.setState({
         isModalOpen: true,
         modalData: props
      });
   }

   closeModal() {
      this.setState({isModalOpen: false});
   }

   componentDidUpdate(_, prevState) {
      if(prevState.isModalOpen !== this.state.isModalOpen) {
         const isModalOpen = this.state.isModalOpen;
         const body = document.querySelector("body");

         isModalOpen
         ? body.style.overflow = "hidden"
         : body.style.overflow = "visible";
      }
   }

   render() {
      return (
         <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Helmet>
               <title>Piotr Chmura | Junior Front-end Developer</title>
               <meta name="description" content="Cześć! Nazywam się Piotr Chmura. Jestem junior front-end developerem i zajmuje się tworzeniem nowoczesnych i responsywnych stron internetowych." />
               <link rel="icon" href={icon} />

               <meta name="og:title" property="og:title" content="Piotr Chmura | Junior Front-end Developer" />
               <meta property="og:description" content="Cześć! Nazywam się Piotr Chmura. Jestem junior front-end developerem i zajmuje się tworzeniem nowoczesnych i responsywnych stron internetowych." />

               <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;500&display=swap" />
            </Helmet>
            <>
               <Navigation />
               <Modal
                  isModalOpen={this.state.isModalOpen}
                  modalData={this.state.modalData}
                  closeModal={this.closeModal}
               />

               <PageHero />
               <PageAbout />
               <PageSkills />
               <PagePortfolio
                  openModal={this.openModal}
               />
               <PageContact />

               <Footer />
            </>
         </ThemeProvider>
      )
   }
}
