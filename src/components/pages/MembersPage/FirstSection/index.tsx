import Section from "@/components/common/Section";
import styled from "@emotion/styled";
import React from "react";
import Leaders from "../Leaders";
import Members from "../Members";

type Props = {};

const FirstSection = (props: Props) => {
  return (
    <Section center={false}>
      <TitleContainer>
        <Title>KOALA를 빛내온 역대 구성원들입니다.</Title>
        <div>앞으로도 계속될 코알라의 역사를 기대해주세요.</div>
      </TitleContainer>
      <Leaders />
      <Members />
    </Section>
  );
};

const TitleContainer = styled.div`
  margin: 40px 0;
`;

const Title = styled.h2`
  font-size: 40px;
  text-align: left;
`;

export default FirstSection;
