import React from "react";
import Section from "@/components/common/Section";
import styled from "@emotion/styled";

type Props = {};

const ThirdSection = (props: Props) => {
  return (
    <Section>
      <Title>KOALA 활동</Title>
      <GridContainer>
        <div>a</div>
        <div>b</div>
        <div>c</div>
        <div>a</div>
      </GridContainer>
    </Section>
  );
};

const Title = styled.h2`
  font-size: 40px;
  font-weight: 700;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

export default ThirdSection;
