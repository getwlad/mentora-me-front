import Head from "next/head";
import Footer from "../Layout/Default/Footer";
import Header from "../Layout/Default/Header";
import Content from "./Content";
import { Container, Label } from "./style";

const Main = () => {
  return (
    <>
      <Head>
        <title>Mentora-Me</title>
      </Head>
      <Container>
        <Header />
        <Content />
        <Footer />
      </Container>
    </>
  );
};

export default Main;
