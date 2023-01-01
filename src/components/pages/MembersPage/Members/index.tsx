import styled from "@emotion/styled";
import React from "react";

type Props = {};

const Members = (props: Props) => {
  return (
    <div>
      <Title>역대 기수별 멤버</Title>
      <MemberList />
    </div>
  );
};

const Title = styled.div`
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 20px;
`;

const MemberList = styled.div`
  border: 1px solid #cdcdcd;
  height: 100px;
`;

export default Members;
