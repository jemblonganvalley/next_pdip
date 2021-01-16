import React from "react";
import "./BreadCrumbs.scss";
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
          <Link href={to1}> {link1} </Link>
          {page1}
        </li>
        <li className={`breadcrumb-item  customBread`}>
          <Link href={to2}> {link2} </Link>
          {page2}
        </li>
        {link3 && (
          <li
            style={{
              color: "#6c757d",
            }}
            className={`breadcrumb-item ${active} customBread`}
          >
            <Link href={to3}> {link3} </Link>
          </li>
        )}
      </ul>
    </span>
  );
};

export default BreadCrumbs;
