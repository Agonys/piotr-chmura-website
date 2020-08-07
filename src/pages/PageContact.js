import React from 'react';
import styled, {css} from 'styled-components';
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
   padding: 50px 35px;
   display: grid;
   grid-template-columns: 1fr 1fr;
   column-gap: 70px;
   background-color: ${({ theme }) => theme.backgrounds.dark};
`;

const StyledForm = styled.form`
   display: grid;
   column-gap: 40px;
   grid-template-columns: 1fr 1fr;
   grid-template-areas:
      "name email"
      "subject subject"
      "content content"
      ". submit";
`;

const FormInputContainer = styled.div`
   margin-top: 40px;
   position: relative;
   display: inline-block;

   &.form__name { grid-area: name }
   &.form__email { grid-area: email }
   &.form__subject { grid-area: subject }
   &.form__content { grid-area: content }
`;

const StyledTextInput = styled(({tag, children, ...props}) => React.createElement(tag, props, children))`
   width: 100%;
   height: 50px;
   padding: 0 0 0 15px;
   border: 1px solid #8A8A8A;
   border-radius: 3px;
   background-color: ${({ theme }) => theme.backgrounds.light};
   caret-color: ${({ theme }) => theme.colors.primary};
   color: ${({ theme }) => theme.colors.primary};
   font-size: 1.7rem;
   font-family: ${({ theme }) => theme.fonts.secondary};


   height: ${({ tag }) => tag == 'textarea' && "150px"};
   resize: ${({ tag }) => tag == 'textarea' && "vertical"};
   min-height: ${({ tag }) => tag == 'textarea' && "50px"};

   &:focus {
      outline: none;
   }

   &:valid + label, &:focus + label {
      top: -25px;
      padding-left: 0;
      font-size: 1.4rem;
   }

`;

StyledTextInput.defaultProps = {
   tag: 'input'
}


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

const StyledSubmit = styled.input`
   font-family: ${({ theme }) => theme.fonts.secondary};
   font-size: 1.6rem;
   font-weight: 500;
   color: ${({ theme }) => theme.colors.primary};
   padding: 12px 24px;
   margin-top: 25px;
   border: 2px solid ${({ theme }) => theme.colors.secondary};
   border-radius: 3px;
   background-color: transparent;
   width: 200px;
   text-align: center;
   cursor: pointer;
   grid-area: submit;
   justify-self: end;
   transition: ${({ theme }) => theme.transitions.ease};

   &:hover {
      background-color: ${({ theme }) => theme.backgrounds.special};
      color: ${({ theme }) => theme.colors.dark};
   }
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
            <StyledForm>
               <FormInputContainer className="form__name">
                  <StyledTextInput
                     type="text"
                     id="form_name"
                     required
                  />
                  <StyledLabel for="form_name">Imię i nazwisko</StyledLabel>
               </FormInputContainer>

               <FormInputContainer className="form__email">
                  <StyledTextInput
                     type="text"
                     id="form_email"
                     required
                  />
                  <StyledLabel for="form_email">E-mail</StyledLabel>
               </FormInputContainer>

               <FormInputContainer className="form__subject">
                  <StyledTextInput
                     type="text"
                     id="form_subject"
                     required
                  />
                  <StyledLabel for="form_subject">Temat</StyledLabel>
               </FormInputContainer>

               <FormInputContainer className="form__content">
                  <StyledTextInput
                     tag="textarea"
                     id="form_content"
                     required
                  />
                  <StyledLabel for="form_content">Treść wiadomości</StyledLabel>
               </FormInputContainer>

               <StyledSubmit value="Wyślij wiadomość"/>

            </StyledForm>
         </div>

         <div>
            <StyledH3>Pozostańmy w kontakcie</StyledH3>
         </div>
      </ContactContainer>
      </SectionTemplate>
   )
}
export default PageContact;
