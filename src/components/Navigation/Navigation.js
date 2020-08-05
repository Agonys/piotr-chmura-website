import React, { Component } from 'react';
import styled from 'styled-components';
import logo from 'assets/images/Logo_flat.svg';

const NavigationWrapper = styled.header`
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

const StyledImage = styled.a`
   margin-left: 15px;
`;

const StyledMenuList = styled.ul`
   list-style-type: none;
   margin: 0;
   padding: 0;
`;

const StyledMenuItem = styled.li`
   color: ${({ theme }) => theme.colors.primary};
   font-size: 1.6rem;
   text-decoration: none;
   display: inline-block;
   padding: 10px 0;
   margin: 0 25px;
   font-weight: 500;
   text-transform: uppercase;
   cursor: pointer;
   transition: all .3s ease;

   &:after {
      content: '';
      display: block;
      width: 0;
      height: 2px;
      position: relative;
      top: 2px;
      background-color: ${({ theme }) => theme.colors.secondary};
      transition: all .3s ease;
   }

   &:hover {
      color: ${({ theme }) => theme.colors.secondary};

      &:after {
         width: 100%;
      }
   }

   &:last-of-type {
      margin-right: 50px;
   }

`;

class Navigation extends Component {
   constructor(props) {
      super(props);

      this.state = {}
   }

   render() {

      //scroll to element in site when user clicks on logo or "li".
      return (
         <NavigationWrapper>
            <StyledImage href="#">
               <img src={logo} width="48" alt="Piotr Chmura Website" />
            </StyledImage>
            <nav>
               <StyledMenuList>
                  <StyledMenuItem>Home</StyledMenuItem>
                  <StyledMenuItem>O mnie</StyledMenuItem>
                  <StyledMenuItem>Umiejętności</StyledMenuItem>
                  <StyledMenuItem>Portfolio</StyledMenuItem>
                  <StyledMenuItem>Kontakt</StyledMenuItem>
               </StyledMenuList>
            </nav>
         </NavigationWrapper>
      )
   }
}

export default Navigation;
