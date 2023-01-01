import React from "react";
import Header from "@/components/common/Header";
import FirstSection from "./FirstSection";
import SecondSection from "./SecondSection";
import ThirdSection from "./ThirdSection";

type Props = {};

const RootPage = (props: Props) => {
  return (
    <div>
      <Header />
      <FirstSection />
      <SecondSection />
      <ThirdSection />
    </div>
  );
};

export default RootPage;
