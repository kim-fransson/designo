"use client";

import React from "react";
import Logo from "../Logo";
import styled from "styled-components";
import NavLink from "../NavLink";
import { QUERIES } from "@/constants";
import MobileMenu from "../MobileMenu";
import CloseIcon from "@/assets/icon-close.svg";
import MenuIcon from "@/assets/icon-hamburger.svg";
import VisuallyHidden from "../VisuallyHidden";

function Header() {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  function toggleMobileMenu() {
    setShowMobileMenu((current) => !current);
  }

  return (
    <Wrapper>
      <Navigation>
        <LogoWrapper>
          <Logo variant='dark' />
        </LogoWrapper>
        <LinksWrapper>
          <NavLink href='/about'>Our Company</NavLink>
          <NavLink href='/locations'>Locations</NavLink>
          <NavLink href='/contact'>Contact</NavLink>
        </LinksWrapper>
        <GhostButton onClick={toggleMobileMenu}>
          <VisuallyHidden>
            {showMobileMenu ? "Close menu" : "Open menu"}
          </VisuallyHidden>
          {showMobileMenu ? <CloseIcon /> : <MenuIcon />}
        </GhostButton>
      </Navigation>

      <MobileMenu
        isOpen={showMobileMenu}
        onDismiss={() => setShowMobileMenu(false)}
      />
    </Wrapper>
  );
}

const Wrapper = styled.header`
  padding-top: 64px;
  padding-bottom: 64px;
  display: flex;
  gap: 42px;

  @media ${QUERIES.phoneAndSmaller} {
    padding: 34px 24px;
  }
`;

const Navigation = styled.nav`
  width: 100%;
  display: flex;
  gap: clamp(1rem, 4.6vw - 0.5rem, 2.6rem);
`;

const LogoWrapper = styled.div``;

const LinksWrapper = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;
  gap: clamp(1rem, 4.6vw - 0.5rem, 2.6rem);
  white-space: nowrap;

  @media ${QUERIES.phoneAndSmaller} {
    display: none;
  }
`;

const GhostButton = styled.button`
  cursor: pointer;
  margin-left: auto;
  background: none;
  padding: 0px;
  border: none;
  display: none;

  @media ${QUERIES.phoneAndSmaller} {
    display: revert;
  }
`;

export default Header;
