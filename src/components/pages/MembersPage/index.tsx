import React from "react";
import Header from "@/components/common/Header";
import Leaders from "./Leaders";
import Section from "@/components/common/Section";
import FirstSection from "./FirstSection";

type Props = {};

const MembersPage = (props: Props) => {
  return (
    <div>
      <Header />
      <FirstSection />
    </div>
  );
};

export default MembersPage;
