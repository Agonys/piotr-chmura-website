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
   padding: 25px 25px 30px 25px;

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
         border: 1px solid ${({ theme }) => theme.colors.white};
         border-radius: 3px;
         caret-color: ${({ theme }) => theme.colors.white};
         font-size: 1.7rem;
         color: ${({ theme }) => theme.colors.white};

         &:focus { outline: none };

         &:focus + span, &:valid + span {
            top: -25px;
            padding-left: 0;
            font-size: 1.4rem;
         }
      }

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

      &:active {
         background-color: ${({ theme }) => theme.backgrounds.special};
         color: ${({ theme }) => theme.colors.black};
      }
   }

   @media ${devices.desktop} {
      padding: 40px;
   }
`;

const MoreInfoContainer = styled.div`
   display: flex;
   flex-direction: column;
   width: 100%;
   padding: 25px 35px 30px 25px;

   p {
      padding-top: 10px;
   }

   @media ${devices.desktop} {
      padding: 40px;
   }
`;

const PageContact = () => {
   return (
      <SectionTemplate
         id="contact"
         heading="Kontakt"
      >
         <ContactContainer>
            <FormContainer>
               <StyledH3>Napisz do mnie</StyledH3>
               <form action="#" method="POST">
                  <label>
                     <input type="text" required/>
                     <span>Imie</span>
                  </label>
                  <label>
                     <input type="text" required/>
                     <span>E-mail</span>
                  </label>
                  <label>
                     <input type="text" required/>
                     <span>Temat</span>
                  </label>
                  <label>
                     <textarea required></textarea>
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
