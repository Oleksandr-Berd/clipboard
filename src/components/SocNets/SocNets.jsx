import * as SC from "./SocNetsStyled";

import fbIcon from "../../assets/images/icon-facebook.svg";
import twitterIcon from "../../assets/images/icon-twitter.svg";
import instaIcon from "../../assets/images/icon-instagram.svg";
const SocNets = () => {
  return (
    <SC.SocNetStyled>
      <li>
        <a href="https://www.facebook.com/sasha.berdichevsky">
          <img src={fbIcon} alt="facrbook" />
        </a>
      </li>
      <li>
        <a href="https://x.com/UaBerd">
          <img src={twitterIcon} alt="twitter" />
        </a>
      </li>
      <li>
        <a href="https://www.instagram.com/berd__man/">
          <img src={instaIcon} alt="instagram" />
        </a>
      </li>
    </SC.SocNetStyled>
  );
};

export default SocNets;
