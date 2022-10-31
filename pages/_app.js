import "../styles/globals.css";
import Container from "../components/Layout/Default/Container";
import { Normalize } from "styled-normalize";
import Header from "../components/Layout/Default/Header";
import Footer from "../components/Layout/Default/Footer";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Container>
        <Header />
        <Component {...pageProps} />
        <Footer />
        <Normalize />
      </Container>
    </>
  );
}

export default MyApp;
