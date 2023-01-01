import React from "react";
import Header from "@/components/common/Header";

type Props = {};

const MembersPage = (props: Props) => {
  return (
    <div>
      <Header />
      <div>구성원 소개</div>
      <div>지금까지 290명의 학우들이, 코알라와 함께했습니다.</div>
    </div>
  );
};

export default MembersPage;
