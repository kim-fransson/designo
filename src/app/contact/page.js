"use client";

import Button from "@/components/Button";
import LeafBase from "@/components/Leaf";
import LocationLink from "@/components/LocationLink";
import TextArea from "@/components/TextArea";
import TextField from "@/components/TextField";
import VisuallyHidden from "@/components/VisuallyHidden";
import { WEIGHTS } from "@/constants";
import { Form as AriaForm } from "react-aria-components";
import styled from "styled-components";

export default function ContactUs() {
  function handleSubmit(event) {
    event.preventDefault();
  }
  return (
    <>
      <Hero>
        <TextWrapper>
          <Title>Contact Us</Title>
          <Text>
            Ready to take it to the next level? Let’s talk about your
            project or idea and find out how we can help your business
            grow. If you are looking for unique digital experiences
            that’s relatable to your users, drop us a line.
          </Text>
        </TextWrapper>
        <Form onSubmit={handleSubmit}>
          <TextField
            placeholder='Name'
            aria-label='Name'
            name='name'
            type='text'
            isRequired={true}
          />
          <TextField
            placeholder='Email Address'
            aria-label='Email Address'
            name='email'
            type='email'
            isRequired={true}
          />
          <TextField
            placeholder='Phone'
            aria-label='Phone'
            name='phone'
            type='tel'
            isRequired={true}
          />
          <TextArea
            placeholder='Your Message'
            aria-label='Your Message'
            name='message'
            type='text'
            isRequired={true}
          />
          <ButtonWrapper>
            <Button type='submit'>Submit</Button>
          </ButtonWrapper>
        </Form>
      </Hero>
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
      <Leaf />
    </>
  );
}

const Hero = styled.div`
  display: grid;
  grid-template-columns: 27fr 19fr;
  background: var(--color-peach);
  border-radius: 15px;
  padding: 55px 96px;
  background-image: url("/images/contact/desktop/bg-pattern-hero-desktop.svg");
  background-position: left 100%;
  background-repeat: no-repeat;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  color: var(--color-white);
  align-self: center;
  /* optical alignment */
  margin-bottom: 40px;
`;

const Title = styled.h1`
  font-weight: ${WEIGHTS.medium};
  font-size: ${48 / 16}rem;
  line-height: ${48 / 16}rem;
`;

const Text = styled.p`
  line-height: ${26 / 16}rem;
  max-width: ${445 / 16}rem;
`;

const Form = styled(AriaForm)`
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

const ButtonWrapper = styled.div`
  margin-left: auto;
`;

const LocationLinks = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

const Leaf = styled(LeafBase)`
  right: 0px;
  top: 885px;
`;
