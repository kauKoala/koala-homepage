import React, { useRef, useEffect } from "react";
import Section from "@/components/common/Section";
import styled from "@emotion/styled";
import Lottie from "lottie-web";
import heroLottie from "@/assets/lotties/hero-lottie.json";

type Props = {};

const FirstSection = (props: Props) => {
  const lottieContainer = useRef();

  useEffect(() => {
    Lottie.loadAnimation({
      container: lottieContainer.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: heroLottie,
    });
    return () => Lottie.destroy();
  }, []);

  return (
    <Section>
      <HeroTitle>한국항공대학교 알고리즘 학회, KOALA</HeroTitle>
      <HeroSubtitle>
        KOREA AEROSPACE UNIVERSITY ALGORITHM ASSOCIATION
      </HeroSubtitle>
      <LottieContainer ref={lottieContainer} />
    </Section>
  );
};

const HeroTitle = styled.h1`
  font-size: 64px;
  margin-bottom: 20px;
`;

const HeroSubtitle = styled.h2`
  font-size: 40px;
`;

const LottieContainer = styled.div`
  width: 300px;
`;

export default FirstSection;
