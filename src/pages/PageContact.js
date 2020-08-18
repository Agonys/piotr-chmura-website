import React from 'react';
import styled from 'styled-components';
import SectionTemplate from 'templates/SectionTemplate';
import H3 from 'components/Text/H3';
import Widgets from 'components/Widgets/Widgets';
import { devices } from 'theme';

const StyledH3 = styled(H3)`
   width: max-content;
   padding: 0 0 20px;

   &:after {
      position: relative;
      top: 5px;
      content: '';
      display: block;
      width: 60%;
      height: 6px;
      background-color: ${({ theme }) => theme.backgrounds.special};
   }
`;

const ContactContainer = styled.div`
   width: 100%;
   background-color: ${({ theme }) => theme.backgrounds.dark};
   display: flex;
   flex-direction: column;

   @media ${devices.laptop} {
      display: grid;
      grid-template-columns: 1fr 1fr;
   }
`;

const FormContainer = styled.div`
   display: flex;
   flex-direction: column;
   padding: 40px;

   form {
      display: flex;
      flex-direction: column;

      @media ${devices.tablet} {
         display: grid;
         grid-template-columns: 1fr 1fr;
         column-gap: 20px;

         > label {
            grid-column: 1/3;

            &:first-of-type { grid-column: 1/2 }
            &:nth-of-type(2) { grid-column: 2/3 }
         }

         > input {
            grid-column: 1/3;
            justify-self: end;
         }
      }
   }

   label {
      position: relative;
      margin: 18px 0;

      input, textarea {
         width: 100%;
         height: 50px;
         padding: 0 15px;
         background-color: ${({ theme }) => theme.backgrounds.light};
         border: 0;
         border-radius: 3px;
         caret-color: ${({ theme }) => theme.colors.white};
         font-size: 1.7rem;
         color: ${({ theme }) => theme.colors.white};
         transition: ${({ theme }) => theme.transitions.ease};

         &:focus {
            outline: none;
            border-bottom: 1px solid ${({ theme }) => theme.colors.special};
         }
         &:focus + span, &:valid + span {
            top: -25px;
            padding-left: 0;
            font-size: 1.4rem;
         }
      }

      textarea { transition: border .3s ease; }

      textarea {
         min-height: 150px;
         resize: vertical;
         padding: 15px 0 0 15px;
      }

      span {
         position: absolute;
         top: 15px;
         left: 0;
         padding-left: 15px;
         font-family: ${({ theme }) => theme.fonts.primary};
         font-size: 1.6rem;
         color: ${({ theme }) => theme.colors.white};
         transition: ${({ theme }) => theme.transitions.ease};
         cursor: text;
      }
   }

   input[type=submit] {
      width: max-content;
      text-align: center;
      padding: 10px 20px;
      border: 2px solid ${({ theme }) => theme.colors.special};
      border-radius: 3px;
      background-color: transparent;
      align-self: flex-end;
      color: ${({ theme }) => theme.colors.white};
      transition: ${({ theme }) => theme.transitions.ease};
      font-weight: bold;
      cursor: pointer;

      &:active, &:hover {
         background-color: ${({ theme }) => theme.backgrounds.special};
         color: ${({ theme }) => theme.colors.black};
      }
   }
`;

const MoreInfoContainer = styled.div`
   display: flex;
   flex-direction: column;
   width: 100%;
   padding: 40px;

   p { padding-top: 10px; }
`;

const PageContact = () => {
   return (
      <SectionTemplate
         id="contact"
         heading="Kontakt"
      >
         <ContactContainer data-aos="fade-right">
            <FormContainer>
               <StyledH3>Napisz do mnie</StyledH3>
               <form
                  action="https://formsubmit.co/c50100c0bb7e7c8d70eeb1daf5793fc1"
                  method="POST"
               >
                  <label>
                     <input type="text" name="name" required />
                     <span>Imie</span>
                  </label>
                  <label>
                     <input type="email" name="email" required />
                     <span>E-mail</span>
                  </label>
                  <label>
                     <input type="text" name="_subject" required />
                     <span>Temat</span>
                  </label>
                  <label>
                     <textarea name="message" required />
                     <span>Treść wiadomości</span>
                  </label>

                  <input type="submit" value="Wyślij wiadomość" />
               </form>
            </FormContainer>

            <MoreInfoContainer>
               <StyledH3>Zostańmy w kontakcie</StyledH3>
               <p>Jeżeli chcesz porozmawiać o jakiejkolwiek formie współpracy lub po prostu pozostać w kontakcie będzie mi niezmiernie miło i na pewno odpowiem na wiadomość. Możesz wypełnić formularz lub napisać wiadomość na jednym z poniższych portali.</p>
               <Widgets />
            </MoreInfoContainer>
         </ContactContainer>
      </SectionTemplate>
   )
}
export default PageContact;
