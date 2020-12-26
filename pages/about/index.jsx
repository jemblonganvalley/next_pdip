import Head from "next/head";

export default function About({ name, data }) {
  console.log(data);
  return (
    <div>
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
      <h1>Hello {name}</h1>
    </div>
  );
}

About.getInitialProps = async (ctx) => {
  const token =
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9kYXRhLnBkaXBlcmp1YW5nYW4uaWRcL2FwaVwvYXV0aFwvYXBwIiwiaWF0IjoxNjA4OTYzNzkyLCJleHAiOjE2MDkwNTAxOTIsIm5iZiI6MTYwODk2Mzc5MiwianRpIjoiTGFubkRsZzFEUEFIUHA3VCIsInN1YiI6MTQsInBydiI6IjhmZjYzMGEwMGNhNGEzZWFmNmYyNTRmNWFiZTVhYjFiZWVkMjcyNDkifQ.3pbcm4_HqwTmDFkDNL8HYtXbffKgR5v-fcAzn06CmJU";

  const res = await fetch(
    `https://data.pdiperjuangan.id/api/blog/find/?id=715`,
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
    name: "fadliselaz",
    data: data.query,
  };
};
