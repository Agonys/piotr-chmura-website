import React, { Suspense, lazy } from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './global';
import { Helmet } from 'react-helmet';
import Navigation from 'components/Navigation/Navigation';
import Footer from 'components/Footer/Footer';
import Modal from 'components/Modal/Modal';
import { theme } from 'theme';

import icon from 'assets/images/favicon.ico';

import AOS from 'aos';
import 'aos/dist/aos.css';

import { PageHero } from 'pages';

const PageAbout = lazy(() => import('pages/PageAbout')),
      PageSkills = lazy(() => import('pages/PageSkills')),
      PagePortfolio = lazy(() => import('pages/PagePortfolio')),
      PageContact = lazy(() => import('pages/PageContact'));


export default class App extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         isModalOpen: false,
         modalData: {
            title: "Tytuł projektu",
            description: "Opis projektu",
            backgroundImage: "",
         },
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

   componentDidMount() {
      const body = document.querySelector("body");
      const root = document.querySelector("#root");
      const preloader = document.querySelector(".preloader");

      const removeAos = () => {
         root.style.opacity = "1";
         preloader.style.opacity = "0";
         body.style.overflowY = "visible";
         setTimeout(() => { preloader.style.display = "none" }, 500);

         AOS.init({
            offset: 300,
            duration: 800,
            once: true,
            easing: 'ease-out-cubic',
         });

         window.removeEventListener("load", removeAos);
      }

      window.addEventListener("load", removeAos);
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
               <meta
                  name="Description"
                  content="Cześć! Nazywam się Piotr Chmura. Jestem junior front-end developerem i zajmuje się tworzeniem nowoczesnych i responsywnych stron internetowych." />

               <link rel="icon" href={icon} />

               <meta
                  name="og:title"
                  property="og:title"
                  content="Piotr Chmura | Junior Front-end Developer" />
               <meta
                  property="og:description"
                  content="Cześć! Nazywam się Piotr Chmura. Jestem junior front-end developerem i zajmuje się tworzeniem nowoczesnych i responsywnych stron internetowych." />

               <link rel="preload" href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;500&display=swap" as="style" />
               <link href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;500&display=swap" rel="stylesheet" />
            </Helmet>
            <Suspense fallback={<div>Wczytywanie...</div>}>
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
            </Suspense>
         </ThemeProvider>
      )
   }
}
