"use client";

import React from "react";
import styled from "styled-components";
import GetInTouch from "../GetInTouch";

function MainWrapper({ children, showContactUs = true }) {
  return (
    <Wrapper>
      {children}
      {showContactUs && (
        <GetInTouchWrapper>
          <GetInTouch />
        </GetInTouchWrapper>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  gap: 160px;
`;

const GetInTouchWrapper = styled.div`
  margin-bottom: -75px;
`;

export default MainWrapper;
