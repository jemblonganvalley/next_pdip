import React from "react";
import "./BreadCrumbs.module.scss";
import Link from "next/link";

const BreadCrumbs = ({
  link1,
  link2,
  link3,
  to1,
  to2,
  page2,
  active,
  link4,
  to3,
  page3,
  page1,
}) => {
  return (
    <span className="wrapperBread">
      <ul
        className="breadcrumb"
        style={{
          background: "none",
        }}
      >
        <li>
          <i className="fa fa-home customBread"></i>
        </li>
        <li className="breadcrumb-item customBread">
          <a href={to1}>
            <a>{link1}</a>
          </a>
          {page1}
        </li>
        <li className={`breadcrumb-item  customBread`}>
          <a href={to2}>
            <a>{link2}</a>
          </a>
          {page2}
        </li>
        {link3 && (
          <li
            style={{
              color: "#6c757d",
            }}
            className={`breadcrumb-item ${active} customBread`}
          >
            <a href={to3}>
              <a>{link3}</a>
            </a>
          </li>
        )}
      </ul>
    </span>
  );
};

export default BreadCrumbs;
