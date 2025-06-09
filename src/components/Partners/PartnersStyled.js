import styled from "@emotion/styled";

export const PartnersStyled = styled.ul`
  margin-top: 64px;
  margin-bottom: 64px;

  & > li {
    & > img {
      margin-left: auto;
      margin-right: auto;
    }
  }

  & > li:not(:last-of-type) {
    margin-bottom: 60px;
  }
`;
