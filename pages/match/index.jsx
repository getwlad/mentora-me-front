import Head from "next/head";
import Footer from "../../components/Layout/Logged/Footer";
import Header from "../../components/Layout/Logged/Header";
import Content from "./Content";
import { Container } from "./style";
const Dashboard = () => {
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

export default Dashboard;
