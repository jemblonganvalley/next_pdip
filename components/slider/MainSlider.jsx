import React, { useState, useEffect } from "react";
import "./MainSlider.module.scss";

// import playstore from "../../img/playstore.svg";
// import appstore from "../../img/appstore.svg";
// import { Link } from "@material-ui/core";
import parse from "html-react-parser";

const MainSlider = ({ value, cls }) => {
  let slider = value;

  const [direct, setDirect] = useState(false);

  const redir = (args) => {
    return (window.location.href = `${args}`);
  };

  useEffect(() => {}, [direct]);

  return (
    <>
      <div
        id="carouselExampleIndicators"
        className="carousel slide carousel-fade carousel-mainSlider"
        data-ride="carousel"
        style={{
          overflow: "hidden",
        }}
      >
        <div className="carousel-inner">
          {slider.map((e, i) => (
            <div
              className={
                i === 1
                  ? `carousel-item ${cls} active`
                  : `carousel-item ${e.class}`
              }
              onClick={() => {
                redir(`${e.link}`);
              }}
              style={{
                cursor: "pointer",
              }}
            >
              <div className="rowMainSlider image1 images">
                <div className="col text1">
                  {/* Box Paragrap */}
                  <div className="box-paragrap-mainSlider">
                    <h3>{e.title}</h3>
                    <h5 className="title-maxWidth750">{e.title}</h5>

                    {/* <Markup content={e.paragraph} /> */}
                    <p>{parse(`${e.paragraph}`)}</p>
                  </div>
                  {/* END Box Paragrap */}

                  {/* Box Image */}
                  <div className="box-img-mainSlider">
                    <img
                      src={`https://data.pdiperjuangan.id/public/${e.image}`}
                      alt={e.title}
                      className="img-home-mainSlider"
                    />
                    {/* END Box Image */}
                  </div>
                  {/* END For Responsive Mobile */}
                </div>
              </div>
            </div>
          ))}

          {/* For Desktop */}
          {/* Info Iklan */}
          <div className="box-info-iklan">
            {/* Box Paragrap Iklan */}
            <div className="box-paragrap-info-iklan">
              <strong className="txt-info-iklan">
                Segera hadir aplikasi MEDIA PINTAR PERJUANGAN untuk mendapatkan
                pengetahuan,
                <br />
                pengalaman dan informasi program serta kerja nyata PDI
                Perjuangan.
              </strong>

              <div className="box-logo-info-iklan">
                <img
                  src="/img/playstore.svg"
                  alt=""
                  className="logo-play-store logoAppGroup"
                />

                <img
                  src="/img/appstore.svg"
                  alt=""
                  className="logo-app-store logoAppGroup"
                />
              </div>
            </div>
            {/* END Box Paragrap Iklan */}
          </div>
          {/* END Info Iklan */}
          {/* END For Desktop */}
        </div>

        <a
          className="carousel-control-prev control-desktop-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <div className="arrowsLeftDesktop">
            {/* <img src={arrowsLeft} alt="" /> */}
            <i className="fas fa-angle-left"></i>
          </div>
        </a>

        <a
          className="carousel-control-next control-desktop-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <div className="arrowsRightDesktop">
            {/* <img src={arrows} alt="" /> */}
            <i className="fas fa-angle-right"></i>
          </div>
        </a>
      </div>
      {/* END Wrapper Carousel */}
    </>
  );
};

export default MainSlider;
