/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components/macro';
import { DialogOverlay, DialogContent } from '@reach/dialog';

import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';


const Overlay = styled(DialogOverlay)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: var(--color-backdrop);
  display: flex;
  justify-content: flex-end;

`;

const Content = styled(DialogContent)`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 300px;
  background-color: var(--color-white);
  padding: 32px;
`;

const CloseButton = styled(UnstyledButton)`
  position: absolute;
  top: 10px;
  right: 0;
  padding: 16px;
`;


const MobileNav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const NavLink = styled.a`
  font-size: 1.125rem;  
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-gray-900);
  font-weight: var(--font-weight-medium);
  &:hover {
    color: var(--color-secondary);
  }
`;

const Filler = styled.div`
  flex: 1;
`;

const Footer = styled.footer`
  display: flex; 
  flex-direction: column;
  gap: 14px;
  flex: 1;
  justify-content: flex-end;
  `;

const FooterLink = styled.a`
  text-decoration: none;
  color: var(--color-gray-700);
  font-weight: 500;
  font-size: 0.875rem;
  `;

const MobileMenu = ({ isOpen, onDismiss }) => {
  return (

    <Overlay 
        isOpen={isOpen} 
        onDismiss={onDismiss}
      >
      <Content>
        <CloseButton aria-label='Menu' onClick={onDismiss}>
            <Icon id="close"/>
            <VisuallyHidden>Close</VisuallyHidden>
        </CloseButton>
        <Filler />
        <MobileNav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </MobileNav>
        <Footer>
          <FooterLink href="/terms">Terms and Conditions</FooterLink>
          <FooterLink href="/privacy">Privacy Policy</FooterLink>
          <FooterLink href="/contact">Contact Us</FooterLink>
        </Footer>
      </Content>
    </Overlay>
  );
};



export default MobileMenu;
