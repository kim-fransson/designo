"use client";

import React from "react";
import styled from "styled-components";
import MaxWidthWrapper from "../MaxWidthWrapper";
import Logo from "../Logo";
import NavLink from "../NavLink";
import { WEIGHTS } from "@/constants";
import SocialLink from "../SocialLink";
import { usePathname } from "next/navigation";

function Footer() {
  const pathname = usePathname();
  const showContactUs = pathname !== "/contact";
  return (
    <Wrapper
      style={{ "--padding-top": showContactUs ? "144px" : "72px" }}
    >
      <MaxWidthWrapper as='div'>
        <TopRow>
          <Logo />
          <LinksWrapper>
            <NavLink href='/about'>Our Company</NavLink>
            <NavLink href='/locations'>Locations</NavLink>
            <NavLink href='/contact'>Contact</NavLink>
          </LinksWrapper>
        </TopRow>
        <Divider />
        <BottomRow>
          <Location>
            <Title>Designo Central Office</Title>
            <Text>3886 Wellington Street</Text>
            <Text>Toronto, Ontario M9C 3J5</Text>
          </Location>
          <ContactLinks>
            <Title>Contact Us (Central Office)</Title>
            <ContactLink href='tel:+12538638967'>
              P : +1 253-863-8967
            </ContactLink>
            <ContactLink href='mailto:contact@designo.co'>
              M : contact@designo.co
            </ContactLink>
          </ContactLinks>
          <SocialLinks>
            <SocialLink id='facebook' />
            <SocialLink id='youtube' />
            <SocialLink id='twitter' />
            <SocialLink id='pinterest' />
            <SocialLink id='instagram' />
          </SocialLinks>
        </BottomRow>
      </MaxWidthWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.footer`
  background: var(--color-black);
  color: var(--color-white);
  padding-top: var(--padding-top);
  padding-bottom: 72px;
`;

const TopRow = styled.nav`
  display: flex;
`;

const LinksWrapper = styled.div`
  /* optical alignment */
  transform: translateY(1px);
  margin-left: auto;
  display: flex;
  align-items: center;
  gap: 42px;
`;

const Divider = styled.div`
  margin: 40px 0px;
  height: 1px;
  width: 100%;
  background: var(--color-white);
  opacity: 10%;
`;

const BottomRow = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

const Location = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.p`
  font-weight: ${WEIGHTS.bold};
  line-height: ${26 / 16}rem;
  opacity: 50%;
`;

const ContactLinks = styled.div`
  display: flex;
  flex-direction: column;
`;

const ContactLink = styled.a`
  text-decoration: none;
  color: inherit;
  font-weight: ${WEIGHTS.bold};
  line-height: ${26 / 16}rem;
  opacity: 50%;
`;

const Text = styled.p`
  line-height: ${26 / 16}rem;
  opacity: 50%;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 18px;
  justify-self: end;
  align-self: end;
`;

export default Footer;
