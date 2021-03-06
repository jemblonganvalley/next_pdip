import React, { useEffect } from "react";
import "../../styles/BkbbPage.scss";
// import { Link } from "react-router-dom";
import { useState } from "react";

// import { parse } from "dotenv/types";
import parse from "html-react-parser";
import Head from "next/head";
import Cards from "../../components/cards/MainCards";
import MainButton from "../../components/buttons/MainButton";
import MainDivider from "../../components/divider/MainDivider";
import BreadCrumbs from "../../components/breadcrumbs/BreadCrumbs";
import CardQuotes from "../../components/cardquotes/CardQuotes";
import CardHeader from "../../components/cardheader/CardHeader";
import VMedia from "../../components/VMedia/VMedia";
import Wait from "../../components/wait/Wait";

export const LighBox = ({ source }) => {
  return (
    <>
      <main className="container_lightbox-bkbbPage">
        <iframe
          className="overlay-youtube-bkbbPage"
          src={`https://www.youtube.com/embed/${source}`}
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        {console.log(source)}
      </main>
    </>
  );
};

export default function BkbbPage({ configHome, meta }) {
  // const [configHome, setConfigHome] = useState([]);
  const [showVid, setShowVid] = useState(false);

  useEffect(() => {
    // getConfigHome();
    window.scrollTo(0, 0);
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
        <meta
          property="og:image"
          itemProp="image"
          content={`https://data.pdiperjuangan.id/public/${configHome[1].value.image}`}
        />
        {/* <meta
          property="og:image:url"
          content={`https://data.pdiperjuangan.id/public${data.path}`}
        /> */}
        <meta
          property="og:image:secure_url"
          content={`https://data.pdiperjuangan.id/public/${configHome[1].value.image}`}
        />
        <meta property="og:image:width" content="300" />
        <meta property="og:image:height" content="300" />
        <meta
          property="og:image:alt"
          content={`https://data.pdiperjuangan.id/public/${configHome[1].value.image}`}
        />
        <meta property="og:type" content="website" />
        <meta content="og:image:type" property="image/*" />
        <meta content="og:image:alt" property={meta.meta_description} />
        <meta property="og:locale" content="id_ID" />
      </Head>
      {showVid && (
        <>
          <span
            onClick={() => {
              setShowVid(false);
            }}
            className="fa fa-close"
            id="btn-overlay-video-yt-bkbb"
          ></span>
          <LighBox source={configHome[2].value[0].path} />
        </>
      )}

      {configHome ? (
        <div className="wrapperBkbbPage">
          {/* Card Header */}
          <CardHeader
            image={configHome[0].value.image}
            title={configHome[0].value.title}
          />
          {/* END Card Header */}

          <div className="linkedBkbbPage">
            <BreadCrumbs link1="Home" to1="/" page2="Bung Karno Bapak Bangsa" />
          </div>

          <section className="lahirnyaPancasila col mx-auto">
            <a
              href="/detail-article/109/Lahirnya-Pancasila-1-Juni-1945"
              component="a"
            >
              <div
                className="box-lahirnyaPancasila "
                style={{
                  backgroundImage: `url(https://data.pdiperjuangan.id/public/${configHome[1].value.image})`,
                }}
              >
                <div className="redBox mt-auto">
                  <div className="col col-lg-4 red-box-title ">
                    <h3>{configHome[1].value.title}</h3>
                  </div>
                  <div
                    className="txt2-redBox"
                    dangerouslySetInnerHTML={{
                      __html: configHome[1].value.paragraph,
                    }}
                  ></div>
                </div>
              </div>
            </a>
          </section>

          {configHome[2].value.map((e, i) => (
            <section className="videoBungKarno">
              <VMedia
                headline={e.title}
                source={`https://www.youtube.com/embed/${e.path}`}
                desc={e.description}
              />
            </section>
          ))}

          <div className="divider-materi-pokok-bkbbPage">
            <MainDivider text="Materi Pokok Pembelajaran" garisMerah="8rem" />
          </div>

          <div className="wrapperCard">
            <div className="cardKolum">
              {configHome.length > 0 &&
                configHome[3].value.map((e, i) => {
                  return (
                    <Cards
                      type={e.type}
                      imageCard={e.path}
                      title={e.title}
                      slug={e.title}
                      borderRadius="10px"
                      key={i}
                      page="detail-article"
                      id={e.id}
                      category="Bung Karno Bapak Bangsa"
                      dateTime={e.created_at}
                    />
                  );
                })}
            </div>
          </div>

          <div className="btnLihatSemua">
            <MainButton
              name="lihat semua"
              margin="0"
              pages="/article/236/materi-pokok-pendukung"
            />
          </div>

          <div
            className="bannerBkbb"
            style={{
              background: `url(https://data.pdiperjuangan.id/public/${configHome[4].value.image})`,
              backgroundAttachment: "fixed",
              backgroundSize: "cover",
            }}
          >
            <div
              className="wrapperIsiBkbbBanner"
              style={{
                zIndex: 1,
              }}
            >
              <i className="fas fa-quote-right"></i>

              <h4 className="custom">{configHome[4].value.title}</h4>
              <i className="fas fa-quote-right"></i>
              <small
                className="custom"
                // dangerouslySetInnerHTML={{
                //   __html: ,
                // }}
                style={{
                  padding: "0",
                  margin: "20px 0",
                }}
              >
                {parse(configHome[4].value.paragraph)}
              </small>
            </div>

            {/* Background Black transparent */}
            <div className="bg-black-transparent"></div>
            {/* END Background black transparent */}
          </div>

          {/* Column Card Wejangan Bungkarno */}
          <div className="col-card-wejangan-bungkarno">
            {/* Box1 Image */}
            <div className="box1-image">
              {configHome[5].value.map((e, i) => (
                <CardQuotes
                  page={`/bung-karno-bapak-bangsa/quotes/${e.id}`}
                  img={`https://data.pdiperjuangan.id/public/${e.path}`}
                  icon1="fas fa-quote-right"
                  txt1={e.title}
                  icon2="fas fa-quote-right"
                  txt2={`Soekarno, ${e.quotes_date}`}
                />
              ))}
            </div>
            {/* END Box1 Image */}
          </div>

          <div className="btnLihatSemua">
            <MainButton
              name="lihat semua"
              margin="0rem 0 0 0"
              pages="/bung-karno-bapak-bangsa/quotes/9"
            />
          </div>

          <div className="backGroundGray"></div>
        </div>
      ) : (
        <>
          <Wait />
        </>
      )}
    </>
  );
}

BkbbPage.getInitialProps = async () => {
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
    "https://data.pdiperjuangan.id/api/web/pages/bkbb",
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
    "https://data.pdiperjuangan.id/api/web/config/bkbb",
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
