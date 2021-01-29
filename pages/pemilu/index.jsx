// Import to React
import React, { useEffect, useState } from "react";
import "../../styles/PemiluPage.scss";

// END Import to React

import Wait from "../../components/wait/Wait";
import CarouselPemilu1 from "../../components/carouselPemilu1/CarouselPemilu1";
import CarouselPemilu2 from "../../components/carouselPemilu2/CarouselPemilu2";
import Carousel3PemiluPage from "../../components/carousel3PemiluPage/Carousel3PemiluPage";
import BreadCrumbs from "../../components/breadcrumbs/BreadCrumbs";
import CardHeader from "../../components/cardheader/CardHeader";
import ParalaxBox from "../../components/paralaxBox/ParalaxBox";
import Head from "next/head";
// Create Component
export default function PemiluPage({ configHome, meta }) {
  // const [configHome, setConfigHome] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    // getConfigHome();
  }, []);

  return (
    <>
      <Head>
        <link rel="icon" href="/pdip.jpg" />
        <link rel="shortcut icon" href="/pdip.ico" />
        <meta name="description" content={meta.meta_description} />
        <meta property="og:url" content={`https://pdiperjuangan.id/berita`} />
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
      {configHome.length > 0 ? (
        <div className="wrapperPemiluPage">
          {/* Card Header */}
          <CardHeader
            image={configHome[0].value.image}
            title={configHome[0].value.title}
          />
          {/* END Card Header */}

          <div className="linkedPemiluPage">
            <BreadCrumbs link1="Home" to1="/" page2="Pemilu" />
          </div>

          {/* Container1 */}
          <div className="container-1-pemiluPage">
            {/* Column1 */}
            <div className="col1-container-1-pemiluPage">
              {/* Row1 */}
              <div className="row1-col1-pemiluPage">
                {/* Bagian1 */}
                <div className="bagian1-pemiluPage">
                  {/* Image 1 */}
                  <CarouselPemilu1 data={configHome[1].value} />
                  {/* END Image 1 */}
                </div>
                {/* END Bagian1 */}

                {/* Bagian2 */}
                <div className="bagian2-pemiluPage">
                  {/* Image 2 */}
                  <CarouselPemilu2 data={configHome[2].value} />
                  {/* END Image 2 */}
                </div>
                {/* END Bagian2 */}
              </div>
              {/* END Row1 */}

              {/* Row2 */}
              <div className="row2-col1-pemiluPage">
                <Carousel3PemiluPage data={configHome[3].value} />
              </div>
              {/* END Row2 */}
            </div>
            {/* END Column1 */}

            {/* Column2 */}

            {/* CARD LAPORAN */}
            <div
              className="containerLaporan"
              style={{
                marginTop: "10px",
              }}
            >
              <a
                className="cardLaporan cardLaporanSatu"
                href="article/241/pemilian-kepala-daerah"
              >
                <div className="box-card-laporan">
                  <img
                    src={`https://data.pdiperjuangan.id/public/${configHome[4].value[0].image}`}
                    alt=""
                    className="imageHarta"
                  />
                  <div className="textHarta">
                    <h6 className="hartaKekayaan h5Harta">
                      {configHome[4].value[0].title}
                    </h6>
                  </div>
                </div>
              </a>

              <a
                className="cardLaporan cardLaporanDua"
                href="detail-article/871/pemilihan--legislatif-2024"
              >
                <div className="box-card-laporan">
                  <img
                    src={`https://data.pdiperjuangan.id/public/${configHome[4].value[1].image}`}
                    alt=""
                    className="imageHarta"
                  />
                  <div className="textHarta">
                    <h6 className="keuangan h5Harta">
                      {configHome[4].value[1].title}
                    </h6>
                  </div>
                </div>
              </a>
            </div>
            {/* END CARD LAPORAN */}
            {/* END Column2 */}
          </div>
          {/* END Container1 */}

          {/* Container2 */}
          <div className="container-2-pemiluPage">
            {/* Carousel Tata Cara */}
            <ParalaxBox
              image={configHome[5].value.image}
              title={configHome[5].value.title}
              link={"/article/274/pemilu"}
            />
            {/* END Carousel Tata Cara */}
          </div>
          {/* END Container2 */}

          {/* YOUTUBE PPDI */}
          <div className="ytProfil">
            <div className="ytIframe">
              <iframe
                src={`https://www.youtube.com/embed/${configHome[6].value[0].path}`}
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
                className="iframeProfil"
              ></iframe>
            </div>
          </div>
          {/* END */}
        </div>
      ) : (
        <Wait />
      )}
    </>
  );
}
// END Create Component

PemiluPage.getInitialProps = async () => {
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
    "https://data.pdiperjuangan.id/api/web/pages/pemilu",
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
    "https://data.pdiperjuangan.id/api/web/config/pemilu",
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
    configHome: dataConfigHome.query,
    meta: meta.query.set,
  };
};
