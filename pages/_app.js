import "../styles/global.css";
import "../styles/Page1.scss";
import "../styles/NewNavbar.scss";
import "../styles/dropDown.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/index.css";
import Layouts from "../components/Layouts";
import Head from "next/head";
import AuthContextProvider from "../context/authContext";
import { useContext } from "react";
import { AuthContext } from "../context/authContext";

function MyApp({ Component, pageProps, getToken }) {
  // const [token, setToken] = useContext(AuthContext);
  return (
    <AuthContextProvider>
      <Layouts>
        <Head>
          <link
            rel="stylesheet"
            href="https://use.fontawesome.com/releases/v5.4.1/css/all.css"
          />
          <link rel="stylesheet" href="font-awesome/css/font-awesome.min.css" />
          <meta charset="utf-8" />
          <link rel="icon" href="/img/pdip192.png" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="theme-color" content="#000000" />
          <meta
            name="description"
            content="Web site created using create-react-app"
          />
          <link rel="apple-touch-icon" href="/img/pdip192.png" />
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
      </Layouts>
    </AuthContextProvider>
  );
}

export default MyApp;

export async function getServerSideProps() {
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

  return {
    props: {
      getToken: data.token,
    },
  };
}
