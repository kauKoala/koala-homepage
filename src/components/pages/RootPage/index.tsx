import React from "react";
import Header from "@/components/common/Header";
import FirstSection from "./FirstSection";
import SecondSection from "./SecondSection";
import ThirdSection from "./ThirdSection";
import FourthSection from "./FourthSection";

type Props = {};

const RootPage = (props: Props) => {
  return (
    <div>
      <Header />
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
    </div>
  );
};

export default RootPage;
