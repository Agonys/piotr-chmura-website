import React, { Component } from 'react';
import styled from 'styled-components';
import logo from 'assets/images/Logo_flat.svg';
import scrollTo from 'utils/scrollTo';

const NavigationContainer = styled.header`
   position: fixed;
   z-index: 10;
   width: 100%;
   display: grid;
   grid-template-columns: repeat(2, max-content);
   grid-template-rows: 70px;
   background-color: rgba(0,0,0,.7);
   justify-content: space-between;
   align-items: center;
`;

const StyledLogo = styled.a`
   margin-left: 15px;
`;

const StyledMenuList = styled.ul`
   list-style-type: none;
   margin: 0;
   padding: 0;
`;

const StyledMenuItem = styled.li`
   position: relative;
   display: inline-block;
   font-size: 1.6rem;
   font-weight: 500;
   color: ${({ theme }) => theme.colors.primary};
   text-transform: uppercase;
   cursor: pointer;
   padding: 10px 15px;
   margin: 0 10px;
   transition: ${({ theme }) => theme.transitions.ease};

   &:before, &:after {
      position: absolute;
      bottom: 0;
      content: '';
      width: 0;
      height: 2px;
      background-color: ${({ theme }) => theme.colors.secondary};
      transition: ${({ theme }) => theme.transitions.ease};
   }

   &:before { left: 50% }
   &:after { right: 50% }

   &:hover {
      color: ${({ theme }) => theme.colors.secondary};

      &:before, &:after { width: 50% }
   }

   &:last-of-type { margin-right: 50px }
   &:focus { outline: none }

`;

class Navigation extends Component {
   constructor(props) {
      super(props);

      this.state = {}
   }

   handleClick(e) {
      e.preventDefault();
      window.scrollTo({
         top: 0
      });
   }

   render() {

      //scroll to element in site when user clicks on logo or "li".
      return (
         <NavigationContainer id="navigation">
            <StyledLogo href="#" onClick={this.handleClick}>
               <img src={logo} width="48" alt="Piotr Chmura Website" />
            </StyledLogo>
            <nav>
               <StyledMenuList>
                  <StyledMenuItem
                     tabIndex={0}
                     onClick={() => scrollTo("home")}>Home
                  </StyledMenuItem>

                  <StyledMenuItem
                     tabIndex={0}
                     onClick={() => scrollTo("about")}>O mnie
                  </StyledMenuItem>

                  <StyledMenuItem
                     tabIndex={0}
                     onClick={() => scrollTo("skills")}>Umiejętności
                  </StyledMenuItem>

                  <StyledMenuItem
                     tabIndex={0}
                     onClick={() => scrollTo("portfolio")}>Portfolio
                  </StyledMenuItem>

                  <StyledMenuItem
                     tabIndex={0}
                     onClick={() => scrollTo("contact")}>Kontakt
                  </StyledMenuItem>
               </StyledMenuList>
            </nav>
         </NavigationContainer>
      )
   }
}

export default Navigation;
