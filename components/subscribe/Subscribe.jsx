import React from "react";
import "./Subscribe.module.scss";
import Link from "next/link";
const Subscribe = () => {
  return (
    <div className="wrapperSubscribe">
      <div className="berita ikutiBerita">
        <div className="wrapper">
          <p>Ikuti Berita Terbaru</p>
          <small></small>
          <form className="form-control">
            <i className="fa fa-envelope-o"></i>
            <input type="email" placeholder="masukan email anda disini" />
          </form>
          {/* <MainButton name="Subscribe"
                                borderButton="1px solid #2d3436"
                                margin="1rem 0"
                                btnIcons="fa fa-check"
                                mr=".5rem" /> */}
          <a href="/">
            <button className="btn btn-danger w-100 mt-2" name="btn_subscribe">
              Subscribe
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
