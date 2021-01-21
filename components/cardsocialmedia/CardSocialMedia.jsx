import React, { useEffect } from "react";
import "./CardSocialMedia.module.scss";
import {
  FacebookShareButton,
  InstapaperShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";

// import TwitterButton from "../../img/twittericon.svg";
// import WhatsappButton from "../../img/whatsappicon.svg";

const CardSocialMedia = ({ imageUrl, title, url, top }) => {
  let quote = "PDI Perjuangan";
  let hashtag = "#PDIPERJUANGAN";
  let titleForWhatsapp = "PDI Perjuangan";

  // const share

  return (
    <>
      {top ? (
        <div
          className="socialMedia"
          style={{
            // border: "1px solid red",
            justifyContent: "center",
            marginTop: "20px",
            marginBottom: "10px",
            gap: "0",
          }}
        >
          <p className="share-socialMedia">Share : </p>

          {/* Facebook Share */}
          <FacebookShareButton
            url={url}
            quote={title}
            hashtag={hashtag}
            title={title}
          >
            {/* <img src="/img/facebookicon.svg" alt="" width="20" height="20" /> */}
            <i
              className="fab fa-facebook"
              style={{
                color: "gray",
                fontSize: "14pt",
                border: "none",
                outline: "none",
              }}
            ></i>
          </FacebookShareButton>
          {/* END Facebook Share */}

          {/* Twitter Share */}
          <TwitterShareButton
            url={url}
            quote={title}
            hashtag={hashtag}
            title={title}
          >
            {/* <img src={TwitterButton} alt="" width="20" height="20" /> */}
            <i
              className="fab fa-twitter"
              style={{
                color: "gray",
                fontSize: "14pt",
                border: "none",
                outline: "none",
              }}
            ></i>
          </TwitterShareButton>
          {/* END Twitter Share */}

          {/* WhatsApp Share */}
          <WhatsappShareButton url={url} title={title}>
            {/* <img src={WhatsappButton} alt="" width="20" height="20" /> */}
            <i
              className="fab fa-whatsapp"
              style={{
                color: "gray",
                fontSize: "14pt",
                border: "none",
                outline: "none",
              }}
            ></i>
          </WhatsappShareButton>
          {/* END WhatsApp Share */}
        </div>
      ) : (
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
      )}
    </>
  );
};

export default CardSocialMedia;
