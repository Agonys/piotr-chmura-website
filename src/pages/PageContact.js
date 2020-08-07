import React from 'react';
import styled from 'styled-components';
import SectionTemplate from 'components/SectionTemplate/SectionTemplate';
import H3 from 'components/Text/ArticleHeader';

const StyledH3 = styled(H3)`
   width: max-content;
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
   padding: 50px 35px;
   display: grid;
   grid-template-columns: 1fr 1fr;
`;

const FormInputContainer = styled.div`
   margin-top: 50px;
   position: relative;
   display: inline-block;
`;

const StyledInput = styled.input`
   width: 280px;
   height: 50px;
   padding: 0 0 0 15px;
   border: 1px solid #8A8A8A;
   border-radius: 3px;
   background-color: ${({ theme }) => theme.backgrounds.light};
   caret-color: ${({ theme }) => theme.colors.primary};
   color: ${({ theme }) => theme.colors.primary};
   font-size: 1.7rem;
   font-family: ${({ theme }) => theme.fonts.secondary};

   &:focus {
      outline: none;
   }

   &:valid + label, &:focus + label {
      top: -25px;
      padding-left: 0;
      font-size: 1.4rem;
   }
`;

const StyledLabel = styled.label`
   font-family: ${({ theme }) => theme.fonts.primary};
   font-size: 1.6rem;
   cursor: text;
   position: absolute;
   top: 15px;
   left: 0;
   padding-left: 15px;
   transition: ${({ theme }) => theme.transitions.ease};
   color: ${({ theme }) => theme.colors.formPlaceholder};
`;

const PageContact = () => {
   return (
      <SectionTemplate
         id="contact"
         heading="Kontakt"
      >
      <ContactContainer>
         <div>
            <StyledH3>Skontaktuj się ze mną</StyledH3>
            <form>
               <FormInputContainer>
                  <StyledInput type="text" id="form_name" required />
                  <StyledLabel for="form_name">Imię i nazwisko</StyledLabel>
               </FormInputContainer>
               <FormInputContainer>
                  <StyledInput type="text" id="form_email" required />
                  <StyledLabel for="form_email">E-mail</StyledLabel>
               </FormInputContainer>
            </form>
         </div>

         <div>
            <StyledH3 style={{margin-left: "30px"}}>Pozostańmy w kontakcie</StyledH3>
         </div>
      </ContactContainer>
      </SectionTemplate>
   )
}
export default PageContact;
