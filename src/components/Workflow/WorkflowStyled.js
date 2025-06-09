import styled from "@emotion/styled";

export const WorkflowStyled = styled.div`
  padding-top: 64px;
  padding-bottom: 64px;

  text-align: center;

  & > h3 {
    margin-bottom: 12px;

    font-size: 28px;
    letter-spacing: -0.46px;
    font-weight: 600;

    color: #4c545c;
  }

  & > p {
    margin-bottom: 88px;

    font-size: 16px;
    line-height: 1.6;
    letter-spacing: 0.12px;

    color: #9eabb2;
  }
`;

export const WorkflowListStyled = styled.ul`
  text-align: center;

  & > li {
    & > div {
      display: inline-block;

      margin-bottom: 40px;
    }

    & > h4 {
      margin-bottom: 16px;

      font-size: 24px;
      font-weight: 600;
      letter-spacing: -0.39px;

      color: #4c545c;
    }

    & > p {
      font-size: 16px;
      line-height: 1.6;
      letter-spacing: 0.12px;

      color: #9eabb2;
    }
  }

  & > li:not(:last-of-type) {
    margin-bottom: 56px;
  }
`;
