import React, { useEffect, useState } from "react";
import Wait from "../../components/wait/Wait";
import Head from "next/head";

const MultimediaPage = ({ data }) => {
  useEffect(() => {
    window.location.href = `https://pdiperjuangan.id/detail-multimedia/${
      data.id
    }/${data.title.replace(/\s/g, "-")}`;
    console.log(data);
  }, []);
  return (
    <>
      <Head>
        <link rel="icon" href="/pdip.jpg" />
        <link rel="shortcut icon" href="/pdip.ico" />
        <meta name="description" content={data.description} />
        <meta
          property="og:url"
          content={`https://pdiperjuangan.id/multimedia`}
        />
        <meta property="og:title" content={data.title} />
        <meta property="og:description" content={data.description} />
        <meta
          property="og:image"
          itemProp="image"
          content={`https://i.ytimg.com/vi/${data.path}/hqdefault.jpg`}
        />

        <meta
          property="og:image:secure_url"
          content={`https://i.ytimg.com/vi/${data.path}/hqdefault.jpg`}
        />
        <meta property="og:image:width" content="300" />
        <meta property="og:image:height" content="300" />
        <meta property="og:image:alt" content={data.title} />
        <meta property="og:type" content="website" />
        <meta content="og:image:type" property="image/*" />
        <meta property="og:locale" content="id_ID" />
      </Head>
      <Wait />
    </>
  );
};

export default MultimediaPage;

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

  const res = await fetch(
    "https://data.pdiperjuangan.id/api/multimedia/youtube-find",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token.token}`,
      },
      body: JSON.stringify({
        id: context.params.query,
      }),
    }
  );
  const data = await res.json();

  return {
    props: {
      data: data,
    },
  };
}
