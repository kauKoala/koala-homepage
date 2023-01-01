import React from "react";
import styled from "@emotion/styled";
import { HEADER_HEIGHT } from "@/constants/ui";
import { Link } from "react-router-dom";
import { colors } from "../../../styles/colors";

const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <div>KAU@KOALA</div>
        <NavContainer>
          <Link to="/">
            <li>KOALA 소개</li>
          </Link>
          <li>활동</li>
          <Link to="/contest">
            <li>수상 실적</li>
          </Link>
          <Link to="/members">
            <li>구성원 소개</li>
          </Link>
          <li>가입 안내</li>
          <li>자료실</li>
        </NavContainer>
      </Container>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  position: sticky;
  background-color: #fff;
  top: 0;
  /* padding-bottom: ${HEADER_HEIGHT}px; */

  /* &:after {
    content: "";
    position: absolute;
    height: 30px;
    width: 100%;
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 1) 50%,
      rgba(255, 255, 255, 0.05) 100%
    );
  } */
`;

const Container = styled.div`
  display: flex;
  height: ${HEADER_HEIGHT}px;
  align-items: center;
  padding: 0 120px;
`;

const NavContainer = styled.ul`
  display: flex;
  gap: 8px;
  margin-left: auto;

  a {
    text-decoration: none;
  }

  li {
    padding: 8px 12px;
    border-radius: 8px;
    transition: 0.2s ease-in-out all;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #333;
    font-weight: 600;

    &:hover {
      background-color: ${colors.primary + 20};
    }
  }
`;

export default Header;
