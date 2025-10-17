"use client";

import VisuallyHidden from "@/components/VisuallyHidden";
import { QUERIES, WEIGHTS } from "@/constants";
import Image from "next/image";
import styled from "styled-components";
import { LOCATIONS } from "./locations";
import Heading from "@/components/Heading";

export default function Locations() {
  return (
    <>
      <VisuallyHidden as='div'>
        <h1>Locations</h1>
      </VisuallyHidden>

      <LocationsWrapper>
        {LOCATIONS.map((location) => (
          <LocationWrapper key={location.country}>
            {location.imagePosition === "left" && (
              <Picture>
                <source
                  media={QUERIES.tabletAndSmaller}
                  srcSet={location.image.tablet}
                />
                <img src={location.image.desktop} alt='' />
              </Picture>
            )}

            <Location id={location.id}>
              <HeadingWrapper>
                <Heading level={2}>{location.country}</Heading>
              </HeadingWrapper>
              <TextWrapper>
                <Address>
                  <Title>{location.officeName}</Title>
                  {location.address.map((line, i) => (
                    <Text key={i}>{line}</Text>
                  ))}
                </Address>

                <ContactLinks>
                  <Title>Contact</Title>
                  <ContactLink href={`tel:${location.contact.phone}`}>
                    P : {location.contact.phone}
                  </ContactLink>
                  <ContactLink
                    href={`mailto:${location.contact.email}`}
                  >
                    M : {location.contact.email}
                  </ContactLink>
                </ContactLinks>
              </TextWrapper>
            </Location>

            {location.imagePosition === "right" && (
              <Picture>
                <source
                  media={QUERIES.tabletAndSmaller}
                  srcSet={location.image.tablet}
                />
                <img src={location.image.desktop} alt='' />
              </Picture>
            )}
          </LocationWrapper>
        ))}
      </LocationsWrapper>
    </>
  );
}

const LocationsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;

  @media ${QUERIES.tabletAndSmaller} {
    gap: 120px;
  }
`;

const LocationWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;

  @media ${QUERIES.tabletAndSmaller} {
    grid-template-columns: 1fr;
    grid-auto-rows: 326px;
    gap: 24px;
  }

  @media ${QUERIES.phoneAndSmaller} {
    grid-auto-rows: 375px;
    gap: 0px;
    margin: 0 -24px;
  }
`;

const Location = styled.div`
  grid-column: span 2;
  display: flex;
  flex-direction: column;
  gap: 24px;
  background: var(--color-light-peach);
  padding: 85px 95px;
  border-radius: 15px;
  background: var(--color-very-light-peach);
  background-image: url("/images/shared/desktop/bg-pattern-two-circles.svg");
  background-repeat: no-repeat;
  background-position: left bottom;
  scroll-margin-top: 6rem;

  @media ${QUERIES.tabletAndSmaller} {
    padding: 88px 75px;
    grid-column: revert;
  }

  @media ${QUERIES.phoneAndSmaller} {
    border-radius: revert;
    padding: 80px 24px;
  }
`;

const HeadingWrapper = styled.div`
  color: var(--color-peach);

  @media ${QUERIES.phoneAndSmaller} {
    text-align: center;
  }
`;
const TextWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media ${QUERIES.phoneAndSmaller} {
    text-align: center;
    grid-template-columns: 1fr;
    justify-items: center;
    gap: 24px;
  }
`;
const Address = styled.div``;

const Title = styled.h3`
  font-weight: ${WEIGHTS.bold};
  font-size: 1rem;
`;

const Text = styled.p``;

const ContactLinks = styled.div`
  display: flex;
  flex-direction: column;
`;

const ContactLink = styled.a`
  text-decoration: none;
  color: inherit;
`;

const Picture = styled.picture`
  border-radius: 15px;
  /* show borders */
  overflow: hidden;
  height: 100%;

  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media ${QUERIES.tabletAndSmaller} {
    grid-column: revert;
    grid-row: 1;
  }

  @media ${QUERIES.phoneAndSmaller} {
    border-radius: revert;
  }
`;
