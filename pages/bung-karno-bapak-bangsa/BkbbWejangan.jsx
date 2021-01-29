import React, { useEffect, useState } from "react";

import "../../styles/BkbbWejangan.scss";
import BreadCrumbs from "../../components/breadcrumbs/BreadCrumbs";
import { useParams } from "react-router-dom";
import Wait from "../../components/wait/Wait";
import VMedia from "../../components/VMedia/VMedia";

const BkbbWejangan = ({ manyCard, configHome }) => {
  const id = useParams("id");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      {configHome ? (
        <div className="wrapperBkbbWejangan">
          {/* <div className="headersBkbbWejangan">
                    <div className="backgrounds">
                        <div className="textBackgroundBerita">

                        </div>
                    </div>
                </div> */}

          {/* Card Header */}
          {/* <CardHeader
          backgroundHeader={bkbbH}
          // titleHeader={configHome[1].value[0].title}
        /> */}
          {/* END Card Header */}
          <div
            className="linkedBkbbWejangan"
            style={{
              padding: "0 20%",
            }}
          >
            <BreadCrumbs
              link1="home"
              to1="/"
              link2="Bungkarno Bapak Bangsa"
              to2="/bungkarno-bapak-bangsa"
              page3="Quotes"
            />
          </div>

          {/* Container1 */}
          <div className="container-1-bkbbWejangan">
            {/* Column1 */}
            <div className="col1-container-1-bkbbWejangan">
              <VMedia
                displayIframe={"none"}
                displayImage={"flex"}
                backgroundImage={`https://data.pdiperjuangan.id/public${configHome.path}`}
                headline2={`${configHome.created_at}`}
                desc={`${configHome.title}`}
                customBackgroundColor={"transparent"}
                descColor={"#000"}
                customWidth="70%"
                kolumWidth="30%"
              />
            </div>
            {/* END Column1 */}
          </div>
          {/* END Container1 */}

          {/* Container2 */}
          {/* <div className="container-2-bkbbWejangan">
            <div
              className="CardBkbbWejangan"
              onClick={() => {
                setRefresher();
              }}
              style={{
                display : 'flex',
                justifyContent : 'space-between',
                padding : '0 20% 0 20%'
              }}
            >
              {manyCard.map((e, i) => (
                <CardQuotes
                  page={`/quotes/${e.id}`}
                  img={`https://data.pdiperjuangan.id/public/${e.path}`}
                  icon1="fas fa-quote-right"
                  txt1={e.title}
                  icon2="fas fa-quote-right"
                  txt2={`Soekarno, ${e.quotes_date}`}
                />
              ))}
            </div>
          </div> */}
          {/* END Container2 */}
        </div>
      ) : (
        <Wait />
      )}
    </>
  );
};

export default BkbbWejangan;

export async function getServerSideProps(ctx) {
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

  // FETCH FIND CARD QUOTES
  const resConfigHome = await fetch(
    "https://data.pdiperjuangan.id/api/quotes/find",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${data.token}`,
      },
      body: JSON.stringify({
        id: id,
      }),
    }
  );

  const dataConfigHome = await resConfigHome.json();

  // FETCH MANY CARD
  const resManycard = await fetch(
    "https://data.pdiperjuangan.id/api/quotes/data",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${data.token}`,
      },
    }
  );

  const dataManycard = await resManycard.json();
  console.log(dataManycard.query.data);

  return {
    props: {
      manyCard: dataManycard.query.data,
      configHome: dataConfigHome.query,
    },
  };
}
