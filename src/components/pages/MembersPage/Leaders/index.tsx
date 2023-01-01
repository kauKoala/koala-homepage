import styled from "@emotion/styled";
import React from "react";

type Props = {};

const Leaders = (props: Props) => {
  return (
    <div>
      <Title>역대 회장단</Title>
      <LeaderList />
    </div>
  );
};

const Title = styled.div`
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 20px;
`;

const LeaderList = styled.div`
  border: 1px solid #cdcdcd;
  height: 100px;
`;

export default Leaders;
