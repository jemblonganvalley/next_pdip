import Head from "next/head";
import parse from "html-react-parser";

export default function Index({ data, name }) {
  const desc = parse(data.description);
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
              content={`https://data.pdiperjuangan.id/public${data.path}`}
            />
            <meta property="og:image:width" content={`900px`} />

            <meta property="og:type" content="website" />
            <meta content="image/*" property="og:image:type" />
          </Head>
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
  console.log(context.params.query);
  const token =
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9kYXRhLnBkaXBlcmp1YW5nYW4uaWRcL2FwaVwvYXV0aFwvYXBwIiwiaWF0IjoxNjA4OTYzNzkyLCJleHAiOjE2MDkwNTAxOTIsIm5iZiI6MTYwODk2Mzc5MiwianRpIjoiTGFubkRsZzFEUEFIUHA3VCIsInN1YiI6MTQsInBydiI6IjhmZjYzMGEwMGNhNGEzZWFmNmYyNTRmNWFiZTVhYjFiZWVkMjcyNDkifQ.3pbcm4_HqwTmDFkDNL8HYtXbffKgR5v-fcAzn06CmJU";

  const res = await fetch(
    `https://data.pdiperjuangan.id/api/blog/find/?id=${context.params.query}`,
    {
      method: "post",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
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
