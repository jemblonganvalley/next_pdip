import React, { useEffect, useState } from "react";
import "../../styles/PartaiPage.module.scss";
import parse from "html-react-parser";
import { Link } from "react-router-dom";
// import pdiLogo from "../../../img/logo-tatakelola.png";

import Layouts from "../../components/Layouts";
import Head from "next/head";
import MusicPdi from "../../components/musicpdi/MusicPdi";
import MainButton from "../../components/buttons/MainButton";
import MainDivider from "../../components/divider/MainDivider";
import BreadCrumbs from "../../components/breadcrumbs/BreadCrumbs";
import MusicMobile from "../../components/musicPdiMobile/MusicMobile";
import CardHeader from "../../components/cardheader/CardHeader";
import CarouselKetuaUmumPage from "../../components/carouselKetuaUmumPage/CarouselKetuaUmumPage";
import Maps from "../../components/maps/Maps";
import Wait from "../../components/wait/Wait";
import { Helmet } from "react-helmet";

const PartaiPage = ({ redirect, config, meta }) => {
  return (
    // START PARTAI
    <>
      <Head>
        <link rel="icon" href="/pdip.jpg" />
        <link rel="shortcut icon" href="/pdip.ico" />
        <meta name="description" content={meta.meta_description} />
        <meta property="og:url" content={`https://pdiperjuangan.id/berita`} />
        <meta property="og:title" content={meta.meta_keyword} />
        <meta property="og:description" content={meta.meta_description} />
        <meta
          property="og:image"
          itemProp="image"
          content={`https://data.pdiperjuangan.id/public/${config[2].value[0].image}`}
        />
        {/* <meta
          property="og:image:url"
          content={`https://data.pdiperjuangan.id/public${data.path}`}
        /> */}
        <meta
          property="og:image:secure_url"
          content={`https://data.pdiperjuangan.id/public/${config[2].value[0].image}`}
        />
        <meta property="og:image:width" content="300" />
        <meta property="og:image:height" content="300" />
        <meta
          property="og:image:alt"
          content={`https://data.pdiperjuangan.id/public/${config[2].value[0].image}`}
        />
        <meta property="og:type" content="website" />
        <meta content="og:image:type" property="image/*" />
        <meta content="og:image:alt" property={meta.meta_description} />
        <meta property="og:locale" content="id_ID" />
      </Head>
      <Layouts>
        {config.length > 0 ? (
          <>
            <Helmet>
              <link rel="icon" href="/pdip.jpg" />
              <link rel="shortcut icon" href="/pdip.ico" />
              <meta
                name="description"
                content={`Konsep kebijakan dan program strategis Partai yang dilaksanakan dalam rangka pembinaan, pengembangan dan penguatan untuk menjadi Partai Pelopor.`}
              />
              <meta
                property="og:url"
                content={`https://pdiperjuangan.id/berita`}
              />
              <meta property="og:title" content={config[6].value.title} />
              <meta
                property="og:description"
                content={`Konsep kebijakan dan program strategis Partai yang dilaksanakan dalam rangka pembinaan, pengembangan dan penguatan untuk menjadi Partai Pelopor.`}
              />
              <meta
                property="og:image"
                itemProp="image"
                content={`https://data.pdiperjuangan.id/public${config[6].value.image}`}
              />
              {/* <meta
              property="og:image:url"
              content={`https://data.pdiperjuangan.id/public${data.path}`}
            /> */}
              <meta
                property="og:image:secure_url"
                content={`https://data.pdiperjuangan.id/public/${config[6].value.image}`}
              />
              <meta property="og:image:width" content="300" />
              <meta property="og:image:height" content="300" />
              <meta
                property="og:image:alt"
                content={`https://data.pdiperjuangan.id/public/${config[6].value.image}`}
              />
              <meta property="og:type" content="website" />
              <meta content="og:image:type" property="image/*" />
              <meta content="og:image:alt" property={config[6].value.title} />
              <meta property="og:locale" content="id_ID" />
            </Helmet>
            <div className="wrapperPartai">
              {config.length > 0 && (
                <>
                  {/* 0 r-banner-image */}
                  <CardHeader
                    image={config[0].value.image}
                    title={config[0].value.title}
                  />
                  {/* END Card Header */}
                  {/* LINK PARTAI */}
                  <div className="linkedPartai">
                    <BreadCrumbs link1="Home" to1="/" page2="Partai" />
                  </div>
                  {/* END */}
                  {/* CONTAINER SATU */}
                  <div className="containerSatu row ">
                    <div className="contentSatu row">
                      <div className="col col-lg-4">
                        <div
                          className={`wrapperContentSatu`}
                          style={{
                            width: "100%",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-between",
                          }}
                        >
                          {/* 1 r-group-text-image */}
                          {config[1].value.map((e, i) => (
                            <a
                              className="mobileRow "
                              as="div"
                              href={
                                i == 0
                                  ? `/detail-article/1015/${e.title.replace(
                                      " ",
                                      "-"
                                    )}`
                                  : i == 1
                                  ? `/detail-article/838/${e.title.replace(
                                      " ",
                                      "-"
                                    )}`
                                  : i == 2
                                  ? `/detail-article/844/${e.title.replace(
                                      " ",
                                      "-"
                                    )}`
                                  : i == 3
                                  ? `/detail-article/847/${e.title.replace(
                                      " ",
                                      "-"
                                    )}`
                                  : "/"
                              }
                            >
                              <div className="box-mobileRow2">
                                <img
                                  src={`https://data.pdiperjuangan.id/public/${e.image}`}
                                  alt=""
                                  className="imgMobilePartai"
                                />
                                <div
                                  className="textContent textContentSatu"
                                  style={{}}
                                >
                                  <h5>{e.title}</h5>
                                  <small>{parse(e.paragraph)}</small>
                                </div>
                              </div>
                            </a>
                          ))}
                        </div>
                      </div>

                      {/* 2 r-carousel */}
                      {/* Card Carousel */}
                      <div className="container-carousel-partaiPage">
                        <CarouselKetuaUmumPage data={config[2].value} />
                      </div>
                      {/* END Card Carousel */}
                    </div>
                  </div>
                  {/* END */}
                  {/* 3 r-sync-song */}
                  <MusicPdi />
                  <MusicMobile />
                  {/* divider tata kelola */}
                  <div className="divider-tata-kelolaPdi">
                    <MainDivider
                      text="TATA KELOLA PDI PERJUANGAN"
                      mrgn="40px 0"
                    />
                  </div>
                  {/* end divider tata kelola */}
                  {/* CONTAINER TIGA */}
                  <div className="containerTiga">
                    <div className="col-lg-3">
                      <img
                        className="img-logo-bantengPdi"
                        src="img/logo-tatakelola.png"
                        alt=""
                        width="180"
                      />
                    </div>
                    {/* TATA CARA */}
                    {/* 4r-text-html */}
                    <div className="col-lg-9 textBanteng">
                      <p>{parse(config[4].value)}</p>
                    </div>
                  </div>
                  {/* END */}
                  <span className="btnUnduh">
                    <MainButton
                      name="Lihat"
                      pages="/detail-article/841/tata-kelola-partai"
                    />
                  </span>
                  {/* PENGURUS */}
                  <div className="pengurusPage">
                    <div className="divider-pengurusPage">
                      <MainDivider text="pengurus" mrgn="0px 0" />
                    </div>

                    <div className="paragrapPengurus">
                      {parse(config[5].value)}
                    </div>
                  </div>
                  {/* END */}
                  {/* PHOTO PENGURUS */}
                  <div
                    className="photoPengurus"
                    style={{
                      backgroundImage: `url(https://data.pdiperjuangan.id/public/${config[6].value.image})`,
                      backgroundAttachment: "fixed",
                    }}
                  >
                    <h3>{config[6].value.title}</h3>
                    <a className="btn lihat" href={"/struktur-dpp"}>
                      <span>lihat</span>
                    </a>
                  </div>
                  {/* END */}
                  {/* MAPS */}
                  <div className="maps">
                    {/* <h5>dewan pimpinan daerah pdi perjuangan</h5> */}
                    {/* Component Maps */}
                    <Maps />
                    {/* END Component Maps */}
                  </div>
                  {/* END */}
                  {/* ANGGOTA LEGISLATIF */}

                  {/* END */}
                </>
              )}
            </div>
          </>
        ) : (
          <>
            <Wait />
          </>
        )}
      </Layouts>
    </>
  );
};

export default PartaiPage;

export async function getServerSideProps(context) {
  const res = await fetch("https://data.pdiperjuangan.id/api/auth/app", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      app_id: "1555309664580",
      api_secret: "4d672ce3-e422-4d8a-86ff-fabb1808a689",
    }),
  });
  const data = await res.json();

  const resConfigHome = await fetch(
    "https://data.pdiperjuangan.id/api/web/pages/partai",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${data.token}`,
      },
    }
  );

  const dataConfigHome = await resConfigHome.json();
  // console.log(dataConfigHome.query);
  // setConfig(dataConfigHome.query)

  const resMeta = await fetch(
    "https://data.pdiperjuangan.id/api/web/config/partai",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${data.token}`,
      },
    }
  );

  const meta = await resMeta.json();

  return {
    props: {
      config: dataConfigHome.query,
      meta: meta.query.set,
    },
  };
}
