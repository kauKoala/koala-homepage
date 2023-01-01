import React from "react";
import Section from "@/components/common/Section";
import styled from "@emotion/styled";

type Props = {};

const FourthSection = (props: Props) => {
  return (
    <Section>
      <Title>알고리즘은</Title>
      <Title>지금 바로, 10번째 KOALA에 합류하세요</Title>
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

export default FourthSection;
