"use client";

import React from "react";
import Logo from "../Logo";
import styled from "styled-components";
import NavLink from "../NavLink";

function Header() {
  return (
    <Wrapper>
      <Logo variant='dark' />
      <LinksWrapper>
        <NavLink href='/about'>Our Company</NavLink>
        <NavLink href='/locations'>Locations</NavLink>
        <NavLink href='/contact'>Contact</NavLink>
      </LinksWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.header`
  margin-top: 64px;
  display: flex;
  gap: 42px;
`;

const LinksWrapper = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;
  gap: 42px;
`;

export default Header;
