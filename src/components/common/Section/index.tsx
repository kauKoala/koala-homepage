import React from "react";
import styled from "@emotion/styled";

type Props = {};

const Section = styled.section<{ center?: boolean }>`
  height: 100vh;
  max-width: 1140px;
  padding: 0 80px;
  display: flex;
  flex-direction: column;
  justify-content: ${({ center = true }) => (center ? "center" : "flex-start")};
  margin: 0 auto;
`;

export default Section;
