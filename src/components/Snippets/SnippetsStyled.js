import styled from "@emotion/styled";

export const SnippetsStyled = styled.div`
  padding-top: 80px;
  padding-bottom: 92px;

  text-align: center;
`;

export const SnippetsTitleStyled = styled.h2`
  margin-bottom: 16px;

  font-size: 28px;
  letter-spacing: -0.46px;
  font-weight: 600;

  color: #4c545c;
`;

export const SnippetsContent = styled.p`
  margin-bottom: 64px;

  font-size: 16px;
  line-height: 1.6;
  letter-spacing: 0.12px;

  color: #9eabb2;
`;

export const ThumbImgComp = styled.div`
  display: inline-block;
  width: 312px;
  height: 238px;

  margin-bottom: 56px;

  & > img {
    width: inherit;
    height: inherit;
  }
`;

export const SnippettsList = styled.ul`

& > li{

    & > h3{
    margin-bottom: 12px;

    font-size: 24px;
    font-weight: 600;
    letter-spacing: -0.39px;

    color: #4C545C;
}

& > p{
    font-size: 16px;
    line-height: 1.6;
    letter-spacing: 0.12px;

    color: #9EABB2;
}
}

& > li:not(:last-of-type){
    margin-bottom: 48px;
}

`