import Head from "next/head";
import Navbar from "./navbar/Navbar";

export default function Layouts({ children }) {
  return (
    <main>
      <Head>
        <title>PDI Perjuangan</title>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Navbar />
      {children}
    </main>
  );
}
