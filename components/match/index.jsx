import Head from "next/head";
import Footer from "../Layout/Logged/Footer";
import Header from "../Layout/Logged/Header";
import Content from "./Content";
import { Container } from "./style";
const Match = () => {
  return (
    <>
      <Head>
        <title>Match</title>
      </Head>
      <Container>
        <Header />
        <Content />
        <Footer />
      </Container>
    </>
  );
};

export default Match;
