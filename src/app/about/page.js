"use client";

import Leaf from "@/components/Leaf";
import LocationLink from "@/components/LocationLink";
import VisuallyHidden from "@/components/VisuallyHidden";
import { WEIGHTS } from "@/constants";
import Image from "next/image";
import styled from "styled-components";

export default function About() {
  return (
    <>
      {/* background image for hero */}
      <VisuallyHidden>
        <Image
          src='/images/about/desktop/bg-pattern-hero-about-desktop.svg'
          width={640}
          height={640}
          alt=''
          priority={true}
          fetchPriority='high'
        />
      </VisuallyHidden>
      <Wrapper>
        <Hero>
          <InnerHeroWrapper>
            <HeroTitle>About us</HeroTitle>
            <HeroText>
              Founded in 2010, we are a creative agency that produces
              lasting results for our clients. We’ve partnered with
              many startups, corporations, and nonprofits alike to
              craft designs that make real impact. We’re always
              looking forward to creating brands, products, and
              digital experiences that connect with our clients’
              audiences.
            </HeroText>
          </InnerHeroWrapper>
          <ImageWrapper>
            <Image
              src='/images/about/desktop/image-about-hero.jpg'
              width={476}
              height={480}
              alt=''
              priority={true}
              fetchPriority='high'
            />
          </ImageWrapper>
        </Hero>

        <Section>
          <ImageWrapper>
            <Image
              width={476}
              height={640}
              src='/images/about/desktop/image-world-class-talent.jpg'
              alt=''
            />
          </ImageWrapper>
          <InnerSectionWrapper>
            <SectionTitle>World-class talent</SectionTitle>
            <SectionText>
              We are a crew of strategists, problem-solvers, and
              technologists. Every design is thoughtfully crafted from
              concept to launch, ensuring success in its given market.
              We are constantly updating our skills in a myriad of
              platforms.
            </SectionText>
            <SectionText>
              Our team is multi-disciplinary and we are not merely
              interested in form — content and meaning are just as
              important. We give great importance to craftsmanship,
              service, and prompt delivery. Clients have always been
              impressed with our high-quality outcomes that
              encapsulates their brand’s story and mission.
            </SectionText>
          </InnerSectionWrapper>
        </Section>

        <VisuallyHidden as='div'>
          <h2>Locations</h2>
        </VisuallyHidden>
        <LocationLinks>
          <LocationLink id='canada'>Canada</LocationLink>
          <LocationLink id='australia'>Australia</LocationLink>
          <LocationLink id='united-kingdom'>
            United Kingdom
          </LocationLink>
        </LocationLinks>

        <Section>
          <InnerSectionWrapper position='left'>
            <SectionTitle>The real deal</SectionTitle>
            <SectionText>
              As strategic partners in our clients’ businesses, we are
              ready to take on any challenge as our own. Solving real
              problems require empathy and collaboration, and we
              strive to bring a fresh perspective to every
              opportunity. We make design and technology more
              accessible and give you tools to measure success.
            </SectionText>
            <SectionText>
              We are visual storytellers in appealing and captivating
              ways. By combining business and marketing strategies, we
              inspire audiences to take action and drive real results.
            </SectionText>
          </InnerSectionWrapper>
          <ImageWrapper>
            <Image
              width={476}
              height={640}
              src='/images/about/desktop/image-real-deal.jpg'
              alt=''
            />
          </ImageWrapper>
        </Section>
        <LeafOne />
        <LeafTwo />
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 160px;
`;

const Hero = styled.div`
  display: flex;
  border-radius: 15px;
  /* show border radius */
  overflow: hidden;
`;

const InnerHeroWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 34px;
  color: var(--color-white);
  background: var(--color-peach);
  padding: 135px 82px 135px 95px;
  background-image: url("/images/about/desktop/bg-pattern-hero-about-desktop.svg");
  background-position: 0% 100%;
  background-repeat: no-repeat;
`;

const HeroTitle = styled.h1`
  text-transform: capitalize;
  font-weight: ${WEIGHTS.medium};
  font-size: ${48 / 16}rem;
  line-height: ${48 / 16}rem;
`;

const Text = styled.p`
  line-height: ${26 / 16}rem;
`;

const HeroText = styled(Text)`
  max-width: ${458 / 16}rem;
`;

const ImageWrapper = styled.div`
  & img {
    height: 100%;
    object-fit: cover;
  }
`;

const LocationLinks = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

const Section = styled.section`
  display: flex;
  border-radius: 15px;
  /* show border radius */
  overflow: hidden;
`;
const InnerSectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  background: var(--color-very-light-peach);
  color: var(--color-dark-gray);
  padding: 154px 96px 154px 94px;
  background-image: url("/images/shared/desktop/bg-pattern-two-circles.svg");
  background-position: ${(props) =>
    props.position === "left" ? "0% 100%" : "-300% 100%"};
  background-repeat: no-repeat;
`;

const SectionTitle = styled.h2`
  color: var(--color-peach);
  font-weight: ${WEIGHTS.medium};
  font-size: ${40 / 16}rem;
  line-height: ${48 / 16}rem;
`;

const SectionText = styled(Text)`
  max-width: ${445 / 16}rem;
`;

const LeafOne = styled(Leaf)`
  left: 0px;
  top: 475px;
`;

const LeafTwo = styled(Leaf)`
  right: -400px;
  top: 1777px;
`;
