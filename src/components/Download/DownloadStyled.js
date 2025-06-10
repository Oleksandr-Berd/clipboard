import styled from "@emotion/styled";

export const DownloadStyled = styled.div`
  padding-top: 64px;
  padding-bottom: 170px;

  text-align: center;

  @media (min-width: 1280px) {
    padding-top: 72px;
    padding-bottom: 150px;
  }
`;

export const DownloadContentCon = styled.div`
  margin-bottom: 48px;

@media (min-width: 1280px){
    width: 50%;
    margin-left: auto;
    margin-right: auto;
}

  & > h3 {
    margin-bottom: 16px;

    font-size: 28px;
    font-weight: 600;
    letter-spacing: -0.46px;

    color: #4c545c;

    @media (min-width: 1280px){
        font-size: 36px;
        letter-spacing: -0.59px;
    }
  }

  & > p {
    font-size: 16px;
    line-height: 1.6;
    letter-spacing: 0.12px;

    color: #9eabb2;

    @media (min-width: 1280px){
        font-size: 18px;
    }
  }
`;
