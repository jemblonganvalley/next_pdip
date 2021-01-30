import React, { useEffect, useState } from "react";
import "../../styles/InformasiPage.scss";
import parse from "html-react-parser";
import { Link } from "react-router-dom";
import { CarouselDuelBerita } from "../../components/carouselDualBerita/CarouselDuelBerita";
import Head from "next/head";
import Layouts from "../../components/Layouts";

import MainDivider from "../../components/divider/MainDivider";
import BreadCrumbs from "../../components/breadcrumbs/BreadCrumbs";
import CardInformasi from "../../components/cardInformasi/CardInformasi";
import CarouselTataCara from "../../components/carouseltatacara/CarouselTataCara";
import CardHeader from "../../components/cardheader/CardHeader";
import Wait from "../../components/wait/Wait";

const anchorLink = (props) => {
  return (
    <a
      href={props.linkTo}
      className="cardLaporan cardLaporanSatu"
      style={{
        padding: "0 20px",
        gap: "10px",
        color: "white",
        fontSize: "1rem",
      }}
    >
      {props.children}
    </a>
  );
};

const InformasiPage = ({ configHome, meta }) => {
  return (
    <>
      <Head>
        <link rel="icon" href="/pdip.jpg" />
        <link rel="shortcut icon" href="/pdip.ico" />
        <meta name="description" content={meta.meta_description} />
        <meta
          property="og:url"
          content={`https://pdiperjuangan.id/informasi`}
        />
        <meta property="og:title" content={meta.meta_keyword} />
        <meta property="og:description" content={meta.meta_description} />
        {/* <meta
          property="og:image"
          itemProp="image"
          content={`https://data.pdiperjuangan.id/public/${configHome[0].value[0].image}`}
        /> */}
        {/* <meta
          property="og:image:url"
          content={`https://data.pdiperjuangan.id/public${data.path}`}
        /> */}
        {/* <meta
          property="og:image:secure_url"
          content={`https://data.pdiperjuangan.id/public/${configHome[0].value[0].image}`}
        /> */}
        <meta property="og:image:width" content="300" />
        <meta property="og:image:height" content="300" />
        {/* <meta
          property="og:image:alt"
          content={`https://data.pdiperjuangan.id/public/${configHome[0].value[0].image}`}
        /> */}
        <meta property="og:type" content="website" />
        <meta content="og:image:type" property="image/*" />
        <meta content="og:image:alt" property={meta.meta_description} />
        <meta property="og:locale" content="id_ID" />
      </Head>
      <div className="wrapperInformasi">
        {/* START HEADERS */}
        {/* <div
            className="headInformasi"
            style={{
              backgroundImage: `url(https://data.pdiperjuangan.id/public/${configHome[0].value.image})`,
            }}
          >
            <div className="textHeadInformasi">
              <h2>{configHome[0].value.title}</h2>
            </div>
          </div> */}
        {/* END */}

        {/* Card Header */}
        <CardHeader
          image={configHome[0].value.image}
          title={configHome[0].value.title}
        />
        {/* END Card Header */}

        {/* START LINKED */}
        <div className="linkedInformasi">
          <BreadCrumbs link1="Home" to1="/" page2="Informasi Publik" />
        </div>
        {/* END */}

        {/* START PROFIL */}
        <div className="profilContainer">
          <div className="divider-profil">
            <MainDivider text="Profil" garisMerah="0rem" mrgn="0 0 40px 0" />
          </div>

          <div className="paragrapProfil">
            <div
              className="paragrapKiri"
              dangerouslySetInnerHTML={{ __html: configHome[1].value }}
            ></div>
            <div className="paragrapKanan">
              <div
                className="backgroundPK"
                style={{
                  backgroundImage: `url(https://data.pdiperjuangan.id/public/${configHome[2].value.image})`,
                }}
              >
                <h4 className="maklumat">{configHome[2].value.title}</h4>
                {parse(configHome[2].value.paragraph)}
              </div>
            </div>
          </div>

          {/* divider */}
          <div className="divider"></div>
          {/* divider */}
          <CardInformasi
            to1="detail-article/656/struktur"
            image={`https://data.pdiperjuangan.id/public/${configHome[3].value[0].image}`}
            to2="/article/231/visi-dan-misi-ppid"
            image2={`https://data.pdiperjuangan.id/public/${configHome[3].value[1].image}`}
            to3="/detail-article/624/prosedur-pelayanan-ppid"
            image3={`https://data.pdiperjuangan.id/public/${configHome[3].value[2].image}`}
            to4="/detail-article/623/regulasi-ppd"
            image4={`https://data.pdiperjuangan.id/public/${configHome[3].value[3].image}`}
            text={`${configHome[3].value[0].title}`}
            text2={`${configHome[3].value[1].title}`}
            text3={`${configHome[3].value[2].title}`}
            text4={`${configHome[3].value[3].title}`}
          />

          {/* CARD LAPORAN */}
          <div
            className="containerLaporan"
            style={{
              marginTop: "20px",
            }}
          >
            <a component={anchorLink} linkTo="detail-article/658/lhkpn">
              <img
                src={`https://data.pdiperjuangan.id/public/${configHome[4].value[0].image}`}
                alt=""
                className="imageHarta"
                style={{
                  height: "50%",
                }}
              />
              <div className="textHarta">
                <h6 className="hartaKekayaan h5Harta">
                  {configHome[4].value[0].title}
                </h6>
              </div>
            </a>

            <a component={anchorLink} linkTo="article/227/laporan-keuangan">
              <img
                src={`https://data.pdiperjuangan.id/public/${configHome[4].value[1].image}`}
                alt=""
                className="imageHarta"
                style={{
                  height: "50%",
                }}
              />
              <div className="textHarta">
                <h6 className="keuangan h5Harta">
                  {configHome[4].value[1].title}
                </h6>
              </div>
            </a>
          </div>
          {/* END CARD LAPORAN */}
        </div>
        {/* END */}

        {/* YOUTUBE PPDI */}
        <div className="ytProfil">
          <div className="ytIframe">
            <iframe
              src={`https://www.youtube.com/embed/${configHome[5].value[0].path}`}
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
              className="iframeProfil"
            ></iframe>
          </div>
        </div>
        {/* END */}

        {/* START TATA CARA */}
        <div className="tataCaraContainer">
          <MainDivider text="tata Cara" garisMerah="4rem" mrgn="40px 0" />
        </div>
        {/* END */}

        {/* SLIDER TATA CARA */}
        <CarouselTataCara data={configHome[6].value} />
        {/* <CarouselKM data={configHome[6].value} /> */}
        {/* END */}

        {/* wrapper-cardLaporan2 */}
        <div className="wrapper-cardLaporan2">
          {/* CARD LAPORAN */}
          <div
            className="containerLaporan"
            style={{
              marginTop: "20px",
            }}
          >
            <a component={anchorLink} linkTo="/formpdi">
              <div className="box-card-laporan">
                <img
                  src={`https://data.pdiperjuangan.id/public/${configHome[7].value[0].image}`}
                  alt=""
                  className="imageHarta"
                  style={{
                    height: "50%",
                    objectFit: "cover",
                  }}
                />
                <div className="textHarta">
                  <h6 className="hartaKekayaan h5Harta">
                    {configHome[7].value[0].title}
                  </h6>
                </div>
              </div>
            </a>

            <a component={anchorLink} linkTo="/formkeluhan">
              <div className="box-card-laporan">
                <img
                  src={`https://data.pdiperjuangan.id/public/${configHome[7].value[1].image}`}
                  alt=""
                  className="imageHarta"
                  style={{
                    height: "50%",
                    objectFit: "cover",
                  }}
                />
                <div className="textHarta">
                  <h6 className="keuangan h5Harta">
                    {configHome[7].value[1].title}
                  </h6>
                </div>
              </div>
            </a>
          </div>
          {/* END CARD LAPORAN */}
        </div>
        {/* wrapper-cardLaporan2 */}

        {/* <CardMaps/> */}

        <div className="carousel-informasiPage">
          <CarouselDuelBerita
            cat1={configHome[8].value}
            cat2={configHome[9].value}
          />
        </div>

        {/* <div className="widgetMobile">
                <WidgetBerita width="100%" />
                <WidgetBerita width="100%" margin=".5rem 0" />
            </div> */}
      </div>
    </>
  );
};

export default InformasiPage;

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

  const resGallery = await fetch(
    "https://data.pdiperjuangan.id/api/gallery/data?page=2",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${data.token}`,
      },
    }
  );

  const dataGallery = await resGallery.json();

  const resConfigHome = await fetch(
    "https://data.pdiperjuangan.id/api/web/pages/informasi",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${data.token}`,
      },
    }
  );

  const dataConfigHome = await resConfigHome.json();

  const resMeta = await fetch(
    "https://data.pdiperjuangan.id/api/web/config/informasi",
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
      gallery: dataGallery.query,
      configHome: dataConfigHome.query,
      meta: meta.query.set,
    },
  };
}
