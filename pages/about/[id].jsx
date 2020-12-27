import Head from "next/head";
import { useRouter } from "next/router";

export default function About({ name, data }) {
  const router = useRouter();
  const { id } = router.query;
  const iid = id;
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
      <img
        src={`https://data.pdiperjuangan.id/public/${data.path}`}
        alt={data.title}
        width="500px"
      />
    </div>
  );
}

About.getInitialProps = async (ctx) => {
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

  const res = await fetch(
    `https://data.pdiperjuangan.id/api/blog/find/?id=${ctx.id}`,
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
