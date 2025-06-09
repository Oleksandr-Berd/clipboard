import * as SC from "./DonwloadButtons";

const DownloadButtons = () => {
  return (
    <SC.DownloadButtonsStyled>
      <li>
        <a href="#">Download for iOS</a>
      </li>
      <li>
        <a href="#">Download for Mac</a>
      </li>
    </SC.DownloadButtonsStyled>
  );
};

export default DownloadButtons;
