import React from "react";
import "./MainButton.module.scss";
import Link from "next/link";
import { useState } from "react";

const MainButton = ({
  name,
  margin,
  pages,
  bgColor = "#d80010",
  hoverColor = "#2f3542",
  btnIcons,
  borderButton,
  mr,
}) => {
  let [hover, setHover] = useState(false);

  return (
    <a
      className="btn px-5 btn2"
      style={{
        margin: margin,
        backgroundColor: hover ? hoverColor : bgColor,
        border: borderButton,
      }}
      href={pages}
      onMouseEnter={() => {
        setHover(!hover);
      }}
      onMouseLeave={() => {
        setHover(!hover);
      }}
    >
      <a>
        <i
          className={`${btnIcons}`}
          style={{
            marginRight: mr,
          }}
        ></i>
        {name}
      </a>
    </a>
  );
};

export default MainButton;
