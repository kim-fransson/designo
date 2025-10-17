"use client";

import React from "react";
import styled, { keyframes } from "styled-components";
import * as Dialog from "@radix-ui/react-dialog";

import Link from "next/link";

const MobileMenu = ({ isOpen, onDismiss }) => {
  return (
    <Dialog.Root open={isOpen} onOpenChange={onDismiss}>
      <Dialog.Portal>
        <Overlay />
        <ContentWrapper>
          <Content>
            <NavLink href='/about'>Our company</NavLink>
            <NavLink href='/locations'>Locations</NavLink>
            <NavLink href='/contact'>Contact</NavLink>
          </Content>
        </ContentWrapper>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const ContentWrapper = styled(Dialog.Content)`
  position: fixed;
  display: flex;
  flex-direction: column;
  top: 92px;
  right: 0;
  left: 0;
  bottom: 0;

  @media (prefers-reduced-motion: no-preference) {
    animation: ${fadeIn} 500ms ease-out both;
    animation-delay: 200ms;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  background: var(--color-black);
  color: var(--color-white);
  padding: 48px 24px;
`;

const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  top: 92px;
  background: hsl(0deg 0% 0% / 50%);
  height: 100%;
  width: 100%;
  animation: ${fadeIn} 500ms ease-out both;
  animation-delay: 100ms;
`;

const NavLink = styled(Link)`
  font-size: ${24 / 16}rem;
  letter-spacing: ${2 / 16}rem;
  text-decoration: none;
  color: inherit;
  text-transform: uppercase;
`;

export default MobileMenu;
