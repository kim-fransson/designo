"use client";

import GetInTouch from "@/components/GetInTouch";
import VisuallyHidden from "@/components/VisuallyHidden";
import { WEIGHTS } from "@/constants";
import Image from "next/image";
import styled from "styled-components";

export default function Locations() {
  return (
    <Wrapper>
      <VisuallyHidden as='div'>
        <h1>Locations</h1>
      </VisuallyHidden>
      <LocationsWrapper>
        <LocationWrapper>
          <Location>
            <Heading>Canada</Heading>
            <TextWrapper>
              <Address>
                <Title>Designo Central Office</Title>
                <Text>3886 Wellington Street</Text>
                <Text>Toronto, Ontario M9C 3J5</Text>
              </Address>

              <ContactLinks>
                <Title>Contact</Title>
                <ContactLink href='tel:+12538638967'>
                  P : +1 253-863-8967
                </ContactLink>
                <ContactLink href='mailto:contact@designo.co'>
                  M : contact@designo.co
                </ContactLink>
              </ContactLinks>
            </TextWrapper>
          </Location>
          <ImageWrapper>
            <Image
              src='/images/locations/desktop/image-map-canada.png'
              alt=''
              width={375}
              height={320}
            />
          </ImageWrapper>
        </LocationWrapper>

        <LocationWrapper>
          <ImageWrapper>
            <Image
              src='/images/locations/desktop/image-map-australia.png'
              alt=''
              width={375}
              height={320}
            />
          </ImageWrapper>
          <Location>
            <Heading>Australia</Heading>
            <TextWrapper>
              <Address>
                <Title>Designo AU Office</Title>
                <Text>19 Balonne Street</Text>
                <Text>New South Wales 2443</Text>
              </Address>

              <ContactLinks>
                <Title>Contact</Title>
                <ContactLink href='tel:+61267209092'>
                  P: (02) 6720 9092
                </ContactLink>
                <ContactLink href='mailto:contact@designo.au'>
                  M : contact@designo.au
                </ContactLink>
              </ContactLinks>
            </TextWrapper>
          </Location>
        </LocationWrapper>

        <LocationWrapper>
          <Location>
            <Heading>United Kingdom</Heading>
            <TextWrapper>
              <Address>
                <Title>Designo UK Office</Title>
                <Text>13 Colorado Way</Text>
                <Text>Rhyd-y-fro SA8 9GA</Text>
              </Address>

              <ContactLinks>
                <Title>Contact</Title>
                <ContactLink href='tel:+447831151400'>
                  P : 078 3115 1400
                </ContactLink>
                <ContactLink href='mailto:contact@designo.co'>
                  M : contact@designo.uk
                </ContactLink>
              </ContactLinks>
            </TextWrapper>
          </Location>
          <ImageWrapper>
            <Image
              src='/images/locations/desktop/image-map-united-kingdom.png'
              alt=''
              width={375}
              height={320}
            />
          </ImageWrapper>
        </LocationWrapper>
      </LocationsWrapper>

      <GetInTouchWrapper>
        <GetInTouch />
      </GetInTouchWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 160px;
`;

const LocationsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

const LocationWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
`;

const Location = styled.div`
  grid-column: span 2;
  display: flex;
  flex-direction: column;
  gap: 24px;
  background: var(--color-light-peach);
  padding: 85px 95px;
  border-radius: 15px;
  background: hsla(14, 77%, 97%, 1);
  background-image: url("/images/shared/desktop/bg-pattern-two-circles.svg");
  background-repeat: no-repeat;
  background-position: left bottom;
`;

const Heading = styled.h2`
  font-weight: ${WEIGHTS.medium};
  font-size: ${40 / 16}rem;
  line-height: ${48 / 16}rem;
  color: var(--color-peach);
`;
const TextWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;
const Address = styled.div``;

const Title = styled.h3`
  font-weight: ${WEIGHTS.bold};
  font-size: 1rem;
  line-height: ${26 / 16}rem;
`;

const Text = styled.p`
  line-height: ${26 / 16}rem;
`;

const ContactLinks = styled.div`
  display: flex;
  flex-direction: column;
`;

const ContactLink = styled.a`
  text-decoration: none;
  color: inherit;
  line-height: ${26 / 16}rem;
`;

const ImageWrapper = styled.div`
  border-radius: 15px;
  /* show borders */
  overflow: hidden;
`;

const GetInTouchWrapper = styled.div`
  margin-bottom: -75px;
`;
