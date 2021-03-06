import React from "react";
import CardSocialMedia from "../../components/cardsocialmedia/CardSocialMedia";
import "./QuotesBkbb.module.scss";
import parse from "html-react-parser";

const QuotesBkbb = ({
  id,
  source,
  headline,
  desc,
  backgroundImage,
  descColor,
  date,
  quotesDate,
}) => {
  return (
    <div className="wrapperQuotesBkbb">
      <div className="kolumQuotesBkbb">
        <img
          src={backgroundImage}
          width="100%"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
          alt={desc}
        />
      </div>

      <div
        className="descQuotesBkbb"
        style={{
          backgroundColor: descColor && `${descColor}`,
        }}
      >
        <div className="textTop">
          <small>Admin PDI Perjuangan {date && "|" + date.split(" ")[0]}</small>
        </div>

        <div className="wrapperHeadlineBkbb">
          <strong className="headline">{`" ` + headline + ` "`}</strong>
        </div>
        <div
          style={{
            margin: "20px 0",
          }}
        >
          <i>{quotesDate}</i>
        </div>
        {/* <p className="descline">{desc}</p> */}
        <div className="descline">{parse(`${desc}`)}</div>
        <div className="share">
          {/* Card Social Media */}
          <CardSocialMedia
            title={headline}
            url={`https://article.pdiperjuangan.id/wejangan/${id}`}
          />
          {/* END Card Social Media */}
        </div>
      </div>
    </div>
  );
};

export default QuotesBkbb;
