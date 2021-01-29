import React, { Fragment, useEffect, useState } from "react";
import "../../../styles/WejanganBungKarno.scss";
import { useParams } from "react-router-dom";
import { useStoreState } from "easy-peasy";

import BreadCrumbs from "../../../components/breadcrumbs/BreadCrumbs";
import MainDivider from "../../../components/divider/MainDivider";
import AngkaPaginationEvent from "../../../components/paginationevent/AngkaPaginationEvent";
import Wait from "../../../components/wait/Wait";
import CardQuotes from "../../../components/cardquotes/CardQuotes";
import QuotesBkbb from "../../../components/quotesbkbb/QuotesBkbb";

const WejanganBungKarno = ({ configHome, cardWejanganBk }) => {
  // Create Database Card Item
  const id = useParams("id");

  let [cardWejanganBkItem, setCardWejanganBk] = useState([]);
  // END Create Databasae Card Item

  let [currentPage2, setCurrentPage2] = useState(1);
  let [itemEventPerPage] = useState(9);

  const indexOfLastPost = currentPage2 * itemEventPerPage;
  const indexOfFirstPost = indexOfLastPost - itemEventPerPage;
  const currentPosts = cardWejanganBkItem.slice(
    indexOfFirstPost,
    indexOfLastPost
  );
  const paginate = (pageNumber) => setCurrentPage2(pageNumber);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {cardWejanganBkItem.length > 0 ? (
        <>
          <div className="wrapperWejanganThumbnail">
            <div className="linkedBkbbWBK">
              <BreadCrumbs
                link1="Home"
                to1="/"
                link2="Bungkarno Bapak Bangsa"
                to2="/bung-karno-bapak-bangsa"
                page3="Wejangan Bung Karno"
              />
            </div>
          </div>

          <div className="col1-container-1-bkbbWejangan">
            {configHome && (
              <QuotesBkbb
                id={configHome.id}
                displayIframe={"none"}
                displayImage={"flex"}
                backgroundImage={`https://data.pdiperjuangan.id/public${configHome.path}`}
                headline={configHome.title}
                desc={configHome.description}
                customBackgroundColor={"transparent"}
                descColor={"#000"}
                customWidth="70%"
                kolumWidth="30%"
                date={configHome.created_at}
                widthCustom={"50%"}
                widthCustomDesc={"50%"}
                quotesDate={configHome.quotes_date}
              />
            )}
          </div>

          {/* END Thumbnail Wejangan Bungkarno */}

          {/* Container1 */}
          <div className="container1-wejanganThumbnail">
            <MainDivider text="WEJANGAN BUNG KARNO" margin="0 0 0px 0" />
          </div>
          {/* END Container1 */}

          {/* Container2 */}
          <div className="container2-wejanganThumbnail">
            {/* Column Card Wejangan Bungkarno */}
            {/* <CardWejangan cardWejanganBkItem={cardWejanganBkItem} /> */}
            {cardWejanganBkItem.map((e, i) => (
              <CardQuotes
                page={`/bung-karno-bapak-bangsa/quotes/${e.id}`}
                img={`https://data.pdiperjuangan.id/public/${e.path}`}
                icon1="fas fa-quote-right"
                txt1={e.title}
                icon2="fas fa-quote-right"
                txt2={`Soekarno, ${e.quotes_date}`}
              ></CardQuotes>
            ))}
            {/* END Column Card Wejangan Bungkarno */}
          </div>

          {/* Column Pagination */}
          <div className="col-pagination-wejanganThumbnail">
            <AngkaPaginationEvent
              itemEventPerPage={itemEventPerPage}
              totalPosts={cardWejanganBkItem.length}
              paginate={paginate}
            />
          </div>
          {/* END Column Pagination */}
        </>
      ) : (
        <Wait />
      )}
    </>
  );
};

export default WejanganBungKarno;

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

  const resConfigHome = await fetch(
    "https://data.pdiperjuangan.id/api/quotes/data",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${data.token}`,
      },
    }
  );

  const dataConfigHome = await resConfigHome.json();

  // FETCH FIND CARD QUOTES
  const resVcard = await fetch(
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

  const dataVcard = await resVcard.json();

  return {
    props: {
      configHome: dataVcard.query,
      cardWejanganBk: dataConfigHome.query.data,
    },
  };
}
