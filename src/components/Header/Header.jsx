"use client";

import React from "react";
import Logo from "../Logo";
import styled from "styled-components";
import NavLink from "../NavLink";

function Header() {
  return (
    <Wrapper>
      <Navigation>
        <Logo variant='dark' />
        <LinksWrapper>
          <NavLink href='/about'>Our Company</NavLink>
          <NavLink href='/locations'>Locations</NavLink>
          <NavLink href='/contact'>Contact</NavLink>
        </LinksWrapper>
      </Navigation>
    </Wrapper>
  );
}

const Wrapper = styled.header`
  margin-top: 64px;
  margin-bottom: 64px;
  display: flex;
  gap: 42px;
`;

const Navigation = styled.nav`
  width: 100%;
  display: flex;
  gap: 42px;
`;

const LinksWrapper = styled.div`
  /* optical alignment */
  transform: translateY(1px);
  margin-left: auto;
  display: flex;
  align-items: center;
  gap: 42px;
`;

export default Header;
