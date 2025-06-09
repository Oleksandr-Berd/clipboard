import * as SC from "./DownloadStyled"

import DownloadLinks from "../DownloadLinks/DownloadLinks";

const Download = () => {
  return (
    <SC.DownloadStyled>
      <h3>Clipboard for iOS and Mac OS</h3>
      <p>
        Available for free on the App Store. Download for Mac or iOS, sync with
        iCloud and you’re ready to start adding to your clipboard.
      </p>
      <DownloadLinks />
    </SC.DownloadStyled>
  );
};

export default Download;
