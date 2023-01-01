import React, { useRef, useEffect } from "react";
import Section from "@/components/common/Section";
import styled from "@emotion/styled";
import Lottie from "lottie-web";
import heroLottie from "@/assets/lotties/hero-lottie.json";
import gsap from "gsap";

type Props = {};

const FirstSection = (props: Props) => {
  const lottieContainer = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    gsap.timeline();
  }, []);

  useEffect(() => {
    if (lottieContainer.current) {
      Lottie.loadAnimation({
        container: lottieContainer.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        animationData: heroLottie,
      });
    }
    return () => Lottie.destroy();
  }, []);

  return (
    <Section>
      <HeroTitle>한국항공대학교 알고리즘 학회</HeroTitle>
      <HeroSubtitle>
        <HightlightText>KO</HightlightText>REA{" "}
        <HightlightText>A</HightlightText>EROSPACE UNIVERSITY A
        <HightlightText>L</HightlightText>GORITHM{" "}
        <HightlightText>A</HightlightText>SSOCIATION
      </HeroSubtitle>
      <div>
        <div>팀 블로그</div>
        <div>Github</div>
      </div>
      <LottieContainer ref={lottieContainer} />
    </Section>
  );
};

const HeroTitle = styled.h1`
  font-size: 64px;
  width: 100%;
  margin-bottom: 20px;
  text-align: left;
`;

const HeroSubtitle = styled.h2`
  font-size: 32px;
  width: 100%;
  text-align: left;
  color: black;
`;

const LottieContainer = styled.div`
  width: 300px;
  margin-left: auto;
  margin-top: 40px;
`;

const HightlightText = styled.span`
  color: rgb(0, 40, 112);
`;

export default FirstSection;
