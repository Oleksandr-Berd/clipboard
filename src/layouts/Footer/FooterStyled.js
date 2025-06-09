import styled from "@emotion/styled";

export const Footer = styled.footer`
  padding-top: 52px;
  padding-bottom: 52px;

  text-align: center;

  background-color: #9eabb2;

  color: #4c545c;
`;

export const NavStyled = styled.nav`
  margin-bottom: 48px;

  & li:not(:last-of-type) {
    margin-bottom: 20px;
  }

  & a {
    font-size: 18px;
    line-height: 1.7;
    letter-spacing: 0.14px;

    text-decoration: none;

    color: #4c545c;
  }
`;
