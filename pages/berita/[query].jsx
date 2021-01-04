import Head from "next/head";
import parse from "html-react-parser";
import { useEffect } from "react";

export default function Index({ data, name }) {
  const desc = parse(data.description);

  useEffect(() => {
    window.location.href = `https://pdiperjuangan.id/detail-article/${
      data.id
    }/${data.title.replace(/\s/g, "-")}`;
  }, []);
  return (
    <>
      {data && (
        <>
          <Head>
            <meta name="description" content={data.title} />
            <meta property="og:url" content={`https://data.pdiperjuangan.id`} />
            <meta property="og:title" content={data.title} />
            <meta property="og:description" content={data.title} />
            <meta
              property="og:image"
              itemprop="image"
              content={`https://data.pdiperjuangan.id/public${data.path}`}
            />
            <meta
              property="og:image:url"
              content={`https://data.pdiperjuangan.id/public${data.path}`}
            />
            <meta property="og:image:alt" content={data.title} />
            {/* <meta property="og:image:width" content={`200px`} /> */}

            <meta property="og:type" content="website" />
            <meta content="og:image:type" property="image/*" />
            <meta content="og:image:alt" property={data.title} />
          </Head>

          {/* <Head>
            <meta name="description" content={data.title} />
            <meta
                property="og:url"
                content={`https://youtu.be/${data.path}`}
              />
              <meta property="og:title" content={data.title} />
              <meta property="og:description" content={data.title} />

              <meta property="og:type" content="website" />
              <meta
                property="og:video"
                content={`https://youtu.be/${data.path}`}
              />
              <meta property="og:video:width" content="500px" />
            </Head> */}

          <div className="wrapperBeritaPage1">
            <div className="linkedBeritaPage1">
              {/* <BreadCrumbs
            link1="Home"
            to1="/"
            link2={data.category_name}
            to2={`/${data.category_name
              .replace(/\s/g, "-")
              .toLowerCase()}`}
            page3={data.category_name}
            link3={data.category_child_name}
            to3={`/article/${
              data.id_category_child
            }/${data.category_name.replace(/\s/g, "-").toLowerCase()}`}
          /> */}
            </div>

            <div className="containerPage1Article">
              <div className="col1-container-1-beritaPage1">
                <div className="section1-col1-beritaPage1">
                  <h2 className="txt-title">{data.title}</h2>
                </div>

                <div className="section2-col1-beritaPage1">
                  <div className="row2-beritaPage1">
                    <small className="date">
                      {data.author} | {data.created_at.split(" ")[0]}
                    </small>
                    <div className="garis-panjang-tipis">
                      <div className="garis-merah-tebal"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Column2 */}
              <div className="col2-container-1-beritaPage1">
                {/* Section2 */}
                {data.path.includes("uploads") ? (
                  <img
                    className="img-beritaPage1"
                    src={`https://data.pdiperjuangan.id/public/${data.path}`}
                    alt={`${data.path}`}
                    style={{
                      // height: "40vh",
                      objectFit: "cover",
                    }}
                  />
                ) : (
                  <iframe
                    className="col-12"
                    height="500px"
                    src={`https://www.youtube.com/embed/${data.path}`}
                    frameBorder={0}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                )}

                <div className="section3-beritaPage1">
                  <p className="txt-desk-section3-beritaPage1">{desc}</p>
                </div>

                <div className="section5-beritaPage1">
                  <div className="garis-panjang"></div>

                  <div className="box-medsos-beritaPage1">
                    {/* <CardSocialMedia
                  imageUrl={data.path}
                  title={data.title}
                /> */}
                  </div>
                </div>

                <div className="section6-beritaPage1"></div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export async function getServerSideProps(context) {
  const resToken = await fetch("https://data.pdiperjuangan.id/api/auth/app", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      app_id: "1555309664580",
      api_secret: "4d672ce3-e422-4d8a-86ff-fabb1808a689",
    }),
  });
  const token = await resToken.json();
  // console.log(context.params.query);

  // const token =
  //   "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9kYXRhLnBkaXBlcmp1YW5nYW4uaWRcL2FwaVwvYXV0aFwvYXBwIiwiaWF0IjoxNjA5MDYyNzI1LCJleHAiOjE2MDkxNDkxMjUsIm5iZiI6MTYwOTA2MjcyNSwianRpIjoiSzg2aUR4WERrQ2ZuOTF1cCIsInN1YiI6MTQsInBydiI6IjhmZjYzMGEwMGNhNGEzZWFmNmYyNTRmNWFiZTVhYjFiZWVkMjcyNDkifQ.9u8Leq5GboMw8j3VDMT6oUvrqa0maF8Hnmhh14Ssz48";

  const res = await fetch(
    `https://data.pdiperjuangan.id/api/blog/find/?id=${context.params.query}`,
    {
      method: "post",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token.token}`,
      },
    }
  );
  const data = await res.json();
  return {
    props: {
      data: data.query,
    },
  };
}
