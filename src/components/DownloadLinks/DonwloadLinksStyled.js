import styled from "@emotion/styled";

export const DownloadLinksStyled = styled.ul`
  @media (min-width: 1280px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }

  & > li {
    padding-top: 12px;
    padding-bottom: 12px;
    padding-left: 48px;
    padding-right: 48px;

    border-radius: 28px;

    @media (min-width: 1280px) {
      padding-top: 12px;
      padding-bottom: 12px;
      padding-left: 36px;
      padding-right: 36px;
    }

    &:first-of-type {
      margin-bottom: 24px;

      background-color: #26bba4;

      @media (min-width: 1280px) {
        margin-bottom: 0;
        margin-right: 16px;

        transition: box-shadow 0.3s;

        &:hover,
        &:focus,
        &:active {
          box-shadow: 0 0 12px rgba(38, 187, 164, 0.6);
          cursor: pointer;
          transition: box-shadow 0.3s;
        }
      }
    }

    &:last-of-type {
      background-color: #6174ff;

      transition: box-shadow 0.3s;
      &:hover,
      &:focus,
      &:active {
        box-shadow: 0 0 12px rgba(38, 187, 164, 0.6);
        transition: box-shadow 0.3s;
      }
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
