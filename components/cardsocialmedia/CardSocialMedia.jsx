import React, { useEffect } from "react";
import "./CardSocialMedia.scss";
// import {
//   FacebookShareButton,
//   InstapaperShareButton,
//   TwitterShareButton,
//   WhatsappShareButton,
// } from "react-share";

// import FacebookButton from "../../img/facebookicon.svg";
// import TwitterButton from "../../img/twittericon.svg";
// import WhatsappButton from "../../img/whatsappicon.svg";

const CardSocialMedia = ({ imageUrl, title, url }) => {
  let quote = "PDI Perjuangan";
  let hashtag = "#PDIPERJUANGAN";
  let titleForWhatsapp = "PDI Perjuangan";

  // const share

  return (
    <div className="socialMedia">
      <p className="share-socialMedia">Share : </p>
      {/* Facebook Share */}
      <FacebookShareButton
        url={url}
        quote={title}
        hashtag={hashtag}
        title={title}
      >
        <img src="/img/facebookicon.svg" alt="" width="20" height="20" />
      </FacebookShareButton>
      {/* END Facebook Share */}

      {/* Twitter Share */}
      <TwitterShareButton
        url={url}
        quote={title}
        hashtag={hashtag}
        title={title}
        style={{
          marginLeft: "40px",
          marginRight: "40px",
        }}
      >
        <img src="/img/twittericon.svg" alt="" width="20" height="20" />
      </TwitterShareButton>
      {/* END Twitter Share */}

      {/* WhatsApp Share */}
      <WhatsappShareButton url={url} title={title}>
        <img src="/img/whatsappicon.svg" alt="" width="20" height="20" />
      </WhatsappShareButton>
      {/* END WhatsApp Share */}
    </div>
  );
};

export default CardSocialMedia;