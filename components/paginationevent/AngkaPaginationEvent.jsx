import React from "react";
import "./AngkaPaginationEvent.scss";
import { Link } from "next/link";

const AngkaPaginationEvent = ({ itemEventPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / itemEventPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <>
      <div className="container-angka-pagination">
        <div className="col-angka-pagination">
          {pageNumbers.map((number) => (
            <div key={number} className="angka-pagination">
              <Link
                className="paginationLink"
                to="#"
                activeClassName="active"
              >
                {number}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AngkaPaginationEvent;
