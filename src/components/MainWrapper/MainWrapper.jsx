"use client";

import React from "react";
import styled from "styled-components";
import GetInTouch from "../GetInTouch";
import { usePathname } from "next/navigation";
import Spacer from "../Spacer";
import { QUERIES } from "@/constants";

function MainWrapper({ children }) {
  const pathname = usePathname();
  const showContactUs = pathname !== "/contact";
  return (
    <Wrapper>
      {children}
      {showContactUs ? (
        <GetInTouchWrapper>
          <GetInTouch />
        </GetInTouchWrapper>
      ) : (
        <Spacer y={160} />
      )}
    </Wrapper>
  );
}

const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  gap: 160px;

  @media ${QUERIES.phoneAndSmaller} {
    padding: 0px 24px;
  }
`;

const GetInTouchWrapper = styled.div`
  margin-bottom: -75px;

  @media ${QUERIES.phoneAndSmaller} {
    margin-bottom: -194px;
  }
`;

export default MainWrapper;
