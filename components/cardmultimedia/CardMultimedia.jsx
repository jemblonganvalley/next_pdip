import React from "react";
import { Link } from "react-router-dom";
import "./CardMultimedia.scss";

const CardMultimedia = ({ siaran }) => {
  return (
    <>
      {siaran.map((e) => {
        return (
          <div className="cardMultimedia">
            <a
              className="imgCard"
              style={{
                background: `url(${e.images})`,
                backgroundSize: "cover",
                textDecoration: "none",
              }}
            >
              <Link
                className="VidPlay"
                href="/videomedia"
                style={{
                  textDecoration: "none",
                }}
              >
                <i
                  className="fa fa-play"
                  style={{
                    textDecoration: "none",
                  }}
                ></i>
              </Link>
            </a>

            <div className="textMultimedia">
              <small className="textSmall">{e.headline}</small>
              <h5 className="textH5">{e.isi}</h5>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default CardMultimedia;
