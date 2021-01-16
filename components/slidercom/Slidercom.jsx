import React from "react";
import { Link } from "react-router-dom";
import "./Slidercom.scss";
// import Bspn from "../../img/bspn.png";
// import BMI from "../../img/BMI.png";
// import Baguna from "../../img/baguna.png";
// import BKN from "../../img/bkn.png";
// import Bamusi from "../../img/bamusi.png";
// import repdem from "../../img/repdem.png";
// import TMP from "../../img/TMP.png";
const Slidercom = () => {
  return (
    <div className="slider">
      <div className="slide-track">
        <Link
          className="slide"
          to="/detail-article/997/badan-saksi-pemilu-nasional"
        >
          <img
            src="/img/bspn.png"
            height="100"
            width="250"
            alt=""
            className="hovercom"
          />
        </Link>
        <Link className="slide" to="/detail-article/994/banteng-muda-indonesia">
          <img src="/img/BMI.png" height="100" width="250" alt="" className="hovercom" />
        </Link>
        <Link
          className="slide"
          to="/detail-article/991/badan-penanggulangan-bencana"
        >
          <img
            src="/img/baguna.png"
            height="100"
            width="250"
            alt=""
            className="hovercom"
          />
        </Link>
        <Link
          className="slide"
          to="/detail-article/988/badan-kebudayaan-nasional"
        >
          <img src="/img/bkn.png" height="100" width="250" alt="" className="hovercom" />
        </Link>
        <Link
          className="slide"
          to="/detail-article/985/baitul-muslimin-indonesia"
        >
          <img
            src="/img/bamusi.png"
            height="100"
            width="250"
            alt=""
            className="hovercom"
          />
        </Link>
        <Link className="slide" to="">
          <img
            src="/img/repdem.png"
            height="100"
            width="250"
            alt=""
            className="hovercom"
          />
        </Link>

        <Link className="slide" to="">
          <img src="/img/TMP.png" height="100" width="250" alt="" className="hovercom" />
        </Link>
        <Link
          className="slide"
          to="/detail-article/997/badan-saksi-pemilu-nasional"
        >
          <img
            src="/img/bspn.png"
            height="100"
            width="250"
            alt=""
            className="hovercom"
          />
        </Link>
        <Link className="slide" to="/detail-article/994/banteng-muda-indonesia">
          <img src="/img/BMI.png" height="100" width="250" alt="" className="hovercom" />
        </Link>
        <Link
          className="slide"
          to="/detail-article/991/badan-penanggulangan-bencana"
        >
          <img
            src="/img/baguna.png"
            height="100"
            width="250"
            alt=""
            className="hovercom"
          />
        </Link>
        <Link
          className="slide"
          to="/detail-article/988/badan-kebudayaan-nasional"
        >
          <img src="/img/bkn.png" height="100" width="250" alt="" className="hovercom" />
        </Link>
        <Link
          className="slide"
          to="/detail-article/985/baitul-muslimin-indonesia"
        >
          <img
            src="/img/bamusi.png"
            height="100"
            width="250"
            alt=""
            className="hovercom"
          />
        </Link>
        <Link className="slide" to="">
          <img
            src="/img/repdem.png"
            height="100"
            width="250"
            alt=""
            className="hovercom"
          />
        </Link>

        <Link className="slide" to="">
          <img src="/img/TMP.png" height="100" width="250" alt="" className="hovercom" />
        </Link>
      </div>
    </div>
  );
};

export default Slidercom;