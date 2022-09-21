import { Snackbar } from "@mui/material";
import Head from "next/head";
import Footer from "../components/Layout/Default/Footer";
import Header from "../components/Layout/Default/Header";
import Content from "./MainPage/Content";
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
