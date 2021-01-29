import React from "react";
import "../../styles/paralaxBox.scss";

const ParalaxBox = ({ image, title, link, paralax = false }) => {
  return (
    <>
      <div
        className="container_paralax"
        style={{
          backgroundImage: `url(https://data.pdiperjuangan.id/public/${image})`,
          backgroundPosition: "center",
        }}
      >
        <h3>{title}</h3>
        <a className="btn lihat" href={link}>
          <span>lihat</span>
        </a>
      </div>
    </>
  );
};

export default ParalaxBox;
