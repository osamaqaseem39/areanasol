import React from "react";
import styled from "styled-components";

const StyledBox = styled.div`
  height: 205px;
  width: 1440px;

  & .rectangle {
    background: linear-gradient(
      89deg,
      rgba(25, 24, 37, 1) 0%,
      rgba(25, 24, 37, 0.86) 34%,
      rgba(25, 24, 37, 0) 100%
    );
    height: 1440px;
    left: 0;
    position: fixed;
    top: 0;
    transform: rotate(90.00deg);
    width: 205px;
  }
`;

export const Box = (): JSX.Element => {
  return (
    <StyledBox>
      <div className="rectangle" />
    </StyledBox>
  );
}; 