import "../styles/globals.css";
import Head from "next/head";
import { Normalize } from "styled-normalize";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Normalize />
    </>
  );
}

export default MyApp;
