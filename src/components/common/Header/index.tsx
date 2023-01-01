import React from "react";
import styled from "@emotion/styled";
import { HEADER_HEIGHT } from "@/constants/ui";

const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <NavContainer>
          <li>KOALA 소개</li>
          <li>활동 목표</li>
          <li>졸업생 목록</li>
        </NavContainer>
      </Container>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  position: sticky;
  height: ${HEADER_HEIGHT}px;
  top: 0;
`;

const Container = styled.ul`
  display: flex;
  padding: 0 120px;
`;

const NavContainer = styled.li`
  display: flex;
  margin-left: auto;
`;

export default Header;
