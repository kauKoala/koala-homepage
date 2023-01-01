import React from "react";
import Section from "@/components/common/Section";
import styled from "@emotion/styled";

type Props = {};

const FirstSection = (props: Props) => {
  return (
    <Section>
      <Text>처음부터 완벽한 사람은 없어요.</Text>
      <Text>프로그래밍을 몰라도 괜찮아요.</Text>
      <Text>공대생이 아니어도 괜찮아요.</Text>
      <Text>열정과 흥미만 가져오시면,</Text>
      <Text>지식과 경험은 저희가 채워 드려요.</Text>
    </Section>
  );
};

const Text = styled.div`
  font-size: 64px;
  font-weight: 700;
  margin: 32px 0;
  width: 100%;
  text-align: left;
`;

export default FirstSection;
