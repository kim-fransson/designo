"use client";

import Heading from "@/components/Heading";
import Leaf from "@/components/Leaf";
import LocationLink from "@/components/LocationLink";
import VisuallyHidden from "@/components/VisuallyHidden";
import { QUERIES, WEIGHTS } from "@/constants";
import Image from "next/image";
import styled, { css } from "styled-components";

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
      <Hero>
        <InnerHeroWrapper>
          <HeroTitleWrapper>
            <Heading level={1}>About us</Heading>
          </HeroTitleWrapper>
          <HeroText>
            Founded in 2010, we are a creative agency that produces
            lasting results for our clients. We’ve partnered with many
            startups, corporations, and nonprofits alike to craft
            designs that make real impact. We’re always looking
            forward to creating brands, products, and digital
            experiences that connect with our clients’ audiences.
          </HeroText>
        </InnerHeroWrapper>
        <Picture>
          <source
            media={QUERIES.phoneAndSmaller}
            srcSet='/images/about/mobile/image-about-hero.jpg'
          />
          <source
            media={QUERIES.tabletAndSmaller}
            srcSet='/images/about/tablet/image-about-hero.jpg'
          />
          <img
            src='/images/about/desktop/image-about-hero.jpg'
            alt=''
            priority
            fetchPriority='high'
          />
        </Picture>
      </Hero>

      <Section>
        <Picture>
          <source
            media={QUERIES.phoneAndSmaller}
            srcSet='/images/about/mobile/image-world-class-talent.jpg'
          />
          <source
            media={QUERIES.tabletAndSmaller}
            srcSet='/images/about/tablet/image-world-class-talent.jpg'
          />
          <img
            src='/images/about/desktop/image-world-class-talent.jpg'
            alt=''
            priority
            fetchPriority='high'
          />
        </Picture>
        <InnerSectionWrapper>
          <SectionTitleWrapper>
            <Heading level={2}>World-class talent</Heading>
          </SectionTitleWrapper>
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
            impressed with our high-quality outcomes that encapsulates
            their brand’s story and mission.
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

      <Section position='left'>
        <InnerSectionWrapper position='left'>
          <SectionTitleWrapper>
            <Heading level={2}>The real deal</Heading>
          </SectionTitleWrapper>
          <SectionText>
            As strategic partners in our clients’ businesses, we are
            ready to take on any challenge as our own. Solving real
            problems require empathy and collaboration, and we strive
            to bring a fresh perspective to every opportunity. We make
            design and technology more accessible and give you tools
            to measure success.
          </SectionText>
          <SectionText>
            We are visual storytellers in appealing and captivating
            ways. By combining business and marketing strategies, we
            inspire audiences to take action and drive real results.
          </SectionText>
        </InnerSectionWrapper>
        <Picture>
          <source
            media={QUERIES.phoneAndSmaller}
            srcSet='/images/about/mobile/image-real-deal.jpg'
          />
          <source
            media={QUERIES.tabletAndSmaller}
            srcSet='/images/about/tablet/image-real-deal.jpg'
          />
          <img
            src='/images/about/desktop/image-real-deal.jpg'
            alt=''
            priority
            fetchPriority='high'
          />
        </Picture>
      </Section>
      <LeafOne />
      <LeafTwo />
    </>
  );
}

const Hero = styled.div`
  display: flex;
  border-radius: 15px;
  /* show border radius */
  overflow: hidden;

  @media ${QUERIES.tabletAndSmaller} {
    flex-direction: column-reverse;
  }

  @media ${QUERIES.phoneAndSmaller} {
    margin: 0 -24px;
    border-radius: revert;
  }
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

  @media ${QUERIES.tabletAndSmaller} {
    padding: 64px 58px;
    text-align: center;
    align-items: center;
  }

  @media ${QUERIES.phoneAndSmaller} {
    padding: 80px 24px;
  }
`;

const HeroTitleWrapper = styled.div`
  text-transform: capitalize;
`;

const Text = styled.p``;

const HeroText = styled(Text)`
  max-width: ${458 / 16}rem;

  @media ${QUERIES.tabletAndSmaller} {
    max-width: revert;
  }
`;

const Picture = styled.picture`
  & img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }

  @media ${QUERIES.tabletAndSmaller} {
    height: 320px;
  }
`;

const LocationLinks = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  @media ${QUERIES.tabletAndSmaller} {
    grid-template-columns: 1fr;
    gap: 80px;
  }

  @media ${QUERIES.phoneAndSmaller} {
    gap: 48px;
  }
`;

const Section = styled.section`
  display: flex;
  border-radius: 15px;
  /* show border radius */
  overflow: hidden;

  @media ${QUERIES.tabletAndSmaller} {
    flex-direction: ${(props) =>
      props.position === "left" ? "column-reverse" : "column"};
  }

  @media ${QUERIES.phoneAndSmaller} {
    border-radius: revert;
    margin: 0 -24px;
  }
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

  @media ${QUERIES.tabletAndSmaller} {
    padding: 68px 58px;
    align-items: center;
    text-align: center;
  }

  @media ${QUERIES.phoneAndSmaller} {
    padding: 80px 24px;
  }
`;

const SectionTitleWrapper = styled.div`
  color: var(--color-peach);
`;

const SectionText = styled(Text)`
  max-width: ${445 / 16}rem;

  @media ${QUERIES.tabletAndSmaller} {
    max-width: revert;
  }
`;

const LeafOne = styled(Leaf)`
  left: 0px;
  top: 475px;
`;

const LeafTwo = styled(Leaf)`
  right: -400px;
  top: 1777px;
`;
