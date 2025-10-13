import Image from "next/image";
import Link from "next/link";
import React from "react";
import styled from "styled-components";

function Logo({ variant = "light" }) {
  return (
    <Link href='/'>
      <ImageWrapper
        width={404}
        height={54}
        src={`/images/shared/desktop/logo-${variant}.png`}
        alt='Designo lgo - Home'
        priority={true}
      />
    </Link>
  );
}

const ImageWrapper = styled(Image)`
  height: 24px;
  width: 196px;
  object-fit: contain;
`;

export default Logo;
