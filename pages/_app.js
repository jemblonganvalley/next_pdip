import "../styles/global.css";
import "../styles/Page1.scss";
import "../styles/NewNavbar.scss";
import "../styles/dropDown.scss";
import "bootstrap/dist/css/bootstrap.min.css";

import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charset="utf-8" />
        <link rel="icon" href="pdip192.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="description"
          content="Web site created using create-react-app"
        />
        <link rel="apple-touch-icon" href="pdip192.png" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1"
          crossorigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.4.1/css/all.css"
        />
        <link rel="stylesheet" href="font-awesome/css/font-awesome.min.css" />

        <link rel="manifest" href="manifest.json" />
        <title>PDI Perjuangan</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
