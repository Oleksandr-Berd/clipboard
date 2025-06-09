import styled from "@emotion/styled";

export const DownloadLinksStyled = styled.ul`
  & > li {
    padding-top: 12px;
    padding-bottom: 12px;
    padding-left: 48px;
    padding-right: 48px;

    border-radius: 28px;

    &:first-of-type {
      margin-bottom: 24px;

      background-color: #26bba4;
    }

    &:last-of-type {
      background-color: #6174ff;
    }

    & > a {
      font-size: 18px;
      line-height: 1.7;
      letter-spacing: 0.5px;
      font-weight: 600;

      color: #ffffff;
      text-decoration: none;
    }
  }
`;
