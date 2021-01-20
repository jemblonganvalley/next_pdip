import React from "react";
import { Link } from "react-router-dom";
import "./BtnProvinsi.module.scss";

const BtnProvinsi = ({
  pageProv,
  nameProv,
  mouseOver,
  mouseLeave,
  color,
  transisi,
  id,
}) => {
  return (
    <>
      {/* For Botton Name Provinsi For on off Display Image Provinsi */}
      <a
        to={`/dpd/${id}/${nameProv}`}
        className="btn-name-prov"
        onMouseEnter={mouseOver}
        onMouseLeave={mouseLeave}
        style={{
          color: `${color}`,
          transition: `${transisi}`,
        }}
      >
        <small className="DPDText">DPD {nameProv}</small>
      </a>
      {/* END For Botton Name Provinsi For on off Display Image Provinsi */}
    </>
  );
};

export default BtnProvinsi;
